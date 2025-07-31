import apiClient from "./apiClient";
import { CategoriesResponse } from "@/types/filterType";


const getCate = async (): Promise<CategoriesResponse> => {
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/enrolled/cate`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export { getCate }
