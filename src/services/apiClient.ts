import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useAuthStore } from '@/store/authStore';

// สร้าง instance ของ axios
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE , // ตั้งค่า base URL ของ API
  timeout: 10000, // ตั้ง timeout 10 วินาที
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // สำคัญถ้าใช้ refresh_token ใน cookie
})

// ขอ access-token ใหม่
export const refreshAccessToken = async () => {
  const setAccessToken = useAuthStore(state => state.setAccessToken);
  try{
    const response = await apiClient.post('/auth/refresh-token', {}, { withCredentials: true }); 
    setAccessToken(response.data.accessToken);
  }catch(error){
    console.error('Error refreshing access token:', error);
  }
};
// ขอเช็คว่าหมดอายหรือยัง ถ้าหมดอายุเเล้วจะไปขอ access-tokenใหม่
const checkTokenandRefreshAccessToken = async () => {
  const accessToken = useAuthStore(state=> state.accessToken)
  if(!accessToken) return

  const decodedToken = jwtDecode<{ exp: number }>(accessToken);
  const isTokenExpired = decodedToken && decodedToken.exp * 1000 < Date.now();

  if(isTokenExpired){
    await refreshAccessToken(); // ถ้า token หมดอายุ, ทำการรีเฟรช
  }
};

//interceptors จัดการเเนบ access-token ไปทุกคำขอ
apiClient.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('access-token')
    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

// interceptors จัดการ response error
axios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      await checkTokenandRefreshAccessToken();
      return axios(error.config); // ลองส่งคำขอใหม่หลังจากรีเฟรช
    }
    return Promise.reject(error);
  }
);


export default apiClient
