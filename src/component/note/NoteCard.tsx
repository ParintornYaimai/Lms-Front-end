"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaRegCommentDots } from "react-icons/fa";
import { Note } from "@/types/noteType";
import toast from "react-hot-toast";
import { createComment } from "@/services/commentService";
import { useFile } from "@/hooks/useFile";

interface Props {
  data: Note[];
  setisModalOpenPage: (open: boolean) => void;
  setSelectedNoteId: (id: string) => void;
}

const AuthorProfilePicture = ({ fileId }: { fileId?: string }) => {
  const { url } = useFile(fileId ?? "");
  if (!url) return null;
  return (
    <Image
      src={url}
      alt="user"
      fill
      className="rounded-full object-cover border border-gray-200"
    />
  );
};

const NoteCard = ({ data, setisModalOpenPage, setSelectedNoteId }: Props) => {
  const [comment, setComment] = useState({
    content: "",
    noteId: "",
  });

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

  const handleComment = async () => {
    try {
      await createComment(comment.content, comment.noteId);
      toast.success("Note created successfully!");
      setComment({ content: "", noteId: "" });
    } catch (error: any) {
      console.error(error);
      toast.error("Failed to create note");
    }
  };

  return (
    <div className="xl:max-h-[610px] 2xl:max-h-[778px] max-h-sm overflow-auto no-scrollbar cursor-pointer">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 m-2">
        {data.map((card) => (
          <div
            key={card._id}
            onClick={() => {
              setSelectedNoteId(card._id);
              setComment((prev) => ({ ...prev, noteId: card._id }));
            }}
            className="max-h-sm xl:max-h-[270px] border border-gray-300 rounded-md shadow-sm bg-white hover:shadow-md transition hover:scale-101 duration-300"
          >
            <div
              className="p-4 cursor-pointer"
              onClick={() => setisModalOpenPage(true)}
            >
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="flex items-center gap-2 pb-2">
                  <div
                    className={`px-2 py-1 rounded-sm text-xs ${
                      tagColors[card.tag] ?? "bg-gray-200 text-gray-700"
                    }`}
                  >
                    <span>{card.tag}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <AuthorProfilePicture
                      fileId={card.author.profilepicture?.fileId}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm">
                      {card.author?.firstname} {card.author?.lastname}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {new Date(card.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 overflow-hidden">
                <div>
                  <span>{card.title}</span>
                </div>
                <div className="min-h-[60px] max-h-[60px]">
                  <p className="text-sm text-gray-500 line-clamp-3">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300">
              <div className="mx-4">
                <div className="flex justify-start items-center w-full gap-2 py-2">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <FaRegCommentDots className="w-4 h-4 text-orange-600" />
                    </span>
                    <input
                      type="text"
                      placeholder="Write down your question and comment"
                      className="pl-9 pr-3 py-1.5 bg-gray-100 rounded-2xl w-[170px] lg:w-[265px] 2xl:w-[360px] text-xs h-8 focus:outline-none focus:ring-0"
                      value={
                        comment.noteId === card._id ? comment.content : ""
                      }
                      onChange={(e) =>
                        setComment((prev) => ({
                          ...prev,
                          content: e.target.value,
                          noteId: card._id,
                        }))
                      }
                    />
                  </div>

                  <button
                    className="h-7 w-10 flex items-center justify-center bg-orange-600 text-white rounded-2xl text-sm cursor-pointer"
                    onClick={handleComment}
                  >
                    <FaArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteCard;
