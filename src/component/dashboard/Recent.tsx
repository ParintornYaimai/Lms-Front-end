import React from 'react'
import { HiOutlineMagnifyingGlass, HiOutlineNewspaper } from "react-icons/hi2";
import { CiClock2, CiCircleCheck } from "react-icons/ci";
import { RecentEnrolledCourse } from '@/types/dashboard';

type Props = {
    recentEnroll?: RecentEnrolledCourse[];
};

const Recent = ({ recentEnroll }: Props) => {
    return (
        <div className='h-full'>
            <div className='flex flex-col mx-5'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-bold'>Recent enrolled classes</h1>
                    <div className='flex items-center'>
                        <p className='text-2xl rounded-full mx-4 cursor-pointer'>All</p>
                        <HiOutlineMagnifyingGlass size={35} className='text-2xl p-1 cursor-pointer rounded-full bg-gray-200' />
                    </div>
                </div>

                {/* Scrollable Course List */}
                <div className="mt-3 space-y-4 max-h-[220px] overflow-y-auto pr-2 no-scrollbar">
                    {recentEnroll?.map((course, index) => (
                        <div key={course.courseId || index} className='border border-orange-600 rounded-lg'>
                            <div className='flex p-3 m-2'>
                                <div className='w-14 h-13 bg-gray-100 rounded-md' />
                                <div className='w-full ml-5 pl-3'>
                                    <div>
                                        <span className='text-xl text-orange-600 font-bold'>{course.title}</span>
                                    </div>
                                    <div className='flex items-center justify-between mt-2'>
                                        <div className='flex items-center space-x-2'>
                                            <CiClock2 />
                                            <span>{course.duration}:00 hrs</span>
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <HiOutlineNewspaper />
                                            <span>10 Lessons</span> {/* mock หรือใส่จริงได้หากมี */}
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <CiCircleCheck />
                                            <span>Assignments</span> {/* หรือ conditionally show */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Recent;
