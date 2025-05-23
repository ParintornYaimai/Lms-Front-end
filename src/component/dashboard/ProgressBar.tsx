import React from 'react'


type ProgressBarProps = {
    progress: number; //  0 - 100
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
    
    return (
        <div className="w-full bg-gray-100 rounded-full h-[12px] overflow-hidden mb-[3px]">
            <div
                className="bg-orange-600 h-[12px] rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

export default ProgressBar
