'use client'
import React from 'react'
import ProgressBar from "./ProgressBar";
import { AssignmentProgressByCategory } from '@/types/dashboard';

// Color palette for different categories
const colorPalette = [
  'bg-orange-600',
  'bg-blue-700',
  'bg-green-600',
  'bg-pink-600',
  'bg-purple-600',
  'bg-yellow-600',
  'bg-red-600',
  'bg-indigo-600',
  'bg-teal-600',
  'bg-gray-600'
];

type Props = {
  taskProgressData?: AssignmentProgressByCategory[]
}

const TaskProgress = ({ taskProgressData }: Props) => {
  
  // Transform the data and calculate progress
  const transformedData = taskProgressData?.map((category, index) => {
    const progress = category.totalAssignments > 0 
      ? Math.round((category.assignmentCompleted / category.totalAssignments) * 100)
      : 0;
    
    return {
      name: category.categoryName,
      done: category.assignmentCompleted,
      total: category.totalAssignments,
      progress: progress,
      color: colorPalette[index % colorPalette.length], // Cycle through colors
      categoryId: category.categoryId
    };
  }) || [];

  return (
    <div className="h-full max-w-md mx-auto">
      <h1 className="text-xl font-bold ml-5 mb-5">Task Progress</h1>
      <div className={`no-scrollbar ${transformedData.length > 4 ? 'overflow-y-auto max-h-[400px]' : ''}`}>
        <div className="space-y-5 mx-5 max-h-[220px]">
          {transformedData.length > 0 ? (
            transformedData.map((category, idx) => (
              <div key={category.categoryId || idx} className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-orange-600 text-sm font-semibold">
                    {category.done}/{category.total}
                  </span>
                </div>
                <ProgressBar 
                  progress={category.progress} 
                  height="5px" 
                  color={category.color} 
                />
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p>No task progress data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskProgress;