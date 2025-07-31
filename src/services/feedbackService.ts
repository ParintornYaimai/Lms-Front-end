import { CreateFeedbackResponse, FeedbackResponse } from "@/types/feedbackType";
import apiClient from "./apiClient";


const getAllfeedback = async (courseId: string): Promise<FeedbackResponse> => {
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/feedback/${courseId}`,);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const createFeedback = async(courseId: string, rating: number, text: string):Promise<CreateFeedbackResponse>=>{
    try {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/feedback`,{courseId, rating, text});
        return response.data;
    } catch (error) {
        throw error; 
    }
}


export { getAllfeedback, createFeedback}
