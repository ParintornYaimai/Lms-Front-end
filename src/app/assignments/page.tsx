"use client";
import { getAssignment } from "@/services/assignment";
import { Assignment, AssignmentsResponseData } from "@/types/assignment";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [assignmentsData, setAssignmentsData] =
    useState<AssignmentsResponseData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [selectedDate, setSelectedDate] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const assignments: Assignment[] = assignmentsData?.assignments ?? [];
  const totalPages = assignmentsData
    ? Math.ceil(assignmentsData.totalAssignments / itemsPerPage)
    : 0;

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  // เลื่อนอัตโนมัติ
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, itemsPerPage]);

  // ดึงข้อมูล
  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const data = await getAssignment(itemsPerPage, currentPage, selectedDate, selectedStatus);
        setAssignmentsData(data.data);
      } catch (error: any) {
        toast.error(error.message || "Error fetching assignments");
      }
    };
    fetchAssignment();
  }, [itemsPerPage, currentPage, selectedDate, selectedStatus]);

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <div className="p-5">
      <div className="flex flex-col items-center w-full">
        {/* header */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-3">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Assignments</h1>
            <span className="text-base md:text-xl text-gray-500">
              View and manage your course assignments
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <h2 className="text-gray-500 text-sm md:text-base">
              Filter by{" "}
              <select
                className="text-orange-500 cursor-pointer bg-transparent border border-orange-500 rounded px-2 py-1 ml-2"
                value={selectedDate}
                onChange={handleDateChange}
              >
                <option value="all">All Dates</option>
                <option value="today">Today</option>
                <option value="this_week">This Week</option>
                <option value="this_month">This Month</option>
                <option value="this_year">This Year</option>
              </select>{" "}
              <select
                className="text-orange-500 cursor-pointer bg-transparent border border-orange-500 rounded px-2 py-1 ml-2"
                value={selectedStatus}
                onChange={handleStatusChange}
              >
                <option value="all">All Status</option>
                <option value="overdue">Overdue</option>
                <option value="not_submitted">not_submitted</option>
                <option value="completed">Done</option>
              </select>
            </h2>
          </div>
        </div>

        {/* content */}
        <div className="space-y-2 w-full mt-5">
          <div className="hidden md:grid grid-cols-5 h-14 font-semibold text-gray-500 px-4 py-2 border border-gray-300 bg-gray-50 rounded-md">
            <div className="flex items-center ml-4">Assignment Title</div>
            <div className="flex items-center pl-4">Course/lessons</div>
            <div className="flex items-center justify-center">Due Date</div>
            <div className="flex items-center justify-center">Status</div>
            <div className="flex items-center justify-center">Submit</div>
          </div>

          {assignments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No assignments found
            </div>
          ) : (
            assignments.map((assignment, index) => {
              return (
                <div
                  key={assignment._id ?? index}
                  className="grid md:grid-cols-5 grid-cols-1 bg-white rounded-md border border-gray-300 p-4 gap-y-2 md:gap-0 hover:bg-gray-50 transition-colors"
                >
                  {/* Assignment Title - คลิกได้ */}
                  <Link
                    href={{
                      pathname: `/assignments/${assignment._id}`,
                      query: {
                        courseId: assignment.courseId,
                        courseName: assignment.courseName,
                        courseSubject: assignment.courseSubject,
                        dateStart: assignment.date.start,
                        dateEnd: assignment.date.end,
                        passpercen: assignment.passpercen,
                        title: assignment.title,
                        status: assignment.submissionStatus,
                      },
                    }}
                    className={`md:truncate font-medium ${
                      assignment.submissionStatus === "Done"
                        ? "text-gray-400 pointer-events-none cursor-not-allowed"
                        : "text-gray-600 cursor-pointer"
                    }`}
                  >
                    <span className="md:hidden text-gray-500">
                      Assignment Title:{" "}
                    </span>
                    {assignment.title}
                  </Link>

                  {/* Course Name */}
                  <div className="md:truncate">
                    <span className="md:hidden text-gray-500">
                      Course/lessons:{" "}
                    </span>
                    <span className="text-gray-500">
                      {assignment.courseName || "N/A"}
                    </span>
                  </div>

                  {/* Due Date */}
                  <div className="flex items-center md:justify-center">
                    <span className="md:hidden text-gray-500">Due Date: </span>
                    <span className="text-gray-500">
                      {assignment.date?.end
                        ? new Date(assignment.date.end).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            }
                          )
                        : "N/A"}
                    </span>
                  </div>

                  {/* Status */}
                  <div className="flex items-center md:justify-center">
                    <span className="md:hidden text-gray-500">Status: </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        assignment.submissionStatus === "Done"
                          ? "bg-green-100 text-green-600"
                          : assignment.submissionStatus === "Overdue"
                          ? "bg-red-100 text-red-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      ● {assignment.submissionStatus ?? "Pending"}
                    </span>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center md:justify-center">
                    <span className="md:hidden text-gray-500">Submit: </span>
                    {assignment.submissionStatus === "Done" ? (
                      <span className="text-gray-400">Submitted</span>
                    ) : (
                      <div onClick={(e) => e.stopPropagation()}>
                        <p className="inline-block px-4 py-1 text-gray-500 rounded text-sm font-medium transition-colors">
                          Upload
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* pagination */}
        {totalPages > 0 && (
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center w-full">
              <div className="flex w-full justify-between items-center mt-6 px-4">
                <div className="flex flex-grow justify-center space-x-1">
                  <button
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded disabled:opacity-50 hover:bg-gray-300 transition-colors"
                    onClick={() => {
                      setCurrentPage((prev) => Math.max(prev - 1, 1));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      className={`px-3 py-1 rounded transition-colors ${
                        currentPage === i + 1
                          ? "bg-orange-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded disabled:opacity-50 hover:bg-gray-300 transition-colors"
                    onClick={() => {
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>

                <div className="ml-4">
                  <span className="text-sm px-2">Show</span>
                  <select
                    className="border border-gray-300 rounded py-1 text-gray-700 p-2"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                    aria-label="Items per page"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                  </select>
                  <span className="text-sm px-2">Row</span>
                </div>
              </div>

              {/* แสดงข้อมูลสถิติ */}
              <div className="text-sm text-gray-500 mt-2 text-right  ml-auto">
                <p>
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                  {Math.min(
                    currentPage * itemsPerPage,
                    assignmentsData?.totalAssignments || 0
                  )}{" "}
                  of {assignmentsData?.totalAssignments || 0} assignments
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
