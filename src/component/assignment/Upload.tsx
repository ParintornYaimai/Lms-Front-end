"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";

type UploadProps = {
  onClose: () => void;
};

const backdropVariants = {
  visible: { opacity: 0.5 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 50, scale: 0.8 },
};

const Upload: React.FC<UploadProps> = ({ onClose }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [showModal, setShowModal] = useState(false);

  // ฟังก์ชันปิด modal แบบ animate แล้วค่อย onClose จริง
  const handleClose = () => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300); // เวลาให้ animation เล่นจบ
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    setFiles((prev) => [...prev, ...Array.from(selectedFiles)]);
  };

  const handleRemove = (index: number) => {
    const updated = [...files];
    updated.splice(index, 1);
    setFiles(updated);
  };

  const handleUpload = () => {
    alert("Uploading files...");
    setFiles([]);
    setShowModal(false);
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {/* แบล็กดรอป */}
        <motion.div
          className="fixed inset-0 bg-black z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleClose} // กดแบล็กดรอปก็ปิด modal ได้
        />
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-md shadow-lg max-w-md w-full p-6 relative z-50">
            <h2 className="text-xl font-semibold mb-4">Upload</h2>

            {/* Drop Zone */}
            <div
              className="border-2 border-dashed border-orange-500 rounded-md p-10 text-center text-gray-500 cursor-pointer"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
              />
              <label htmlFor="fileInput" className="cursor-pointer">
                <div className="text-3xl mb-2">☁️</div>
                <p>
                  Drag & drop files or{" "}
                  <span className="text-orange-500 underline">Browse</span>
                </p>
              </label>
            </div>

            {/* File List */}
            <div className="mt-4 max-h-40 overflow-y-auto space-y-2">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-3 py-2 border border-orange-600 rounded-md"
                >
                  <span className="text-sm truncate max-w-[200px]">
                    {file.name}
                  </span>
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 font-bold cursor-pointer"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setShowModal(true)}
                disabled={files.length === 0}
                className={`px-4 py-2 rounded-md font-semibold w-full cursor-pointer ${
                  files.length === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-orange-600 text-white hover:bg-orange-700"
                }`}
              >
                Upload Files
              </button>
            </div>

            <AnimatePresence>
              {showModal && (
                <>
                  <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setShowModal(false)} // กด backdrop แล้วปิด
                  />

                  <motion.div
                    className="fixed inset-0 flex items-center justify-center z-[70]"
                    initial={{ y: 50, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 50, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()} // ป้องกันไม่ให้คลิกทะลุ modal
                    role="alertdialog"
                    aria-modal="true"
                    aria-labelledby="confirm-title"
                    aria-describedby="confirm-desc"
                  >
                    <div className="bg-white rounded-md p-6 shadow-xl w-[90%] max-w-sm border border-gray-200">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-yellow-500 text-2xl">
                          <IoWarningOutline size={30} />
                        </span>
                        <span
                          id="confirm-title"
                          className="text-lg font-medium"
                        >
                          Unsaved changes
                        </span>
                      </div>
                      <p id="confirm-desc" className="text-gray-600 mb-6">
                        Do you want to save or discard changes?
                      </p>
                      <div className="flex justify-between gap-4">
                        <button
                          onClick={() => setShowModal(false)}
                          className="w-1/2 px-4 py-2 border border-gray-400 rounded-md cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleUpload}
                          className="w-1/2 px-4 py-2 bg-orange-600 text-white rounded-md cursor-pointer"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-3xl cursor-pointer"
              title="Close"
              aria-label="Close Upload Modal"
            >
              &times;
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Upload;
