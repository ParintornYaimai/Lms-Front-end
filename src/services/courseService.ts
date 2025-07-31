import { CourseResponse, EnrolledResponse, EnrollmentResponse } from "@/types/courseType";
import apiClient from "./apiClient";


const getAllCourse=async(): Promise<EnrolledResponse>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/courses`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const launchCourse =async(coueseId: string):Promise<EnrollmentResponse>=>{
    try {
        const response = await apiClient.patch(`${process.env.NEXT_PUBLIC_API_BASE}/courses/${coueseId}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const getInProgressCourses=async(coueseId: string, enrolledId: string ):Promise<CourseResponse>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/courses/getInProgressCourses/${coueseId}/${enrolledId}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

export {getAllCourse, launchCourse, getInProgressCourses}