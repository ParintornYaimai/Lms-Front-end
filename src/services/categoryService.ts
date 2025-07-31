import { CategoryResponse, SubCategoryResponse } from "@/types/categoryType";
import apiClient from "./apiClient";

const getCategory=async(): Promise<CategoryResponse>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/enrolled/cate`);
        return response.data;
    } catch (error) {
        throw(error)
    }
}

const getSubCategory=async(id:string): Promise<SubCategoryResponse>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/enrolled/subcate/${id}`);
        return response.data;
    } catch (error) {
        throw(error)
    }
}


export {getCategory, getSubCategory}