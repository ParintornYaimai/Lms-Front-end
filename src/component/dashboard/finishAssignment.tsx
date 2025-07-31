'use client';

import { FinishAssignmentAggregationResult } from "@/types/dashboard";
import ProgressBar from "./ProgressBar";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

type Props={
  finishAssignment?: FinishAssignmentAggregationResult
}
const FinishAssignment = ({finishAssignment}: Props) => {
  const progress = finishAssignment?.totalAssignments && finishAssignment.totalAssignments > 0
  ? (finishAssignment.assignmentCompleted / finishAssignment.totalAssignments) * 100
  : 0;
  return (
    <div className='h-full'>
      <h1 className='text-xl font-bold mx-2'>Finish Assignments</h1>
      <div>
        <div className='border border-gray-200 rounded-lg md:my-7  p-2'>
          <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl shadow-sm m-2">
            <MdOutlineAssignmentTurnedIn className="text-gray-300 text-2xl"/>
          </div>
          <div className='flex items-end m-2 '>
            <div className="w-full mr-1 mb-[4px]">
              <h1 className='text-md font-bold pb-2 '>To do Assignment done</h1>
              <ProgressBar progress={progress} height="12px"/>
            </div>
            <div className="flex ml-auto">
              <p className="text-orange-500 text-sm">{finishAssignment?.totalAssignments}/{finishAssignment?.assignmentCompleted}</p> 
              <span className="text-sm text-gray-500 ml-1">class</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinishAssignment
