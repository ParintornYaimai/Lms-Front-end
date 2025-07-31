import React, { useEffect, useState } from 'react';
import Header from './Header';
import { IoMenu } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import UploadVideo from './UploadVideo';
import { CurriculumInfoType, FileData } from '@/types/teacher/courseType';

type Props = {
  step: string;
  goToNextStep: () => void;
  returnTo: () => void;
  setData:(value: CurriculumInfoType)=> void;
};

type Lecture = {
  id: number;
  name: string;
  contentType: '' | 'video' | 'file' ;
  contentValue: FileData[] | []; 
};

type Section = {
  id: number;
  name: string;
  lectures: Lecture[];
};

const Curriculum = ({ step, goToNextStep, returnTo, setData }: Props) => {
  const [sections, setSections] = useState<Section[]>([
    {
      id: 1,
      name: 'Section name',
      lectures: [{
        id: 1, name: 'Lecture 1', contentType: '' ,
        contentValue: []
      }],
    },
  ]);

  const [editingSectionId, setEditingSectionId] = useState<number | null>(null);
  const [editedSectionName, setEditedSectionName] = useState<string>('');
  const [activeUploadLecture, setActiveUploadLecture] = useState<{
    sectionId: number;
    lectureId: number;
  } | null>(null);

  const [editingLecture, setEditingLecture] = useState<{
    sectionId: number;
    lectureId: number;
  } | null>(null);
  const [editedLectureName, setEditedLectureName] = useState<string>('');
  const [filledCountCurriculum, setFilledCountCurriculum] = useState<number>(0); //เก็บจำนวนช่องที่กรอกเเล้ว
  const [totalInputsCurriculum, setTotalInputsCurriculum] = useState<number>(0); //เก็บจำนวนช่องทั้งหมด

  //เพิ่ม section
  const handleAddSection = () => {
    const newSection: Section = {
      id: Date.now(),
      name: `Section ${sections.length + 1}`,
      lectures: [],
    };
    setSections([...sections, newSection]);
  };

  //เพิ่ม Lecture
  const handleAddLecture = (sectionId: number) => {
    const newLecture: Lecture = {
      id: Date.now(),
      name: `Lecture ${Date.now()}`,
      contentType: '',
      contentValue: []
    };

    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, lectures: [...section.lectures, newLecture] }
          : section
      )
    );
  };

  //ลบ section
  const handleDeleteSection = (id: number) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  //เเก้ไข section
  const handleEditSection = (id: number, currentName: string) => {
    setEditingSectionId(id);
    setEditedSectionName(currentName);
  };

  //เปลี่ยน content ใน lecture
  const handleChangeLectureContentType = (
    sectionId: number,
    lectureId: number,
    newContentType: Lecture['contentType']
  ) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) =>
              lecture.id === lectureId ? { ...lecture, contentType: newContentType } : lecture
            ),
          };
        }
        return section;
      })
    );

    if (newContentType === 'video' || newContentType === 'file') {
      setActiveUploadLecture({ sectionId, lectureId });
    }
  };

  //ลบ Lecture
  const handleDeleteLecture = (sectionId: number, lectureId: number) => {
    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              lectures: section.lectures.filter((lecture) => lecture.id !== lectureId),
            }
          : section
      )
    );
  };

  //ลบ Lecture
  const handleEditLecture = (sectionId: number, lectureId: number, currentName: string) => {
    setEditingLecture({ sectionId, lectureId });
    setEditedLectureName(currentName);
  };

  //นับจำนวนที่กรอกเเล้วเเละยังไม่ได้กรอก
  const getCurriculumInputCounts = (sections: Section[]) => {
    let totalInputs = 0;
    let filledInputs = 0;

    sections.forEach((section) => {
      totalInputs += 1;
      if (section.name.trim() !== '') filledInputs += 1;

      section.lectures.forEach((lecture) => {
        totalInputs += 1;
        if (lecture.name.trim() !== '') filledInputs += 1;

        totalInputs += 1;
        // เช็ค lecture.contentValue ที่เป็น string[]
        if (
          lecture.contentValue &&
          Array.isArray(lecture.contentValue) &&
          lecture.contentValue.some(file => file?.fileUrl && file?.fileUrl?.trim() !== '')
        ) {
          filledInputs += 1;
        }
      });
    });

    return { filledInputs, totalInputs };
  };

  //กำหนดข้อมูลลงstate
  useEffect(() => {
    const { filledInputs, totalInputs } = getCurriculumInputCounts(sections);
    setFilledCountCurriculum(filledInputs);
    setTotalInputsCurriculum(totalInputs);
  }, [sections]);

  //เพิ่ม content ใน lecture
  const handleSetLectureContentValue = (sectionId: number,lectureId: number, contentValue: FileData[] ) => {
    setSections(prevSections =>
      prevSections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              lectures: section.lectures.map(lecture =>
                lecture.id === lectureId
                  ? { ...lecture, contentValue }
                  : lecture
              ),
            }
          : section
      )
    );
  };

  //ส่งข้อมูลไปใน component ใหญ่
  const handleSendData =()=>{
    const curriculumInfo: CurriculumInfoType ={
      coursecrm: sections
    }
      
    setData(curriculumInfo);
  };
  
  return (
    <div>
      <Header step={step} filledCountcurriculum={filledCountCurriculum} totalInputscurriculum={totalInputsCurriculum} />
      <div className="mx-5">
        {sections.map((section, index) => (
          <div key={section.id} className="bg-gray-100 p-5 mb-5">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <IoMenu size={20} />
                <h1>{`Section ${index + 1} :`}</h1>
                {editingSectionId === section.id ? (
                  <input
                    type="text"
                    value={section.name}
                    onChange={(e) =>
                      setSections(sections.map(s =>
                        s.id === section.id ? { ...s, name: e.target.value } : s
                      ))
                    }
                    onBlur={() => setEditingSectionId(null)}
                    autoFocus
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                ) : (
                  <span>{section.name}</span>
                )}
              </div>
              <div className="flex items-center text-gray-400 gap-3">
                <FaPlus
                  size={20}
                  className="cursor-pointer"
                  onClick={() => handleAddLecture(section.id)}
                  title="Add Lecture"
                />
                <BiEditAlt
                  size={20}
                  className="cursor-pointer"
                  onClick={() => handleEditSection(section.id, section.name)}
                />
                <RiDeleteBinLine
                  size={20}
                  className="cursor-pointer"
                  onClick={() => handleDeleteSection(section.id)}
                />
              </div>
            </div>

            {/* Lectures */}
            {section.lectures.map((lecture) => (
              <div
                key={lecture.id}
                className="bg-white flex items-center justify-between p-4 mb-3"
              >
                <div className="flex items-center gap-2">
                  <IoMenu size={20} className="text-gray-400" />
                  {editingLecture &&
                  editingLecture.sectionId === section.id &&
                  editingLecture.lectureId === lecture.id ? (
                     <input
                      type="text"
                      value={lecture.name}
                      onChange={(e) => {
                        const updatedSections = sections.map((sec) =>
                          sec.id === section.id
                            ? {
                                ...sec,
                                lectures: sec.lectures.map((lec) =>
                                  lec.id === lecture.id
                                    ? { ...lec, name: e.target.value }
                                    : lec
                                ),
                              }
                            : sec
                        );
                        setSections(updatedSections);
                      }}
                      onBlur={() => setEditingLecture(null)}
                      autoFocus
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  ) : (
                    <span>{lecture.name}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <select
                      name="content"
                      value={lecture.contentType}
                      onChange={(e) =>
                        handleChangeLectureContentType(
                          section.id,
                          lecture.id,
                          e.target.value as Lecture['contentType']
                        )
                      }
                      className="appearance-none bg-red-100 text-orange-500 p-2 pr-8 rounded"
                    >
                      <option value=""  disabled selected hidden>content</option>
                      <option value="video">Video</option>
                      <option value="file">Attach File</option>
                    </select>
                    <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-orange-500">
                      <IoIosArrowDown size={18} />
                    </div>
                  </div>
                  <BiEditAlt
                    size={20}
                    className="cursor-pointer text-gray-400"
                    onClick={() => handleEditLecture(section.id, lecture.id, lecture.name)}
                    title="Edit Lecture Name"
                  />
                  <RiDeleteBinLine
                    size={20}
                    className="cursor-pointer text-gray-400"
                    onClick={() => handleDeleteLecture(section.id, lecture.id)}
                    title="Delete Lecture"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}

        <button
          className="bg-orange-100 text-orange-500 p-2 mt-2 cursor-pointer w-full"
          onClick={handleAddSection}
        >
          Add Sections
        </button>
      </div>
      <div>
        <div className="flex justify-between my-6 mx-5">
          <button className="px-5 py-2 border border-gray-300  text-gray-600 hover:bg-gray-100 cursor-pointer"onClick={returnTo}>
            Back
          </button>
          <button className="px-6 py-2 text-white cursor-pointer bg-orange-600 hover:bg-orange-700" onClick={()=>{goToNextStep(), handleSendData()}}>
            Next
          </button>
        </div>
      </div>
      {activeUploadLecture && (
        <UploadVideo
          isOpen={true}
          onClose={() => setActiveUploadLecture(null)}
          sectionId={activeUploadLecture.sectionId}
          lectureId={activeUploadLecture.lectureId}
          onUploadSuccess={(fileData) => {
            handleSetLectureContentValue(
              activeUploadLecture.sectionId,
              activeUploadLecture.lectureId,
              [fileData]
            );
            setActiveUploadLecture(null);
          }}
        />
      )}
    </div>
  );
};

export default Curriculum;
