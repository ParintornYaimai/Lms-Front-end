'use client'
import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import toast from 'react-hot-toast';
import { setPassword } from '@/services/forgotPassword';


const Setpassword = () => {
  const [newPassword, setNewPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  const handleSubmit=async()=>{

    if(newPassword === rePassword){
      try{
        const response = await setPassword(rePassword)

        if(response.success) alert('Password change completed')
      }catch(error:any) {
        toast.error(error)
      }
    }else{
      alert("Passwords don't match")
    }

  }
  return (
    <div className="h-screen flex">
      {/* Left side: Login form */}
      <div className="w-1/2 flex justify-center items-center px-6">
        <div className='w-full flex flex-col justify-center h-[95%]'>
          <div className='flex justify-center items-center'>
            <form className="w-full max-w-lg space-y-4">
              <div>
                <h1 className="text-4xl font-bold mb-6">Set a password</h1>
                <p className="mb-6 text-gray-600">Your previous password has been reseted. Please set a new password for your account.</p>
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
                <TextField label="Create Password" variant="outlined" size="small"  type='password' fullWidth value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
                <TextField label="Re-enter Password" variant="outlined" size="small"  type='password' fullWidth value={rePassword} onChange={(e)=>setRePassword(e.target.value)}/>
              </Box>
              
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded" onClick={handleSubmit}>Set Password</button>
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

export default Setpassword
