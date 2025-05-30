import { useState } from "react";
import { FiFilter } from "react-icons/fi";

type SortByProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SortBy = ({ isOpen, onClose }: SortByProps) => {
  const [selected, setSelected] = useState("ALL");

  const options = ["ALL", "This week", "This month", "This year", "Set up"];

  if (!isOpen) return null; // ถ้ายังไม่เปิด ให้ไม่ render เลย

  return (
    <div className="absolute right-73 top-35 z-50">
      <div className="bg-white rounded-lg shadow-lg ring-1 ring-black/10 w-fit overflow-hidden">
        {options.map((option, index) => (
          <div key={option}>
            {index > 0 && <hr className="border-gray-200" />}
            <button
              onClick={() => {
                setSelected(option);
                onClose(); // ปิดหลังเลือก
              }}
              className={`flex items-center w-full px-4 py-2 text-sm ${
                selected === option
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700"
              } hover:bg-gray-100`}
            >
              <span
                className={`mr-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selected === option ? "border-orange-600" : "border-gray-400"
                }`}
              >
                {selected === option && (
                  <span className="w-2 h-2 bg-orange-600 rounded-full" />
                )}
              </span>
              {option}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortBy;
