import React from 'react';
import { SiFuturelearn } from "react-icons/si";

// ตัวอย่างข้อมูลแบบ dynamic
const lessons = [
  { title: 'UX Design Fundamentals', time: '5:30 pm' },
  { title: 'HTML & CSS Basics', time: '7:00 pm' },
  { title: 'React Introduction', time: '8:45 pm' },
];

const UpComing = () => {
  return (
    <div className='h-full'>
      <div className='flex flex-col mx-5'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-bold'>Upcoming Lessons</h1>
        </div>

        {/* Scrollable Course List */}
        <div className="mt-3 space-y-4 max-h-[220px] overflow-y-auto pr-2 no-scrollbar">
          {lessons.map((lesson, index) => (
            <div key={index} className='border border-gray-200 rounded-lg'>
              <div className='flex p-3 m-2 items-center space-x-4'>
                <div className='w-15 h-14 bg-gray-100 rounded-md flex items-center justify-center'>
                  <SiFuturelearn size={24} />
                </div>
                <div className='flex-1'>
                  <div>
                    <span className='text-xl font-semibold'>{lesson.title}</span>
                  </div>
                  <div className='text-sm mt-1 text-gray-600'>{lesson.time}</div>
                </div>
                <div className='flex items-center justify-center'>
                  <button className='px-4 py-1 text-orange-600 bg-orange-100 rounded-md hover:bg-orange-600 hover:text-white duration-200 ease-in-out cursor-pointer'>
                    Join
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default UpComing;
