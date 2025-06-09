'use client';
import Content from '@/component/courses/Content';
import Curriculum from '@/component/courses/Curriculum';
import React from 'react';

const Page = () => {
  return (
    <div className="flex items-start justify-center">
      <div className="w-[60%] ml-4 my-2">
        <Content/>
      </div>
      <div className="w-[40%] p-4 ">
        <div className='mb-2'>
          <h1 className='text-xl font-semibold '>Course Contents</h1>
        </div>
        <Curriculum/>
      </div>
    </div>
  );
};

export default Page;