import React, { useState } from 'react';
import Header from './Header';
import { IoMenu } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import UploadVideo from './UploadVideo';

type Props = {
  step: string;
  goToNextStep: () => void;
  returnTo: () => void;
};

type Lecture = {
  id: number;
  name: string;
  contentType: '' | 'video' | 'file' | 'description';
};

type Section = {
  id: number;
  name: string;
  lectures: Lecture[];
};

const Curriculum = ({ step, goToNextStep }: Props) => {
  const [sections, setSections] = useState<Section[]>([
    {
      id: 1,
      name: 'Section name',
      lectures: [{ id: 1, name: 'Lecture 1', contentType: '' }],
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

  const handleAddSection = () => {
    const newSection: Section = {
      id: Date.now(),
      name: `Section ${sections.length + 1}`,
      lectures: [],
    };
    setSections([...sections, newSection]);
  };

  const handleAddLecture = (sectionId: number) => {
    const newLecture: Lecture = {
      id: Date.now(),
      name: `Lecture ${Date.now()}`,
      contentType: '',
    };

    setSections(
      sections.map((section) =>
        section.id === sectionId
          ? { ...section, lectures: [...section.lectures, newLecture] }
          : section
      )
    );
  };

  const handleDeleteSection = (id: number) => {
    setSections(sections.filter((section) => section.id !== id));
  };

  const handleEditSection = (id: number, currentName: string) => {
    setEditingSectionId(id);
    setEditedSectionName(currentName);
  };

  const handleSaveSectionEdit = () => {
    if (editedSectionName.trim() === '') return;
    setSections(
      sections.map((section) =>
        section.id === editingSectionId ? { ...section, name: editedSectionName } : section
      )
    );
    setEditingSectionId(null);
    setEditedSectionName('');
  };

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

    if (newContentType === 'video') {
      setActiveUploadLecture({ sectionId, lectureId });
    }
  };

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

  const handleEditLecture = (sectionId: number, lectureId: number, currentName: string) => {
    setEditingLecture({ sectionId, lectureId });
    setEditedLectureName(currentName);
  };

  const handleSaveLectureEdit = () => {
    if (editedLectureName.trim() === '' || !editingLecture) return;

    setSections(
      sections.map((section) => {
        if (section.id === editingLecture.sectionId) {
          return {
            ...section,
            lectures: section.lectures.map((lecture) =>
              lecture.id === editingLecture.lectureId
                ? { ...lecture, name: editedLectureName }
                : lecture
            ),
          };
        }
        return section;
      })
    );

    setEditingLecture(null);
    setEditedLectureName('');
  };

  return (
    <div>
      <Header step={step} filledCountBasic={0} totalInputs={0} />
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
                    value={editedSectionName}
                    onChange={(e) => setEditedSectionName(e.target.value)}
                    onBlur={handleSaveSectionEdit}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSaveSectionEdit();
                    }}
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
                      value={editedLectureName}
                      onChange={(e) => setEditedLectureName(e.target.value)}
                      onBlur={handleSaveLectureEdit}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveLectureEdit();
                      }}
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
                      <option value="">content</option>
                      <option value="video">Video</option>
                      <option value="file">Attach File</option>
                      <option value="description">Description</option>
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
      {activeUploadLecture && (
        <UploadVideo
          isOpen={true}
          onClose={() => setActiveUploadLecture(null)}
          sectionId={activeUploadLecture.sectionId}
          lectureId={activeUploadLecture.lectureId}
        />
      )}
    </div>
  );
};

export default Curriculum;
