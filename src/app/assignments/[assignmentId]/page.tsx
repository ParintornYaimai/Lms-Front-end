'use client'
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Upload from '@/component/assignment/Upload'  
import { useParams, useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import { ResponseUploadFileAssignment } from "@/types/assignment";
import toast from "react-hot-toast";
import { sendAssignment } from "@/services/assignment";

const Page = () => {
  const [responseUploadFile, setResponseUploadFile] = useState<ResponseUploadFileAssignment[]>([])
  const router = useRouter();
  const params = useParams();

  const assignmentId = params?.assignmentId as string; 
  const [showUpload, setShowUpload] = useState(false);
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const courseId = searchParams.get('courseId')
  const courseName = searchParams.get('courseName')
  const courseSubject = searchParams.get('courseSubject')
  const dateStart = searchParams.get('dateStart')
  const dateEnd = searchParams.get('dateEnd')
  const passpercen = searchParams.get('passpercen')
  
  const handleChange = (data:ResponseUploadFileAssignment[]) => {
    setResponseUploadFile(data.flat())
  };
  
  const handleSendAssignment=async()=>{
    try {
      if (typeof courseId === 'string' && Array.isArray(responseUploadFile) && responseUploadFile.length > 0) {
        // const fileIds = responseUploadFile.map(file => file.fileId);

        const data = await sendAssignment(assignmentId, responseUploadFile);
        if(data.success){
          alert("Assignment submitted successfully.");
          router.push('/assignments')
        }
        
      } else {
        toast.error('Invalid data: courseId or files missing');
      }
    } catch (error: any) {
      toast.error(error)
    }
  };
  return (
    <div className="h-[calc(100vh-70px)] overflow-hidden bg-white flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="border-b-4 border-orange-600">
          <div className="px-5 py-5">
            <h1 className="text-2xl font-semibold">
              {title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-15 mx-10">
          {/* Course & Subject */}
          <div className="flex flex-wrap gap-10">
            <div>
              <p className="text-gray-500">Course</p>
              <p className="font-semibold">{courseName}</p>
            </div>
            <div>
              <p className="text-gray-500">Subject</p>
              <p className="font-semibold">{courseSubject}</p>
            </div>
          </div>

          {/* Due Date */}
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded">
              <FaCalendarAlt className="text-gray-500" />
              <span>
                {dateStart
                  ? new Date(dateStart).toLocaleDateString("th-TH", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric"
                    })
                  : "-"}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded">
              <FaCalendarAlt className="text-gray-500" />
              <span>
                {dateEnd
                  ? new Date(dateEnd).toLocaleDateString("th-TH", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric"
                    })
                  : "-"}
              </span>
            </div>
          </div>

          {/* Passing Percentage */}
          <div>
            <p className="text-gray-500">Passing Percentage</p>
            <p className="text-orange-600 font-semibold">{passpercen} %</p>
          </div>

          {/* Add Files */}
          <div>
            <button
              onClick={() => setShowUpload(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded"
            >
              + Add Filed
            </button>
            <div className="mt-3 flex gap-2 flex-wrap">
              {responseUploadFile?.slice(0, 2).map((data, index) => (
                <span key={index} className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-600">
                  {data.filename}
                </span>
              ))}
              {responseUploadFile?.length > 2 && (
                <span className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-600">
                  +{responseUploadFile?.length - 2} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center px-5 py-4 border-t">
        <button className="text-gray-600 px-6 py-2 border border-gray-400 rounded cursor-pointer"  
          onClick={() => router.push('/assignments')} >&larr; Back
        </button>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded cursor-pointer" onClick={handleSendAssignment}>
          APPLY
        </button>
      </div>

      {/* Upload Modal */}
      {showUpload && <Upload onClose={() => setShowUpload(false)} onFileChange={handleChange}/>}
    </div>
  );
};

export default Page;
