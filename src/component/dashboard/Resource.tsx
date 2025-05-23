import React from 'react'
import { BiSolidFilePdf } from "react-icons/bi";
import ProgressBar from './ProgressBar';
import { BiSolidFilePng } from "react-icons/bi";
import { BiSolidFileJpg } from "react-icons/bi";

const Resource = () => {
  return (
    <div className='h-full mx-2'>
      <h1 className='text-xl ml-2 '>Yours Resources</h1>
      <div className='w-full mt-3'>

        <div className='flex my-3 '>
          {/* icon */}
          <div className='w-10 h-10'>
            <BiSolidFilePdf className='text-[2.50rem] text-red-600'/>
          </div>
          {/* detail */}
          <div className='w-full'>
            <div className='h-full flex flex-col mx-3'>
              <div  className='h-1/2 flex items-center justify-between'>
                <h1 className='text-sm font-bold '>Node For Brginner</h1>
                <span className='text-sm'>4.5mb</span>
              </div>
              {/* <span className='text-sm text-gray-400'>example for everything in node js / ts</span> */}
              <div className='h-1/2 mt-2'>
                <ProgressBar progress={90} width="100%" height="5px" color="bg-orange-500" bgColor="bg-orange-100"/>
              </div>
            </div>
          </div>
          {/* button */}
          <button className='text-orange-600 text-sm p-2 cursor-pointer'>Download</button>
        </div>

        <div className='flex  my-3'>
          {/* icon */}
          <div className='w-10 h-10'>
            <BiSolidFileJpg className='text-[2.50rem] text-blue-600'/>
            {/* <BiSolidFilePdf className='text-[2.50rem] text-red-600'/> */}
          </div>
          {/* detail */}
          <div className='w-full'>
            <div className='h-full flex flex-col mx-3'>
              <div  className='h-1/2 flex items-center justify-between'>
                <h1 className='text-sm font-bold '>Node For Brginner</h1>
                <span className='text-sm'>4.5mb</span>
              </div>
              {/* <span className='text-sm text-gray-400'>example for everything in node js / ts</span> */}
              <div className='h-1/2 mt-2'>
                <ProgressBar progress={50} width="100%" height="5px" color="bg-orange-500" bgColor="bg-orange-100"/>
              </div>
            </div>
          </div>
          {/* button */}
          <button className='text-orange-600 text-sm p-2 cursor-pointer'>Download</button>
        </div>

        <div className='flex  my-3'>
          {/* icon */}
          <div className='w-10 h-10'>
            <BiSolidFilePng className='text-[2.50rem] text-green-600'/>
            {/* <BiSolidFilePdf className='text-[2.50rem] text-red-600'/> */}
          </div>
          {/* detail */}
          <div className='w-full'>
            <div className='h-full flex flex-col mx-3'>
              <div  className='h-1/2 flex items-center justify-between'>
                <h1 className='text-sm font-bold '>Node For Beginner</h1>
                <span className='text-sm'>4.5mb</span>
              </div>
              {/* <span className='text-sm text-gray-400'>example for everything in node js / ts</span> */}
              <div className='h-1/2 mt-2'>
                <ProgressBar progress={80} width="100%" height="5px" color="bg-orange-500" bgColor="bg-orange-100"/>
              </div>
            </div>
          </div>
          {/* button */}
          <button className='text-orange-600 text-sm p-2 cursor-pointer'>Download</button>
        </div>
      </div>
    </div>
  )
}

export default Resource
