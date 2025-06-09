import React, { JSX } from 'react'
import { LuClock3, LuCopy } from "react-icons/lu";
import { MdOutlinePeopleAlt, MdOutlineSubtitles } from "react-icons/md";
import { TbBook2 } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";

// Define TypeScript types
type Feature = {
  icon: JSX.Element;
  label: string;
};

type ShareLink = {
  icon: JSX.Element;
};

type Course = {
  title: string;
  duration: string;
  level: string;
  students: string | number;
  language: string;
  subtitle: string;
  features: Feature[];
  shareLinks: ShareLink[];
};

type EnrolleDetailProps = {
  course: Course;
};

const EnrolleDetail = ({ course }:EnrolleDetailProps) => {
  const { title, duration,level,students,language,subtitle,features,shareLinks } = course;

  const courseDetails = [
    { icon: <LuClock3 size={20} className='text-gray-400' />, label: 'Course Duration', value: duration },
    { icon: <VscGraph size={20} className='text-gray-400' />, label: 'Course Level', value: level },
    { icon: <MdOutlinePeopleAlt size={20} className='text-gray-400' />, label: 'Students Enrolled', value: students },
    { icon: <TbBook2 size={20} className='text-gray-400' />, label: 'Language', value: language },
    { icon: <MdOutlineSubtitles size={20} className='text-gray-400' />, label: 'Subtitle Language', value: subtitle }
  ];

  return (
    <div>
      <div className='border border-gray-200 shadow-md'>
        <div className='p-4'>
          <h1 className='text-xl'>{title}</h1>
        </div>

        <div className='p-4 space-y-3 border-y border-gray-200'>
          {courseDetails.map((detail, index) => (
            <div key={index} className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                {detail.icon}
                <span>{detail.label}</span>
              </div>
              <span className='text-sm text-gray-500'>{detail.value}</span>
            </div>
          ))}
        </div>

        <div className='p-4'>
          <button className='w-full py-3 text-white bg-orange-600 cursor-pointer'>
            Enrolled Course
          </button>
        </div>

        <div className='p-4 border-y border-gray-200'>
          <div className='p-4 pl-0'>
            <p className='text-medium'>This course includes:</p>
          </div>
          <div className='space-y-3'>
            {features.map((feature, idx) => (
              <div key={idx} className='flex items-center gap-2'>
                {React.cloneElement(feature.icon, { className: 'text-orange-600', size: 20 })}
                <span className='text-gray-500'>{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className='p-4'>
          <h1>Share this course:</h1>
          <div className='flex items-center justify-around my-4'>
            <div className='flex items-center px-4  py-2 gap-2 bg-gray-100 cursor-pointer'>
              <LuCopy />
              <span>Copy link</span>
            </div>
            {shareLinks.map((item, idx) => (
              <div key={idx} className=' p-3 bg-gray-100 cursor-pointer'>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolleDetail;
