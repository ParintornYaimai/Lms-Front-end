import apiClient from "./apiClient";
import { Resource } from "@/types/resourceType";

const getResource=async():Promise<Resource>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/resources`,);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

export {getResource, };