"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaRedo } from "react-icons/fa";

type NotificationItem = {
  id: number;
  type: "success" | "reset" | "message";
  title: string;
  description: string;
  time: string;
  avatar?: string;
};

const Notification: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const notifications: NotificationItem[] = [
    {
      id: 1,
      type: "success",
      title: "File uploaded",
      description: "Your file has successfully been uploaded",
      time: "1 day",
    },
    {
      id: 2,
      type: "reset",
      title: "Password reset",
      description: "Your password has been restored successfully",
      time: "4 days",
    },
    {
      id: 3,
      type: "message",
      title: "Papaya pokpok",
      description: "Hey, can you check the latest documents",
      time: "1 day",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 4,
      type: "message",
      title: "Papaya pokpok",
      description: "PFA .FIG file with the documents containing...",
      time: "4 days",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 5,
      type: "message",
      title: "Mango Man",
      description: "Check out this funny meme I found!",
      time: "5 days",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
    {
      id: 6,
      type: "message",
      title: "Papaya pokpok",
      description: "Hey, can you check the latest documents",
      time: "1 day",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 7,
      type: "message",
      title: "Papaya pokpok",
      description: "PFA .FIG file with the documents containing...",
      time: "4 days",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      id: 8,
      type: "message",
      title: "Mango Man",
      description: "Check out this funny meme I found!",
      time: "5 days",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
  ];

  const visibleNotifications = expanded
    ? notifications
    : notifications.slice(0, 4);

  return (
    <motion.div
      className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`transition-all duration-300 ${
          expanded
            ? "max-h-[500px] overflow-y-auto" // <-- เพิ่มตรงนี้
            : ""
        }`}
      >
        {visibleNotifications.map((item) => (
          <div
            key={item.id}
            className={`flex items-start gap-4 px-4 py-4 ${
              item.type === "reset" ? "bg-gray-50" : ""
            }`}
          >
            {/* ไอคอนหรือ avatar */}
            {item.type === "success" && (
              <div className="text-green-400 mt-1">
                <FaCheckCircle size={22} />
              </div>
            )}
            {item.type === "reset" && (
              <div className="text-orange-300 mt-1">
                <FaRedo size={20} />
              </div>
            )}
            {item.type === "message" && item.avatar && (
              <img
                src={item.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            )}

            {/* เนื้อหา */}
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <span className="text-sm text-gray-400 whitespace-nowrap">
                  {item.time}
                </span>
              </div>
              <p className="text-sm text-gray-600 truncate line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ปุ่ม View All / Collapse */}
      {notifications.length > 4 &&
        !expanded && ( // เพิ่ม !expanded ตรงนี้
          <div
            className="text-center text-orange-600 font-semibold text-sm py-3 border-t cursor-pointer hover:bg-orange-50"
            onClick={() => setExpanded(true)} // เปลี่ยนให้กดแล้วแค่ขยาย ไม่ต้อง toggle
          >
            View All
          </div>
        )}
    </motion.div>
  );
};

export default Notification;
