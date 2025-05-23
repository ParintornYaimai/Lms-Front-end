import React from 'react'


type ProgressBarProps = {
    progress: number;         // ค่าเปอร์เซ็นต์ 0-100
    width?: string;           // ความกว้าง เช่น '100%', '200px'
    height?: string;          // ความสูง เช่น '4px', '8px'
    color?: string;           // สีของแถบ (ถ้าต้องการ)
    bgColor?: string;         // สี background ของแถบเบื้องหลัง
};

const ProgressBar = ({ progress, width = "100%", height = "16px", color = "bg-orange-500", bgColor="bg-gray-100" }: ProgressBarProps) => {
    
    return (
        <div className={`${bgColor} rounded-full overflow-hidden`} style={{ width, height }}>
        <div
            className={`${color} h-full rounded-full transition-all duration-300 ease-in-out`}
            style={{ width: `${progress}%` }}
        />
        </div>
  );
}

export default ProgressBar
