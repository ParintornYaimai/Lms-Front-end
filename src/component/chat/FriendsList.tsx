"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChatData, otheruser } from "@/types/chatType";
import { useFile } from "@/hooks/useFile";
import { Message } from "@/types/messageType";

type Props = {
  allChats: ChatData[];
  newMessage: Message | undefined
  onSendData: (chatId: string, otherUser: otheruser) => void;
};
const FriendsList = ({ allChats, onSendData, newMessage}: Props) => {
    const [chats, setChats] = useState<ChatData[]>(allChats);

    // ดึงรูป
    const fileId = allChats[0]?.otherUser.profilepicture?.fileId || "";
    const { url } = useFile(fileId);

    useEffect(() => {
        setChats(allChats);
    }, [allChats]);

    useEffect(()=>{
        if (!newMessage) return;

        setChats((prevChat) =>
            prevChat.map((chat) =>
                chat._id === newMessage.chatroom
                    ? {
                        ...chat,
                        latestMessage: {
                            ...chat.latestMessage,
                            messageText: newMessage.messageText,
                            createdAt: newMessage.createdAt,
                        },
                        }
                    : chat
                )
            );
    },[newMessage])

    return (
        <div className="w-full overflow-y-auto lg:h-[585px] 2xl:h-[755px]">
            <div className="w-full space-y-1 mt-2">
                {chats.map((items) => {
                return (
                    <div
                        key={items._id}
                        className="flex items-start gap-3 p-2 hover:bg-orange-100 rounded-lg cursor-pointer"
                        onClick={() => {
                            onSendData(items._id, items.otherUser)
                        }}
                    >
                        {url && (
                            <Image
                                src={url}
                                alt={items.otherUser.firstname}
                                width={50}
                                height={50}
                                className="border border-gray-300 rounded-full"
                            />
                        )}
                        <div className="flex flex-col">
                            <h1 className="text-md font-medium">
                                {items.otherUser?.firstname} {items.otherUser?.lastname}
                            </h1>
                            <p className="text-sm text-gray-500 truncate max-w-[200px]">
                                {items.latestMessage.messageText}
                            </p>
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
    );
};

export default FriendsList;
