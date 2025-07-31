import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { CategoriesResponse, Category } from "@/types/filterType";
import { getCate } from "@/services/filterService";
import { createNote } from "@/services/noteServices";
import toast from 'react-hot-toast'


type AddNoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddNoteModal = ({ isOpen, onClose }: AddNoteModalProps) => {
  const [cate, SetCate] = useState<Category[]>();
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const tagColors: Record<string, string> = {
    "Business": "bg-purple-100 text-purple-500",
    "Design": "bg-pink-100 text-pink-500",
    "Personal Development": "bg-emerald-100 text-emerald-500",
    "Development": "bg-orange-100 text-orange-500",
    "Finance & Accounting": "bg-red-100 text-red-500",
    "Health & Fitness": "bg-green-100 text-green-500",
    "Language": "bg-fuchsia-100 text-fuchsia-500", 
    "Marketing": "bg-yellow-100 text-yellow-500",
    "Music": "bg-gray-100 text-gray-500",
    "Office Productivity": "bg-amber-100 text-amber-500",
    "Photography & Video": "bg-blue-100 text-blue-500",
    "Science & Engineering": "bg-cyan-100 text-cyan-500",
    "Test Preparation": "bg-lime-100 text-lime-500",
  };
  const selectedTagObject = cate?.find(item => item.name === formData.tag);


  //fetch Category
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data: CategoriesResponse = await getCate();
        const newData = data.data.filter(item=> item.name !== 'ALL')
        SetCate(newData);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchCategory();
  }, []);

  const handleCreateNote = async () => {
    try {
      await createNote(formData.title, formData.tag, formData.description);
      toast.success('Note created successfully!')
      setFormData({ title: "", description: "", tag: "" });
      onClose();
    } catch (error: any) {
      toast.error('Failed to create note')
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop effect */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Box effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white p-6 rounded-lg shadow-lg w-[500px] max-w-full z-10"
          >
            <h2 className="text-xl font-semibold mb-6">Create New Note</h2>

            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Add title"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Dropdown */}
            <div className="mb-4">
              <Listbox
                value={formData.tag}
                onChange={(tagValue) => setFormData({ ...formData, tag: tagValue })}
              >
                <div className="relative">
                  <Listbox.Button className="relative w-1/2 cursor-pointer rounded border border-gray-300 bg-white py-1 pl-2 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <span
                       className={`inline-block px-2 py-1 rounded-2xl text-sm font-medium ${ selectedTagObject ? tagColors[selectedTagObject.name] : "bg-gray-300 text-black"}`}
                    >
                      {selectedTagObject?.name ?? "Select tag"}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400">
                      <IoIosArrowDown />
                    </span>
                  </Listbox.Button>

                  <Transition as={Fragment}>
                    <Listbox.Options className="absolute mt-1 w-1/2 h-64 rounded-md bg-white shadow-lg z-10 border border-gray-200 focus:outline-none overflow-y-auto">
                      {cate?.map((item) => (
                        <Listbox.Option
                          key={item._id}
                          value={item.name}
                          className={({ active }) =>
                            `cursor-pointer select-none px-2 py-1 text-sm  ${active ? "bg-orange-100" : ""}`
                          }
                        >
                          <span className={`inline-block px-2 rounded-2xl text-sm font-medium ${tagColors[item.name] ?? "bg-gray-300 text-black"}`}>
                            {item.name}
                          </span>
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Write something about your events..."
                className="w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {/* Action buttons */}
            <div className="flex justify-between">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700 cursor-pointer"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 cursor-pointer" onClick={handleCreateNote}>
                Create Now →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    
  );
};

export default AddNoteModal;
