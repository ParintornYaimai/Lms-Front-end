"use client";
import { createComment, deleteComment } from "@/services/commentService";
import { deleteNote, getNotesById } from "@/services/noteServices";
import { disconnectSocket, initiateSocketConnection } from "@/services/socket";
import { useAuthStore } from "@/store/authStore";
import type { NoteId, NotesIdResponse } from "@/types/noteType";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight, FaRegCommentDots } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useFile } from "@/hooks/useFile";

type PageProps = {
  isModalOpenPage: boolean;
  onClose: () => void;
  selectedNoteId: string;
  handleDeleteNote: (id: string) => void;
};

const Picture = ({ fileData }: { fileData: any }) => {
  const { url } = useFile(fileData.fileId);
  return (
    <>
      {url && <img src={url} alt="avatar" className="rounded-full w-8 h-8" />}
    </>
  );
};

const NoteDetailPage = ({
  isModalOpenPage,
  onClose,
  selectedNoteId,
  handleDeleteNote,
}: PageProps) => {
  const [activeTab, setActiveTab] = useState<string>("comment");
  const [noteId, setNotesId] = useState<NoteId | null>(null);
  const [comment, setComment] = useState({
    content: "",
    note: "",
  });
  const [error, setError] = useState<string | null>(null);
  const tagColors: Record<string, string> = {
    Business: "bg-purple-100 text-purple-500",
    Design: "bg-pink-100 text-pink-500",
    "Personal Development": "bg-emerald-100 text-emerald-500",
    Development: "bg-stone-200 text-stone-800",
    "Finance & Accounting": "bg-red-100 text-red-500",
    "Health & Fitness": "bg-green-100 text-green-500",
    Language: "bg-fuchsia-100 text-fuchsia-500",
    Marketing: "bg-yellow-100 text-yellow-500",
    Music: "bg-gray-100 text-gray-500",
    "Office Productivity": "bg-amber-100 text-amber-500",
    "Photography & Video": "bg-blue-100 text-blue-500",
    "Science & Engineering": "bg-cyan-100 text-cyan-500",
    "Test Preparation": "bg-lime-100 text-lime-500",
  };

  // ดึงข้อมูลตามidที่ส่งมา
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const data: NotesIdResponse = await getNotesById(selectedNoteId);
        setNotesId(data.data);
      } catch (err: any) {
        setError(err.message);
        toast.error(err.message);
      }
    };

    if (selectedNoteId) {
      fetchNotes();
    }
  }, [selectedNoteId]);

  // รับข้อมูล realtime
  const userId = useAuthStore((state) => state.user?.id) as string;
  useEffect(() => {
    if (!userId) return;
    const socket = initiateSocketConnection(userId);
    socket.on("comment:create", (comment) => {
      setNotesId((prevNotes) => {
        if (!prevNotes) return prevNotes;
        return {
          ...prevNotes,
          comments: [...(prevNotes.comments ?? []), comment],
        };
      });
    });

    return () => {
      disconnectSocket();
    };
  }, [userId]);

  // สร้างcommment
  const handleComment = async () => {
    try {
      await createComment(comment.content, selectedNoteId);
      toast.success("Note created successfully!");
      setComment({ content: "", note: "" });
    } catch (error: any) {
      console.error(error);
      toast.error("Failed to create note");
    }
  };

  // ลบnote
  const handledeleteNote = async (noteId: string) => {
    try {
      await deleteNote(noteId);
      onClose();
      toast.success("Note deleted successfully");
      return;
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  //รับnoteที่ลบ
  useEffect(() => {
    if (!userId) return;
    const socket = initiateSocketConnection(userId);
    socket.on("note:delete", (deleteNoteId) => {
      setNotesId((prevNote) => {
        if (!prevNote) return null;
        if (prevNote._id === deleteNoteId._id) {
          handleDeleteNote(deleteNoteId._id);
          return null;
        }
        return prevNote;
      });
    });

    return () => {
      disconnectSocket();
    };
  }, [userId]);

  // ฟังกชั่นลบคอมเม้น
  const handleDeleteComment = async (commentId: string) => {
    try {
      await deleteComment(commentId);
      toast.success("Note deleted successfully");
    } catch (error: any) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!userId) return;
    const socket = initiateSocketConnection(userId);
    socket.on("comment:delete", (deleteCommentId) => {
      setNotesId((prevNotesId) => {
        if (!prevNotesId) return prevNotesId;

        return {
          ...prevNotesId,
          comments: prevNotesId?.comments.filter(
            (item) => item._id !== deleteCommentId._id
          ),
        };
      });
    });

    return () => {
      disconnectSocket();
    };
  }, [userId]);

  return (
    <AnimatePresence>
      {isModalOpenPage && noteId && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-xl shadow-lg w-[800px] max-w-full max-h-[90vh] z-10 p-6 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              {noteId.author._id === userId ? (
                <div className="flex items-center gap-5">
                  <div className="p-3 bg-gray-100 rounded-full cursor-pointer">
                    <FaRegEdit size={20} />
                  </div>
                  <div
                    className="p-3 bg-gray-100 rounded-full  cursor-pointer"
                    onClick={() => handledeleteNote(noteId._id)}
                  >
                    <RiDeleteBin6Line size={20} />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex gap-2">
                    <span
                      className={`bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full ${
                        tagColors[noteId.tag] ?? "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {noteId.tag}
                    </span>
                  </div>
                </div>
              )}
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <IoClose size={24} />
              </button>
            </div>
            {noteId.author._id === userId && (
              <div className="mt-4">
                <div className="flex gap-2">
                  <span
                    className={`bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full ${
                      tagColors[noteId.tag] ?? "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {noteId.tag}
                  </span>
                </div>
              </div>
            )}

            <h2 className="text-2xl font-semibold mt-4 mb-2">
              {noteId?.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Created Date:{" "}
              <span className="font-medium text-gray-700">
                {new Date(noteId.createdAt).toLocaleDateString()}
              </span>
            </p>

            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-1">Description</h3>
              <div className="max-h-40 overflow-y-auto pr-2 ">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {noteId?.description || "No description available."}
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 ">
              <div className="flex ">
                <button
                  onClick={() => setActiveTab("comments")}
                  className={`text-sm font-medium py-2 px-4 border-b-2 cursor-pointer transition-colors duration-100 ${
                    activeTab === "comments"
                      ? "border-orange-600 text-orange-600"
                      : "border-transparent text-gray-500 hover:text-orange-500"
                  }`}
                >
                  Comments
                </button>
                <button
                  onClick={() => setActiveTab("attach")}
                  className={`text-sm font-medium py-2 px-4 border-b-2 cursor-pointer transition-colors duration-100 ${
                    activeTab === "attach"
                      ? "border-orange-600 text-orange-600"
                      : "border-transparent text-gray-500 hover:text-orange-500"
                  }`}
                >
                  Attach File
                </button>
              </div>
            </div>

            {/* Comment Box */}
            <span className="font-semibold my-3">Post Comment</span>
            <div className="w-full mb-3 flex items-center justify-between gap-2 ">
              <div className="relative w-full max-w-[650px]">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaRegCommentDots className="w-4 h-4 text-orange-600" />
                </span>
                <input
                  type="text"
                  placeholder="Write down your question and comments"
                  className="w-full pl-10 pr-5 h-10 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-600 placeholder-gray-400 text-md"
                  value={comment.content}
                  onChange={(e) =>
                    setComment((prev) => ({ ...prev, content: e.target.value }))
                  }
                />
              </div>
              <div>
                <button
                  className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 cursor-pointer"
                  onClick={handleComment}
                >
                  <span>Post </span>
                  <FaArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Comment List */}
            <span className="font-semibold text-md">
              Latest Comments ({noteId?.comments?.length || 0})
            </span>
            <div
              className="space-y-3 mt-4 overflow-y-auto"
              style={{ maxHeight: "250px" }}
            >
              {noteId?.comments?.map((comment, index) => {
                const author = comment.author?.[0]; // ดึง author คนแรก
                const createdDate = new Date(comment.createdAt).toLocaleString();

                return (
                  <div key={index} className="flex items-start gap-3">
                    <Picture fileData={{ fileId: author.profilepicture.fileId }} />
                    <div className="w-full">
                      <div className="flex justify-between">
                        <p className="text-sm">
                          <span className="font-semibold">
                            {author.firstname} {author.lastname}
                          </span>{" "}
                          •{" "}
                          <span className="text-gray-400 text-xs">
                            {createdDate}
                          </span>
                        </p>
                        {comment.author?.map((item) => item._id === userId) && (
                          <div
                            className="p-1 bg-gray-100 rounded-full cursor-pointer"
                            onClick={() => handleDeleteComment(comment._id)}
                          >
                            <RiDeleteBin6Line size={15} />
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {noteId?.comments?.length === 0 && (
                <p className="text-sm text-gray-400">No comments yet.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NoteDetailPage;
