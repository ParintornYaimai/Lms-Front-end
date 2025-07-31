'use client'
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosCheckmark } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { LuClock3 } from "react-icons/lu";
import { FiPlayCircle, FiFile } from "react-icons/fi";
import { CourseContent, CourseCrm } from "@/types/courseType";

type Props = {
  coursecrm: CourseCrm[];
  handleVideo: (item: CourseContent) => void;
};

const Curriculum = ({ coursecrm, handleVideo }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (name: string) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const dropdownVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  useEffect(() => {
    if (coursecrm.length === 0) return;

    for (const category of coursecrm) {
      const firstVideo = category.lectures.find((item) => item.contentType !== "file");
      if (firstVideo) {
        handleVideo(firstVideo);
        break; // เจออันแรกแล้วก็พอ
      }
    }
  }, [coursecrm]);

  return (
    <>
      <div className="w-full border border-t-0 border-gray-200 shadow-xs">
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="category-content"
              initial="closed"
              animate="open"
              exit="closed"
              variants={dropdownVariants}
              className=" overflow-hidden"
            >
              {coursecrm.map((category, index) => {
                const isCatOpen = openCategory === index;
                return (
                  <div key={index}>
                    {/* Section Header */}
                    <div
                      onClick={() => setOpenCategory(isCatOpen ? null : index)}
                      className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-gray-100 border-t border-gray-200"
                    >
                      <div className="w-full flex items-center justify-between">
                        <div className="flex items-center">
                          <IoIosArrowDown
                            size={18}
                            className={`transition-transform duration-500 ${
                              isCatOpen
                                ? "rotate-180 text-orange-600"
                                : "text-gray-500"
                            }`}
                          />
                          <div className="ml-2 lg:text-sm 2xl:text-lg font-semibold">
                            <span className={isCatOpen ? "text-orange-600" : ""}>
                              {category.name}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center gap-1 mx-5">
                            <FiPlayCircle className="text-blue-600" size={20} />
                            <span className="text-gray-600 text-sm">202 lecture</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <LuClock3 className="text-orange-400" size={20} />
                            <span className="text-gray-600 text-sm">19h 32m</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section Content */}
                    <AnimatePresence initial={false}>
                      {isCatOpen && (
                        <motion.div
                          key={`sub-${category.name}`}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={dropdownVariants}
                          className="mx-4 my-2 space-y-2 overflow-hidden lg:text-sm"
                        >
                          {category?.lectures.map((item) => {
                            // const isChecked = selected.includes(item.name);

                            if (item.contentType === "file") {
                              return (
                                <div
                                  key={item.name}
                                  className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded px-2 py-1"
                                >
                                  <FiFile className="text-gray-500" size={18} />
                                  <span>{item.name}</span>
                                </div>
                              );
                            }

                            return (
                              <div
                                key={item.name}
                                className="cursor-pointer"
                                onClick={() => handleVideo(item)}
                              >
                                <div className="w-full flex items-center justify-between space-y-2">
                                  <div className="flex items-center gap-2">
                                    {/* <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
                                      <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => toggleSelect(item.name)}
                                        className="peer hidden"
                                      />
                                      <span className="w-3 h-3 border border-gray-400 flex items-center justify-center peer-checked:bg-orange-600 peer-checked:border-orange-600 transition-colors duration-200">
                                        {isChecked && (
                                          <IoIosCheckmark
                                            size={20}
                                            className="text-white"
                                          />
                                        )}
                                      </span>
                                    </label> */}
                                    <span>{item.name}</span>
                                  </div>
                                  {/* <div className="flex items-center gap-2">
                                    <span>08.02</span>
                                  </div> */}
                                </div>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Curriculum;
