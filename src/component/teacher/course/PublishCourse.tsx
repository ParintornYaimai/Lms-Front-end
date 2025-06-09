import React, { useState } from "react";
import Header from "./Header";

type Props = {
  step: string;
};

const PublishCourse = ({ step }: Props) => {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [congratsMessage, setCongratsMessage] = useState("");

  const isFormValid = () => {
    return welcomeMessage.trim() !== "" && congratsMessage.trim() !== "";
  };

  const handleNextStep = () => {
    if (isFormValid()) {
      // ทำสิ่งที่ต้องการเมื่อข้อมูลถูกต้อง
      console.log("Submitting:", { welcomeMessage, congratsMessage });
    }
  };

  const returnTo = () => {
    // ใส่ logic สำหรับการกลับหน้าเดิม เช่น navigate(-1) หรือ callback
    console.log("Cancelled");
  };

  return (
    <div>
      <div className="xl:min-h-[715px] 2xl:min-h-[880px]">
        <Header step={step} filledCountBasic={0} totalInputs={0} />
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
              onClick={handleNextStep}
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
