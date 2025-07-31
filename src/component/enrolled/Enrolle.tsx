import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import Curriculum from "./Curriculum";
import { FaRegFolderOpen } from "react-icons/fa";
import { FiPlayCircle } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import {
  Category,
  CourseCRM,
  SubCategory,
  Teacher,
  Thumbnail,
} from "@/types/enrolleType";
import toast from "react-hot-toast";
import { FeedbackAggregation, FeedbackResponse } from "@/types/feedbackType";
import { createFeedback, getAllfeedback } from "@/services/feedbackService";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useFile } from "@/hooks/useFile";
import { disconnectSocket, initiateSocketConnection } from "@/services/socket";
import { useAuthStore } from "@/store/authStore";

interface Props {
  course: {
    _id: string;
    title: string;
    subtitle: string;
    coursecate: Category;
    coursesubjectcate: SubCategory;
    coursetopic: string;
    duration: string; // ISO date string
    thumbnailurl: Thumbnail[];
    coursematerial: string;
    mainpoint: string[];
    coursereq: string[];
    whatyouwillteachincourse: string[];
    whothiscourseisfor: string[];
    subtitlelanguage: string;
    courselanguage: string;
    courselevel: string;
    coursecrm: CourseCRM[];
    createby: Teacher;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    __v: number;
  };
}

const AuthorProfilePicture = ({ fileId }: { fileId?: string }) => {
  const { url } = useFile(fileId ?? "");
  if (!url) return null;
  return (
    <div className="lg:w-10 lg:h-10 relative rounded-full overflow-hidden md:h-9 md:w-9 border border-gray-300">
      <Image
        src={url}
        alt="Profile Picture"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL="/images/profile-blur.jpg"
      />
    </div>
  );
};

const Enrolle = ({ course }: Props) => {
  const [mode, setMode] = useState<
    "overview" | "curriculum" | "instructor" | "review"
  >("overview");
  const [sortByRating, setSortByRating] = useState<string>(""); // sortData value
  const [rating, setRating] = useState<number>(5);
  const [feetback, setFeetback] = useState<FeedbackAggregation[]>([]);
  const [text, setText] = useState("");
  const overviewRef = useRef<HTMLDivElement>(null);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const instructorRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  dayjs.extend(relativeTime);

  const userId = useAuthStore((state) => state.user?.id);

  // เลื่อนหน้าจอจาก mode
  useEffect(() => {
    const refs = {
      overview: overviewRef,
      curriculum: curriculumRef,
      instructor: instructorRef,
      review: reviewRef,
    };

    const targetRef = refs[mode as keyof typeof refs];
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [mode]);

  //ดึงรูป
  const { url, loading, error } = useFile(course.thumbnailurl[0].fileId);

  // ดึงคอมเม้น
  useEffect(() => {
    const fetchFeetback = async () => {
      if (!course?._id) return;
      try {
        const data: FeedbackResponse = await getAllfeedback(course._id);
        setFeetback(data.data || []);
      } catch (error: any) {
        toast.error(error);
        setFeetback([]);
      }
    };

    fetchFeetback();
  }, [course?._id]);

  const handleCreateFeedback = async () => {
    try {
      const data = await createFeedback(course?._id, rating, text);
      if (data.success) {
        setText("");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  //ต้องเเก้ตรงนี้เรื่องชนิดข้อมูลไม่เหมือนกันหรือยังเเละfeetback ถึงจะ realtime
  useEffect(() => {
    if (!userId) return;
    const socket = initiateSocketConnection(userId);

    // socket.emit("joinRoom", selectChatId.chatId, (response: any) => {
    //   if(response.success) {
    //     console.log("Joined room successfully",response);
    //   } else {
    //     console.error("Failed to join room:", response.message);
    //   }
    // });
    socket.on("feedBack:create", (newFeedback) => {
      setFeetback((prevFeedback) => {

        if(!prevFeedback || prevFeedback.length === 0){
          return [{
            _id: null, 
            feedbacks: [newFeedback],
            totalFeedbacks: 1,
            averageRating: newFeedback.rating
          }];
        }

        return prevFeedback.map((fbItem) => {
          const existingFeedbacks = fbItem.feedbacks || [];
          const newFeedbacks = [newFeedback, ...existingFeedbacks];
          const totalFeedbacks = newFeedbacks.length;
          const averageRating = newFeedbacks.reduce((sum, f) => sum + f.rating, 0) / totalFeedbacks;

          return {
            ...fbItem,
            feedbacks: newFeedbacks,
            totalFeedbacks,
            averageRating,
          };
        });
      });
    });

    return () => {
      disconnectSocket();
    };
  }, [userId, course._id]);

  return (
    <div>
      {/* Title */}
      <div className="m-3">
        <h1 className="lg:text-3xl font-medium 2xl:block line-clamp-2 pb-3 md:text-xl">
          {course.title}
        </h1>
        <p className="lg:text-xl text-gray-500 md:text-sm">{course.subtitle}</p>
      </div>

      {/*Content*/}
      <div className="flex flex-col item-center justify-center m-3">
        {/*Author  */}
        <div className="flex items-center justify-between gap-2">
          <div
            className="flex items-center justify-center gap-2"
            ref={instructorRef}
          >
            <div className="lg:w-15 lg:h-15 relative rounded-full overflow-hidden md:h-9 md:w-9">
              <Image
                src="/user.png"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/images/profile-blur.jpg"
              />
            </div>
            <div className="flex flex-col items-start justify-center md:text-sm">
              <span>Create by:</span>
              <span>
                {course.createby.firstname} {course.createby.lastname} •{" "}
                <span className="text-gray-600">Professor</span>
              </span>
            </div>
          </div>

          {/* rating */}
          {feetback?.map((fbItem) => {
            return (
              <div className="flex items-center gap-2" key={fbItem._id}>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(Math.floor(fbItem.averageRating || 0))].map(
                    (_, i) => (
                      <FaStar key={i} className="text-orange-400" />
                    )
                  )}
                </div>
                <span className="text-gray-600">
                  {fbItem.averageRating
                    ? fbItem.averageRating.toFixed(1)
                    : "0.0"}{" "}
                  ({fbItem.totalFeedbacks || 0} Rating)
                </span>
              </div>
            );
          })}
        </div>

        {/* Picture & Video*/}
        <div className="w-full lg:h-[700px] sm:h-[250px] md:h-[300px] relative  overflow-hidden mt-4 shadow-sm p-10">
          {url ? (
            <Image
              src={url}
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/images/profile-blur.jpg"
            />
          ) : (
            <div className="w-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
              {loading
                ? "Loading..."
                : error
                ? "Error loading image"
                : "No image"}
            </div>
          )}
        </div>

        {/* toggle mode section*/}
        <div className="flex items-center justify-around my-4 border border-gray-200">
          <span
            className={`px-10 py-4 cursor-pointer ${
              mode === "overview" && "border-b-2 border-orange-600"
            }`}
            onClick={() => setMode("overview")}
          >
            Overview
          </span>
          <span
            className={`px-10 py-4 cursor-pointer ${
              mode === "curriculum" && "border-b-2 border-orange-600"
            }`}
            onClick={() => setMode("curriculum")}
          >
            Curriculum
          </span>
          <span
            className={`px-10 py-4 cursor-pointer ${
              mode === "instructor" && "border-b-2 border-orange-600"
            }`}
            onClick={() => setMode("instructor")}
          >
            Instructor
          </span>
          <span
            className={`px-10 py-4 cursor-pointer ${
              mode === "review" && "border-b-2 border-orange-600"
            }`}
            onClick={() => setMode("review")}
          >
            Review
          </span>
        </div>

        {/* Description */}
        <div className="p-1">
          <div className="mb-2">
            <h1 className="text-2xl font-medium">Description</h1>
          </div>
          {/*  coursematerial = Description */}
          <div className="my-2">
            <p className="text-gray-600 text-sm">{course.coursematerial}</p>
          </div>

          <div className="p-4 bg-green-50">
            <h1 className="text-2xl mb-4">
              What you will learn in this course
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-600">
              {course?.whatyouwillteachincourse.map((item, index) => (
                <div className="flex items-start gap-2" key={index}>
                  <div>
                    <BsCheckCircleFill size={20} className="text-green-500" />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who this course is for: */}
          <div className="mt-5 ">
            <div>
              <h1 className="text-2xl ">Who this course is for:</h1>
            </div>
            <div className="my-5 space-y-3 px-2 text-gray-600">
              {course?.whothiscourseisfor.map((item, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <FaArrowRightLong size={20} className="text-orange-600" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course requirements */}
          <div className="mt-5 ">
            <div>
              <h1 className="text-2xl ">Course requirements</h1>
            </div>
            <div className="my-5 space-y-3 px-2 text-gray-600">
              {course?.coursereq.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span>•</span>
                  <p>{item}</p> {/* แสดงข้อมูลจริง */}
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-5">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-medium">Curriculum</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <FaRegFolderOpen size={20} className="text-orange-500" />
                  <span className="text-gray-600">
                    {course.coursecrm.length} sections
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <FiPlayCircle size={20} className="text-blue-600" />
                  <span className="text-gray-600">202 lecture</span>
                </div>
                <div className="flex items-center gap-1">
                  <LuClock3 size={20} className="text-orange-400" />
                  <span className="text-gray-600">19h 32m</span>
                </div>
              </div>
            </div>

            <div ref={curriculumRef}>
              <Curriculum curriculum={course.coursecrm} />
            </div>
          </div>

          {/* Students Feedback  */}
          <div ref={reviewRef}>
            {/* Headder */}
            <div className="flex items-center justify-between mt-5">
              <div>
                <h1 className="text-2xl font-medium">Students Feedback </h1>
              </div>
              <div className="flex items-center gap-3 text-gray-500 w-full sm:w-auto">
                <label className="relative flex items-center border border-gray-300 py-1 w-full sm:w-auto">
                  <select
                    className="appearance-none pr-8 pl-4 py-1 w-full sm:w-auto text-md focus:outline-none bg-transparent cursor-pointer"
                    value={sortByRating}
                    onChange={(e) => setSortByRating(e.target.value)}
                  >
                    <option value="5">5 Star Rating</option>
                    <option value="4">4 Star Rating</option>
                    <option value="3">3 Star Rating</option>
                    <option value="2">2 Star Rating</option>
                    <option value="1">1 Star Rating</option>
                  </select>

                  {/* custom arrow */}
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <IoIosArrowDown />
                  </div>
                </label>
              </div>
            </div>

            {/* Input */}
            <div className="my-2">
              <div className="flex items-center justify-between gap-3">
                {/* Input Field */}
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Write your feedback..."
                    className="w-full rounded-full py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>

                {/* Rating Select */}
                <div className="flex-shrink-0">
                  <select
                    className="appearance-none cursor-pointer border border-gray-300 py-2 px-3 focus:outline-none"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                  >
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>
                </div>

                {/* Post Button */}
                <div className="flex-shrink-0">
                  <button
                    className="rounded-full bg-orange-600 border border-transparent hover:bg-white hover:border-orange-600 ease-in-out duration-300 py-2 px-6 cursor-pointer text-white hover:text-orange-600 font-medium"
                    onClick={handleCreateFeedback}
                  >
                    POST
                  </button>
                </div>
              </div>
            </div>

            {/* content */}
            <div className="mt-5">
              {feetback?.length > 0 ? (
                feetback?.map((fbItem) => {
                  // ตรวจสอบว่ามี feedbacks หรือไม่
                  if (!fbItem.feedbacks || fbItem.feedbacks.length === 0) {
                    return (
                      <div
                        key={fbItem._id}
                        className="text-center py-8 text-gray-500"
                      >
                        No feedback yet. Be the first to share your thoughts!
                      </div>
                    );
                  }

                  return (
                    <div key={fbItem._id}>
                      {fbItem.feedbacks?.map((feedback) => {
                        return (
                          <div
                            className="border-b border-gray-200 mb-5 pb-5"
                            key={feedback._id}
                          >
                            <div className="flex items-center justify-start gap-3">
                              <AuthorProfilePicture
                                fileId={
                                  feedback.studentDetails.profilepicture?.fileId
                                }
                              />
                              <div>
                                <span>
                                  {feedback.studentDetails.firstname}{" "}
                                  {feedback.studentDetails.lastname}
                                  <span className="pl-3 text-xs text-gray-500">
                                    {dayjs(feedback.createdAt).fromNow()}
                                  </span>
                                </span>
                                <div className="flex items-center mt-2">
                                  {[
                                    ...Array(Math.floor(feedback.rating || 0)),
                                  ].map((_, i) => (
                                    <FaStar
                                      key={i}
                                      className="text-orange-400"
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="ml-13 my-2">
                              <p>{feedback.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No feedback yet. Be the first to share your thoughts!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrolle;
