// useInitializeAuth.ts
'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import apiClient from '@/services/apiClient';
import { jwtDecode } from 'jwt-decode';
import toast from 'react-hot-toast';

export const useInitializeAuth = () => {
  const setAccessToken = useAuthStore(state => state.setAccessToken);
  const setUser = useAuthStore(state => state.setUser);

  useEffect(() => {
    const refreshAccessToken = async () => {
        try {
          const res = await apiClient.post(`${process.env.NEXT_PUBLIC_API_BASE}/auth/refresh-token`);
          setAccessToken(res.data.access_token);
          setUser(jwtDecode(res.data.access_token));
        } catch (err: any) {
          toast.error(err)
        }
    };

    refreshAccessToken();
  }, []);
};