import { Category, CourseCRM, SubCategory, Teacher, Thumbnail } from '@/types/enrolleType';
import { LuClock3, LuCopy } from "react-icons/lu";
import { MdOutlineEmail, MdOutlinePeopleAlt, MdOutlineSubtitles } from "react-icons/md";
import { TbBook2 } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";

import { IoTimeOutline } from 'react-icons/io5';
import { PiFilesLight } from 'react-icons/pi';
import { HiOutlineTrophy } from 'react-icons/hi2';
import { TbDeviceMobile } from 'react-icons/tb';
import { LuLayers } from 'react-icons/lu';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import toast from 'react-hot-toast';

interface Enrolled {
  course: {
    _id: string;
    title: string;
    subtitle: string;
    coursecate: Category;
    coursesubjectcate: SubCategory;
    coursetopic: string;
    duration: string; // ISO date string
    thumbnailurl: Thumbnail[];
    coursematerial: string;
    mainpoint: string[];
    coursereq: string[];
    whatyouwillteachincourse: string[];
    whothiscourseisfor: string[];
    subtitlelanguage: string;
    courselanguage: string;
    courselevel: string;
    coursecrm: CourseCRM[];
    createby: Teacher;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    __v: number;
  },
  handleEnroll:()=> void;
}
const EnrolleDetail = ({course, handleEnroll}:Enrolled) => {

  // const handleEnrolle=async()=>{
  //   try {
  //     const data = await enrolledCourse(courseId);
      
  //     if(data.success) alert('enrolled is complete')
  //   } catch (error: any) {
  //     toast.error(error)
  //   }
  // }

  return (
    <div>
      <div className='border border-gray-200 shadow-sm'>
        <div className='p-4'>
          <h1 className='text-xl'>Course Detail</h1>
        </div>

        <div className='p-4 space-y-3 border-y border-gray-200'>
          {/* Course Duration */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <LuClock3 size={20} className='text-gray-400' />
              <span>Course Duration</span>
            </div>
            <span className='text-sm text-gray-500'>{course.duration} Hour</span>
          </div>

          {/* Course Level */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <VscGraph size={20} className='text-gray-400' />
              <span>Course Level</span>
            </div>
            <span className='text-sm text-gray-500'>{course.courselevel}</span>
          </div>

          {/* Students Enrolled */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <MdOutlinePeopleAlt size={20} className='text-gray-400' />
              <span>Students Enrolled</span>
            </div>
            <span className='text-sm text-gray-500'>19,9999</span>
          </div>

          {/* Language */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <TbBook2 size={20} className='text-gray-400' />
              <span>Language</span>
            </div>
            <span className='text-sm text-gray-500'>{course.courselanguage}</span>
          </div>

          {/* Subtitle Language */}
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <MdOutlineSubtitles size={20} className='text-gray-400' />
              <span>Subtitle Language</span>
            </div>
            <span className='text-sm text-gray-500'>{course.subtitlelanguage}</span>
          </div>
        </div>

        <div className='p-4'>
          <button className='w-full py-3 text-white bg-orange-600 cursor-pointer' onClick={handleEnroll}>
            Enrolled Course
          </button>
        </div>

        <div className='p-4 border-y border-gray-200'>
          <div className='p-4 pl-0'>
            <p className='text-medium'>This course includes:</p>
          </div>
          <div className='space-y-3'>
            {/* Lifetime Access */}
            <div className='flex items-center gap-2'>
              <IoTimeOutline className='text-orange-600' size={20} />
              <span className='text-gray-500'>lifetimeAccess</span>
            </div>

            {/* Free Exercises File */}
            <div className='flex items-center gap-2'>
              <PiFilesLight className='text-orange-600' size={20} />
              <span className='text-gray-500'>exercisesFile</span>
            </div>

            {/* Shareable Certificate */}
            <div className='flex items-center gap-2'>
              <HiOutlineTrophy className='text-orange-600' size={20} />
              <span className='text-gray-500'>certificate</span>
            </div>

            {/* Mobile Access */}
            <div className='flex items-center gap-2'>
              <TbDeviceMobile className='text-orange-600' size={20} />
              <span className='text-gray-500'>mobileAccess</span>
            </div>

            {/* Subtitles */}
            <div className='flex items-center gap-2'>
              <MdOutlineSubtitles className='text-orange-600' size={20} />
              <span className='text-gray-500'>subtitles</span>
            </div>

            {/* Online Course */}
            <div className='flex items-center gap-2'>
              <LuLayers className='text-orange-600' size={20} />
              <span className='text-gray-500'>onlineCourse</span>
            </div>
          </div>
        </div>

         <div className='p-4'>
          <h1>Share this course:</h1>
          <div className='flex items-center justify-around my-4'>
            {/* Copy Link */}
            <div 
              className='flex items-center px-4 py-2 gap-2 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors'
              // onClick={onCopyLink}
            >
              <LuCopy />
              <span>Copy link</span>
            </div>

            {/* Facebook */}
            <div 
              className='p-3 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors'
              // onClick={onFacebookShare}
            >
              <FaFacebookF />
            </div>

            {/* Twitter */}
            <div 
              className='p-3 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors'
              // onClick={onTwitterShare}
            >
              <FaTwitter />
            </div>

            {/* Email */}
            <div 
              className='p-3 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors'
              // onClick={onEmailShare}
            >
              <MdOutlineEmail />
            </div>

            {/* WhatsApp */}
            <div 
              className='p-3 bg-gray-100 cursor-pointer hover:bg-gray-200 transition-colors'
              // onClick={onWhatsappShare}
            >
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolleDetail;
