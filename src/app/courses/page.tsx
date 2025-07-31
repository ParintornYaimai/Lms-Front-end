"use client";
import CourseCard from "@/component/courses/CourseCard";
import React, { useEffect, useState } from "react";
import { PiPlayCircleDuotone } from "react-icons/pi";
import { AiOutlineFileDone } from "react-icons/ai";
import { PiTrophyDuotone } from "react-icons/pi";
import { getAllCourse } from "@/services/courseService";
import { EnrolledGroup } from "@/types/courseType";
import { disconnectSocket, initiateSocketConnection } from "@/services/socket";
import toast from "react-hot-toast";
import { useAuthStore } from '@/store/authStore';


const Page = () => {
  const [allCourse, setAllCourse] = useState<EnrolledGroup[] >();
  const userId = useAuthStore((state) => state.user?.id)

  // ดึงคอสที่ลงทะเบียนเเล้ว
  useEffect(()=>{
    const fetchCourse=async()=>{
      try {
        const data = await getAllCourse();

        setAllCourse(data.data)
      } catch (error:any) {
        toast.error(error)
      }
    }

    fetchCourse();
  },[])

  useEffect(() => {
    if(!userId) return;
    const socket = initiateSocketConnection(userId); 
    
    socket.on('course:startCourse', async (newCourse) => {
      try{
        const data = await getAllCourse();
        setAllCourse(data.data);
      }catch (error){
        console.error('Error refetching courses:', error);
      }
    });

    return () => disconnectSocket();
  }, [userId]);

 
  console.log('allCourse',allCourse)
  return (
    <div className="h-auto">
      <div>
        <div className="max-w-6xl mx-auto my-6 mb-2">
          {/* Statistic Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center justify-start gap-2 bg-orange-100 p-6">
              <div className="flex items-center justify-center bg-white  h-15 w-15 ">
                <PiPlayCircleDuotone size={30} className="text-orange-600"/>
              </div>
              <div>
                <div className="text-orange-700 text-3xl font-semibold">
                  {allCourse?.reduce((acc, curr) => acc + curr.total, 0) ?? 0}
                </div>
                <div className="text-gray-600">Enrolled Courses</div>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 bg-purple-100 text-purple-700 p-6 ">
              <div className="flex items-center justify-center bg-white h-15 w-15">
                <AiOutlineFileDone size={30} className="text-purple-700"/>
              </div>
              <div>
                <div className="text-3xl font-semibold">
                  {allCourse?.find((g) => g._id === "in-progress")?.total ?? 0}
                </div>
                <div className="text-gray-600">Active Courses</div>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 bg-green-100  p-6 ">
              <div className="flex items-center justify-center bg-white h-15 w-15">
                <PiTrophyDuotone size={30} className="text-green-600"/>
              </div>
              <div>
                <div className="text-3xl text-green-700 font-semibold">
                  {allCourse?.find((g) => g._id === "completed")?.total ?? 0}
                </div>
                <div className="text-gray-600">Completed Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <div className="mx-7 p-1 h-[calc(100vh-210px)] overflow-y-auto overflow-x-hidden no-scrollbar ">
          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6 mb-1">
            {allCourse?.map((group) => {
              return group.courses.map((course) => {
                return (
                  <CourseCard
                    key={course.courseId}
                    id={course.courseId}
                    enrolledId={course.enrolledId}
                    image={course.thumbnailurl[0].fileId} 
                    title={course.title}
                    subtitle={course.subtitle}
                    progress={0}
                    status={group._id} // เช่น 'not started'
                  />
                );
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
