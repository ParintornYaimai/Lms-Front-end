import React from 'react'
import { FaStar } from "react-icons/fa6";
import { BsPerson } from "react-icons/bs";
import { useFile } from '@/hooks/useFile';
import { Thumbnail } from '@/types/courseType';

type Props = {
  image: Thumbnail[];
  title: string;
  coursecate: string;
  coursesubjectcate: string;
  rating: number
  totalFeedback: number;
  studentCount: number;
};


const EnrolleCard = ({ image, title, coursecate,coursesubjectcate, rating, studentCount, totalFeedback }:Props) => {
   const { url } = useFile(image?.length ? image[0].fileId  : undefined);
    return (
        <div>
            <div className="bg-white overflow-hidden border border-gray-300 hover:shadow-md hover:scale-101 transition-transform duration-200 rounded-xs cursor-pointer">
                {url && (
                    <img src={url} className="w-full h-45 object-cover" alt="course image" />
                )}
                {/* Detail */}
                <div className="p-4 space-y-2 ">
                    <div className='flex items-center justify-start gap-2'>
                        <div>
                            <span className='text-[10px] p-1 text-blue-700 bg-blue-100'>{coursecate}</span>
                        </div>
                        <div>
                            <span className='text-[10px] p-1 text-blue-700 bg-blue-100'>{coursesubjectcate}</span>
                        </div>
                    </div>
                    {/* title */}
                    <div>
                        <h1 className='text-sm font-medium line-clamp-2'>{title}</h1>
                    </div>
                </div>

                {/* below */}
                <div className='border-t border-gray-300 p-4'>
                    <div className='flex items-center justify-between'>
                        <div className='text-sm flex items-center gap-1'>
                            <FaStar size={15} className='text-orange-400'/>
                            <span>{rating ? rating.toFixed(1) : 0} ({totalFeedback})</span>
                        </div>
                        <div className='text-sm flex items-center gap-1'>
                            <BsPerson size={15} className='text-blue-700'/>
                            <span className='text-gray-700 font-medium'>{studentCount}</span>
                            <span className='text-gray-500'>students</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnrolleCard