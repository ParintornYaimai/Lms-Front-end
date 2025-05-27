'use client'
import React, { useEffect } from 'react'
import ProgressBar from "./ProgressBar";

const courses = [
  { name: 'Web Programming', done: 9, total: 20, progress: 60, color: 'bg-orange-600' },
  { name: 'Data and Structures', done: 18, total: 20, progress: 80, color: 'bg-blue-700' },
  { name: 'Artificial Intelligence', done: 12, total: 20, progress: 65, color: 'bg-green-600' },
  { name: 'Computer Networks', done: 4, total: 20, progress: 20, color: 'bg-pink-600' },
  { name: 'Computer Networks', done: 4, total: 20, progress: 20, color: 'bg-pink-600' },
  { name: 'Computer Networks', done: 4, total: 20, progress: 20, color: 'bg-pink-600' },
  { name: 'Web Programming', done: 9, total: 20, progress: 60, color: 'bg-orange-600' },
  { name: 'Data and Structures', done: 18, total: 20, progress: 80, color: 'bg-blue-700' },
  { name: 'Artificial Intelligence', done: 12, total: 20, progress: 65, color: 'bg-green-600' },
  { name: 'Computer Networks', done: 4, total: 20, progress: 20, color: 'bg-pink-600' },
  { name: 'Computer Networks', done: 4, total: 20, progress: 20, color: 'bg-pink-600' },
  { name: 'Computer Networks', done: 4, total: 20, progress: 20, color: 'bg-pink-600' },
];

const TaskProgress = () => {
  

  return (
    <div className="h-full max-w-md mx-auto">
      <h1 className="text-xl font-bold ml-5 mb-5 ">Task Progress</h1>
      <div className={`no-scrollbar ${courses.length > 4 ? 'overflow-y-auto max-h-[400px]' : ''}`}>
        <div className="space-y-5 mx-5 max-h-[220px]">
          {courses.map((course, idx) => (
            <div key={idx} className="mb-5">
              <div className="flex justify-between items-center mb-2">
                <span>{course.name}</span>
                <span className="text-orange-600">{course.done}/{course.total}</span>
              </div>
              <ProgressBar progress={course.progress} height="5px" color={course.color} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskProgress;
