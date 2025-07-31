"use client";
import AssignmentCard from "@/component/teacher/assignment/AssignmentCard";
import Preview from "@/component/teacher/assignment/Preview";
import SelectCourse from "@/component/teacher/assignment/SelectCourse";
import SelectSubject from "@/component/teacher/assignment/SelectSubject";
import Sepecification from "@/component/teacher/assignment/Sepecification";
import { create } from "@/services/assignment";
import { getAllAssignment } from "@/services/teacher/assignmentService";
import { AssignmentItem } from "@/types/teacher/assignmentType";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [isActive, setIsActive] = useState("Scheduled Course");
  const [step, setStep] = useState<
    "none" | "SelectCourse" | "SelectSub" | "Sepecification" | "Preview"
  >("none");
  const [allAssignment, setAllAssignment] = useState<AssignmentItem[]>(); //เก็บ assignment ทั้งหมด

  const [selectCourse, setSelectCourse] = useState<string>('')
  const [selectSubJectCourse, setSelectSubJectCourse] = useState<string>('')

  const [passPercentage, setPassPercentage] = useState(50);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const [confirm, setConfirm] = useState<string>('')

  //ดึง assignment ทั้งหมด
  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const response = await getAllAssignment();
        setAllAssignment(response.data);
      } catch (error: any) {
        toast.error(error);
      }
    };

    fetchAssignment();
  }, []);

  //create Assignment
  useEffect(()=>{
    const createAssignment=async()=>{
      try {
        const response = await create();

        console.log('response',response)
      } catch (error:any) {
        toast.error(error)
      }
    }

    createAssignment()
  },[])


  return (
    <>
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
              Scheduled Assignment
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
            onClick={() => setStep("SelectCourse")}
          >
            + Add Assignment
          </button>
        </div>
        <div className="lg:mx-2 lg:my-5 2xl:m-5">
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xl:gap-2 2xl:gap-3">
            <AssignmentCard allAssignment={allAssignment} />
          </div>
        </div>
      </div>

      {step === "SelectCourse" && (
        <SelectCourse
          onNext={() => setStep("SelectSub")}
          onClose={() => setStep("none")}
          setSelectCourse={setSelectCourse}
        />
      )}
      {step === "SelectSub" && (
        <SelectSubject
          onNext={() => setStep("Sepecification")}
          onClose={() => setStep("SelectCourse")}
          onBack={() => setStep("none")}
          setSelectSubJectCourse={setSelectSubJectCourse}
        />
      )}
      {step === "Sepecification" && (
        <Sepecification
          onNext={() => setStep("Preview")}
          onClose={() => setStep("SelectSub")}
          onBack={() => setStep("none")}
          setPassPercentage={setPassPercentage}
          setSelectedDate={setSelectedDate}
          setSelectedTime={setSelectedTime}
          setUploadedFiles={setUploadedFiles}
          uploadedFiles={uploadedFiles}
          selectedTime={selectedTime}
          selectedDate={selectedDate}
          passPercentage={passPercentage}
        />
      )}
      {step === "Preview" && (
        <Preview
          onNext={() => setStep("none")}
          onClose={() => setStep("Sepecification")}
          onBack={() => setStep("none")}
          setConfirm={setConfirm}
        />
      )}
    </>
  );
};

export default Page;
