import { commnetResponse } from "@/types/commentType";
import apiClient from "./apiClient";


const createComment = async (content:string, note:string): Promise<commnetResponse> => {
    try {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/comment`,{content,note});
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const deleteComment = async (commentId:string): Promise<commnetResponse> => {
    try {
        const response = await apiClient.delete(`${process.env.NEXT_PUBLIC_API_BASE}/comment/${commentId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export { createComment, deleteComment}
