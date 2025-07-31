'use client'
import { useFile } from '@/hooks/useFile';
import { launchCourse } from '@/services/courseService';
import { useAuthStore } from '@/store/authStore';
import { EnrollmentResponse } from '@/types/courseType';
import Link from 'next/link';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

type Props = {
  id: string;
  enrolledId: string;
  image: string;
  title: string ;
  subtitle: string;
  progress: number;
  status: string;
};

const CourseCard = ({id, enrolledId, image, title, subtitle, status }:Props) => {
  const { url, loading, error } = useFile(image)

  const handleStartCourse=async()=>{
    if(status === 'not started'){
      try{
        const data: EnrollmentResponse = await launchCourse(id);

        //ต้องทำ socket reaitime update
      }catch (error:any) {
        toast.error(error)
      }
    }
  }

  return (
    <div className="bg-white overflow-hidden border border-gray-300 hover:shadow-md hover:scale-101 transition-transform duration-200 rounded-xs">
      {url ? (
        <img src={url} className="w-full h-40 object-cover" alt={title} />
      ) : (
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
          {loading ? "Loading..." : error ? "Error loading image" : "No image"}
        </div>
      )}
      <div className="p-6 space-y-2">
        <h4 className="text-sm text-gray-500 truncate line-clamp-1">{title}</h4>
        <p className="font-semibold text-base line-clamp-1">{subtitle}</p>

        <div>
          {status === 'not started' ? (
            <button
              className="w-full text-sm text-center px-4 py-2 font-medium border cursor-pointer rounded-xs text-orange-600 bg-orange-100 border-red-100 hover:bg-orange-600 hover:text-white duration-300 ease-in-out"
              onClick={handleStartCourse}
            >
              Launch Course
            </button>
          ) : (
            <Link href={`/courses/${id}?enrolledId=${enrolledId}`} >
              <div className="w-full text-sm text-center px-4 py-2 font-medium border cursor-pointer rounded-xs text-orange-600 bg-orange-100 border-red-100 hover:bg-orange-600 hover:text-white duration-300 ease-in-out">
                {status === 'in-progress' ? 'Continue' : 'Launch Course'}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard