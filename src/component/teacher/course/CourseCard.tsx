"use Client";
import ProgressBar from "@/component/dashboard/ProgressBar";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import Menu from "@/component/teacher/course/Menu";

const CourseCard = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="relative w-[350px] h-fit border border-gray-300 rounded-md p-4 space-y-3">
        <div className="absolute top-2 right-1 cursor-pointer text-gray-500 hover:text-gray-700">
          <BsThreeDotsVertical
            size={20}
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        {isActive && (
          <div className="absolute top-8 right-2 z-40 bg-white shadow-md border border-gray-300 ">
            <Menu />
          </div>
        )}
        <div>
          <h1 className="text-lg  line-clamp-2">
            ArtiCulate Structure of C++ and Java in Semester 1
          </h1>
        </div>
        <div className="text-gray-400">
          <p>Course: B.Teacher Specializartion in Health Informatics</p>
          <p>subject: Network Engineering</p>
        </div>
        {/* due date */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 py-1 px-2 bg-gray-100 rounded-md">
            <FaCalendar size={20} />
            <span>3-01-2025</span>
          </div>
          <div className="flex items-center gap-2 py-1 px-2 bg-gray-100 rounded-md">
            <FiClock size={20} />
            <span>12:30 AM - 01.40 PM</span>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <span className="text-gray-400 ">Questions:50</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Process Percentage</span>
            <span className="text-blue-600">70%</span>
          </div>
          <div className="my-1">
            <ProgressBar progress={70} height="7px" />
          </div>
        </div>
        <button className="text-white bg-orange-600 w-full py-2 rounded-md cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
