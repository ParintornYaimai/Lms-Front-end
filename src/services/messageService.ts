import { Message } from "@/types/messageType";
import apiClient from "./apiClient";

const getAllMessage = async(chatId: string):Promise<Message[]>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/messages/${chatId}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const sendMessage = async(chatroom: string, receiver: string, messageText: string):Promise<Message>=>{
    try {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/messages`,{
            chatroom,receiver,messageText
        });
        return response.data;
    } catch (error) {
        throw error; 
    }
}
export { getAllMessage, sendMessage }
