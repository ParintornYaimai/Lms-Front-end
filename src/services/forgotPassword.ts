import { ForgotPasswordResponse } from "@/types/forgotPassword";
import apiClient from "./apiClient";
import axios from "axios";


const sendEmail= async(email: string):Promise<ForgotPasswordResponse> =>{
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/auth/sendOtp`,{email});
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const sendOtp= async(otp: string):Promise<ForgotPasswordResponse> =>{
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/auth/verifyOtp`,{otp});
        return response.data;
    } catch (error) {
        throw error; 
    }
}

const setPassword= async(newPassword: string):Promise<any> =>{
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/auth/sendOtp`,{newPassword});
        return response.data;
    } catch (error) {
        throw error; 
    }
}


export {sendEmail, sendOtp, setPassword};