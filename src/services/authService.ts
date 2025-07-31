import { LoginPayload, LoginResponse, LogoutResponse, registerStudentPayload, registerStudentResponse, registerTeacherPayload, registerTeacherResponse } from "@/types/authType";
import axios from "axios";
import apiClient from "./apiClient";


export const authService = {
    login: async (payload: LoginPayload): Promise<LoginResponse> => {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/auth/sign-in`, payload);
        return response.data;
    },

    registerStudent: async (payload: registerStudentPayload): Promise<registerStudentResponse> => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/auth/sign-up`, payload);
        return response.data;
    },

    registerTeacher: async (payload: registerTeacherPayload): Promise<registerTeacherResponse> => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE}/auth/sign-up-teacher`, payload);
        return response.data;
    },

    logout: async (): Promise<LogoutResponse> => {
        const response = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/auth/sign-out`);
        return response.data;
    }
};