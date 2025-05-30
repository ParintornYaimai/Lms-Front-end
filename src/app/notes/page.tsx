"use client";
import React, { useEffect, useState } from "react";
import { CgSortAz } from "react-icons/cg";
import { BiFilterAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import AddNoteModal from "@/component/note/AddNoteModal";
import Page from "./[notesId]/page";
import SortBy from "@/component/note/SortBy";
import Filter from "@/component/note/Filter";

const Note = () => {
  const [activeTab, setActiveTab] = useState("ALL"); //เเสดงข้อมูลว่าเป็นทั้งหมดหรือเเค่ของเรา
  const [isModalOpen, setModalOpen] = useState(false); //add note เปิดปิด Modal
  const [isModalOpenPage, setisModalOpenPage] = useState(false) // เปิดตาม note id
  const [openSortBy, setOpenSortBy] = useState(false) //เปิดปิด sort by
  const [openFilter, setOpenFilter] = useState(false) //เปิดปิด Filter

  return (
    <div className=" flex flex-col overflow-hidden">
      <div>
        {/* header */}
        <div className="flex items-center justify-between px-5 border-b border-gray-300">
          <h1 className="text-4xl text-orange-600 font-semibold">Notes</h1>
          <div className="flex items-center gap-3 p-3">
            {[
              { icon: <CgSortAz size={20} />, text: "Sort By", onClick: () => {setOpenSortBy(prev => !prev); setOpenFilter(false);}},
              { icon: <BiFilterAlt size={20} />, text: "Filter", onClick: () => {setOpenFilter(prev => !prev); setOpenSortBy(false)}},
              { icon: <FaPlus size={20} />, text: "Add Notes", onClick: () => { setModalOpen(prev => !prev); setOpenFilter(false); setOpenSortBy(false)}},
            ].map(({ icon, text, onClick  }, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center space-x-2 cursor-pointer border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200 ease-in-out px-2 py-2 rounded-sm min-w-[120px]"
                onClick={onClick}
              >
                <div>{icon}</div>
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-start ">
          {["ALL", "My Note"].map((tab, i) => (
            <div
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`px-7 py-2 cursor-pointer text-sm md:text-base font-medium border-b-3 
                ${
                  activeTab === tab
                    ? "border-orange-600"
                    : "border-transparent hover:text-orange-500 hover:duration-100 hover:ease-in-out"
                }
              `}
            >
              {tab}
            </div>
          ))}
        </div>
        {/* header */}

        {/* card */}
        <div className="xl:max-h-[610] 2xl:max-h-[778]  max-h-sm overflow-auto no-scrollbar">
          {/*  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xlgrid-cols-6 gap-4 m-2">
            {Array.from({ length: 50 }).map((_, idx) => (

            <div key={idx} className="max-h-sm sm:max-h-[206px] md:max-h-[270px] border border-gray-300 rounded-md shadow-sm bg-white hover:shadow-md transition  hover:scale-101  duration-300">
              <div className="p-4 cursor-pointer" onClick={()=>setisModalOpenPage(true)} >
                {/* card header */}
                <div className=" flex items-center justify-between gap-4 mb-2">
                  {/* tag */}
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-100 text-yellow-600 px-1 rounded-sm">
                      <span className="text-xs">weekly</span>
                    </div>
                    <div className="bg-blue-100 text-blue-600 px-1 rounded-sm">
                      <span className="text-xs">Engineering</span>
                    </div>
                  </div>
                  {/* tag */}

                  {/* profile */}
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-6">
                      {" "}
                      {/* ใช้ w, h ที่ต้องการ */}
                      <Image
                        src="/user.png"
                        alt="user"
                        fill
                        className="rounded-full object-cover border border-gray-200"
                      />
                    </div>
                    <div>
                      <span className="text-xs"> Parintorn Yaimai</span>
                    </div>
                  </div>
                  {/* profile */}
                </div>

                {/* card detail */}
                <div className="space-y-2 overflow-hidden">
                  <div>
                    <span>Product Team Meeting</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quidem cupiditate laboriosam corrupti voluptates mollitia
                      asperiores ad modi, velit animi nihil!
                    </p>
                  </div>
                </div>
              </div>
              {/* card comment */}
              <div className="border-t border-gray-300">
                <div className="mx-4">
                  <div className="flex justify-start items-center w-full gap-2 py-2">
                    {/* Input + Icon */}
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FaRegCommentDots className="w-4 h-4 text-orange-600" />
                      </span>
                      <input
                        type="text"
                        placeholder="Write down your question and comment"
                        className="pl-9 pr-3 py-1.5 bg-gray-100 rounded-2xl w-[170px] lg:w-[170px] 2xl:w-[270px] text-xs h-8 focus:outline-none focus:ring-0"
                      />
                    </div>

                    {/* Button */}
                    <button className="h-7 w-10 flex items-center justify-center bg-orange-600 text-white rounded-2xl text-sm cursor-pointer">
                      <FaArrowRight size={14} />
                    </button>
                    {/* date time */}
                    <div>
                      <span className="text-sm text-gray-400">Jan 21 09:55</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        {/*note id  */}
        {
          <Page isModalOpenPage={isModalOpenPage} onClose={() => setisModalOpenPage(false)}/>
        }
        {/* Add note Madal */}
        {
          <AddNoteModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        }
        {/* SortBy */}
        {
          <SortBy isOpen={openSortBy} onClose={() => setOpenSortBy(false)} />
        }
        {/* Filter */}
        {
          <Filter isOpen={openFilter} onClose={() => setOpenFilter(false)} />
        }
      </div>
    </div>
  );
};

export default Note;
