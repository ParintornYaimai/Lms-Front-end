import apiClient from "./apiClient";

const getProfile=async():Promise<any>=>{
    try{
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/user`);
        return response.data;
    }catch(error){
        throw error; 
    }
}


const update=async(firstName: string, lastName: string, message: string, language: string, dateFormat: string, timeFormat: string, country: string, timeZone: string , profilePicture: string):Promise<any>=>{
    try{
        const response = await apiClient.patch(`${process.env.NEXT_PUBLIC_API_BASE}/user/update`,{firstName, lastName, message, language, dateFormat, timeFormat, country, timeZone, profilePicture});
        return response.data;
    }catch(error){
        throw error; 
    }
}

const deleteAccount=async():Promise<any>=>{
    try{
        const response = await apiClient.patch(`${process.env.NEXT_PUBLIC_API_BASE}/user/delete`);
        return response.data;
    }catch(error){
        throw error; 
    }
}

export {update, deleteAccount, getProfile,};