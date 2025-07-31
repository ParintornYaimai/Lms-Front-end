'use client'; 

import { authService } from '@/services/authService';
import { useMutation } from "@tanstack/react-query";
import { LoginPayload, LoginResponse, LogoutResponse } from '@/types/authType';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { jwtDecode } from 'jwt-decode';

export function useLoginMutation() {
  const router = useRouter();
  const setAccessToken = useAuthStore(state => state.setAccessToken);
  const setUser = useAuthStore(state => state.setUser); 

  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: authService.login,
    onSuccess: (data) => {
      setAccessToken(data.access_token);
      setUser(jwtDecode(data.access_token)); 
      router.push('/dashboard');
    },
    onError: (error) => {
      console.error("Login failed:", error);
    }
  });
}

export function useLogOutMutation() {
    const setAccessToken = useAuthStore(state => state.setAccessToken);

    return useMutation<LogoutResponse, Error>({
        mutationFn: authService.logout,
            onSuccess: (data) => {
            setAccessToken('');
        },
        onError: (error) => {
            console.error("Login failed:", error);
        }
    });
}


