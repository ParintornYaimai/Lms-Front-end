import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

type AddNoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddNoteModal = ({ isOpen, onClose }: AddNoteModalProps) => {
  const tagOptions = [
    { value: "text", label: "Text", color: "bg-blue-100 text-blue-600" },
    { value: "meeting", label: "Meeting", color: "bg-green-100 text-green-600" },
    { value: "important", label: "Important", color: "bg-red-100 text-red-600" },
  ];

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    comment: "",
    tag: "text",
  });

  const selectedTagObject = tagOptions.find(tag => tag.value === formData.tag);

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
                      className={`inline-block px-2 py-1 rounded-2xl text-sm font-medium ${selectedTagObject?.color}`}
                    >
                      {selectedTagObject?.label}
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400">
                      <IoIosArrowDown />
                    </span>
                  </Listbox.Button>

                  <Transition as={Fragment}>
                    <Listbox.Options className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10 border border-gray-200 ">
                      {tagOptions.map((tag) => (
                        <Listbox.Option
                          key={tag.value}
                          value={tag.value}
                          className={({ active }) =>
                            `cursor-pointer select-none px-2 py-1 text-sm ${active ? "bg-orange-100" : ""}`
                          }
                        >
                          <span
                            className={`inline-block px-2 rounded-2xl font-medium ${tag.color}`}
                          >
                            {tag.label}
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

            {/* Comment */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Comment</label>
              <input
                type="text"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                placeholder="type here..."
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Action buttons */}
            <div className="flex justify-between">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 text-gray-700"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700">
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
