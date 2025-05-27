import React from 'react'
import { HiOutlineMagnifyingGlass, HiOutlineNewspaper } from "react-icons/hi2";
import { CiClock2, CiCircleCheck } from "react-icons/ci";



const Recent = () => {
    const recentCourses = [
        {
            id: 1,
            title: "User Experience (UX) Design",
            duration: "5:30 hrs",
            lessons: "05 Lessons",
            hasAssignment: true,
        },
        {
            id: 2,
            title: "Introduction to Frontend Development", 
            duration: "8:00 hrs",
            lessons: "10 Lessons",
            hasAssignment: true,
        },
        {
            id: 3,
            title: "Database Design Basics",
            duration: "6:15 hrs",
            lessons: "07 Lessons",
            hasAssignment: false,
        },
    ];
    return (
        <div className='h-full'>
            <div className='flex flex-col mx-5'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-xl font-bold'>Recent enrolled classes</h1>
                    <div className='flex items-center '>
                        <p className='text-2xl rounded-full mx-4 cursor-pointer'>All</p>
                        <HiOutlineMagnifyingGlass size={35} className='text-2xl p-1 cursor-pointer rounded-full bg-gray-200' />
                    </div>
                </div>

                {/* Scrollable Course List */}
                <div className="mt-3 space-y-4 max-h-[220px] overflow-y-auto pr-2 no-scrollbar">
                    {recentCourses.map((course) => (
                        <div key={course.id} className='border border-orange-600 rounded-lg'>
                            <div className='flex p-3 m-2'>
                                <div className='w-14 h-13 bg-gray-100 rounded-md' />
                                    <div className='w-full ml-5 pl-3'>
                                <div>
                                    <span className='text-xl text-orange-600 font-bold'>{course.title}</span>
                                </div>
                                <div className='flex items-center justify-between mt-2'>
                                    <div className='flex items-center space-x-2'>
                                        <CiClock2 />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <HiOutlineNewspaper />
                                        <span>{course.lessons}</span>
                                    </div>
                                    {course.hasAssignment && (
                                        <div className='flex items-center space-x-2'>
                                            <CiCircleCheck />
                                            <span>Assignments</span>
                                        </div>
                                    )}
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
