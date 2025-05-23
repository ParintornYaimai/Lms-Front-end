'use client'
import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IoIosArrowBack } from "react-icons/io";


const Verify = () => {
  return (
    <div className="h-screen flex">
      {/* Left side: Login form */}
      <div className="w-1/2 flex justify-center items-center px-6">
        <div className='w-full flex flex-col justify-center h-[95%]'>
          <div className='flex justify-center items-center'>
            <form className="w-full max-w-lg space-y-4">
              <div>
                <Link href='/auth/login' className='flex items-center' >
                  <IoIosArrowBack /> 
                Back to login</Link>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-6">Verify code</h1>
                <p className="mb-6 text-gray-600">An authentication code has been sent to your email</p>
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
                <TextField label="Enter Code" variant="outlined" size="small"  type='password' fullWidth />
              </Box>
              <div className="flex items-center text-sm mt-1"> Didn't receive a code?   
                <Link href="#" className="ml-1 text-orange-500  hover:text-orange-600">
                  Resend
                </Link>
              </div>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">Verify</button>
            </form>
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

export default Verify
