'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { IoNotificationsOutline } from "react-icons/io5"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { shouldHideTopNavbar } from '../utils/index'
import Notification from '@/component/notification'
import { useAuthStore } from '@/store/authStore';

const TopNavbar = () => {
  const [role, setRole] = useState<'student'|'teacher'>('student')
  const pathname = usePathname()
  const hideTopNavbar = shouldHideTopNavbar(pathname)
  const [showNotification, setShowNotification] = useState(false) 
  const notificationRef = useRef<HTMLDivElement>(null)
  const user = useAuthStore(state => state.user);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotification(false)
      }
    }

    if (showNotification) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showNotification])

  if (hideTopNavbar) return null

  return (
    <div className='w-full h-[70px] flex justify-center items-center bg-white border-b border-gray-300 relative'>
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
        {
          role === 'teacher' ? (
            <>
              <div className='lg:w-[1200px] 2xl:w-[1600]'>
                <h1 className='2xl:text-4xl lg:text-3xl font-semibold text-orange-600'>Teacher's Management Panel</h1>
              </div>
            </>
          ):(
            <div className="relative w-full max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <HiMagnifyingGlass className="w-5 h-5 text-orange-600" />
              </span>

              <span className="absolute inset-y-0 right-0 flex items-center gap-1 pr-3">
                <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded-sm text-sm font-medium">⌘</span>
                <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded-sm text-sm font-medium">F</span>
              </span>

              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-20 py-2 border border-orange-600 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-600 placeholder-gray-400"
              />
            </div>
          )
        }
        

        {/* detail */}
        <div className='flex items-center gap-3 relative'>
          {/* Notification icon */}
          {/* <div className="relative" ref={notificationRef}>
            <IoNotificationsOutline
              size={40}
              className='border p-2 rounded-xl border-gray-300 cursor-pointer'
              onClick={() => setShowNotification(!showNotification)}
            />
            <span className="absolute top-2 right-2 w-3 h-3 bg-red-600 rounded-full border-2 border-white"></span> */}

            {/* Notification dropdown */}
            {/* {showNotification && (
              <div className="absolute top-12 right-0 0 z-50 border border-gray-200 shadow-sm rounded">
                <Notification />
              </div>
            )}
          </div> */}

          {/* Account pic */}
          {/* <Image
            src="/User.png"
            alt="User Profile"
            width={40}
            height={50}
            className='rounded-full object-cover border border-gray-300'
          /> */}

          {/* Account name */}
          {/* <div className='mr-4'>
            <h3 className='text-lg'>{user?.firstname} {user?.lastname}</h3>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
