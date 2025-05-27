'use client'
import React from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { IoNotificationsOutline } from "react-icons/io5";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { shouldHideTopNavbar } from '../utils/index'

const TopNavbar  = () => {
  const pathname = usePathname()
  // control TopNavbar
  const hideTopNavbar = shouldHideTopNavbar(pathname) 
  if(hideTopNavbar) return null

  return (
    <div className='w-full h-[70px] flex justify-center items-center bg-white border-b border-gray-300'>
      <div className='w-full flex justify-between items-center'>
        {/* Logo */}
        <div className='border-r border-gray-300 p-2'>
          <Image
            src="/Book.png"        
            alt="Book"
            width={54}
            height={60}
          />
        </div>

        {/* search */}
        <div className="relative w-full max-w-md">
          {/* ไอคอนค้นหาทางซ้าย */}
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <HiMagnifyingGlass className="w-5 h-5 text-orange-600" />
          </span>

          {/* ปุ่ม ⌘ F ทางขวา */}
          <span className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
            <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded-sm text-sm font-medium">
              ⌘
            </span>
            <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded-sm text-sm font-medium">
              F
            </span>
          </span>

          {/* Input */}
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-20 py-2 border border-orange-600 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 placeholder-gray-400"
          />
        </div>

        {/* detail */}
        <div className='flex items-center gap-3 relative'>
          <div className="relative">
            <IoNotificationsOutline size={40} className='border p-2 rounded-xl border-gray-300  cursor-pointer' />
            {/* Red Dot */}
            <span className="absolute top-2 right-2 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></span>
          </div>

          {/* account pic */}
          <div>
            {/* <img src="./user.png" alt="" /> */}
            <Image
              src="/User.png"        
              alt="User Profile"
              width={40}
              height={50}
              className='rounded-full object-cover border border-gray-300'
            />
          </div>

          {/* account name */}
          <div className='mr-4'>
            <h3 className='text-lg '>parintorn</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar 
