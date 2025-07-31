import { AssignmentsApiResponse, ResponseUploadFileAssignment } from "@/types/assignment";
import apiClient from "./apiClient";

const getAssignment=async( limit: number, page:number , selectedDate:string, selectedStatus:string):Promise<AssignmentsApiResponse>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/assignments/?page=${page}&limit=${limit}&date=${selectedDate}&status=${selectedStatus}`,);
        return response.data;
    } catch (error) {
        throw error; 
    }
}
// courseId:string,
const sendAssignment= async( assignmentId:string, responseUploadFile:ResponseUploadFileAssignment[])=>{
    try {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/assignments`,{ assignmentId, files:responseUploadFile});
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const create=async()=>{
    try {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/assignments/backoffice`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export {getAssignment, sendAssignment, create};