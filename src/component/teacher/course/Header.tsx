import React, { useState } from 'react'
import { LuLayers } from "react-icons/lu";
import { PiClipboardTextDuotone } from "react-icons/pi";
import { LuMonitorPlay } from "react-icons/lu";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";

type Props = {
    step:string
    filledCountBasic?: number;
    totalInputsBasic?: number;
    filledCountAdvance?: number;
    totalInputsAdvance?: number;
    filledCountcurriculum?: number;
    totalInputscurriculum?: number;
    filledCountpublish?: number;
    totalInputspublish?: number;
};
const Header = ({step, filledCountBasic, totalInputsBasic, filledCountAdvance, totalInputsAdvance, filledCountcurriculum, totalInputscurriculum, filledCountpublish, totalInputspublish}:Props) => {

    return (
        <div className='max-h-[200x] border-b-2 border-gray-200 mb-5'>
            <div className='flex items-center justify-between space-x-5 mx-2'>
                <div className={`w-1/4 flex items-center justify-between py-4 ${step === 'basic' && 'border-b-2 border-orange-600'}`}>
                    <div className='flex items-center justify-center gap-2'>
                        <LuLayers size={22} className='text-gray-600'/>
                        <h1 className='text-md '>Basic Information</h1>
                    </div>
                    <span className="text-green-600">
                        {filledCountBasic === totalInputsBasic ? <IoCheckmarkDone size={20} className="text-green-600" /> : `${filledCountBasic}/${totalInputsBasic}`}
                    </span>
                </div>
                <div className={`w-1/4 flex items-center justify-between py-4 ${step === 'advance' && 'border-b-2 border-orange-600'}`}>
                    <div className='flex items-center justify-center gap-2'>
                        <PiClipboardTextDuotone size={22} className='text-gray-600'/>
                        <h1 className='text-md'>Advance Information</h1>
                    </div>
                    <span className='text-green-600'>
                        {filledCountAdvance === totalInputsAdvance ? <IoCheckmarkDone size={20} className="text-green-600" /> : `${filledCountAdvance}/${totalInputsAdvance}`}
                    </span>
                </div>
                <div className={`w-1/4 flex items-center justify-between py-4 ${step === 'curriculum' && 'border-b-2 border-orange-600'}`}>
                    <div className='flex items-center justify-center gap-2 '>
                        <LuMonitorPlay size={22} className='text-gray-600'/>
                        <h1 className='text-md '>Curriculum</h1>
                    </div>
                    <span className='text-green-600'>
                        {filledCountcurriculum === totalInputscurriculum ? <IoCheckmarkDone size={20} className="text-green-600" /> : `${filledCountcurriculum}/${totalInputscurriculum}`}
                    </span>
                </div>
                <div className={`w-1/4 flex items-center justify-between py-4 ${step === 'publish' && 'border-b-2 border-orange-600'}`}>
                    <div className='flex items-center justify-center gap-2'>
                        <FaRegPlayCircle size={22} className='text-gray-600'/>
                        <h1 className='text-md '>Publish Course</h1>
                    </div>
                    <span className='text-green-600'>
                        {filledCountpublish === totalInputspublish ? <IoCheckmarkDone size={20} className="text-green-600" /> : `${filledCountpublish}/${totalInputspublish}`}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
