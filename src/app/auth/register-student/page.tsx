'use client';
import Link from 'next/link';
import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const page = () => {
  return (
    <div className='h-screen flex'>
      {/* left side: picture */}
      <div className='w-1/2 m-5 overflow-hidden'>
        <img
          src="/Signup.png"
          alt="signup"
          className="w-full h-full object-contain py-5"
        />
      </div>

      {/*right side: form*/}
      <div className='w-1/2 flex justify-center item-center'>
        <div className='w-full flex flex-col justify-center items-center m-5 p-10 ml-0'>
          <form className='w-full max-w-md flex flex-col space-y-4'>
            {/* text */}
            <div>
              <h2 className='text-4xl font-bold mb-6'>Sign up Student</h2>
              <p className=' text-gray-600 mb-6'> Let's get you all st up so you can access your personal account</p>
            </div>

            {/*fname-lanme */}
            <div>
              <Box component="form" className="flex gap-4" sx={{'& > :not(style)': { mb: 0, },'& .MuiOutlinedInput-root': {
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
                <TextField label="First Name" variant="outlined" size="small" fullWidth/>
                <TextField label="Last Name" variant="outlined" type="text" size="small" fullWidth />
              </Box>
            </div>

            {/* email password confirmPassword */}
            <div>
              <div>
                <Box component="form" className='' sx={{'& > :not(style)': { mb: 2, },'& .MuiOutlinedInput-root': {
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
                    <TextField label="Email" variant="outlined" type="email" size="small" fullWidth/>
                    <TextField label="Password" variant="outlined" type="password" size="small" fullWidth/>
                    <TextField label="Confirm Password" variant="outlined" type="password" size="small" fullWidth/>
                </Box>
              </div>

              {/* Checkbox */}
              <div>
                <label>
                  <input type="checkbox" className='mr-1'/>
                  <span>I agree to all the  <span className='text-orange-500 cursor-pointer'>Terms</span> and <span className='text-orange-500 cursor-pointer'>Privacy Policies</span> </span>
                </label>
              </div>
            </div>

            {/* Submit button */}
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded mt-2">Create Account</button>
          </form>
          
          {/* Sign in link */}
          <p className="flex mt-6 text-sm text-center text-gray-700">
            <span className='mr-1'>Already have an account?</span>
            <Link href="/auth/login" className="text-orange-500  hover:text-orange-600">login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default page