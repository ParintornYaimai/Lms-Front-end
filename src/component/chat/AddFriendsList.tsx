import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import Image from 'next/image';
import { FriendRequest } from "@/types/friendType";
import { useFile } from "@/hooks/useFile";
import toast from "react-hot-toast";
import { AcceptFriendReq, RejectFriendReq } from "@/services/friendService";

type Props ={
  allFriendsReq:FriendRequest[]
}
const AddFriendsList = ({allFriendsReq}:Props) => {
  const handleAcceptFriends=async(id:string)=>{
    try {
      await AcceptFriendReq(id);
    } catch (error: any) {
      toast.error(error)
    }
  }

  const handleRejectFriends=async(id:string)=>{
    try {
      await RejectFriendReq(id);
    } catch (error: any) {
      toast.error(error)
    }
  }

  return (
    <div className="w-full overflow-y-auto lg:h-[585px] 2xl:h-[755px]">
      <div className="w-full space-y-1 mt-2 ">
        {allFriendsReq.map((item) => {
          const { url, loading, error } = useFile(item.fromUserId.profilepicture.fileId || "");
          return (
            <div
              className="flex items-center justify-between gap-3 p-2 rounded-lg "
              key={item._id}
            >
              <div className="flex items-start gap-3 p-2 rounded-lg ">
                { url && 
                  <Image
                    src={url}
                    alt={item.fromUserId.firstname}
                    width={50}
                    height={50}
                    className="border border-gray-300 rounded-full"
                  />}
                <div className="flex flex-col">
                  <h1 className="text-md font-medium">{item.fromUserId.firstname} {item.fromUserId.lastname}</h1>
                </div>
              </div>
              {
                item.status === 'accepted' ? (<></>) :(
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center text-green-700 bg-green-100 w-10 h-10 rounded-full cursor-pointer"
                      onClick={() => handleAcceptFriends(item._id)}
                    >
                      <FaRegCircleCheck size={20} />
                    </div>
                    <div
                      className="flex items-center justify-center text-red-700 bg-red-100 w-10 h-10  rounded-full cursor-pointer"
                      onClick={() => handleRejectFriends(item.fromUserId._id)}
                    >
                      <MdOutlineCancel size={25} />
                    </div>
                  </div>
                )
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddFriendsList;
