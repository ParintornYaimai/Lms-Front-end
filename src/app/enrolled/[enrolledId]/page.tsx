'use client';
import Enrolle from '@/component/enrolled/Enrolle';
import EnrolleDetail from '@/component/enrolled/EnrolleDetail';
import React from 'react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { IoLogoWhatsapp, IoTvOutline } from 'react-icons/io5';
import { LuClock3 } from 'react-icons/lu';
import { MdOutlineMailOutline } from 'react-icons/md';
import { PiNewspaperClippingBold, PiTrophy } from 'react-icons/pi';
import { TbBook2 } from 'react-icons/tb';

const page = () => {
  const courseData = {
    title: "Course Detail",
    duration: "3 Hour",
    level: "Beginner and Intermediate",
    students: "23,3432",
    language: "Thai",
    subtitle: "None",
    features: [
      { icon: <LuClock3 />, label: "Lifetime access" },
      { icon: <TbBook2 />, label: "Free exercises file & downloadable resource" },
      { icon: <PiTrophy />, label: "Shareable certificate of complete" },
      { icon: <IoTvOutline />, label: "Access on mobile tablet and Tv" },
      { icon: <PiNewspaperClippingBold />, label: "English subtitle" },
      { icon: <HiOutlineClipboardDocumentList />, label: "100% online course" },
    ],
    shareLinks: [
      { icon: <FaFacebookF /> },
      { icon: <FaTwitter /> },
      { icon: <MdOutlineMailOutline /> },
      { icon: <IoLogoWhatsapp /> }
    ]
  };
  return (
    <div>
      <div className="flex m-5">
        {/* Left */}
        <div className="2xl:basis-[80%] basis-[75%] ">
          <Enrolle/>
        </div>

        {/* Right */}
        <div className="2xl:basis-[20%] basis-[25%] ml-1 h-full ">
          <EnrolleDetail course={courseData}/>
        </div>
      </div>
    </div>
  )
}

export default page
