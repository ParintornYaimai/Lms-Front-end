'use client'
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import Upload from '@/component/assignment/Upload'  
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="h-[calc(100vh-70px)] overflow-hidden bg-white flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="border-b-4 border-orange-600">
          <div className="px-5 py-5">
            <h1 className="text-2xl font-semibold">
              BHI Health Informatics mid semester Exam
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-15 mx-10">
          {/* Course & Subject */}
          <div className="flex flex-wrap gap-10">
            <div>
              <p className="text-gray-500">Course</p>
              <p className="font-semibold">B.Tech Spcl. in Health Informatics</p>
            </div>
            <div>
              <p className="text-gray-500">Subject</p>
              <p className="font-semibold">Networking</p>
            </div>
          </div>

          {/* Due Date */}
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded">
              <FaCalendarAlt className="text-gray-500" />
              <span>12-01-2023</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded">
              <FaCalendarAlt className="text-gray-500" />
              <span>12-01-2023</span>
            </div>
          </div>

          {/* Passing Percentage */}
          <div>
            <p className="text-gray-500">Passing Percentage</p>
            <p className="text-orange-600 font-semibold">70%</p>
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
              <span className="bg-gray-100 px-3 py-1 rounded">
                New Assignment.pdf
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded">
                New Assignment.pdf
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded">New +23</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center px-5 py-4 border-t">
        
        <button className="text-gray-600 px-6 py-2 border border-gray-400 rounded cursor-pointer"  
          onClick={() => router.push('/assignments')} >&larr; Back
        </button>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded cursor-pointer">
          APPLY
        </button>
      </div>

      {/* Upload Modal */}
      {showUpload && <Upload onClose={() => setShowUpload(false)} />}
    </div>
  );
};

export default Page;
