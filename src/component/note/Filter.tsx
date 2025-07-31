import { getCate } from "@/services/filterService";
import { CategoriesResponse, Category } from "@/types/filterType";
import { useEffect, useState } from "react";

type FilterProps = {
  isOpen: boolean;
  onClose: () => void;
  selecFilterCategory: string
  setSelecFilterCategory: (value: string) => void;
};

const Filter = ({ isOpen, onClose, setSelecFilterCategory, selecFilterCategory}: FilterProps) => {

  const [cate,SetCate] = useState<Category[]>()


  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data: CategoriesResponse = await getCate();
        const sortedData = data.data.sort((a, b) => {
          if (a.name === "ALL") return -1;
          if (b.name === "ALL") return 1;
          return 0;
        });
        SetCate(sortedData);
      } catch (err: any) {
        alert(err)
      } 
    };
    fetchNotes();
  },[]);

  if (!isOpen) return null; // ถ้ายังไม่เปิด ให้ไม่ render เลย

  return (
    <div className="absolute right-23 top-35 z-50">
      <div className="bg-white rounded-lg shadow-lg ring-1 ring-black/10 w-fit overflow-hidden">
        {cate?.map((option) => (
          <div key={option._id}>
            {cate.length > 0 && <hr className="border-gray-200" />}
            <button
              onClick={() => {
                setSelecFilterCategory(option?.name);
                onClose(); // ปิดหลังเลือก
              }}
              className={`flex items-center w-full px-4 py-2 text-sm ${
                selecFilterCategory === option?.name
                  ? "text-orange-600 font-semibold"
                  : "text-gray-700"
              } hover:bg-gray-100`}
            >
              <span
                className={`mr-2 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selecFilterCategory === option?.name ? "border-orange-600" : "border-gray-400"
                }`}
              >
                {selecFilterCategory === option?.name && (
                  <span className="w-2 h-2 bg-orange-600 rounded-full" />
                )}
              </span>
              {option?.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
