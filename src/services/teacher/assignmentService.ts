import apiClient from "../apiClient";
import { AssignmentApiResponse, AssignmentDetailResponse, ResultResponse, UpdateScorePayload } from "@/types/teacher/assignmentType";

const getAllAssignment =async():Promise<AssignmentApiResponse>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/assignments/backoffice`);
        return response.data;
    } catch (error) {
        throw(error)
    }
}

const fetchAssignmentById =async(assignmentId: string):Promise<AssignmentDetailResponse>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/assignments/backoffice/${assignmentId}`);
        return response.data;
    } catch (error) {
        throw(error)
    }
}

const result =async(assignmentId: string):Promise<ResultResponse>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/assignments/backoffice/result/${assignmentId}`);
        return response.data;
    } catch (error) {
        throw(error)
    }
}

const savePoint =async(assignmentId:string, updates:UpdateScorePayload[]):Promise<any>=>{
    try {
        const response = await apiClient.patch(`${process.env.NEXT_PUBLIC_API_BASE}/assignments/backoffice`,{assignmentId,updates});
        return response.data;
    } catch (error) {
        throw(error)
    }
}

export {getAllAssignment, fetchAssignmentById, result, savePoint}