import React, { useState } from 'react'
import Header from './Header'
import { SlPicture } from "react-icons/sl";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";


type Props = {
  step:string;
  goToNextStep: () => void;
  returnTo: () => void;
};
const Advanceinformation = ({ step, goToNextStep, returnTo }: Props) => {
  const [inputsWhatYouWillTeachInThisCourse, setInputsWhatYouWillTeachInThisCourse] = useState<string[]>(Array(4).fill('')) //What you will teach in this course
  const [CourseRequirement,setCourseRequirement] = useState<string[]>(Array(4).fill('')) //Course Requirement
  const [WhoThisCourseIsFor, setWhoThisCourseIsFor]  = useState<string[]>(Array(4).fill('')) //Who This Course Is For
  const [courseMaterial, setCourseMaterial] = useState<string>('');
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  
  // + Add input
  const handleAddInput = (section: 'teach' | 'requirement' | 'who') => {
    const sectionMap: Record< 'teach' | 'requirement' | 'who', { list: string[]; setter: React.Dispatch<React.SetStateAction<string[]>> }> = {
      teach: { list: inputsWhatYouWillTeachInThisCourse, setter: setInputsWhatYouWillTeachInThisCourse },
      requirement: { list: CourseRequirement, setter: setCourseRequirement },
      who: { list: WhoThisCourseIsFor, setter: setWhoThisCourseIsFor },
    };

    const { list, setter } = sectionMap[section];
    if(list.length < 8){
      setter([...list, '']);
    }
  };

  // update data input
  const handleInputChange = ( section: 'teach' | 'requirement' | 'who',index: number,value: string) => {
    const sectionMap: Record<'teach' | 'requirement' | 'who',{ list: string[]; setter: React.Dispatch<React.SetStateAction<string[]>> }> = {
      teach: { list: inputsWhatYouWillTeachInThisCourse, setter: setInputsWhatYouWillTeachInThisCourse },
      requirement: { list: CourseRequirement, setter: setCourseRequirement },
      who: { list: WhoThisCourseIsFor, setter: setWhoThisCourseIsFor },
    };

    const { list, setter } = sectionMap[section];
    const updated = [...list];
    updated[index] = value;
    setter(updated);
  };
    
  const countAllInputs = () => {
    return inputsWhatYouWillTeachInThisCourse.length + CourseRequirement.length + WhoThisCourseIsFor.length + 2;
  };

  const countFilledInputs = () => {
    const isNotEmpty = (value: string) => value.trim() !== '';
    const courseMaterialCount = courseMaterial.trim() !== '' ? 1 : 0;
    const thumbnailCount = thumbnailFile ? 1 : 0;
    return ( 
      courseMaterialCount + thumbnailCount +
      inputsWhatYouWillTeachInThisCourse.filter(isNotEmpty).length +
      CourseRequirement.filter(isNotEmpty).length +
      WhoThisCourseIsFor.filter(isNotEmpty).length
    );
  };

  const isFormValid = () => {
    return courseMaterial.trim() !== '' && countFilledInputs() > 0;
  };

  // Handle next step
  const handleNextStep = () => {
    if(isFormValid()){
      goToNextStep();
    }
  };
  
  return (
    <div>
      <div>
        <Header 
          step={step} 
          filledCountBasic={countFilledInputs()} 
          totalInputs={countAllInputs()}
        />

        {/* content */}
        <div>
          {/* Thumbnail */}
          <div className='flex items-center justify-center border-y border-gray-200 p-10'>
            <div className='flex items-center justify-center gap-5 flex-wrap'>
              <div className='flex flex-col'>
                <div className='mb-3'>
                  <span className='text-md'>Course Thumbnail</span>
                </div>
                <div className='px-16 py-8 bg-gray-100'>
                  <SlPicture size={70} className='text-gray-400'/>
                </div>
              </div>
              <div className='text-sm w-80 mt-3'>
                <p className='text-gray-400 pb-3'>
                  Upload your course Thumbnail here.<br></br>
                  <span className='text-black'>Important  guidelines</span>&nbsp;
                  1200 * 1800 pixels or 12:8 Ratio. Supported
                  format: <span className='text-black'>.jpg, .jpeg, or .png</span>
                </p>
                <label
                  htmlFor="thumbnail-upload"
                  className="text-orange-600 bg-orange-100 w-1/2 py-2 flex items-center justify-center gap-4 cursor-pointer"
                >
                  <span>Upload Image</span>
                  <IoIosArrowRoundForward size={20} />
                  <input
                    id="thumbnail-upload"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setThumbnailFile(e.target.files[0]);
                      }
                    }}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/*Course material  */}
          <div className='m-5'>
            <h1 className='text-xl mb-2'>Course Matterial</h1>
            <div >
              <textarea
                placeholder="Enter your course descriptions"
                className="w-full h-60 border border-gray-200 p-4 focus:outline-none resize-none rounded-md"
                value={courseMaterial}
                onChange={(e)=>setCourseMaterial(e.target.value)}
              />
            </div>
          </div>

          {/* This Course */}
          <div className='border-y border-gray-200 py-5 '>
            <div className='flex items-center justify-between mx-5'>
              <div>
                <h1 className='tex-xl'>What you will teach in this course ({inputsWhatYouWillTeachInThisCourse.length}/8)</h1>
              </div>
              <button className={`flex items-center text-orange-600 gap-2 cursor-pointer`} onClick={() => handleAddInput('teach')} disabled={inputsWhatYouWillTeachInThisCourse.length >= 8}>
                <FaPlus/>
                <span>Add new</span>
              </button>
            </div>

            {/* Input */}
            <div className='m-5'>
              <div className='space-y-5'>
                {inputsWhatYouWillTeachInThisCourse.map((value, index) => (
                  <div className='flex flex-col' key={index}>
                    <span className='text-sm p-1'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <input
                      type='text'
                      className='focus:outline-none border border-gray-200 p-2 placeholder-gray-400'
                      placeholder='What you will teach in this course...'
                      value={value}
                      onChange={(e) => handleInputChange('teach', index, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Course requirement*/}
          <div className='border-b border-gray-200 py-5 '>
            <div className='flex items-center justify-between mx-5'>
              <div>
                <h1 className='tex-xl'>Course requirement ({CourseRequirement.length}/8)</h1>
              </div>
              <button className='flex items-center text-orange-600 gap-2 cursor-pointer' onClick={() => handleAddInput('requirement')} disabled={CourseRequirement.length >= 8}>
                <FaPlus/>
                <span>Add new</span>
              </button>
            </div>

            {/* Input */}
            <div className='m-5'>
              <div className='space-y-5'>
                {CourseRequirement.map((value, index) => (
                  <div className='flex flex-col' key={index}>
                    <span className='text-sm p-1'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <input
                      type='text'
                      className='focus:outline-none border border-gray-200 p-2 placeholder-gray-400'
                      placeholder='What you will teach in this course...'
                      value={value}
                      onChange={(e) => handleInputChange('requirement', index, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Who This Course is for*/}
          <div className='border-b border-gray-200 py-5 '>
            <div className='flex items-center justify-between mx-5'>
              <div>
                <h1 className='tex-xl'> Who This Course is for ({WhoThisCourseIsFor.length}/8)</h1>
              </div>
              <button className='flex items-center text-orange-600 gap-2 cursor-pointer' onClick={() => handleAddInput('who')} disabled={WhoThisCourseIsFor.length >= 8}>
                <FaPlus/>
                <span>Add new</span>
              </button>
            </div>

            {/* Input */}
            <div className='m-5'>
              <div className='space-y-5'>
                {WhoThisCourseIsFor.map((value, index) => (
                  <div className='flex flex-col' key={index}>
                    <span className='text-sm p-1'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <input
                      type='text'
                      className='focus:outline-none border border-gray-200 p-2 placeholder-gray-400'
                      placeholder='What you will teach in this course...'
                      value={value}
                      onChange={(e) => handleInputChange('who', index, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between my-6 mx-5">
          <button className="px-5 py-2 border border-gray-300  text-gray-600 hover:bg-gray-100 cursor-pointer"onClick={returnTo}>
            Back
          </button>
          <button className={`px-6 py-2 text-white cursor-pointer ${
            isFormValid()
            ? "bg-orange-600 hover:bg-orange-700"
            : "bg-gray-300 cursor-not-allowed"
            }`} onClick={handleNextStep} disabled={!isFormValid()} >
              Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Advanceinformation
