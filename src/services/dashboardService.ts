import { AssignmentProgressByCategory, FinishAssignmentAggregationResult, RecentEnrolledCourse, ResourceCourse } from "@/types/dashboard";
import apiClient from "./apiClient";


const finisAssignment=async():Promise<FinishAssignmentAggregationResult>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/dashboard/finishAssignment`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const Resources=async():Promise<ResourceCourse>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/dashboard/latestDocuments`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const recentEnrolled=async():Promise<RecentEnrolledCourse[]>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/dashboard/recentEnrolled`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const taskProgress=async():Promise<AssignmentProgressByCategory[]>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/dashboard/taskprogress`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}


export {finisAssignment, Resources, recentEnrolled, taskProgress}









