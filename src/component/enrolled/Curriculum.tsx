import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { FiPlayCircle } from "react-icons/fi";
import { CourseSection } from "@/types/enrolleType";
import { TiDocumentText } from "react-icons/ti";
import { FaRegFile } from "react-icons/fa6";

interface CurriculumProps {
  curriculum: CourseSection[]; 
}

interface ContentItem {
  contentType: string;
  contentValue: string[];
  content?: string;
  id: number;
  _id?: string;
  name: string;
}


const Curriculum = ({curriculum}:CurriculumProps) => {
  const [isOpen, setIsOpen] = useState(true); //CATEGORY
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const dropdownVariants = {
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  // console.log('curriculum',curriculum)
  return (
    <>
      <div className="w-full border border-t-0 border-gray-200">
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
              {curriculum?.map((category, index) => {
                const isCatOpen = openCategory === index;
                return (
                  <div key={index}>
                    {/* หมวดหลัก */}
                    <div
                      onClick={() => setOpenCategory(isCatOpen ? null : index)}
                      className="flex items-center justify-between px-4 py-4 cursor-pointer hover:bg-gray-100  border-t border-gray-200 "
                    >
                      <div className="w-full flex items-center justify-between ">
                        <div className="flex items-center">
                           <IoIosArrowDown
                          size={18}
                          className={`transition-transform duration-500 ${
                            isCatOpen
                              ? "rotate-180 text-orange-600"
                              : "text-gray-500"
                          }`}
                        />
                        <div className="ml-2">
                          <span>{category.name}</span>
                        </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <div className="flex items-center gap-1 mx-5">
                              <div>
                                <FiPlayCircle
                                  size={20}
                                  className="text-blue-600"
                                />
                              </div>
                              <div>
                                <span className="text-gray-600">
                                  202 lecture
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-1">
                              <div>
                                <LuClock3
                                  size={20}
                                  className="text-orange-400"
                                />
                              </div>
                              <div>
                                <span className="text-gray-600">19h 32m</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* หมวดย่อย */}
                    <AnimatePresence initial={false}>
                      {isCatOpen && (
                        <motion.div
                          key={`sub-${category.sectionname}`}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={dropdownVariants}
                          className="mx-4 my-2 space-y-2 overflow-hidden "
                        >
                          {category.lectures.map((item:ContentItem) => {
                            return (
                              <div key={item.name} >
                                <div className="w-full flex items-center justify-between space-y-2">
                                  <div className="flex items-center gap-2 ">
                                    <span>
                                      {
                                       item?.contentType === "video" ? (
                                          <FaPlay size={12} />
                                        ) : item.contentType === "text" ? (
                                          <TiDocumentText  size={15} />
                                        ) : item.contentType === "file" ? (
                                          <FaRegFile size={15}/>
                                        ) :(
                                          <></>
                                        )
                                      }
                                    </span>
                                    <span>{item.name}</span>
                                  </div>
                                  {/* <div className="flex items-center justify-end">
                                    <span className="text-gray-500">{item.contentType === 'video' || item.contentType === 'file' && (<>{item.size} MB</>) }</span>
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
