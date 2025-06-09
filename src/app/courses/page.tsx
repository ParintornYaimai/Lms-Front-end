"use client";
import CourseCard from "@/component/courses/CourseCard";
import React from "react";
import { PiPlayCircleDuotone } from "react-icons/pi";
import { AiOutlineFileDone } from "react-icons/ai";
import { PiTrophyDuotone } from "react-icons/pi";

type StatusType = "launch" | "continue";
interface Course {
  image: string;
  title: string;
  subtitle: string;
  progress: number;
  status: StatusType;
}

const Page = () => {
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
    <div className="h-auto">
      <div>
        <div className="max-w-6xl mx-auto my-6 mb-2">
          {/* Statistic Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center justify-start gap-2 bg-orange-100 p-6">
              <div className="flex items-center justify-center bg-white  h-15 w-15 ">
                <PiPlayCircleDuotone size={30} className="text-orange-600"/>
              </div>
              <div>
                <div className="text-orange-700 text-3xl font-semibold">957</div>
                <div className="text-gray-600">Enrolled Courses</div>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 bg-purple-100 text-purple-700 p-6 ">
              <div className="flex items-center justify-center bg-white h-15 w-15">
                <AiOutlineFileDone size={30} className="text-purple-700"/>
              </div>
              <div>
                <div className="text-3xl font-semibold">6</div>
                <div className="text-gray-600">Active Courses</div>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 bg-green-100  p-6 ">
              <div className="flex items-center justify-center bg-white h-15 w-15">
                <PiTrophyDuotone size={30} className="text-green-600"/>
              </div>
              <div>
                <div className="text-3xl text-green-700 font-semibold">951</div>
                <div className="text-gray-600">Completed Courses</div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div>
        <div className="mx-7 p-1 h-[calc(100vh-210px)] overflow-y-auto overflow-x-hidden no-scrollbar ">
          {/* Course Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6 mb-1">
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
  );
};

export default Page;
