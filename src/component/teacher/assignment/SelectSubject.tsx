import React from 'react';
import { IoIosArrowRoundForward, IoIosArrowRoundBack, IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

type Props = {
  onNext: () => void;
  onClose: () => void;
  onBack: () => void;
  setSelectSubJectCourse: (value: string) => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const SelectSubject = ({ onNext, onClose, onBack, setSelectSubJectCourse }: Props) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="relative bg-white w-full max-w-2xl p-8 rounded shadow-lg"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onBack}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <IoIosClose size={28} />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create New Assignment</h2>
        <p className="text-sm text-blue-600 mb-4">2/4 Steps</p>

        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
          <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '50%' }}></div>
        </div>

        <div className="border border-gray-300 p-6 rounded">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Select Subject</h3>
          <input
            type="text"
            placeholder="Select Course"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none"
            onChange={(e)=> setSelectSubJectCourse(e.target.value)}
          />
          <div className="space-y-3 max-h-60 overflow-y-auto pr-2 ">
            {[
              'Development',
              'Business',
              'Finance & Accounting',
              'IT & Software',
              'Personal Development',
              'Marketing',
              'Design',
              'Photography',
              'Music',
              'Health & Fitness',
            ].map((subject, index) => (
              <div key={index} className="flex items-center">
                <input
                  id={`subject-${index}`}
                  type="radio"
                  name="subject"
                  className="mr-2 w-4 h-4 border-2 border-gray-300 rounded-full checked:bg-orange-500 appearance-none cursor-pointer"
                />
                <label htmlFor={`subject-${index}`} className="text-gray-700">
                  {subject}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={onClose} className="text-gray-600 border border-gray-300 px-4 py-2 flex items-center cursor-pointer rounded">
            <IoIosArrowRoundBack size={20}/> Back
          </button>
          <button className="text-white bg-orange-600 flex items-center px-4 py-2 cursor-pointer rounded" onClick={onNext}>
            Next<IoIosArrowRoundForward size={20}/>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SelectSubject;
