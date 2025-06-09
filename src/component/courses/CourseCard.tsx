import React from 'react'


type Props = {
  image: string;
  title: string;
  subtitle: string;
  progress: number;
  status: "continue" | "launch";
};

const CourseCard = ({ image, title, subtitle, progress, status }:Props) => {
   return (
    <div className="bg-white overflow-hidden border border-gray-300 hover:shadow-md hover:scale-101 transition-transform duration-200 rounded-xs">
      <img src={image} className="w-full h-40 object-cover" alt={title} />
      <div className="p-6 space-y-2">
        <h4 className="text-sm text-gray-500 truncate line-clamp-1">{title}</h4>
        <p className="font-semibold text-base line-clamp-1">{subtitle}</p>

        <div className="flex justify-between items-center ">
          <button
            className={`text-sm px-4 py-2 font-medium border cursor-pointer rounded-xs ${
              status === "continue"
                ? "text-orange-600 bg-orange-100 border-red-100 hover:bg-orange-600 hover:text-white duration-300 ease-in-out"
                : "w-full text-orange-600 bg-orange-100 border-red-100 hover:bg-orange-600 hover:text-white duration-300 ease-in-out"
            }`}
          >
            {status === "continue" ? "Continue" : "Launch Course"}
          </button>
          {
            status === "continue" && (
                <span className="text-green-600 text-sm font-semibold">
                  {progress}% {progress === 100 ? "Completed" : "Finish"}
                </span>
            )
          }
          
        </div>
      </div>
    </div>
  );
}

export default CourseCard