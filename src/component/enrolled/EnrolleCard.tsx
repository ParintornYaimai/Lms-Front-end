import React from 'react'
import { FaStar } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";

type Props = {
  image: string;
  title: string;
  subtitle: string;
  progress: number;
  status: "continue" | "launch";
};


const CourseCard = ({ image, title, subtitle, progress, status }:Props) => {

  return (
    <div>
        <div className="bg-white overflow-hidden border border-gray-300 hover:shadow-md hover:scale-101 transition-transform duration-200 rounded-xs">
            <img src={image} className="w-full h-45 object-cover" alt={title} />
            {/* Detail */}
            <div className="p-4 space-y-2 ">
                <div className='flex items-center justify-start'>
                    <span className='text-xs p-1 text-blue-700 bg-blue-100'>Development</span>
                </div>
                {/* title */}
                <div>
                    <h1 className='text-sm font-medium line-clamp-2'>Complete Blender Creator: Learn 3D Modelling for Beginners </h1>
                </div>
            </div>

            {/* below */}
            <div className='border-t border-gray-300 p-4'>
                <div className='flex items-center justify-between'>
                    <div className='text-sm flex items-center gap-1'>
                        <FaStar size={15} className='text-orange-400'/>
                        <span>4.5</span>
                    </div>
                    <div className='text-sm flex items-center gap-1'>
                        <BsPerson size={15} className='text-blue-700'/>
                        <span className='text-gray-700 font-medium'>150,009</span>
                        <span className='text-gray-500'>students</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard