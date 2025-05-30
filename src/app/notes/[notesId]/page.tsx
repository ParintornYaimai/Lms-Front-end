import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { FaArrowRight, FaRegCommentDots } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

type PageProps = {
  isModalOpenPage: boolean;
  onClose: () => void;
};

const Page = ({ isModalOpenPage, onClose }: PageProps) => {
  const [activeTab, setActiveTab] = useState("comments");
  return (
    <AnimatePresence>
      {isModalOpenPage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-xl shadow-lg w-[800px] max-w-full max-h-[90vh] z-10 p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <div className="flex gap-2">
                <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                  Today
                </span>
                <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                  Engineering
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <IoClose size={24} />
              </button>
            </div>

            <h2 className="text-2xl font-semibold mt-4 mb-2">
              Product Team Meeting
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Created Date:{" "}
              <span className="font-medium text-gray-700">
                12 Nov, 2021 at 9:40 PM
              </span>
            </p>

            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-1">Description</h3>
              <div className="max-h-40 overflow-y-auto pr-2 ">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book. Lorem Ipsum 
                  is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                   of type and scrambled it to make a type specimen book. Lorem Ipsum 
                  is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                   of type and scrambled it to make a type specimen book. Lorem Ipsum 
                  is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 ">
              <div className="flex ">
                <button
                  onClick={() => setActiveTab("comments")}
                  className={`text-sm font-medium py-2 px-4 border-b-2 cursor-pointer transition-colors duration-100 ${
                    activeTab === "comments"
                      ? "border-orange-600 text-orange-600"
                      : "border-transparent text-gray-500 hover:text-orange-500"
                  }`}
                >
                  Comments
                </button>
                <button
                  onClick={() => setActiveTab("attach")}
                  className={`text-sm font-medium py-2 px-4 border-b-2 cursor-pointer transition-colors duration-100 ${
                    activeTab === "attach"
                      ? "border-orange-600 text-orange-600"
                      : "border-transparent text-gray-500 hover:text-orange-500"
                  }`}
                >
                  Attach File
                </button>
              </div>
            </div>

            {/* Comment Box */}
            <span className="font-semibold my-3">Post Commment</span>
            <div className="w-full mb-3 flex items-center justify-between gap-2 ">
              <div className="relative w-full max-w-[650px]">
                {/* ไอคอนค้นหาทางซ้าย */}
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaRegCommentDots className="w-4 h-4 text-orange-600" />
                </span>
                {/* Input */}
                <input
                  type="text"
                  placeholder="Write down your question and comments"
                  className="w-full pl-10 pr-5 h-10 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-600 placeholder-gray-400 text-md"
                />
              </div>
              <div >
                <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 cursor-pointer">
                <span>Post </span>
                <FaArrowRight size={15} />
              </button>
              </div>
            </div>

            {/* Comment List */}
            <span className="font-semibold text-md">Latest Commments (22)</span>
            <div
              className="space-y-3 mt-4 overflow-y-auto  "
              style={{ maxHeight: "250px" }}
            >
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Jane Cooper</span> •{" "}
                    <span className="text-gray-400 text-xs">10 mins ago</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-blue-600">@Everyone</span> Great job.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=5"
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">
                      Brooklyn Simmons (You)
                    </span>{" "}
                    •{" "}
                    <span className="text-gray-400 text-xs">13 hours ago</span>
                  </p>
                  <p className="text-sm text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Jane Cooper</span> •{" "}
                    <span className="text-gray-400 text-xs">10 mins ago</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-blue-600">@Everyone</span> Great job.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Jane Cooper</span> •{" "}
                    <span className="text-gray-400 text-xs">10 mins ago</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-blue-600">@Everyone</span> Great job.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Jane Cooper</span> •{" "}
                    <span className="text-gray-400 text-xs">10 mins ago</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-blue-600">@Everyone</span> Great job.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Jane Cooper</span> •{" "}
                    <span className="text-gray-400 text-xs">10 mins ago</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-blue-600">@Everyone</span> Great job.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Jane Cooper</span> •{" "}
                    <span className="text-gray-400 text-xs">10 mins ago</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-blue-600">@Everyone</span> Great job.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt="avatar"
                  className="rounded-full w-8 h-8"
                />
                <div>
                  <p className="text-sm">
                    <span className="font-semibold">Jane Cooper</span> •{" "}
                    <span className="text-gray-400 text-xs">10 mins ago</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-blue-600">@Everyone</span> Great job.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Page;
