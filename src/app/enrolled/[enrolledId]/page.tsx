'use client';
import Enrolle from '@/component/enrolled/Enrolle';
import EnrolleDetail from '@/component/enrolled/EnrolleDetail';
import React, { useEffect, useState } from 'react'
// import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import { enrolledCourse, getEnrolleById } from '@/services/enrolledService';
import { Course} from '@/types/enrolleType';
import { use } from 'react';
interface Props {
  params: Promise<{ enrolledId: string }>;
}

const page = ({ params }: Props) => {
  const [course, setCourse] = useState<Course | undefined>();
  const { enrolledId } = use(params); 

  // ดึงข้อมูล คอสตาม Id 
  useEffect(()=>{
    const fetData =async()=>{
      try {
        const data = await getEnrolleById(enrolledId);
        setCourse(data.data);
      } catch (error:any) {
        toast.error(error)
      }
    }
    fetData()
  },[params]) 

  //ลงทะเบียนเรียน
  const handleEnroll=async()=>{
    try {
      const data = await enrolledCourse(enrolledId);
      if(data.success){
        return alert('enrolled is complete') 
      }

      alert("Already enrolled in the course")
    } catch (error: any) {
      toast.error(error)
    }
  }
  
  if (!course) return null;
  return (
    <div>
      <div className="flex m-5">
        {/* Left */}
        <div className="2xl:basis-[80%] basis-[75%] ">
          <Enrolle course={course}/>
        </div>

        {/* Right */}
        <div className="2xl:basis-[20%] basis-[25%] ml-1 h-full ">
          <EnrolleDetail course={course} handleEnroll={handleEnroll}/>
        </div>
      </div>
    </div>
  )
}

export default page
