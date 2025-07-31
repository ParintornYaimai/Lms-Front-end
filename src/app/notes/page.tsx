"use client";
import React, { useEffect, useState } from "react";
import { CgSortAz } from "react-icons/cg";
import { BiFilterAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import AddNoteModal from "@/component/note/AddNoteModal";
import Page from "./[notesId]/page";
import SortBy from "@/component/note/SortBy";
import Filter from "@/component/note/Filter";
import { getAllNote, getNoteByFilter } from "@/services/noteServices";
import NoteCard from "@/component/note/NoteCard";
import type { Note, NotesResponse } from "@/types/noteType";
import { useAuthStore } from "@/store/authStore";
import { disconnectSocket, initiateSocketConnection } from "@/services/socket";

const Note = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [activeComponent, setActiveComponent] = useState<"sort" | "filter" | "addnote" | null>(null);
  const [isModalOpenPage, setisModalOpenPage] = useState(false); //เปิดปิดหน้าไอดี
  const [notes, setNotes] = useState<Note[]>([]); //เก็บโน็ตทั้งหมด
  const [selecFilterCategory, setSelecFilterCategory] = useState<string>(""); //เก้บฟิลเตอร์
  const [sortBy, setSortBy] = useState<string>(""); //เก็บ sortby
  const [selectedNoteId, setSelectedNoteId] = useState<string>(""); //เก็บโน๊ตไอดีที่จะเปิด


  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const userId = useAuthStore.getState().user?.id || "";
        
        if (activeTab === "ALL" && selecFilterCategory === "" && sortBy === "") {
          const data: NotesResponse = await getAllNote();
          setNotes(data.data);
        } else {
          const data: NotesResponse = await getNoteByFilter(
            selecFilterCategory,
            sortBy,
            activeTab === "MyNote" ? userId : "" 
          );
          setNotes(data.data);
        }
      } catch (err: any) {
        alert(err)
      }
    };
    fetchNotes();
  }, [activeTab, selecFilterCategory, sortBy]);

  const userId = useAuthStore((state)=> state.user?.id) as string

  useEffect(() => {
    if (!userId) return;
    const socket = initiateSocketConnection(userId); 
  
    socket.on("note:create", (newNote) => {
      console.log("New note received:", newNote);
      setNotes(prevNotes => [...prevNotes, newNote]);
    });

    return () => {
      disconnectSocket();
    };
  }, [userId]);

  //จัดการอัพเดทข้อมูลกรองไอดีที่รับมาจากหน้า id เอาออก
  const handleDeleteNote = (deletedNoteId: string) => {
    setNotes(prevNotes => prevNotes.filter(note => note._id !== deletedNoteId));
  };
 
  return (
    <div className="flex flex-col overflow-hidden">
      <div>
        {/* header */}
        <div className="flex items-center justify-between px-5 border-b border-gray-300">
          <h1 className="text-4xl text-orange-600 font-semibold">Notes</h1>
          <div className="flex items-center gap-3 p-3">
            {[
              {
                icon: <CgSortAz size={20} />,
                text: "Sort By",
                onClick: () => {
                  setActiveComponent(prev => prev === "sort" ? null : "sort");
                },
              },
              {
                icon: <BiFilterAlt size={20} />,
                text: "Filter",
                onClick: () => {
                  setActiveComponent(prev => prev === "filter" ? null : "filter");
                },
              },
              {
                icon: <FaPlus size={20} />,
                text: "Add Notes",
                onClick: () => {
                  setActiveComponent(prev => prev === "addnote" ? null : "addnote");
                },
              },
            ].map(({ icon, text, onClick }, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center space-x-2 cursor-pointer border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white duration-200 ease-in-out px-2 py-2 rounded-sm min-w-[120px]"
                onClick={onClick}
              >
                <div>{icon}</div>
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-start border-b border-gray-200">
          {["ALL", "MyNote"].map((tab, i) => (
            <div
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`px-7 py-2 cursor-pointer text-sm md:text-base font-medium border-b-3 
                ${
                  activeTab === tab
                    ? "border-orange-600"
                    : "border-transparent hover:text-orange-500 hover:duration-100 hover:ease-in-out"
                }
              `}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* card + loading */}
        <NoteCard
          data={notes}
          setisModalOpenPage={setisModalOpenPage}
          setSelectedNoteId={setSelectedNoteId}
        />
        <Page
          handleDeleteNote={handleDeleteNote}
          isModalOpenPage={isModalOpenPage}
          onClose={() => setisModalOpenPage(false)}
          selectedNoteId={selectedNoteId}
        />
        <AddNoteModal
          isOpen={activeComponent === "addnote"}
          onClose={() => setActiveComponent(null)}
        />
        <SortBy
          isOpen={activeComponent === "sort"}
          onClose={() => setActiveComponent(null)}
          setSortBy={setSortBy}
        />
        <Filter
          isOpen={activeComponent === "filter"}
          onClose={() => setActiveComponent(null)}
          setSelecFilterCategory={setSelecFilterCategory}
          selecFilterCategory={selecFilterCategory}
        />
      </div>
    </div>
  );
};

export default Note;
