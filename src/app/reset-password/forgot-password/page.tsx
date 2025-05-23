'use client'
import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { IoIosArrowBack } from "react-icons/io";

const Forgotpassword = () => {
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
                <Link href='/auth/login' className='flex items-center' >
                  <IoIosArrowBack /> 
                Back to login</Link>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-6">Forgot your password</h1>
                <p className="mb-6 text-gray-600">Don't worry, happens to all of us. Enter your email below to recover your password</p>
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
              </Box>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded">Submit</button>
            </form>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="w-1/2 flex items-center justify-center m-6 ml-0 rounded-3xl overflow-hidden">
        <img 
          src="/Forgot.png" 
          alt="Secure login" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}

export default Forgotpassword
