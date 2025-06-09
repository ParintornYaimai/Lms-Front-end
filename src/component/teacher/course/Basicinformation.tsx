"use client";
import React, { useState, useEffect  } from "react";
import Header from "./Header";

type Props = {
  step: string;
  goToNextStep: () => void;
  returnTo: () => void;
};

const Basicinformation = ({ step, goToNextStep, returnTo }: Props) => {
  const [filledCountBasic, setFilledCountBasic] = useState(0);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("");
  const [subjectCategory, setSubjectCategory] = useState("");
  const [topic, setTopic] = useState("");
  const [language, setLanguage] = useState("");
  const [subtitleLanguage, setSubtitleLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [durationUnit, setDurationUnit] = useState("");

  const isFormValid = () => {
    return (
      title.trim() !== "" &&
      subtitle.trim() !== "" &&
      category !== "" &&
      subjectCategory !== "" &&
      topic.trim() !== "" &&
      language !== "" &&
      subtitleLanguage !== "" &&
      level !== "" &&
      duration.trim() !== "" &&
      durationUnit !== "" 
    );
  };
  const handleNextStep = () => {
    if (isFormValid()) {
      goToNextStep();
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วนทุกช่องที่จำเป็น");
    }
  };

  const getFilledFieldCount = () => {
    let count = 0;
    if (title.trim() !== "") count++;
    if (subtitle.trim() !== "") count++;
    if (category !== "" && category !== "Select...") count++;
    if (subjectCategory !== "" && subjectCategory !== "Select...") count++;
    if (topic.trim() !== "") count++;
    if (language !== "" && language !== "Select...") count++;
    if (subtitleLanguage !== "" && language !== "Select...") count++;
    if (level !== "" && level !== "Select...") count++;
    if (duration.trim() !== "") count++;
    if (durationUnit !== "") count++;
    return count;
  };


  useEffect(() => {
    const count = getFilledFieldCount();
    setFilledCountBasic(count);
  }, [title, subtitle, category, subjectCategory, topic, language, subtitleLanguage,level, duration, durationUnit]);

  return (
    <div>
      <Header step={step} filledCountBasic={filledCountBasic} totalInputs={0}/>
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
                    className="mt-1 w-full border border-gray-300 px-3 py-2 bg-white focus:outline-none text-gray-500"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Select...</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-gray-700">
                    Course Subject-category
                  </label>
                  <select
                    className="mt-1 w-full border border-gray-300 px-3 py-2 bg-white focus:outline-none text-gray-500"
                    value={subjectCategory}
                    onChange={(e) => setSubjectCategory(e.target.value)}
                  >
                    <option>Select...</option>
                    <option value="sub-category1">Category 1</option>
                    <option value="sub-category2">Category 2</option>
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
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
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
                  onClick={handleNextStep}
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
