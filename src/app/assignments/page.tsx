"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const assignments = [
    {
      title: "Conducting User Research",
      course: "User Research and Persona",
      dueDate: "July 1, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Wireframing UI Screens",
      course: "UI/UX Design Basics",
      dueDate: "July 8, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Designing Personas",
      course: "User Research and Persona",
      dueDate: "July 2, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Low Fidelity Wireframes",
      course: "UI/UX Design Basics",
      dueDate: "July 9, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Prototype User Flow",
      course: "UX Principles",
      dueDate: "July 10, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Survey Design",
      course: "User Research and Persona",
      dueDate: "July 3, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Clickable Prototypes",
      course: "UX Prototyping",
      dueDate: "July 12, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Interview Analysis",
      course: "User Research and Persona",
      dueDate: "July 4, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Color Theory Basics",
      course: "UI Design",
      dueDate: "July 13, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Typography Guidelines",
      course: "UI Design",
      dueDate: "July 14, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Usability Testing",
      course: "UX Testing",
      dueDate: "July 5, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Design System Intro",
      course: "UI Systems",
      dueDate: "July 15, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Card Sorting Task",
      course: "UX Testing",
      dueDate: "July 6, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Persona Presentation",
      course: "User Research and Persona",
      dueDate: "July 7, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "UI Audit",
      course: "UI Review",
      dueDate: "July 16, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Style Guide Creation",
      course: "UI Systems",
      dueDate: "July 17, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Heuristic Evaluation",
      course: "UX Testing",
      dueDate: "July 18, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "A/B Testing Report",
      course: "UX Testing",
      dueDate: "July 19, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Microinteractions",
      course: "UI Animation",
      dueDate: "July 20, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Animation Principles",
      course: "UI Animation",
      dueDate: "July 21, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "UX Metrics Report",
      course: "UX Research",
      dueDate: "July 22, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Feature Prioritization",
      course: "Product Thinking",
      dueDate: "July 23, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "User Journey Mapping",
      course: "UX Mapping",
      dueDate: "July 24, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Accessibility Review",
      course: "UI Accessibility",
      dueDate: "July 25, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Mobile First Design",
      course: "Responsive Design",
      dueDate: "July 26, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Grid Systems",
      course: "Responsive Design",
      dueDate: "July 27, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Visual Hierarchy",
      course: "UI Design",
      dueDate: "July 28, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Content Strategy",
      course: "UX Writing",
      dueDate: "July 29, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "CTA Optimization",
      course: "UX Writing",
      dueDate: "July 30, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Design Tokens",
      course: "UI Systems",
      dueDate: "July 31, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Persona Updates",
      course: "User Research and Persona",
      dueDate: "August 1, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "New User Survey",
      course: "UX Research",
      dueDate: "August 2, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Final Wireframe",
      course: "UI/UX Design Basics",
      dueDate: "August 3, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Feedback Analysis",
      course: "UX Research",
      dueDate: "August 4, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Mockup Showcase",
      course: "UI Design",
      dueDate: "August 5, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "Logo Redesign",
      course: "Brand Identity",
      dueDate: "August 6, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "High-Fidelity Prototypes",
      course: "UX Prototyping",
      dueDate: "August 7, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "UI Consistency Check",
      course: "UI Review",
      dueDate: "August 8, 2024",
      status: "Pending",
      submitted: false,
    },
    {
      title: "Usability Summary",
      course: "UX Testing",
      dueDate: "August 9, 2024",
      status: "Done",
      submitted: true,
    },
    {
      title: "End-of-course Project",
      course: "UX/UI Capstone",
      dueDate: "August 10, 2024",
      status: "Pending",
      submitted: false,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // const [dateFilter, setDateFilter] = useState("all"); // กรองตามวันที่
  // const [statusFilter, setStatusFilter] = useState("all"); // กรองตามสถานะ

  // คำนวนหน้า
  const totalPages = Math.ceil(assignments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAssignments = assignments.slice(startIndex, endIndex);

  // อัพโหลดไฟล์
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0 || files.length >= 5) return;

    // ทำอะไรกับไฟล์หลายไฟล์ เช่น log ชื่อไฟล์ทั้งหมด
    for (let i = 0; i < files.length; i++) {
      console.log("Selected file:", files[i].name);
    }
  };

  // เมื่อเปลี่ยนจำนวนรายการต่อหน้า ให้ไปหน้า 1 ใหม่เสมอ
  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  // เลื่อนขึ้นข้างบนอัตโนมัตหลังจากเปลี่ยนหน้า
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, itemsPerPage]);

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
              Filter by {/* Dropdown แทน dates */}
              <select className="text-orange-500 cursor-pointer bg-transparent border-orange-500 " >
                <option value="all">All Dates</option>
                <option value="today">Today</option>
                <option value="this_week">This Week</option>
                <option value="this_month">This Month</option>
              </select>{" "}
              {/* Dropdown แทน Status */}
              <select className="text-orange-500 cursor-pointer bg-transparent border-orange-500 ">
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Done</option>
                {/* <option value="overdue">Overdue</option> */}
              </select>
            </h2>
          </div>
        </div>

        {/* content */}
        <div className="space-y-2 w-full mt-5">
          {/* head */}
          <div className="hidden md:grid grid-cols-5 h-14 font-semibold text-gray-500 px-4 py-2 border border-gray-300 bg-gray-50 rounded-md">
            <div className="flex items-center ml-4">Assignment Title</div>
            <div className="flex items-center pl-4">Course/lessons</div>
            <div className="flex items-center justify-center">Due Date</div>
            <div className="flex items-center justify-center">Status</div>
            <div className="flex items-center justify-center">Submit</div>
          </div>

          {/* assignment list */}
          {currentAssignments.map((assignment, index) => (
            <div
              key={index}
              className="grid md:grid-cols-5 grid-cols-1 bg-white rounded-md border border-gray-300 p-4 gap-y-2 md:gap-0"
            >
              <div className="md:truncate font-medium">
                <span className="md:hidden text-gray-500 ">
                  Assignment Title:{" "}
                </span>
                {assignment.title}
              </div>
              <div className="md:truncate">
                <span className="md:hidden text-gray-500">
                  Course/lessons:{" "}
                </span>
                <span className="text-gray-500">{assignment.course}</span>
              </div>
              <div className="flex items-center md:justify-center">
                <span className="md:hidden text-gray-500">Due Date: </span>
                <span className="text-gray-500">{assignment.dueDate}</span>
              </div>
              <div className="flex items-center md:justify-center">
                <span className="md:hidden text-gray-500">Status: </span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    assignment.status === "Done"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  ● {assignment.status}
                </span>
              </div>
              <div className="flex items-center md:justify-center">
                <span className="md:hidden text-gray-500">Submit: </span>
                {assignment.submitted ? (
                  <span className="text-gray-400">Submitted</span>
                ) : (
                  <label className="cursor-pointer inline-block px-4 py-1 rounded-full text-sm font-medium text-gray-500">
                    Upload
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.png,.jpg"
                      multiple
                    />
                  </label>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* pagination */}
        <div className="flex items-center justify-center w-full">
          {/* เพิ่มตัวเลือกจำนวนรายการต่อหน้า */}

          <div className="flex flex-col items-center w-full">
            <div className="flex w-full justify-between items-center mt-6 px-4">
              {/* Pagination (ตรงกลางโดยใช้ flex-grow + justify-center) */}
              <div className="flex flex-grow justify-center space-x-1">
                <button
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
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
                    className={`px-3 py-1 rounded ${
                      currentPage === i + 1
                        ? "bg-orange-600 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                    onClick={() => {
                      setCurrentPage(i + 1);
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                  }}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>

              {/* ปุ่มเลือกจำนวนรายการ (ชิดขวา) */}
              <div className="ml-4">
                <span className="text-sm px-2">Show</span>
                <select
                  className="border border-gray-300 rounded  py-1 text-gray-700 p-2"
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                  aria-label="Items per page"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15 </option>
                  <option value={20}>20 </option>
                </select>
                <span className="text-sm px-2">Row</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
