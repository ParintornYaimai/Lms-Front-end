import { NotesIdResponse, NotesResponse,} from "@/types/noteType";
import apiClient from "./apiClient";


const getAllNote = async (): Promise<NotesResponse> => {
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/note`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

const getNotesById = async (id:string): Promise<NotesIdResponse> => {
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/note/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

const getNoteByFilter = async (tag:string, sortBy:string, author:string):Promise<NotesResponse> =>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/note/filter/?tag=${tag}&sortBy=${sortBy}&author=${author}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

const createNote = async (title:string, tag:string, description:string):Promise<NotesResponse> =>{
    try {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/note/create`,{title, tag, description});
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

const deleteNote = async(noteId: string)=>{
    try {
        const response = await apiClient.delete(`${process.env.NEXT_PUBLIC_API_BASE}/note/${noteId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export { getAllNote, getNotesById, getNoteByFilter, createNote, deleteNote}
