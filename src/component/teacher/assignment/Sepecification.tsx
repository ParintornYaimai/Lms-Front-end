import { motion } from "framer-motion";
import React, { useState, forwardRef } from "react";
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoIosClose,
} from "react-icons/io";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  onNext: () => void;
  onClose: () => void;
  onBack: () => void;
  setPassPercentage: (value: number | null) => void;
  setSelectedDate: (value: Date | null) => void;
  setSelectedTime: (value: Date | null) => void;
  setUploadedFiles: (value: File | null) => void;
  uploadedFiles: File[];
  selectedTime: Date | null
  selectedDate: Date | null
  passPercentage: number
};

// Custom input component for DatePicker
const CustomDateInput = forwardRef(
  ({ value, onClick, icon }: any, ref: any) => (
    <button
      className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm text-gray-700"
      onClick={onClick}
      ref={ref}
    >
      {icon}
      <span>{value || "Select date"}</span>
    </button>
  )
);

const Sepecification = ({ onNext, onClose, onBack, setPassPercentage, setSelectedDate, setSelectedTime, setUploadedFiles, uploadedFiles, selectedTime, selectedDate, passPercentage }: Props) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if(files){
      setUploadedFiles([...uploadedFiles, ...Array.from(files)]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div>
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

          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Create New Assignment
          </h2>
          <p className="text-sm text-blue-600 mb-4">3/4 Steps</p>

          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
            <div
              className="bg-orange-500 h-1.5 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>

          <div className="border border-gray-300 p-6 rounded">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Assignment Specifications
            </h3>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Total Marks"
                className="w-full bg-gray-100 p-3 rounded focus:outline-none focus:ring-0 focus:border-none"
              />
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <p className="text-left">Pass Percentage</p>
                <p className="text-right text-sm text-blue-600 mb-4">
                  {passPercentage} %
                </p>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={passPercentage}
                onChange={(e) => setPassPercentage(Number(e.target.value))}
                className="w-full mb-2 cursor-pointer accent-orange-600"
              />
            </div>

            <div>
              <span className="block text-gray-700 mb-2">Schedule</span>
              <div className="flex gap-4">
                {/* Date Picker */}
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="Select date"
                  customInput={<CustomDateInput icon={<FaCalendarAlt />} />}
                />
                {/* Time Picker */}
                <DatePicker
                  selected={selectedTime}
                  onChange={(time) => setSelectedTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="HH:mm"
                  placeholderText="Select time"
                  customInput={<CustomDateInput icon={<FaClock />} />}
                />
              </div>
            </div>

            <div>
              <span className="block text-gray-700 mb-2">Duedate</span>
              <div className="flex gap-4">
                {/* Date Picker */}
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd-MM-yyyy"
                  placeholderText="Select date"
                  customInput={<CustomDateInput icon={<FaCalendarAlt />} />}
                />
                {/* Time Picker */}
                <DatePicker
                  selected={selectedTime}
                  onChange={(time) => setSelectedTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="HH:mm"
                  placeholderText="Select time"
                  customInput={<CustomDateInput icon={<FaClock />} />}
                />
              </div>
            </div>

            <div className="mt-5">
              <div className=" flex items-center gap-3 ">
                <label className="w-full px-4 py-2 border rounded cursor-pointer  text-sm text-gray-700 text-center">
                  Upload Files
                  <input
                    type="file"
                    className="hidden "
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
            <div>
                {uploadedFiles.length > 0 && (
                    <div className="flex mt-4 gap-2 flex-wrap max-w-full overflow-x-auto">
                      {uploadedFiles.slice(0, 3).map((file, index) => (
                          <div key={index} className="bg-gray-200 text-gray-800 px-5 py-1 rounded flex items-center gap-2">
                          <span className="truncate max-w-[100px]">{file.name}</span>
                          <button onClick={() => removeFile(index)} className="text-gray-500 hover:text-red-500">
                              <IoIosClose size={18} className="cursor-pointer"/>
                          </button>
                          </div>
                      ))}
                      {uploadedFiles.length > 3 && (
                        <div className="bg-gradient-to-l from-white to-gray-200 text-gray-700 px-3 py-1 rounded-full flex items-center justify-center border border-gray-300 w-8 h-8 text-sm">
                          +{uploadedFiles.length - 3}
                        </div>
                      )}
                    </div>
                )}
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={onClose}
              className="text-gray-600 border border-gray-300 px-4 py-2 flex items-center cursor-pointer rounded"
            >
              <IoIosArrowRoundBack size={20} /> Back
            </button>
            <button
              className="text-white bg-orange-600 flex items-center px-4 py-2 cursor-pointer rounded"
              onClick={onNext}
            >
              Next <IoIosArrowRoundForward size={20} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sepecification;
