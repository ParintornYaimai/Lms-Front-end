import { uploadService } from "@/services/fileService";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

interface FileData {
  fileId: string;
  filename: string;
  fileUrl: string;
}
interface UploadVideoProps {
  isOpen: boolean;
  onClose: () => void;
  sectionId: number;
  lectureId: number;
  onUploadSuccess: (fileData: FileData) => void; 
}

const UploadVideo: React.FC<UploadVideoProps> = ({ isOpen, onClose, sectionId, lectureId, onUploadSuccess}) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      const maxSize = 4 * 1024 * 1024 * 1024; // 4GB
      if (selected.size <= maxSize) {
        setFile(selected);
      } else {
        alert("File size must be less than 4.0 GB");
        setFile(null);
      }
    }
  };

  const handleUpload = async() => {
    try {
      if(file){
        const data = await uploadService(file)
        if(data.data){
          alert('Successfully uploaded')
          onUploadSuccess(data.data)
          onClose(); 
        }
      }
    } catch (error: any) {
      toast.error(error)
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-md shadow-lg w-full max-w-md p-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Lecture Video</h2>
          <button
            onClick={onClose}
            className="text-xl font-bold text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        <div>
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="block w-full border border-gray-300 rounded px-3 py-2 text-sm"
          />
          <p className="text-sm text-gray-600 mt-2">
            <strong>Note:</strong> All files should be at least 720p and less
            than 4.0 GB.
          </p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={!file}
            className={`px-4 py-2 text-sm rounded text-white ${
              file
                ? "bg-red-400 hover:bg-red-500"
                : "bg-red-200 cursor-not-allowed"
            }`}
          >
            Upload Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
