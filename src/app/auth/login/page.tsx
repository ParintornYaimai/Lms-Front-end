'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useLoginMutation } from '@/hooks/useLogin';
import { useAuthStore } from '@/store/authStore';

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginMutation = useLoginMutation();
  const accessToken = useAuthStore(state => state.accessToken);

  const handleLogin = () => {
    loginMutation.mutate({ email, password });
  };
 
  return (
    <div className="h-screen flex">
      <div className="w-1/2 flex justify-center items-center px-6">
        <div className='w-full flex flex-col h-[95%]'>
          <div>
            <img src="/EduwingLogo2.png" alt="EduWing Logo" className="w-96 object-contain"/>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <form className="w-full max-w-lg space-y-4" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              <div>
                <h1 className="text-4xl font-bold mb-6">Login</h1>
                <p className="mb-6 text-gray-600">Login to access your EduWing account</p>
              </div>
              <Box component="div" sx={{'& > :not(style)': { mb: 1 },'& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'black' },
                    '&:hover fieldset': { borderColor: 'gray' },
                    '&.Mui-focused fieldset': { borderColor: 'gray' }
                  },
                }}
              >
                <TextField label="Email" variant="outlined" size="small" color="info"  fullWidth 
                  value={email} onChange={(e) => setEmail(e.target.value)} 
                />
                <TextField label="Password" variant="outlined" type="password" size="small" fullWidth 
                  value={password} onChange={(e) => setPassword(e.target.value)} 
                />
              </Box>

              <div className="flex items-center justify-between text-sm mt-1">
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <Link href="/reset-password/forgot-password" className="text-orange-500 hover:text-orange-600">
                  Forgot Password
                </Link>
              </div>

              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">
                {loginMutation.isPending ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="mt-6 text-sm text-center text-gray-700">
              Wanna be a Teacher or Student?<br />
              <Link href="/auth/register-teacher" className="text-orange-500  hover:text-orange-600">Sign up for Teacher</Link>
              <span> | </span>
              <Link href="/auth/register-student" className="text-orange-500  hover:text-orange-600">Sign up for Student</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center m-6 ml-0 rounded-3xl overflow-hidden">
        <img src="/Login.png" alt="Secure login" className="w-full h-auto object-cover" />
      </div>
    </div>
  )
}

export default LoginPage
