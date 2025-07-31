"use client";
import ProgressBar from "@/component/dashboard/ProgressBar";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";
import Menu from "@/component/teacher/course/Menu";
import Link from "next/link";
import { AssignmentItem } from "@/types/teacher/assignmentType";
import dayjs from "dayjs";

type Props = {
  allAssignment?: AssignmentItem[];
};

const AssignmentCard = ({ allAssignment }: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      {allAssignment?.map((assignment) => {
        return (
          <div
            key={assignment._id}
            className="relative w-[350px] h-fit border border-gray-300 rounded-md p-4 space-y-3"
          >
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
              <h1 className="text-lg  line-clamp-2">{assignment.title}</h1>
            </div>
            <div className="text-gray-400">
              <p>Course: {assignment.courseTitle}</p>
              <p>subject: {assignment.courseSubjectCate}</p>
            </div>
            {/* due date */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 py-1 px-2 bg-gray-100 rounded-md">
                <FaCalendar size={20} />
                <span>{dayjs(assignment.date.start).format("DD/MM/YYYY")}</span>
              </div>
              <div className="flex items-center gap-2 py-1 px-2 bg-gray-100 rounded-md">
                <FaCalendar size={20} />
                <span>{dayjs(assignment.date.end).format("DD/MM/YYYY")}</span>
              </div>
            </div>
            <div>
              <div className="mb-3">
                <span className="text-gray-400 ">
                  Questions: {assignment.totalmark}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pass Percentage</span>
                <span className="text-blue-600">{assignment.passpercen}%</span>
              </div>
              <div className="my-1">
                <ProgressBar progress={assignment.passpercen} height="7px" />
              </div>
            </div>
            <Link href={`assignment/${assignment._id}`} passHref>
              <button className="text-white bg-orange-600 w-full py-2 rounded-md cursor-pointer">
                View Details
              </button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default AssignmentCard;
