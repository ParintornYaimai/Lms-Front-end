import React, { useState } from 'react'
import ReactPlayer from 'react-player';

const Content = () => {
    const [activeTab, setActiveTab] = useState('detail');
    return (
        <div>
            <div className="relative aspect-video overflow-hidden rounded-lg" >
                <ReactPlayer
                    url="/Getting.mp4"
                    controls
                    width="100%"
                    height="100%"
                    config={{
                    file: {
                        attributes: {
                        controlsList: 'nodownload', 
                        },
                    },
                    }}
                />
            </div>
            {/* //Detail */}
            <div className='my-3'>
                <div className='px-5'>
                    {/* Description */}
                    <div className='pb-2'>
                        <h1 className='text-2xl '>Intro to programming</h1>
                    </div>
                    {/* //author name */}
                    <div className='pl-2'>
                        <span className='text-gray-800'>Parintorn 
                            <span className='text-gray-500 text-sm'> • Professor</span>
                        </span>
                    </div>

                    {/* file */}
                    <div className='mt-5 '>
                        {/* Tab */}
                        <div className="space-x-2 border-b border-gray-100 text-gray-400">
                            <button
                                className={`px-5 py-3 cursor-pointer ${activeTab === 'detail' ? 'border-b-2 border-orange-600 text-orange-600' : ''}`}
                                onClick={() => setActiveTab('detail')}
                            >
                                Class Detail
                            </button>
                            <button
                                className={`px-5 py-3 cursor-pointer ${activeTab === 'assignments' ? 'border-b-2 border-orange-600 text-orange-600' : ''}`}
                                onClick={() => setActiveTab('assignments')}
                            >
                                Assignments
                            </button>
                            <button
                                className={`px-5 py-3 cursor-pointer ${activeTab === 'file' ? 'border-b-2 border-orange-600 text-orange-600' : ''}`}
                                onClick={() => setActiveTab('file')}
                            >
                                File
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className='mt-4'>
                            {activeTab === 'detail' && (
                                <div className='text-sm'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consectetur sapiente quo, nemo ut facilis porro natus consequuntur labore sint fugit doloribus? Harum culpa dolor vel quae nisi aut in.</p>
                                </div>
                            )}
                            {activeTab === 'assignments' && (
                                <div>
                                    <div className="p-4 rounded-xl space-y-3 bg-gray-50">
                                        <h2 className="text-base font-semibold text-gray-800">
                                            1. Collecting Moodboard from Dribbble.com
                                        </h2>
                                        <p className="text-sm text-gray-500 line-clamp-10">
                                            Let’s return to design thinking. Over time designers have built up their own body of approaches to solving classes of problems Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, esse..
                                        </p>
                                        <div className="flex items-center space-x-4 pt-2 w-full">
                                            <button className="cursor-pointer flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 duration-100">
                                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth ="2"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z" />
                                            </svg>
                                            See Calendar
                                            </button>
                                            <button className="cursor-pointer px-4 py-2 text-sm bg-white text-orange-600 border border-orange-500 rounded-md hover:bg-orange-50 duration-100">
                                                Go to Assiments
                                            </button>
                                            <span className="text-sm text-pink-600">• 1 Day Left</span>
                                        </div>
                                        </div>
                                </div>
                            )}
                            {activeTab === 'file' && (
                                <div>
                                   file
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
