import { AssignmentDetail } from "@/types/teacher/assignmentType";
import dayjs from "dayjs";
import React from "react";
import { FaCalendar } from "react-icons/fa";

type Props ={
  assignment?:AssignmentDetail
}
const Detail = ({assignment}: Props) => {

  return (
    <div>
      <div className="space-y-7">
        <div className="flex flex-col">
          <div className="my-5">
            <span className="flex items-center gap-2">
              Course
              <span className="font-semibold">
                {assignment?.courseId?.title}
              </span>
            </span>
          </div>
          <div>
            <span className="flex items-center gap-2">
              Subject
              <span className="font-semibold">
                {assignment?.courseId?.coursesubjectcate?.name}
              </span>
            </span>
          </div>
        </div>

        <div>
          <span>Total Marks: {assignment?.totalmark}</span>
        </div>

        {/* Uploaded Files Section */}
        <div>
          <span className="block mb-2">Uploaded Filed</span>
          <div className="flex flex-wrap gap-3">
            {assignment?.files.map((file) => (
              <button key={file._id} className="border border-gray-300 px-4 py-1 rounded bg-white shadow-sm hover:bg-gray-100">
                {file.name}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div>
          {/* <div className="mb-5">
            <div className="mb-2">
              <span>Schedule</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
                <FaCalendar />
                {assignment?}
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
                <GoClock />
                {assignment?.date.end}
              </span>
            </div>
          </div> */}

          {/* Due Date */}
          <div>
            <div className="mb-2">
              <span>Due Date</span>
            </div>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
                <FaCalendar />
                {dayjs(assignment?.date.start).format("DD/MM/YYYY")}
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded">
                <FaCalendar />
                {dayjs(assignment?.date.end).format("DD/MM/YYYY")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
