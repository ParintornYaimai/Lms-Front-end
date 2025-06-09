import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaRegFolderOpen } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { FiPlayCircle } from "react-icons/fi";

const Curriculum = () => {
  const [isOpen, setIsOpen] = useState(true); //CATEGORY
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const categories = [
    {
      name: "Getting Started",
      subcategories: [
        { name: "Whatl's is Webflow?", icon: <FaPlay size={12} /> },
        { name: "Sign up in Webflow", icon: <FaPlay size={12} /> },
        { name: "Webflow Terms & Cibnditions", icon: <FaPlay size={12} /> },
        { name: "Teaser of Webflow", icon: <FaPlay size={12} /> },
        { name: "Practice Project", icon: <FaPlay size={12} /> },
        { name: "No-Code Development", icon: <FaPlay size={12} /> },
      ],
    },
    {
      name: "Secret of Good Design",
      subcategories: [
        { name: "Whatl's is Webflow?", icon: <FaPlay size={12} /> },
        { name: "Sign up in Webflow", icon: <FaPlay size={12} /> },
        { name: "Webflow Terms & Cibnditions", icon: <FaPlay size={12} /> },
        { name: "Teaser of Webflow", icon: <FaPlay size={12} /> },
        { name: "Practice Project", icon: <FaPlay size={12} /> },
        { name: "No-Code Development", icon: <FaPlay size={12} /> },
      ],
    },
    {
      name: "Pracrice Design Like an Artist",
      subcategories: [
        { name: "Whatl's is Webflow?", icon: <FaPlay size={12} /> },
        { name: "Sign up in Webflow", icon: <FaPlay size={12} /> },
        { name: "Webflow Terms & Cibnditions", icon: <FaPlay size={12} /> },
        { name: "Teaser of Webflow", icon: <FaPlay size={12} /> },
        { name: "Practice Project", icon: <FaPlay size={12} /> },
        { name: "No-Code Development", icon: <FaPlay size={12} /> },
      ],
    },
    {
      name: "Web Development (web flow)",
      subcategories: [
        { name: "Whatl's is Webflow?", icon: <FaPlay size={12} /> },
        { name: "Sign up in Webflow", icon: <FaPlay size={12} /> },
        { name: "Webflow Terms & Cibnditions", icon: <FaPlay size={12} /> },
        { name: "Teaser of Webflow", icon: <FaPlay size={12} /> },
        { name: "Practice Project", icon: <FaPlay size={12} /> },
        { name: "No-Code Development", icon: <FaPlay size={12} /> },
      ],
    },
    {
      name: "Secrets of Making Money Freelancing",
      subcategories: [
        { name: "Whatl's is Webflow?", icon: <FaPlay size={12} /> },
        { name: "Sign up in Webflow", icon: <FaPlay size={12} /> },
        { name: "Webflow Terms & Cibnditions", icon: <FaPlay size={12} /> },
        { name: "Teaser of Webflow", icon: <FaPlay size={12} /> },
        { name: "Practice Project", icon: <FaPlay size={12} /> },
        { name: "No-Code Development", icon: <FaPlay size={12} /> },
      ],
    },
    {
      name: "Advance",
      subcategories: [
        { name: "Whatl's is Webflow?", icon: <FaPlay size={12} /> },
        { name: "Sign up in Webflow", icon: <FaPlay size={12} /> },
        { name: "Webflow Terms & Cibnditions", icon: <FaPlay size={12} /> },
        { name: "Teaser of Webflow", icon: <FaPlay size={12} /> },
        { name: "Practice Project", icon: <FaPlay size={12} /> },
        { name: "No-Code Development", icon: <FaPlay size={12} /> },
      ],
    },
  ];

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
              {categories.map((category, index) => {
                const isCatOpen = openCategory === index;

                return (
                  <div key={category.name}>
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
                          key={`sub-${category.name}`}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={dropdownVariants}
                          className="mx-4 my-2 space-y-2 overflow-hidden "
                        >
                          {category.subcategories.map((item) => {
                            return (
                              <div key={item.name} >
                                <div className="w-full flex items-center justify-between space-y-2">
                                  <div className="flex items-center gap-2 ">
                                    <span>{item.icon}</span>
                                    <span>{item.name}</span>
                                  </div>
                                  <div className="flex items-center justify-end">
                                    <span>08.02</span>
                                  </div>
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
