"use client";
import Advanceinformation from "@/component/teacher/course/Advanceinformation";
import Basicinformation from "@/component/teacher/course/Basicinformation";
import CourseCard from "@/component/teacher/course/CourseCard";
import Curriculum from "@/component/teacher/course/Curriculum";
import PublishCourse from "@/component/teacher/course/PublishCourse";
import React, { useState } from "react";

const Page = () => {
  const [isActive, setIsActive] = useState("Scheduled Course");
  const [step, setStep] = useState<
    "none" | "basic" | "advance" | "curriculum" | "publish"
  >("curriculum");

  return (
    <>
      {step === "none" && (
        <div className="mt-1">
          <div className="flex items-center justify-between px-5 border-b border-gray-200 ">
            <div className="flex items-center justify-start mt-2 gap-2">
              <h1
                className={`text-md font-semibold p-2 cursor-pointer ${
                  isActive === "Scheduled Course"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-400"
                }`}
                onClick={() => setIsActive("Scheduled Course")}
              >
                Scheduled Course
              </h1>
              <h1
                className={`text-md font-semibold p-2 cursor-pointer ${
                  isActive === "History"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-400"
                }`}
                onClick={() => setIsActive("History")}
              >
                History
              </h1>
            </div>
            <button
              className="px-4 py-2 cursor-pointer text-white bg-orange-600 rounded"
              onClick={() => setStep("basic")}
            >
              + Create Course
            </button>
          </div>
          <div className="lg:mx-2 lg:my-5 2xl:m-5">
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xl:gap-2 2xl:gap-3">
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
      )}
      {step === "basic" && (
        <Basicinformation
          step={step}
          goToNextStep={() => setStep("advance")}
          returnTo={() => setStep("none")}
        />
      )}
      {step === "advance" && (
        <Advanceinformation
          goToNextStep={() => setStep("curriculum")}
          step={step}
          returnTo={() => setStep("basic")}
        />
      )}
      {step === "curriculum" && (
        <Curriculum
          goToNextStep={() => setStep("publish")}
          step={step}
          returnTo={() => setStep("advance")}
        />
      )}
      {step === "publish" && <PublishCourse step={step} />}
    </>
  );
};

export default Page;
