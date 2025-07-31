'use client'

import { useFile } from '@/hooks/useFile'
import { uploadService } from '@/services/fileService'
import { deleteAccount, getProfile, update } from '@/services/settingService'
import { useEffect, useState, useRef } from 'react'

const SettingsPage =()=>{
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [message, setMessage] = useState('')
  const [language, setLanguage] = useState('')
  const [dateFormat, setDateFormat] = useState('')
  const [timeFormat, setTimeFormat] = useState('')
  const [country, setCountry] = useState('')
  const [timeZone, setTimeZone] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const inputClasses = 'w-full border border-gray-300 rounded px-3 py-2 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:outline-none'

  const handleSaveChanges = async () => {
    console.log(profilePicture)
    try{
      const data = await update(firstName, lastName, message, language, dateFormat, timeFormat, country, timeZone, profilePicture)
      console.log(data)
    }catch(error){
      console.log(error)
    }
  }

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm( 'Are you sure you want to delete your account? This action cannot be undone.')
    
    if(confirmDelete){
      const doubleConfirm = window.confirm(
        'This will permanently delete all your data. Are you absolutely sure?'
      )

      if(doubleConfirm) {
        try{
          const data = await deleteAccount()
          console.log(data)
        }catch(error){
          console.log(error)
        }
      }
    }
  }

  const handleFileSelect = (event:any) => {
    const file = event.target.files[0]
    if (file) {
      uploadPicture(file)
    }
  }

  const uploadPicture = async (file:any) => {
    if (!file) return
    
    setIsUploading(true)
    try {
      const response = await uploadService(file)
      setProfilePicture(response.data[0].fileId)
      console.log('response Picture',response.data[0].fileId)
    } catch (error) {
      console.log('Upload error:', error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleUpdateClick = () => {
    fileInputRef.current?.click()
  }

  //get my Profile
  useEffect(()=>{
    const getMyProfile =async()=>{
      try{
        const response = await getProfile();
        
        if(response.success && response.data) {
          const data = response.data
          setFirstName(data.firstname || '')
          setLastName(data.lastname || '')
          setMessage(data.welcomeMessage || '')
          setLanguage(data.language || '')
          setDateFormat(data.dateFormat || '')
          setTimeFormat(data.timeFormat || '')
          setCountry(data.country || '')
          setTimeZone(data.timeZone || '')
          setProfilePicture(data.profilepicture?.fileId || '')
        }
      }catch(error){
        console.log(error)
      }
    }

    getMyProfile()
  },[])

  const {url} = useFile(profilePicture)
  
  return (
    <div className="max-w-2xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          <img
            src={url || "/profile.jpg"}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover border border-gray-300"
          />
          {isUploading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          className="hidden"
        />
        
        <button 
          className="px-4 py-2 border rounded-full cursor-pointer hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleUpdateClick}
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Update'}
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block ">First Name</label>
            <input
              type="text"
              className={inputClasses}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label className="block ">Last Name</label>
            <input
              type="text"
              className={inputClasses}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block ">Welcome Message</label>
          <textarea
            className={inputClasses}
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div>
          <label className="block ">Language</label>
          <select
            className={inputClasses}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="th">Thai</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block ">Date Format</label>
            <select
              className={inputClasses}
              value={dateFormat}
              onChange={(e) => setDateFormat(e.target.value)}
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          <div>
            <label className="block ">Time Format</label>
            <select
              className={inputClasses}
              value={timeFormat}
              onChange={(e) => setTimeFormat(e.target.value)}
            >
              <option value="12-hour">12h (am/pm)</option>
              <option value="24-hour">24h</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block ">Country</label>
          <select
            className={inputClasses}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="US">United States</option>
            <option value="TH">Thailand</option>
          </select>
        </div>

        <div>
          <label className="block ">Time Zone</label>
          <select
            className={inputClasses}
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
          >
            <option value="Central Time - US & Canada">Central Time - US & Canada</option>
            <option value="Bangkok - Thailand">Bangkok - Thailand</option>
            <option value="UTC">UTC</option>
          </select>
        </div>

        <div className="flex justify-between mt-6">
          <div className="flex gap-2">
            <button 
              onClick={handleSaveChanges}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Save Changes
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">Cancel</button>
          </div>
          <button 
            onClick={handleDeleteAccount}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage;