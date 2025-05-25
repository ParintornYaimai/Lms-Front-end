'use client';

import ProgressBar from "./ProgressBar";
import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

const FinishAssignment = () => {
  return (
    <div className='h-full'>
      <h1 className='text-xl mx-2'>Finish Assignments</h1>
      <div>
        <div className='border border-gray-200 rounded-lg md:my-7  p-2'>
          <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-xl shadow-sm m-2">
            <MdOutlineAssignmentTurnedIn className="text-gray-300 text-2xl"/>
          </div>
          <div className='flex items-end m-2 '>
            <div className="w-full mr-1 mb-[4px]">
              <h1 className='text-md font-bold pb-2 '>To do Assignment done</h1>
              <ProgressBar progress={74} height="12px"/>
            </div>
            <div className="flex ml-auto">
              <p className="text-orange-500 text-sm">14/30</p> 
              <span className="text-sm text-gray-500 ml-1">class</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinishAssignment
