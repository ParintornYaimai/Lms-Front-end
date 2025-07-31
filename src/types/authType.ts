
export interface User{
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    role: string
}


export interface LoginPayload {
  email: string;
  password: string;
}
export interface LoginResponse {
    success: boolean;
    access_token: string;
}


export interface LogoutResponse {
    success: boolean;
    message: string;
}









export interface registerStudentPayload {
    email: string;
    password: string;
}
export interface registerStudentResponse{
    success: boolean;
    message: string;
}



export interface registerTeacherPayload {
    email: string;
    password: string;
}
export interface registerTeacherResponse {
    success: boolean;
    message: string;
}
