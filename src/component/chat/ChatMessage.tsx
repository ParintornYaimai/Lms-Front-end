import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MdOutlineAttachFile } from "react-icons/md";
import toast from "react-hot-toast";
import { getAllMessage, sendMessage } from "@/services/messageService";
import { Message } from "@/types/messageType";
import { useAuthStore } from "@/store/authStore";
import { SelectedChat } from "@/types/chatType";
import { useFile } from "@/hooks/useFile";
import { disconnectSocket, initiateSocketConnection } from "@/services/socket";

type Props ={
  selectChatId:SelectedChat | undefined;
  handleUpdateChat: (message:Message)=> void
}

const ChatMessage = ({selectChatId, handleUpdateChat}: Props) => {
  const [inputValue, setInputValue] = useState(""); //เก็บข้อความ
  const [message, setMessage] = useState<Message[]>([]); //เก็บข้อมูลเเชท
  const userId = useAuthStore.getState().user?.id || ""; //ดึงไอดี

  //ดึงข้อมูลเเชททั้งหมด
  useEffect(()=>{
    const fetchMessage =async()=>{
      try {
        if (!selectChatId?.chatId) return;
        const data = await getAllMessage(selectChatId.chatId);
        setMessage(data)
      } catch (error: any) {
        toast.error(error)
      }
    }
    fetchMessage();
  },[selectChatId])

  //ส่งข้อความ
  const handleSendMessage=async()=>{
    try {
      if (!selectChatId?.chatId) return;
      const data = await sendMessage(selectChatId?.chatId, selectChatId?.otherUser._id, inputValue);
      
      if(data) setInputValue("");
    } catch (error: any) {
      toast.error(error);
    }
  }

  //ดึงรูป
  const fileId = selectChatId?.otherUser.profilepicture.fileId || "";
  const { url } = useFile(fileId)

  //เข้าห้องเเชทเเละอัพเดทข้อความใหม่
  useEffect(() => {
    if(!userId || !selectChatId?.chatId) return;
    const socket = initiateSocketConnection(userId); 

    socket.emit("joinRoom", selectChatId.chatId, (response: any) => {
      if(response.success) {
        console.log("Joined room successfully",response);
      } else {
        console.error("Failed to join room:", response.message);
      }
    });

    socket.on("message:create", (newMessage: Message) => {
      setMessage((prev) => [...prev, newMessage]);
      handleUpdateChat(newMessage)
    });
    
    return () => {
      disconnectSocket();
    };
  }, [userId, selectChatId?.chatId]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // ฟังก์ชันเลื่อน scroll ลงล่างสุด
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  //จับการทำงาน
  useEffect(() => {
    scrollToBottom();
  }, [message]); 

  if (!selectChatId) return null;
  return (
    <div>
      {/* Header */}
      <div className="border-b border-gray-200 p-1">
        <div className="flex items-center gap-3">
          {url && 
          <Image
            src={url}
            alt="user"
            width={50}
            height={50}
            className="border border-gray-300 rounded-full"
          />}
          <div className="flex flex-col">
            <h1 className="text-md font-medium">{selectChatId?.otherUser.firstname} {selectChatId?.otherUser.lastname}</h1>
            <p className="text-sm text-gray-500 truncate max-w-[200px]">
              Active 9m ago
            </p>
          </div>
        </div>
      </div>
      {/* Header */}

      {/* message */}
      <div className="h-[600px] 2xl:h-[750px] overflow-y-auto p-2 space-y-4 bg-white overflow-auto no-scrollbar">
        <div className="flex-grow overflow-y-auto p-2 space-y-4 bg-white">
          {message?.map((msg) => {
            const isSender = msg.sender === userId;

            return isSender ? (
              <div key={msg._id} className="flex items-center gap-1 justify-end">
                <div className="bg-orange-600 text-white px-3 py-2 rounded-full max-w-[70%]">
                  <p className="text-sm">{msg.messageText}</p>
                </div>
              </div>
            ) : (
              <div key={msg._id} className="flex items-center gap-2">
                {
                  url && (
                    <Image
                      src={url}
                      alt="sender"
                      width={35}
                      height={35}
                      className="border border-gray-300 rounded-full"
                    />
                  )
                }
                <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-full max-w-[70%]">
                  <p className="text-sm">{msg.messageText}</p>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {/* message */}

      {/* controll */}
      <div className="border-t border-gray-200 px-3 py-2 2xl:py-5 flex items-center gap-2">
        <button className="text-gray-500 hover:text-orange-600">
          <MdOutlineAttachFile size={22} />
        </button>

        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          onKeyDown={(e) => {
            if(e.key === "Enter"){
              handleSendMessage()
              // e.currentTarget.value = "";
              // console.log('enter')
            }
          }}
        />

        <button
          className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 text-sm"
          onClick={() => {
            handleSendMessage()
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatMessage;
