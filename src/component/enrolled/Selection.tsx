import React, { useState } from "react";
import { IoIosArrowDown, IoIosCheckmark } from "react-icons/io";
import { PiCpu } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { LiaHandshakeSolid } from "react-icons/lia";
import { GoCreditCard } from "react-icons/go";
import { LuPenTool } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdOutlineCameraAlt } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { PiMegaphoneSimple } from "react-icons/pi";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { PiBugDroid } from "react-icons/pi";
import { VscGraph } from "react-icons/vsc";

const Selection = () => {
  const [isOpen, setIsOpen] = useState(true); //CATEGORY
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const categories = [
    {
      name: "Development",
      icon: <PiCpu size={25} />,
      subcategories: [
        { name: "Data Science", count: 574 },
        { name: "Mobile Development", count: 1345 },
        { name: "Software Testing", count: 317 },
        { name: "Software Engineering", count: 31 },
        { name: "Software Development Tools", count: 558 },
        { name: "No-Code Development", count: 37 },
      ],
    },
    {
      name: "Business",
      icon: <LiaHandshakeSolid size={25} />,
      subcategories: [
        { name: "Entrepreneurship", count: 214 },
        { name: "Management", count: 423 },
        { name: "Sales", count: 350 },
        { name: "Business Strategy", count: 180 },
      ],
    },
    {
      name: "Finance & Accounting",
      icon: <GoCreditCard size={25} />,
      subcategories: [
        { name: "Investing", count: 102 },
        { name: "Accounting Basics", count: 311 },
        { name: "Cryptocurrency", count: 98 },
      ],
    },
    {
      name: "IT & Software",
      icon: <VscGraph size={25} />,
      subcategories: [
        { name: "Network & Security", count: 220 },
        { name: "Operating Systems", count: 159 },
        { name: "Hardware", count: 92 },
      ],
    },
    {
      name: "Office Productivity",
      icon: <PiBugDroid size={25} />,
      subcategories: [
        { name: "Microsoft Office", count: 423 },
        { name: "Google Workspace", count: 188 },
        { name: "Productivity Tools", count: 97 },
      ],
    },
    {
      name: "Personal Development",
      icon: <PiNewspaperClippingLight size={25} />,
      subcategories: [
        { name: "Leadership", count: 223 },
        { name: "Personal Productivity", count: 348 },
        { name: "Communication Skills", count: 190 },
      ],
    },
    {
      name: "Design",
      icon: <LuPenTool size={25} />,
      subcategories: [
        { name: "Graphic Design", count: 712 },
        { name: "UX/UI Design", count: 318 },
        { name: "3D & Animation", count: 164 },
      ],
    },
    {
      name: "Marketing",
      icon: <PiMegaphoneSimple size={25} />,
      subcategories: [
        { name: "Digital Marketing", count: 589 },
        { name: "Content Marketing", count: 222 },
        { name: "SEO", count: 199 },
      ],
    },
    {
      name: "Lifestyle",
      icon: <BsBoxSeam size={25} />,
      subcategories: [
        { name: "Travel", count: 112 },
        { name: "Home Improvement", count: 85 },
        { name: "Pet Care", count: 46 },
      ],
    },
    {
      name: "Photography & Video",
      icon: <MdOutlineCameraAlt size={25} />,
      subcategories: [
        { name: "Digital Photography", count: 342 },
        { name: "Video Editing", count: 293 },
        { name: "Lighting", count: 89 },
      ],
    },
    {
      name: "Music",
      icon: <TfiHeadphoneAlt size={25} />,
      subcategories: [
        { name: "Music Production", count: 174 },
        { name: "Instruments", count: 135 },
        { name: "Vocal Training", count: 64 },
      ],
    },
    {
      name: "Health & Fitness",
      icon: <AiOutlineMedicineBox size={25} />,
      subcategories: [
        { name: "Yoga", count: 192 },
        { name: "Nutrition", count: 147 },
        { name: "Mental Health", count: 116 },
      ],
    },
  ];

  const tools = [
    {
      name: "Tool",
      subcategories: [
        { name: "HTML 5", count: 0 },
        { name: "CSS 3", count: 0 },
        { name: "React", count: 0 },
        { name: "Webflow", count: 0 },
        { name: "Node.js", count: 0 },
        { name: "Laravel", count: 0 },
        { name: "Sass", count: 0 },
        { name: "Wordpress", count: 0 },
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
      {/* CATEGORY */}
      <div className="w-full py-5 border border-gray-300">
        {/* CATEGORY header */}
        <div
          className="flex items-center justify-between mx-4 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div
            className={`font-semibold ${
              isOpen ? " text-orange-600" : " text-black"
            }`}
          >
            CATEGORY
          </div>
          <IoIosArrowDown
            size={25}
            className={`transition-transform duration-500 ${
              isOpen ? "rotate-180 text-orange-600" : "rotate-0 text-gray-500"
            }`}
          />
        </div>

        {/* CATEGORY content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="category-content"
              initial="closed"
              animate="open"
              exit="closed"
              variants={dropdownVariants}
              className="mt-3 overflow-hidden"
            >
              {categories.map((category, index) => {
                const isCatOpen = openCategory === index;

                return (
                  <div key={category.name}>
                    {/* หมวดหลัก */}
                    <div
                      onClick={() => setOpenCategory(isCatOpen ? null : index)}
                      className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100  border-t border-gray-300"
                    >
                      <div className="flex items-center gap-2 text-gray-800 font-medium my-1">
                        <div
                          className={
                            isCatOpen ? "text-orange-600" : "text-gray-400"
                          }
                        >
                          {category.icon}
                        </div>
                        <span
                          className={
                            isCatOpen ? "text-orange-600" : "text-gray-800"
                          }
                        >
                          {category.name}
                        </span>
                      </div>
                      <IoIosArrowDown
                        size={18}
                        className={`transition-transform duration-500 ${
                          isCatOpen
                            ? "rotate-180 text-orange-600"
                            : "text-gray-500"
                        }`}
                      />
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
                            const isChecked = selected.includes(item.name);
                            return (
                              <div
                                key={item.name}
                                className="flex items-center justify-between "
                              >
                                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleSelect(item.name)}
                                    className="peer hidden"
                                  />
                                  <span className="w-4 h-4 border border-gray-400 flex items-center justify-center peer-checked:bg-orange-600 peer-checked:border-orange-600 transition-colors duration-200">
                                    {isChecked && (
                                      <div>
                                        <IoIosCheckmark
                                          size={25}
                                          className="text-white"
                                        />
                                      </div>
                                    )}
                                  </span>
                                  <span>{item.name}</span>
                                </label>
                                <span className={"text-sm text-gray-500"}>
                                  {item.count}
                                </span>
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

      {/* TOOLS */}
      <div className="w-full py-5 border border-t-0 border-gray-300 ">
        {/* Tools header */}
        <div
          className="flex items-center justify-between mx-4 cursor-pointer"
          onClick={() => setIsToolsOpen((prev) => !prev)}
        >
          <div
            className={`font-semibold ${
              isToolsOpen ? " text-orange-600" : " text-black"
            }`}
          >
            TOOLS
          </div>
          <IoIosArrowDown
            size={25}
            className={`transition-transform duration-500 ${
              isToolsOpen
                ? "rotate-180 text-orange-600"
                : "rotate-0 text-gray-500"
            }`}
          />
        </div>

        {/* TOOLS content */}
        <AnimatePresence initial={false}>
          {isToolsOpen && (
            <motion.div
              key="tools-content"
              initial="closed"
              animate="open"
              exit="closed"
              variants={dropdownVariants}
              className="mt-3 overflow-hidden"
            >
              {tools.map((tool, index) => {
                return (
                  //หมวดย่อย     
                  <AnimatePresence initial={false} key={index}>
                    <motion.div
                      key={`sub-${tool.name}`}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={dropdownVariants}
                      className="mx-4 my-2 space-y-2 overflow-hidden "
                    >
                      {tool.subcategories.map((item) => {
                        const isChecked = selected.includes(item.name);
                        return (
                          <div
                            key={item.name}
                            className="flex items-center justify-between "
                          >
                            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleSelect(item.name)}
                                className="peer hidden"
                              />
                              <span className="w-4 h-4 border border-gray-400 flex items-center justify-center peer-checked:bg-orange-600 peer-checked:border-orange-600 transition-colors duration-200">
                                {isChecked && (
                                  <div>
                                    <IoIosCheckmark
                                      size={25}
                                      className="text-white"
                                    />
                                  </div>
                                )}
                              </span>
                              <span>{item.name}</span>
                            </label>
                            <span className={"text-sm text-gray-500"}>
                              {item.count}
                            </span>
                          </div>
                        );
                      })}
                    </motion.div>
                  </AnimatePresence>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Selection;
