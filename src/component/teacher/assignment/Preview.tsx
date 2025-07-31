import { motion } from 'framer-motion'
import React,{forwardRef, useState} from 'react'
import { IoIosArrowRoundForward, IoIosClose } from 'react-icons/io'
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa";
import { GoClock } from "react-icons/go";


type Props = {
  onNext: () => void;
  onClose: () => void;
  onBack: () => void;
  setConfirm:(value: string)=>void
};



const Preview = ({onNext, onClose, onBack, setConfirm}:Props) => {
    
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const modalVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    return (
        <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose} // ปิด modal ถ้าคลิกที่ backdrop
        >
            <motion.div
                className="relative bg-white w-full max-w-2xl p-8 rounded shadow-lg"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()} // กันการปิด modal ถ้าคลิกในกล่อง
            >
               
                <div>
                    {/* Close Button */}
                        <button 
                        onClick={onBack}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                        aria-label="Close modal"
                        >
                            <IoIosClose size={28} />
                        </button>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Preview</h2>
                    <div>
                        <p className="text-sm text-blue-600 mb-4 ">4/4 Steps</p>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
                            <div
                            className="bg-orange-500 h-1.5 rounded-full"
                            style={{ width: "100%" }}></div>
                        </div>
                        <div className='space-y-3'>
                            <span>Name</span>
                            <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolore.</p>
                            <div className='space-y-3'>
                                <span className='flex items-center gap-2'>
                                    Course
                                    <p className='font-semibold'>B.Teacher Spcl. in Health Informati</p>
                                </span>
                                <span className='flex items-center gap-2'>
                                    Subject
                                    <p className='font-semibold'>Networking</p>
                                </span>
                                <span className='text-xl font-semibold'>Total Marks: 50</span>
                            </div>
                            <div>
                                <span>Passing Percentage</span>&nbsp;&nbsp;&nbsp;<span className='text-orange-500'>70%</span>
                            </div>
                            <div>
                                <span>Uploaded Filed</span>
                                <div>

                                </div>
                            </div>
                            <div>
                                <div  className='mb-2'>
                                    <span>Schedule</span>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <span className='flex items-center gap-2 bg-gray-100 px-3 py-1 rounded'>
                                        <FaCalendar />
                                        12-01-2023
                                    </span>
                                    <span className='flex items-center gap-2 bg-gray-100 px-3 py-1 rounded'>
                                        <GoClock />
                                        12-01-2025
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className='mb-2'>
                                    <span >Due Date</span>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <span className='flex items-center gap-2 bg-gray-100 px-3 py-1 rounded'>
                                        <FaCalendar />
                                        12-01-2023
                                    </span>
                                    <span className='flex items-center gap-2 bg-gray-100 px-3 py-1 rounded'>
                                        <GoClock />
                                        12-01-2025
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>

                <div className="flex justify-between mt-6">
                    <button onClick={onClose} className="text-gray-600 border border-gray-300 px-4 py-2 cursor-pointer rounded">
                        Back
                    </button>
                    <button className="text-white bg-orange-600 px-4 py-2 cursor-pointer rounded" onClick={onNext}>
                        Confirm
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Preview
