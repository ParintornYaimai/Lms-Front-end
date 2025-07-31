"use client";
import React, { useEffect, useState } from "react";
import { BsSliders2Vertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Selection from "@/component/enrolled/Selection";
import toast from "react-hot-toast";
import { enrolle, enrolleResponse } from "@/types/enrolleType";
import { getAllEnrolle } from "@/services/enrolledService";
import EnrolleCard from "@/component/enrolled/EnrolleCard";
import Link from "next/link";

const Enrolled = () => {
  const [countSeleted, setCountSelected] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<string>('Latest')
  const [enrolleAll, setEnrolleAll] = useState<enrolle[]>()
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(50)

  //อัพเดทค่าเสดงจำนวน filterss
  const handleUpdateFilterCount=(selected:string[])=>{
    setCountSelected(selected)
  }
  useEffect(()=>{
    const fetchCourse =async()=>{
      try {
        const data:enrolleResponse = await getAllEnrolle(sortBy, countSeleted, page, limit)
        setEnrolleAll(data.data)
      } catch (error: any) {
        toast.error(error)
      }
    }

    fetchCourse()
  },[countSeleted])
  
  return (
    <div className="h-screen p-5">
      {/* header */}
      <div className="border-b border-gray-300">
        {/* one */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Filter box */}
          <div className="flex items-center gap-3 border border-gray-300 px-4 py-2 text-orange-600 hover:border-orange-600 w-full sm:w-auto">
            <BsSliders2Vertical size={20} />
            <span>Filter</span>
            {
              countSeleted.length ? (
                <span className="text-white bg-orange-600 px-2 ">{countSeleted.length}</span>
              ) : (
                null
              )
            }
          </div>

          {/* Sort by */}
          <div className="flex items-center gap-3 text-gray-500 w-full sm:w-auto ">
            <span className="text-sm">Sort by:</span>
            <div className="relative flex items-center border border-gray-300 py-1 w-full sm:w-auto cursor-pointer">
              <select className="appearance-none pr-8 pl-4 py-1 w-full sm:w-auto text-md focus:outline-none mr-10 cursor-pointer" 
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
              </select>
              {/* custom arrow */}
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>

        {/* two */}
        <div className="flex items-center justify-between">
          <div className="w-full my-2 lg:flex items-center justify-between space-x-2 text-sm sm:inline-block">
            <div className="flex gap-2">
              <div >
                <span className="text-gray-700">Suggestion:</span>
              </div>
              <span className="text-orange-600 ">user interface</span>
              <span className="text-orange-600">user experience</span>
              <span className="text-orange-600">web design</span>
              <span className="text-orange-600">interface</span>
              <span className="text-orange-600">app</span>
            </div>
            {/* search detail total */}
            <div>
              <span className="pr-1">2,400</span>
              <span className="text-gray-600">result find for "ui/ux design"</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* content */}
      <div>
        <div className="flex mt-5"> 
          {/* Left */}
          <div className="2xl:basis-[15%] lg:basis-[20%]">
            <Selection onSendData={handleUpdateFilterCount}/>
          </div>
          {/* Right */}
          <div className="2xl:basis-[85%] lg:basis-[80%] ml-2 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mb-5">
              {enrolleAll?.map((enroll) => {
                const cate = (enroll.coursecateInfo?.[0] as any)?.name || 'ไม่ระบุหมวดหมู่';
                const subcate = (enroll.coursesubjectcateInfo?.[0] as any)?.name || 'ไม่ระบุหมวดหมู่ย่อย';
                return (
                  <Link href={`/enrolled/${enroll._id}`} key={enroll._id}>
                    <EnrolleCard
                      key={enroll._id}
                      image={enroll.thumbnailurl}
                      title={enroll.title}
                      coursecate={cate}
                      coursesubjectcate={subcate}
                      rating={enroll.averageRating}
                      totalFeedback={enroll.totalFeedback}
                      studentCount={enroll.studentCount}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrolled;
