'use client';
import React from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { HiPlusSm } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import Image from 'next/image';
import { MdOutlineAttachFile } from "react-icons/md";

const Chat = () => {
  const friends = [
    {
      id: 1,
      name: 'John Doe',
      message: 'Hello! How are you?',
      avatar: '/user.png',
    },
    {
      id: 2,
      name: 'Jane Smith',
      message: 'Let’s meet tomorrow.',
      avatar: '/user.png',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      message: 'I’ll call you later.',
      avatar: '/user.png',
    },
    {
      id: 4,
      name: 'John Doe',
      message: 'Hello! How are you?',
      avatar: '/user.png',
    },
    {
      id: 5,
      name: 'Jane Smith',
      message: 'Let’s meet tomorrow.',
      avatar: '/user.png',
    },
    {
      id: 6,
      name: 'Alice Johnson',
      message: 'I’ll call you later.',
      avatar: '/user.png',
    },
    {
      id: 7,
      name: 'John Doe',
      message: 'Hello! How are you?',
      avatar: '/user.png',
    },
    {
      id: 8,
      name: 'Jane Smith',
      message: 'Let’s meet tomorrow.',
      avatar: '/user.png',
    },
    {
      id: 9,
      name: 'Alice Johnson',
      message: 'I’ll call you later.',
      avatar: '/user.png',
    },
    {
      id: 10,
      name: 'John Doe',
      message: 'Hello! How are you?',
      avatar: '/user.png',
    },
    {
      id: 11,
      name: 'Jane Smith',
      message: 'Let’s meet tomorrow.',
      avatar: '/user.png',
    },
    {
      id: 12,
      name: 'Alice Johnson',
      message: 'I’ll call you later.',
      avatar: '/user.png',
    },
    {
      id: 13,
      name: 'John Doe',
      message: 'Hello! How are you?',
      avatar: '/user.png',
    },
    {
      id: 14,
      name: 'Jane Smith',
      message: 'Let’s meet tomorrow.',
      avatar: '/user.png',
    },
    {
      id: 15,
      name: 'Alice Johnson',
      message: 'I’ll call you later.',
      avatar: '/user.png',
    },
  ];

  return (
    <div className='w-full'>
      <div className='flex items-center overflow-hidden'>
        {/* Left panel */}
        <div className="w-1/3 lg:h-[715px] 2xl:h-[884px] border-r border-gray-200 overflow-y-auto overflow-x-hidden">
          <div className=''>
            <div className='flex items-start flex-col'>
              <h1 className='text-2xl font-semibold ml-2'>Chats</h1>

              {/* Search */}
              <div className='my-1 w-full ml-2'>
                <div className="relative w-full max-w-md">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiMagnifyingGlass className="w-5 h-5 text-orange-600" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-10 py-2 rounded-full focus:outline-none bg-gray-100 2xl:w-[540px]"
                  />
                </div>
              </div>

              {/* Tabs */}
              <div className='flex items-center gap-3 m-2 '>
                <div className='p-1 bg-blue-100 rounded-full'>
                  <button className='cursor-pointer text-orange-600 text-sm px-2 font-semibold'>Inbox</button>
                </div>
                <div className='p-1 bg-blue-100 rounded-full'>
                  <button className='flex items-center cursor-pointer text-orange-600 text-sm px-2 py-[2px] font-semibold'>
                    <FaUserFriends size={20} />
                    <HiPlusSm size={20} />
                    Friend
                  </button>
                </div>
              </div>

              {/* Friends list */}
              <div className='w-full overflow-y-auto lg:h-[585px] 2xl:h-[755px]'>
                <div className='w-full space-y-1 mt-2 '>
                  {friends.map(friend => (
                    <div key={friend.id} className='flex items-start gap-3 p-2 hover:bg-orange-100 rounded-lg cursor-pointer'>
                      <Image 
                        src={friend.avatar}
                        alt={friend.name}
                        width={50}
                        height={50}
                        className='border border-gray-300 rounded-full'
                      />
                      <div className='flex flex-col'>
                        <h1 className='text-md font-medium'>{friend.name}</h1>
                        <p className='text-sm text-gray-500 truncate max-w-[200px]'>{friend.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-2/3 lg:h-[715px] 2xl:h-[884px]">
          <div className=''>
            {/*header*/}
            <div className='border-b border-gray-200 p-1'>
              <div className='flex items-start gap-3'>
                <Image 
                  src={'/user.png'}
                  alt='user'
                  width={50}
                  height={50}
                  className='border border-gray-300 rounded-full'
                />
                <div className='flex flex-col'>
                  <h1 className='text-md font-medium'>User</h1>
                  <p className='text-sm text-gray-500 truncate max-w-[200px]'>Active 9m ago</p>
                </div>
              </div>
            </div>

            {/* messasge */}
            <div className='p-2'>
              <div className=' border 2xl:h-[750] xl:h-[600]'>
                {/* sender */}
                <div>
                  <Image 
                    src={'/user.png'}
                    alt='user'
                    width={35}
                    height={35}
                    className='border border-gray-300 rounded-full'
                  />
                </div>
              </div>
            </div>

            {/* controll */}
            <div className='w-full border lg:p-1 2xl:p-3'>
              <div className='flex items-center justify-between'>
                <div>
                  <MdOutlineAttachFile size={30}/>
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  icon
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Chat;
