"use client";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { FaFilePdf } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { getResource } from "@/services/resourceService";
import { Resource } from "@/types/resourceType";
import { useFile } from "@/hooks/useFile";

const breakpointColumnsObj = {
  default: 4,
  1536: 3,
  1024: 2,
  640: 1,
};

// สร้าง component แยกสำหรับ file item
const FileItem = ({ fileData }: { fileData: any }) => {
  const { url } = useFile(fileData.fileId);
  
  return (
    <li className="flex justify-between items-center px-4 py-2 border border-gray-200 rounded-sm m-5 mt-0">
      <div className="flex items-center gap-2 text-black">
        <FaFilePdf className="text-orange-600" />
        <span className="line-clamp-1">{fileData.filename}</span>
      </div>
      {url && (
        <a
          href={url}
          download
          className="text-sm text-white bg-orange-600 hover:bg-orange-700 px-4 py-1.5 rounded transition-colors"
        >
          Download
        </a>
      )}
    </li>
  );
};

const Page = () => {
  const [openSubjects, setOpenSubjects] = useState<{ [key: string]: boolean }>({});
  const [resource, setResource] = useState<Resource>();

  // toggle เปิด/ปิดหัวข้อ
  const toggleSubject = (idx: string) => {
    setOpenSubjects((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const data = await getResource();
        setResource(data);
      } catch (error: any) {
        toast.error(error);
      }
    };

    fetchResource();
  }, []);

  return (
    <div className="min-h-screen bg-white px-5 py-6">
      <div className="max-w-full mx-auto">
        <h1 className="text-3xl font-bold text-black mb-10">Resources</h1>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {resource?.map((item) => (
            <div
              key={item.courseId}
              className="mb-6 border border-gray-200 shadow-md bg-white rounded cursor-pointer"
            >
              <h2
                className="text-xl p-5 font-semibold text-black select-none"
                onClick={() => toggleSubject(item.courseId)}
              >
                {item.courseTitle}
              </h2>

              <AnimatePresence initial={false}>
                {openSubjects[item.courseId] && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-2 overflow-hidden"
                  >
                    {item.file.map((fileData: any) => (
                      <FileItem key={fileData.fileId} fileData={fileData} />
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default Page;