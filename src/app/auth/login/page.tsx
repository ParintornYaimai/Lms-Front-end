'use client'
import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const LoginPage = () => {
  return (
    <div className="h-screen flex">
      {/* Left side: Login form */}
      <div className="w-1/2 flex justify-center items-center px-6">
        <div className='w-full flex flex-col h-[95%]'>
          <div>
            <img src="/EduwingLogo2.png" alt="EduWing Logo" className="w-96 object-contain"/>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <form className="w-full max-w-lg space-y-4">
              <div>
                <h1 className="text-4xl font-bold mb-6">Login</h1>
                <p className="mb-6 text-gray-600">Login to access your EduWing account</p>
              </div>
              <Box component="form" sx={{'& > :not(style)': { mb: 1, },'& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'black', 
                    },
                    '&:hover fieldset': {
                      borderColor: 'gray', 
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'gray', 
                    }
                  },
                }}
              >
                <TextField label="Email" variant="outlined" size="small" color="info"  fullWidth />
                <TextField label="Password" variant="outlined" type="password" size="small" fullWidth />
              </Box>
              <div className="flex items-center justify-between text-sm mt-1">
                <label className="flex items-center gap-1">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <Link href="#" className="text-orange-500  hover:text-orange-600">
                  Forgot Password
                </Link>
              </div>

              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">Login</button>
            </form>
            <p className="mt-6 text-sm text-center text-gray-700">
              Wanna be a Teacher or Student?<br />
              <Link href="#" className="text-orange-500  hover:text-orange-600">Sign up for Teacher</Link>
              <span> | </span>
              <Link href="#" className="text-orange-500  hover:text-orange-600">Sign up for Student</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-1/2 flex items-center justify-center m-6 ml-0 rounded-3xl overflow-hidden">
        <img 
          src="/Login.png" 
          alt="Secure login" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}

export default LoginPage
