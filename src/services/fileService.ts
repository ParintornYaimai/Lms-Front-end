
import { UploadResponse } from "@/types/teacher/courseType";
import apiClient from "./apiClient";
import axios from "axios";


const uploadService = async (fileOrFiles: File | File[]): Promise<UploadResponse> => {
    try {
        const formData = new FormData();
        
        if(Array.isArray(fileOrFiles)){
            fileOrFiles.forEach((file) => {
                formData.append("files", file);
            });
        }else{
            formData.append("files", fileOrFiles);
        } 

        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/uploads`,formData,{
            headers: {
            "Content-Type": "multipart/form-data", 
            },
        });

        return response.data;
    } catch (error) {
        throw error; 
    }
}

const downloadService = async (fileId: string) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE}/download/${fileId}`,{
            responseType: 'blob',
            headers: {
                'Accept': 'application/octet-stream, image/*, video/*, application/*',
            }, 
        });

        return response.data;
    } catch (error) {
        throw error; 
    }
}



export { uploadService, downloadService}
