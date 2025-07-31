"use client";
import React, { useEffect, useState } from "react";
import Detail from "@/component/teacher/assignment/Detail";
import Result from "@/component/teacher/assignment/Result";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import {
  fetchAssignmentById,
  result,
} from "@/services/teacher/assignmentService";
import { AssignmentDetail, SubmissionData } from "@/types/teacher/assignmentType";

const Page = () => {
  const params = useParams();
  const assignmentId = params?.assignmentId; // รับ id จาก URL
  const [mode, setMode] = useState<"detail" | "result">("detail");
  const [assignment, setAssignment] = useState<AssignmentDetail | undefined>();
  const [submitted, setSubmitted] = useState<SubmissionData | undefined>()
  const [tigger,setTigger] = useState<number>(0)

  useEffect(() => {
    if (!assignmentId) return;
    const fetchAssignment = async () => {
      try {
        const response = await fetchAssignmentById(assignmentId as string);

        setAssignment(response.data);
      } catch (error: any) {
        toast.error(error);
      }
    };

    fetchAssignment();
  }, []);

  useEffect(() => {
    if (mode !== "result" || !assignment?._id) return;

    const fetchResult = async () => {
      try {
        const response = await result(assignment._id);
        setSubmitted(response.data);
      } catch (error: any) {
        toast.error(error.message || "Failed to fetch result");
      }
    };

    fetchResult();
  }, [mode, assignment?._id]);

  const handleSavePoint=()=>{
    setTigger((prev)=>prev+1)
  }
  
  return (
    <div className="m-5">
      <div>
        <h1 className="text-2xl">{assignment?.title}</h1>
        <div className="mt-5">
          {/* mode button */}
          <div className="flex items-center justify-between my-5">
            <div>
              <button
                className={`px-10 py-2 bg-gray-200 rounded cursor-pointer ${
                  mode === "detail" && "bg-orange-600 text-white"
                }`}
                onClick={() => setMode("detail")}
              >
                Details
              </button>
              <button
                className={`px-10 py-2 bg-gray-200 rounded cursor-pointer ${
                  mode === "result" && "bg-orange-600 text-white"
                }`}
                onClick={() => setMode("result")}
              >
                Result
              </button>
            </div>
            {mode === "result" && (
              <div>
                <button
                  className={`px-10 py-2 bg-gray-200 rounded cursor-pointer ${
                    mode === "result" && "bg-orange-600 text-white"
                  }`}
                  onClick={() => handleSavePoint()}
                >
                  Publish result
                </button>
              </div>
            )}
          </div>
          {/* content */}
          {mode === "detail" ? <Detail assignment={assignment} /> : <Result  submitted={submitted} totalMask={assignment?.totalmark} tigger={tigger} assignmentId={assignmentId}/>}
        </div>
      </div>
    </div>
  );
};

export default Page;
