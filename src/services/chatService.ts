import { commnetResponse } from "@/types/commentType";
import apiClient from "./apiClient";
import { getAllChatResponse } from "@/types/chatType";
import { getAllFriendsResponse } from "@/types/friendType";


const getAllFriends = async ():Promise<getAllFriendsResponse> => {
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/chats/getAllFriends`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const getAllChat = async (): Promise<getAllChatResponse> => {
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/chats`);
        return response.data;
    } catch (error) {
        throw error;
    }
}


const createChat = async (receiverId:string): Promise<commnetResponse> => {
    try {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/chats/createChat/${receiverId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const createChatGroup = async (peopleId:string[]): Promise<commnetResponse> => {
    try {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/chats/createChatGroup`,{peopleId});
        return response.data;
    } catch (error) {
        throw error;
    }
}

const addMemberForGroup = async (groupChatId:string, peopleId: string[]): Promise<commnetResponse> => {
    try {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/chats/addMember`,{groupChatId,peopleId});
        return response.data;
    } catch (error) {
        throw error;
    }
}

const deleteChat = async (chatId:string): Promise<commnetResponse> => {
    try {
        const response = await apiClient.delete(`${process.env.NEXT_PUBLIC_API_BASE}/chats/${chatId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
export { getAllFriends, getAllChat, createChat, createChatGroup, addMemberForGroup, deleteChat}
