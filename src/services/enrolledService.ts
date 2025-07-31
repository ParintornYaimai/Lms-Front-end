import apiClient from "./apiClient";
import { CourseResponse, enrolleResponse } from "@/types/enrolleType";


const getAllEnrolle= async (sortBy:string, category:string[], page:number, limit:number) : Promise<enrolleResponse> => {
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/enrolled?category=${category}&sortBy=${sortBy}&page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const getEnrolleById = async(enrollId: string): Promise<CourseResponse> =>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/enrolled/${enrollId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

const enrolledCourse =async(enrollId: string)=>{
    try {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/enrolled/${enrollId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export { getAllEnrolle, getEnrolleById, enrolledCourse }
