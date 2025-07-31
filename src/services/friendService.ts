import { GetAllFriendRequestsResponse, SearchResponse } from "@/types/friendType";
import apiClient from "./apiClient";


const getAllFriendsReq = async ():Promise<GetAllFriendRequestsResponse> => {
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/friends/getAll`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const searchFriends =async(email: string):Promise<SearchResponse>=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/friends/search/${email}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const sendReq = async(toUserId: string)=>{
    try {
        const response = await apiClient.get(`${process.env.NEXT_PUBLIC_API_BASE}/friends/search/${toUserId}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const AcceptFriendReq = async (Id: string):Promise<GetAllFriendRequestsResponse> => {
    try {
        const response = await apiClient.patch(`${process.env.NEXT_PUBLIC_API_BASE}/friends/acceptReq/${Id}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const RejectFriendReq = async (Id: string):Promise<GetAllFriendRequestsResponse> => {
    try {
        const response = await apiClient.delete(`${process.env.NEXT_PUBLIC_API_BASE}/friends/cancleReq/${Id}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
}

export { getAllFriendsReq, AcceptFriendReq, RejectFriendReq, searchFriends, sendReq}
