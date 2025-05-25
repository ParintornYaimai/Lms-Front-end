import React from 'react'
import { BiSolidFilePdf, BiSolidFilePng, BiSolidFileJpg } from "react-icons/bi";
import ProgressBar from './ProgressBar';

const mockResources = [
  {
    id: 1,
    type: 'pdf',
    icon: BiSolidFilePdf,
    title: 'Node For Beginner',
    size: '4.5mb',
    progress: 90,
    progressColor: 'bg-orange-500',
    progressBgColor: 'bg-orange-100',
    iconColor: '#F97316' // Tailwind orange-500 hex code
  },
  {
    id: 2,
    type: 'jpg',
    icon: BiSolidFileJpg,
    title: 'React Intro',
    size: '3.2mb',
    progress: 50,
    progressColor: 'bg-blue-500',
    progressBgColor: 'bg-blue-100',
    iconColor: '#3B82F6' // Tailwind blue-500 hex code
  },
  {
    id: 3,
    type: 'png',
    icon: BiSolidFilePng,
    title: 'CSS Basics',
    size: '2.8mb',
    progress: 80,
    progressColor: 'bg-green-500',
    progressBgColor: 'bg-green-100',
    iconColor: '#22C55E' // Tailwind green-500 hex code
  }
];

const Resource = () => {
  return (
    <div className='h-full mx-2'>
      <div className='flex justify-between'>
        <h1 className='text-xl ml-2 '>Yours Resources</h1>
        <button className='text-orange-600 text-sm p-1 px-2 cursor-pointer bg-orange-100 rounded-lg font-bold'>see more</button>
      </div>
      <div className='w-full mt-3'>
        {mockResources.map(resource => {
          const IconComponent = resource.icon;
          return (
            <div key={resource.id} className='flex my-3'>
              {/* icon */}
              <div className='w-10 h-10'>
                <IconComponent 
                className='text-[2.50rem]' 
                style={{ color: resource.iconColor }} 
              />
              </div>
              {/* detail */}
              <div className='w-full'>
                <div className='h-full flex flex-col mx-3'>
                  <div className='h-1/2 flex items-center justify-between'>
                    <h1 className='text-sm font-bold '>{resource.title}</h1>
                    <span className='text-sm'>{resource.size}</span>
                  </div>
                  <div className='h-1/2 mt-2'>
                    <ProgressBar 
                      progress={resource.progress} 
                      width="100%" 
                      height="5px" 
                      color={resource.progressColor} 
                      bgColor={resource.progressBgColor} 
                    />
                  </div>
                </div>
              </div>
              {/* button */}
              <button className='text-orange-600 text-sm p-2 cursor-pointer'>Download</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Resource;
