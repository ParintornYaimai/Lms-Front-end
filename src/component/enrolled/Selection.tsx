import React, { useEffect, useState } from "react";
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
import toast from "react-hot-toast";
import { getCategory, getSubCategory } from "@/services/categoryService";
import { Category, CategoryResponse } from "@/types/categoryType";
import { LuLanguages } from "react-icons/lu";
import { GiMaterialsScience } from "react-icons/gi";
import { TbBrandSpeedtest } from "react-icons/tb";

type Props={
  onSendData:(filter:string[])=> void;
}

const Selection = ({onSendData}: Props) => {
  const [isOpen, setIsOpen] = useState(true); //CATEGORY
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [category,setCategory] = useState<Category[]>()
  const [subcategoriesMap, setSubcategoriesMap] = useState<Record<string, Category[]>>({});

  const categories = [
    {
      name: "Development",
      icon: <PiCpu size={25} />,
    },
    {
      name: "Business",
      icon: <LiaHandshakeSolid size={25} />,
    },
    {
      name: "Finance & Accounting",
      icon: <GoCreditCard size={25} />,
    },
    {
      name: "IT & Software",
      icon: <VscGraph size={25} />,
    },
    {
      name: "Office Productivity",
      icon: <PiBugDroid size={25} />,
    },
    {
      name: "Personal Development",
      icon: <PiNewspaperClippingLight size={25} />,
    },
    {
      name: "Design",
      icon: <LuPenTool size={25} />,
    },
    {
      name: "Marketing",
      icon: <PiMegaphoneSimple size={25} />,
    },
    {
      name: "Lifestyle",
      icon: <BsBoxSeam size={25} />,
    },
    {
      name: "Photography & Video",
      icon: <MdOutlineCameraAlt size={25} />,
    },
    {
      name: "Music",
      icon: <TfiHeadphoneAlt size={25} />,
    },
    {
      name: "Health & Fitness",
      icon: <AiOutlineMedicineBox size={25} />,
    },
    {
      name: "Language",
      icon: <LuLanguages size={25} />,
    },
    {
      name: "Test Preparation",
      icon: <TbBrandSpeedtest size={25} />,
    },
    {
      name: "Science & Engineering",
      icon: <GiMaterialsScience  size={25} />,
    }
  ];


  // ดึง category
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data: CategoryResponse = await getCategory();
        const filtered = data.data.filter(cat => cat.name.toLowerCase() !== "all");

        // เพิ่ม icon ให้แต่ละ category ที่ดึงมาจาก API
        const mappedWithIcons = filtered.map(cat => {
          const matched = categories.find(c => c.name.toLowerCase() === cat.name.toLowerCase());
          return {
            ...cat,
            icon: matched?.icon || null, // กำหนด icon ถ้ามี match
          };
        });
        setCategory(mappedWithIcons);
      } catch (error: any) {
        toast.error(error.message || "Something went wrong");
      }
    };

    fetchCategory();
  }, []);
  
  //ดึง subcategory เเล้วเก็บเป็น mapobj
  const fetchSubCategory = async (categoryId: string) => {
    try {
      const data: CategoryResponse = await getSubCategory(categoryId);
      setSubcategoriesMap((prev) => ({
        ...prev,
        [categoryId]: data.data,
      }));
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    }
  };
  
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
  
  useEffect(()=>{
    onSendData(selected)
  },[selected])
  
  return (
    <>
      {/* CATEGORY */}
      <div className="w-full  border border-gray-300">
        {/* CATEGORY header */}
        <div
          className="flex items-center justify-between mx-4 cursor-pointer py-5"
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
              className=" overflow-hidden"
            >
              {category?.map((item, index) => {
                const isCatOpen = openCategory === index;
                return (
                  <div key={item.name} >
                    {/* หมวดหลัก */}
                    <div
                      onClick={() => {
                       const isCurrentlyOpen = openCategory === index;
                        const newOpenIndex = isCurrentlyOpen ? null : index;
                        setOpenCategory(newOpenIndex);

                        // ถ้ายังไม่เคยโหลด subcategory ของหมวดนี้ ให้โหลด
                        if (!isCurrentlyOpen && !subcategoriesMap[item._id]) {
                          fetchSubCategory(item._id);
                        }
                      }}
                      className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100  border-t border-gray-200"
                      
                    >
                      <div className="flex items-center gap-2 text-gray-800 font-medium my-1">
                        <div
                          className={
                            isCatOpen ? "text-orange-600" : "text-gray-400"
                          }
                        >
                          {item.icon}
                        </div>
                        <span
                          className={
                            isCatOpen ? "text-orange-600" : "text-gray-800"
                          }
                        >
                          {item.name}
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
                          key={`sub-${item.name}`}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={dropdownVariants}
                          className="mx-4 my-2 space-y-2 overflow-hidden "
                        >
                          {subcategoriesMap[item._id]?.map((subItem) => {
                            const isChecked = selected.includes(subItem._id);
                            return (
                              <div key={subItem.name} className="flex items-center justify-between">
                                <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleSelect(subItem._id)}
                                    className="peer hidden"
                                  />
                                  <span className="w-4 h-4 border border-gray-400 flex items-center justify-center peer-checked:bg-orange-600 peer-checked:border-orange-600 transition-colors duration-200">
                                    {isChecked && <IoIosCheckmark size={25} className="text-white" />}
                                  </span>
                                  <span>{subItem.name}</span>
                                </label>
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
      <div className="w-full  border border-t-0 border-gray-300 ">
        {/* Tools header */}
        <div
          className="flex items-center justify-between mx-4 cursor-pointer"
          onClick={() => setIsToolsOpen((prev) => !prev)}
        >
          <div
            className={`font-semibold py-5 ${
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
              className="overflow-hidden"
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
                      className="px-4 py-2 space-y-2 overflow-hidden "
                    >
                      {tool.subcategories.map((item) => {
                        const isChecked = selected.includes(item.name);
                        return (
                          <div
                            key={item.name}
                            className="flex items-center justify-between"
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
