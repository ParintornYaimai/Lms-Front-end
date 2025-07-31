import React, { useState, useEffect } from "react";
import Header from "./Header";
import { publishInfoType } from "@/types/teacher/courseType";

type Props = {
  step: string;
  returnTo: () => void;
  setData:(value: publishInfoType)=> void;
  handleCreateCourse: ()=> void;
};

const PublishCourse = ({ step, returnTo, setData, handleCreateCourse}: Props) => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>("");
  const [congratsMessage, setCongratsMessage] = useState<string>("");
  const [filledCount, setFilledCount] = useState<number>(0);
  const [totalInputs, setTotalInputs] = useState<number>(0);

  const isFormValid = () => {
    return welcomeMessage.trim() !== "" && congratsMessage.trim() !== "";
  };

  const handleNextStep = () => {
    if (isFormValid()) {
      // ทำสิ่งที่ต้องการเมื่อข้อมูลถูกต้อง
      console.log("Submitting:", { welcomeMessage, congratsMessage });
    }
  };


  useEffect(() => {
    const total = 2;
    let filled = 0;

    if (welcomeMessage.trim() !== "") filled += 1;
    if (congratsMessage.trim() !== "") filled += 1;

    setFilledCount(filled);
    setTotalInputs(total);
  }, [welcomeMessage, congratsMessage]);

  const handleSendData =()=>{
    const publishInfo:publishInfoType = {
      welmsg: welcomeMessage,
      conmsg: congratsMessage
    }

    
    setData(publishInfo)
  }

  return (
    <div>
      <div className="xl:min-h-[715px] 2xl:min-h-[880px]">
        <Header step={step} filledCountpublish={filledCount} totalInputspublish={totalInputs} />
        <div className="xl:min-h-[630px] 2xl:min-h-[800px] mx-5 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mt-8 mb-4">Message</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Welcome Message
              </label>
              <textarea
                value={welcomeMessage}
                onChange={(e) => setWelcomeMessage(e.target.value)}
                className="w-full border border-gray-200 rounded-md p-4 text-sm text-gray-800 placeholder-gray-400 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter course starting message here..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Congratulations Message
              </label>
              <textarea
                value={congratsMessage}
                onChange={(e) => setCongratsMessage(e.target.value)}
                className="w-full border border-gray-200 rounded-md p-4 text-sm text-gray-800 placeholder-gray-400 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your course completed message here..."
              />
            </div>
          </div>
          </div>

          

          <div className="flex justify-between my-6 mx-5">
            <button
              className="px-5 py-2 border border-gray-300 text-gray-600 hover:bg-gray-100 cursor-pointer"
              onClick={returnTo}
            >
              Back
            </button>
            <button
              className={`px-6 py-2 text-white font-medium rounded ${
                isFormValid()
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              onClick={()=>{handleSendData(), handleCreateCourse()}}
              disabled={!isFormValid()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishCourse;
