"use client";
import React, { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaUserFriends } from "react-icons/fa";
import FriendsList from "@/component/chat/FriendsList";
import AddFriendsList from "@/component/chat/AddFriendsList";
import ChatMessage from "@/component/chat/ChatMessage";
import toast from "react-hot-toast";
import { getAllChat, getAllFriends } from "@/services/chatService";
import { ChatData, otheruser, SelectedChat } from "@/types/chatType";
import { getAllFriendsReq, searchFriends, sendReq } from "@/services/friendService";
import { Friend, FriendRequest, SearchResult } from "@/types/friendType";
import { FaPlus } from "react-icons/fa";
import { useFile } from "@/hooks/useFile";
import Image from "next/image";
import { Message } from "@/types/messageType";

const Chat = () => {
  const [mode, setMode] = useState<"inbox" | "friend">("inbox");
  const [allChats, setAllChats] = useState<ChatData[]>([]); //เก็บเชททั้งหมเ
  const [allFriends, setAllFriends] = useState<Friend[]>([]); //เก็บเพื่อนทั้งหมด
  const [allFriendsReq, setAllFriendsReq] = useState<FriendRequest[]>([]); //เก็บคำขอเพื่อนทั้งหมด
  const [selectChatId, setSelectChatId] = useState<SelectedChat | undefined>(undefined); //เก็บข้อมูลผู้ใช้ที่เลือก
  const [searchText, setSearchText] = useState<string>(""); //เก็บค่าที่รับมา
  const [debouncedText, setDebouncedText] = useState(""); //หน่วงเวลา
  const [searchFriendData, setSearchFriendData] = useState<SearchResult[] | undefined>(); //เก็บข้อมูลที่ได้จากการค้นหาเพื่อน
  const [newMessage,setNewMessage] = useState<Message>();

  useEffect(() => {
    if (mode === "inbox") {
      const fetchGetAllChats = async () => {
        try {
          const response = await getAllChat();
          setAllChats(response.chatData);
        } catch (error: any) {
          toast.error(error);
        }
      };

      fetchGetAllChats();
    } else {
      const fetchGetAllFriendsAndFriendsReq = async () => {
        try {
          const [friendsResponse, friendReqResponse] = await Promise.all([
            getAllFriends(),
            getAllFriendsReq(),
          ]);

          setAllFriends(friendsResponse.myFriends); //เพื่อนทั้งหมด
          setAllFriendsReq(friendReqResponse.getAllData); //คำขอเป็นเพื่อน
        } catch (error: any) {
          toast.error(error);
        }
      };

      fetchGetAllFriendsAndFriendsReq();
    }
  }, [mode]);

  //เซ็ตค่าที่ส่งมา
  const handleSelectedUser = (chatId: string, otherUser: otheruser) => {
    setSelectChatId({ chatId, otherUser });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(searchText);
    }, 1500);

    return () => clearTimeout(handler);
  }, [searchText]);

  useEffect(() => {
    if (debouncedText.trim() !== "") {
      if (mode === "inbox") {
        const fetchDataSearchChat = async () => {
          try {
            console.log("search chat by name is active", debouncedText);
          } catch (error: any) {
            toast.error(error);
          }
        };

        fetchDataSearchChat();
      } else {
        const fetchDataSearchFriendByEmailForAddFriend = async () => {
          try {
            const data = await searchFriends(debouncedText);

            setSearchFriendData(data.searchData);
          } catch (error: any) {
            toast.error(error);
          }
        };

        fetchDataSearchFriendByEmailForAddFriend();
      }
    }
  }, [debouncedText]);
  
  const handleAddFriend=async(toUserId: string)=>{
    try {
      const data = await sendReq(toUserId);

    } catch (error:any) {
      toast.error(error)
    }
  }

  const handleUpdateChat=(Message:Message)=>{
    setNewMessage(Message)
  }

  const { url } = useFile(searchFriendData?.profilepicture.fileId);
  return (
    <div className="w-full">
      <div className="flex items-center overflow-hidden">
        {/* Left panel */}
        <div className="w-1/3 lg:h-[715px] 2xl:h-[884px] border-r border-gray-200 overflow-y-auto overflow-x-hidden">
          <div>
            <div className="flex items-start flex-col">
              <h1 className="text-2xl font-semibold ml-2">Chats</h1>

              {/* Search */}
              <div className="my-1 w-full ml-2">
                <div className="relative w-full max-w-md">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <HiMagnifyingGlass className="w-5 h-5 text-orange-600" />
                  </span>
                  <input
                    type="text"
                    placeholder={`${
                      mode === "inbox"
                        ? "Search chats by name"
                        : "Add friends by email"
                    }`}
                    className="w-full pl-10 pr-10 py-2 rounded-full focus:outline-none bg-gray-100 2xl:w-[540px]"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
                {searchFriendData && (
                  <div className=" mr-2">
                    <div className="flex items-center justify-between gap-3 p-2 rounded-lg ">
                      <div className="flex items-start gap-3 p-1 rounded-lg ">
                        {url && (
                          <Image
                            src={url}
                            alt={""}
                            width={30}
                            height={30}
                            className="border border-gray-300 rounded-full"
                          />
                        )}
                        <div className="flex flex-col">
                          <h1 className="text-md font-medium">
                            {searchFriendData?.firstname}{" "}
                            {searchFriendData?.lastname}
                          </h1>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div
                          className="flex items-center justify-center text-green-700 bg-green-100 w-7 h-7 rounded-full cursor-pointer"
                          onClick={() => handleAddFriend(searchFriendData._id)}
                        >
                          <FaPlus size={15} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mode */}
              <div className="flex items-center gap-3 m-2 ">
                <div className="p-1 bg-blue-100 rounded-full">
                  <button
                    className={`cursor-pointer text-gray-400 text-sm px-2 font-semibold ${
                      mode === "inbox" ? "text-orange-600" : ""
                    }`}
                    onClick={() => {
                      setMode("inbox"), setSearchText("");
                    }}
                  >
                    Inbox
                  </button>
                </div>
                <div className="p-1 bg-blue-100 rounded-full">
                  <button
                    className={`flex items-center cursor-pointer gap-1 text-gray-400 text-sm px-2 py-[2px] font-semibold ${
                      mode === "friend" ? "text-orange-600" : ""
                    }`}
                    onClick={() => {
                      setMode("friend"), setSearchText("");
                    }}
                  >
                    <FaUserFriends size={20} />
                    Friend
                  </button>
                </div>
              </div>

              {/* Friends list */}
              {mode === "inbox" ? (
                <FriendsList
                  allChats={allChats}
                  onSendData={handleSelectedUser}
                  newMessage={newMessage}
                />
              ) : (
                <AddFriendsList allFriendsReq={allFriendsReq} />
              )}
            </div>
          </div>
        </div>

        {/* Right panel messasge*/}
        <div className="w-2/3 lg:h-[715px] 2xl:h-[884px]">
          <ChatMessage selectChatId={selectChatId}  handleUpdateChat={handleUpdateChat} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
