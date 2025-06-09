"use client";
import React from "react";
import { BsSliders2Vertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import Selection from "@/component/enrolled/Selection";
import CourseCard from "@/component/enrolled/EnrolleCard";

type StatusType = "launch" | "continue";
interface Course {
  image: string;
  title: string;
  subtitle: string;
  progress: number;
  status: StatusType;
}

const Enrolled = () => {
  const courses:Course[] = [
    {
      image: "https://media.istockphoto.com/id/2148178472/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.jpg?s=2048x2048&w=is&k=20&c=ctLv1xb0xung-6_15W36vA4fR_59yqpVF0rMppp2KE8=",
      title: "Reiki Level I, II and Master/Teacher Program",
      subtitle: "1. Introductions",
      progress: 0,
      status: "launch",
    },
    {
      image: "https://media.istockphoto.com/id/2148532343/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/woman-programmer-engaged-in-coding-at-desk.jpg?s=2048x2048&w=is&k=20&c=BlpozZJh3uKQCHWnQ7XlviTof3KG_OomYt8ryhrxlE0=",
      title: "The Complete 2021 Web Development Bootcamp",
      subtitle: "2. What You’ll Need to Get Started",
      progress: 61,
      status: "continue",
    },
    {
      image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg",
      title: "Reiki Level I, II and Master/Teacher Program",
      subtitle: "1. Introductions",
      progress: 0,
      status: "launch",
    },
    {
      image: "https://cdn.pixabay.com/photo/2023/02/05/16/45/green-cabbage-7769954_1280.jpg",
      title: "The Complete 2021 Web Development Bootcamp",
      subtitle: "2. What You’ll Need to Get Started",
      progress: 61,
      status: "continue",
    },
    {
      image: "https://cdn.pixabay.com/photo/2017/04/05/10/59/pumpkins-2204643_640.jpg",
      title: "Reiki Level I, II and Master/Teacher Program",
      subtitle: "1. Introductions",
      progress: 0,
      status: "launch",
    },
    {
      image: "https://cdn.pixabay.com/photo/2023/09/26/20/05/tomatoes-8278168_1280.jpg",
      title: "The Complete 2021 Web Development Bootcamp",
      subtitle: "2. What You’ll Need to Get Started",
      progress: 61,
      status: "continue",
    },
    {
      image: "https://cdn.pixabay.com/photo/2023/02/06/17/34/lentils-7772450_1280.jpg",
      title: "Reiki Level I, II and Master/Teacher Program",
      subtitle: "1. Introductions",
      progress: 0,
      status: "launch",
    },
    {
      image: "https://cdn.pixabay.com/photo/2023/09/27/02/39/pumpkin-8278499_1280.jpg",
      title: "The Complete 2021 Web Development Bootcamp",
      subtitle: "2. What You’ll Need to Get Started",
      progress: 61,
      status: "continue",
    },
    {
      image: "https://cdn.pixabay.com/photo/2023/05/03/13/25/pasta-7967719_1280.jpg",
      title: "Reiki Level I, II and Master/Teacher Program",
      subtitle: "1. Introductions",
      progress: 0,
      status: "launch",
    },
    {
      image: "https://cdn.pixabay.com/photo/2020/05/10/14/25/fresh-pasta-5154229_1280.jpg",
      title: "The Complete 2021 Web Development Bootcamp",
      subtitle: "2. What You’ll Need to Get Started",
      progress: 61,
      status: "continue",
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/30/20/20/noodles-1631935_1280.jpg",
      title: "Reiki Level I, II and Master/Teacher Program",
      subtitle: "1. Introductions",
      progress: 0,
      status: "launch",
    },
    {
      image: "https://media.istockphoto.com/id/2148178472/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.jpg?s=2048x2048&w=is&k=20&c=ctLv1xb0xung-6_15W36vA4fR_59yqpVF0rMppp2KE8=",
      title: "The Complete 2021 Web Development Bootcamp",
      subtitle: "2. What You’ll Need to Get Started",
      progress: 61,
      status: "continue",
    },
    {
      image: "https://media.istockphoto.com/id/2148178472/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.jpg?s=2048x2048&w=is&k=20&c=ctLv1xb0xung-6_15W36vA4fR_59yqpVF0rMppp2KE8=",
      title: "Reiki Level I, II and Master/Teacher Program",
      subtitle: "1. Introductions",
      progress: 0,
      status: "launch",
    },
    {
      image: "https://media.istockphoto.com/id/2148178472/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.jpg?s=2048x2048&w=is&k=20&c=ctLv1xb0xung-6_15W36vA4fR_59yqpVF0rMppp2KE8=",
      title: "The Complete 2021 Web Development Bootcamp",
      subtitle: "2. What You’ll Need to Get Started",
      progress: 61,
      status: "continue",
    },
    {
      image: "https://media.istockphoto.com/id/2148178472/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.jpg?s=2048x2048&w=is&k=20&c=ctLv1xb0xung-6_15W36vA4fR_59yqpVF0rMppp2KE8=",
      title: "Reiki Level I, II and Master/Teacher Program",
      subtitle: "1. Introductions",
      progress: 0,
      status: "launch",
    },
    {
      image: "https://media.istockphoto.com/id/2148178472/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.jpg?s=2048x2048&w=is&k=20&c=ctLv1xb0xung-6_15W36vA4fR_59yqpVF0rMppp2KE8=",
      title: "The Complete 2021 Web Development Bootcamp",
      subtitle: "2. What You’ll Need to Get Started",
      progress: 61,
      status: "continue",
    },
    
  ];
  return (
    <div className="h-screen p-5">
      {/* header */}
      <div className="border-b border-gray-300">
        {/* one */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Filter box */}
          <div className="flex items-center gap-3 border border-gray-300 px-4 py-2 text-orange-600 hover:border-orange-600 w-full sm:w-auto">
            <BsSliders2Vertical size={20} />
            <span>Filter</span>
            <span className="text-white bg-orange-600 px-2 ">3</span>
          </div>

          {/* Sort by */}
          <div className="flex items-center gap-3 text-gray-500 w-full sm:w-auto ">
            <span className="text-sm">Sort by:</span>
            <div className="relative flex items-center border border-gray-300 py-1 w-full sm:w-auto cursor-pointer">
              <select className="appearance-none pr-8 pl-4 py-1 w-full sm:w-auto text-md focus:outline-none mr-10 cursor-pointer">
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
              </select>
              {/* custom arrow */}
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>

        {/* two */}
        <div className="flex items-center justify-between">
          <div className="w-full my-2 lg:flex items-center justify-between space-x-2 text-sm sm:inline-block">
            <div className="flex gap-2">
              <div >
                <span className="text-gray-700">Suggestion:</span>
              </div>
              <span className="text-orange-600 ">user interface</span>
              <span className="text-orange-600">user experience</span>
              <span className="text-orange-600">web design</span>
              <span className="text-orange-600">interface</span>
              <span className="text-orange-600">app</span>
            </div>
            {/* search detail total */}
            <div>
              <span className="pr-1">2,400</span>
              <span className="text-gray-600">result find for "ui/ux design"</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* content */}
      <div>
        <div className="flex mt-5">
          {/* Left */}
          <div className="2xl:basis-[15%] lg:basis-[20%]">
            <Selection/>
          </div>

          {/* Right */}
          <div className="2xl:basis-[85%] lg:basis-[80%] ml-2 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 mb-5">
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  progress={course.progress}
                  status={course.status}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrolled;
