'use client'
import { shouldHideTopNavbar } from '@/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { MdOutlineSpaceDashboard, MdOutlineAssignment, MdCastForEducation } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { PiChatText, PiNoteLight } from "react-icons/pi";
import { GrResources } from "react-icons/gr";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import toast from 'react-hot-toast'
import { authService } from '@/services/authService'
import { useAuthStore } from '@/store/authStore'


const Sidebar = () => {
  const [role, setRole] = useState<string | undefined>()
  const user = useAuthStore(state => state.user);
  const pathname = usePathname()
  const hideTopNavbar = shouldHideTopNavbar(pathname)
  if (hideTopNavbar ) return null

  const menuItems = [
    { icon: <MdOutlineSpaceDashboard size={25} />, href: "/dashboard", label: "Dashboard" },
    { icon: <MdOutlineAssignment size={25} />, href: "/assignments", label: "Assignments" },
    { icon: <RiContactsBook3Line size={25} />, href: "/enrolled", label: "Enrolled" },
    { icon: <PiChatText size={25} />, href: "/chat", label: "Chat" },
    { icon: <GrResources size={25} />, href: "/resources", label: "Resources" },
    { icon: <PiNoteLight size={25} />, href: "/notes", label: "Notes" },
    { icon: <MdCastForEducation size={25} />, href: "/courses", label: "Courses" },
    { icon: <IoSettingsOutline size={25} />, href: "/settings", label: "Settings" },
  ]
  const teacherMenuItems = [
    // { icon: <MdOutlineSpaceDashboard size={25} />, href: "/teacher/dashboard", label: "Dashboard" },
    { icon: <MdOutlineAssignment size={25} />, href: "/teacher/assignment", label: "Assignments" },
    { icon: <MdCastForEducation size={25} />, href: "/teacher/course", label: "Courses" },
    { icon: <IoSettingsOutline size={25} />, href: "/teacher/setting", label: "Settings" },
  ]

  const handleLogout=async()=>{
    try {
      const data =  await authService.logout();
      if(data.success){
        sessionStorage.removeItem('role')
        window.location.href = '/auth/login';
      }
    } catch (error: any) {
      toast.error(error)
    }
  }
  
  useEffect(()=>{
    if(user?.role){
      // sessionStorage.setItem('role',user?.role)
      // const role = sessionStorage.getItem('role')
      // if(role) setRole(role)
      setRole(user?.role)
    }
  },[user])

  if (!role) return null;
  return (
    <div className="group w-[71px] hover:w-64 transition-all duration-300 h-screen fixed top-16 left-0 bg-white border-r border-gray-300 overflow-hidden">
      <div className='flex flex-col item-center justify-between'>
        <div className="h-full flex flex-col items-start mt-10 pl-3 pr-4">
        {(role === 'teacher' ? teacherMenuItems : menuItems).map((item, index) => {
          const isActive = pathname.startsWith(item.href)
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-x-4 p-2 my-1 rounded-md w-full transition-all duration-200
                ${isActive ? 'bg-orange-600 text-white' : 'text-gray-500 hover:bg-orange-100'}`}
            >
              {/* icon */}
              <div className="w-[30px] flex justify-center">
                {item.icon}
              </div>

              {/* label - show only on hover */}
              <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.label}
              </span>
            </Link>
          )
        })}
        {/* Logout */}
      </div>
      {/* logout button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-x-4 p-2 mb-5 ml-3 mr-4 rounded-md w-[90%] text-gray-500 hover:bg-orange-100 transition-all duration-200 cursor-pointer"
        >
          <div className="w-[30px] flex justify-center">
            <IoLogOutOutline size={25} />
          </div>
          <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Logout
          </span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar