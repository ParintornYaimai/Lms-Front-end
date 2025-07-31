import { CourseApiResponse, CreateCourseResponse } from "@/types/teacher/courseType";
import apiClient from "../apiClient";

const createCourse =async(courseData: any):Promise<CreateCourseResponse>=>{
    try {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/courses/backoffice`,courseData);
        return response.data;
    } catch (error) {
        throw(error)
    }
}
const getAllCourse =async():Promise<CourseApiResponse>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/courses/backoffice`);
        return response.data;
    } catch (error) {
        throw(error)
    }
}

export {createCourse, getAllCourse}