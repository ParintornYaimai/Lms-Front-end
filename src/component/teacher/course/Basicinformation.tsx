"use client";
import React, { useState, useEffect  } from "react";
import Header from "./Header";
import toast from "react-hot-toast";
import { getCategory, getSubCategory } from "@/services/categoryService";
import { Category, CategoryResponse, SubCategory } from "@/types/categoryType";
import { BasicInfoType } from "@/types/teacher/courseType";



type Props = {
  step: string;
  goToNextStep: () => void;
  returnTo: () => void;
  setData: (value:BasicInfoType)=> void; //ส่งข้อมูลไปคอมโพเน้นเเม่
};

const Basicinformation = ({ step, goToNextStep, returnTo, setData }: Props) => {
  const [filledCountBasic, setFilledCountBasic] = useState<number>(0); //เก็บนับจำนวนช่องที่กรอกเเล้ว
  const [unfilledCountBasic, setUnfilledCountBasic] = useState<number>(0); //เก็บนับจำนวนช่องที่ยังไม่กรอกเเล้ว
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [category, setCategory] = useState<Category[]>() // เก็บ category ที่ได้มาจาก api
  const [selectcategory, setSelectCategory] = useState<string>(""); //เก็บ category ที่เลือก
  const [selectCategoryId, setSelectCategoryId] = useState<string>("") //เก็บ Id ขอ Category เพื่อให้หา SubCategory
  const [subjectCategory, setSubjectCategory] = useState<SubCategory[]>(); //เก็บ SubCategory ที่ได้มาจาก api
  const [selectSubjectCategory, setSelectSubjectCategory] = useState<string>(""); // เก็บ subcategory ที่เลือก
  const [topic, setTopic] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [subtitleLanguage, setSubtitleLanguage] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [duration, setDuration] = useState<number >(0);
  const [durationUnit, setDurationUnit] = useState<string>("");

  
  // ตรวจข้อมูล
  const isFormValid = () => {
    return (
      title.trim() !== "" &&
      subtitle.trim() !== "" &&
      selectcategory !== "" &&
      selectSubjectCategory !== "" &&
      topic.trim() !== "" &&
      language !== "" &&
      subtitleLanguage !== "" &&
      level !== "" &&
      duration !== 0 &&
      durationUnit !== "" 
    );
  };

  // ไปหน้าถัดไป
  const handleNextStep = () => {
    if(isFormValid()){
      goToNextStep();
    }else{
      alert("กรุณากรอกข้อมูลให้ครบถ้วนทุกช่องที่จำเป็น");
    }
  };

  // จัดการข้อมูลจากช่องเเละนับข้อมูลที่กรอกเเล้วเเละยังไม่ได้กรอก
  const getFieldCounts = () => {
    const fields = [
      title.trim(),
      subtitle.trim(),
      selectcategory !== "Select..." ? selectcategory : "",
      selectSubjectCategory !== "Select..." ? selectSubjectCategory : "",
      topic.trim(),
      language !== "Select..." ? language : "",
      subtitleLanguage !== "Select..." ? subtitleLanguage : "",
      level !== "Select..." ? level : "",
      duration,
      durationUnit,
    ];

    const filled = fields.filter((value) => value !== "").length;
    const total = fields.length;

    return { filled, total };
  };

  // นับจำนวนช่องที่กรอกข้อมูลเเล้ว
  useEffect(() => {
    const { filled, total } = getFieldCounts();
    setFilledCountBasic(Number(filled));
    setUnfilledCountBasic(Number(total));
    }, [
      title,
      subtitle,
      selectcategory,
      selectSubjectCategory,
      topic,
      language,
      subtitleLanguage,
      level,
      duration,
      durationUnit,
  ]);

  // ดึง category 
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data: CategoryResponse = await getCategory();
        const filtered = data.data.filter(cat => cat.name.toLowerCase() !== "all");

        setCategory(filtered);
      } catch (error: any) {
        toast.error(error.message || "Something went wrong");
      }
    };
    fetchCategory();
  }, []);

  // ดึง subCategory จาก CategoryId
  useEffect(()=>{
    setSubjectCategory([]);
    const fetchSubCategory = async()=>{
      try {
        const data = await getSubCategory(selectCategoryId);
        setSubjectCategory(data.data)
      } catch (error: any) {
        toast.error(error.message || "Something went wrong");
      }
    }
    fetchSubCategory()
  },[selectCategoryId])

  // ส่งข้อมูลไปที่คอมโพเน้นเเม่
  const handleSendData = ()=>{
    const basicInfo:BasicInfoType ={
      title,
      subtitle,
      coursecate:selectCategoryId,
      coursesubjectcate:selectSubjectCategory,
      coursetopic:topic,
      courselanguage:language,
      subtitlelanguage:subtitleLanguage,
      courselevel:level,
      duration,
      durationUnit
    }

    setData(basicInfo); 
  };

  return (
    <div>
      <Header step={step} filledCountBasic={filledCountBasic} totalInputsBasic={unfilledCountBasic}/>
      <div>
        <div>
          <div className="mx-5">
            <div className="grid grid-cols-1 gap-6 p-2 xl:space-y-4  2xl:space-y-10">
              <div>
                <label className="block font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  placeholder="You course title"
                  maxLength={80}
                  className="mt-1 w-full border border-gray-300 px-3 py-2 focus:outline-none "
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Subtitle
                </label>
                <input
                  type="text"
                  placeholder="You course subtitle"
                  maxLength={120}
                  className="mt-1 w-full border border-gray-300 px-3 py-2 focus:outline-none"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-gray-700">
                    Course Category
                  </label>
                  <select
                    className="mt-1 w-full border border-gray-300 px-3 py-2 bg-white focus:outline-none text-gray-500 cursor-pointer"
                    value={selectcategory}
                    onChange={(e) => {
                      const selectedName = e.target.value;
                      setSelectCategory(selectedName); 

                      const selectedObj = category?.find(cat => cat.name === selectedName);
                      selectedObj ? setSelectCategoryId(selectedObj._id) : setSelectCategoryId("")
                    }}
                  >
                    <option value="" disabled hidden>Select...</option>
                    {
                      category?.map((categories)=>{
                        return(
                          <option key={categories._id} value={categories.name}>{categories.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Course Subject-category
                  </label>
                  <select
                    className="mt-1 w-full border border-gray-300 px-3 py-2 bg-white focus:outline-none text-gray-500 cursor-pointer" 
                    value={selectSubjectCategory}
                    onChange={(e) => setSelectSubjectCategory(e.target.value)}
                  >
                    <option value="" disabled hidden>Select...</option>
                    {
                      subjectCategory?.map((subjectCategories)=>{
                        return(
                          <option key={subjectCategories._id} value={subjectCategories._id}>{subjectCategories.name}</option>
                        )
                      })
                    }
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Course Topic
                </label>
                <input
                  type="text"
                  placeholder="What is primarily taught in your course?"
                  className="mt-1 w-full border border-gray-300  px-3 py-2 focus:outline-none"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block font-medium text-gray-700">
                    Course Language
                  </label>
                  <select
                    className="mt-1 w-full border border-gray-300  px-3 py-2 bg-white focus:outline-none text-gray-500"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option>Select...</option>
                    <option value="english">English</option>
                    <option value="thai">Thai</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Subtitle Language (Optional)
                  </label>
                  <select
                    className="mt-1 w-full border border-gray-300  px-3 py-2 bg-white focus:outline-none text-gray-500"
                    value={subtitleLanguage}
                    onChange={(e) => setSubtitleLanguage(e.target.value)}
                  >
                    <option>Select...</option>
                    <option value="english">English</option>
                    <option value="thai">Thai</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Course Level
                  </label>
                  <select
                    className="mt-1 w-full border border-gray-300  px-3 py-2 bg-white focus:outline-none text-gray-500"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option>Select...</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Durations
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Course durations"
                      className="mt-1 w-full border border-gray-300  px-3 py-1 focus:outline-none"
                      value={duration === 0 ? "" : duration.toString()}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === "") {
                          setDuration(0); 
                        } else {
                          const num = Number(val);
                          if (!isNaN(num)) {
                            setDuration(num);
                          }
                        }
                      }}
                    />
                    <select
                      className="mt-1 w-24 border border-gray-300  px-3 py-2 bg-white focus:outline-none cursor-pointer"
                      value={durationUnit}
                      onChange={(e) => setDurationUnit(e.target.value)}
                    >
                      <option>Day</option>
                      <option>Week</option>
                      <option>Month</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  className="px-5 py-2 border border-gray-300  text-gray-600 hover:bg-gray-100 cursor-pointer"
                  onClick={returnTo}
                >
                  Cancel
                </button>
                <button
                  className={`px-6 py-2 text-white cursor-pointer ${
                    isFormValid()
                      ? "bg-orange-600 hover:bg-orange-700"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  onClick={()=>{handleNextStep(), handleSendData()}}
                  disabled={!isFormValid()}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basicinformation;
