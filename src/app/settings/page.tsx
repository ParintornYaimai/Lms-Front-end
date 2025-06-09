'use client'

import { useState } from 'react'

export default function SettingsPage() {
  const [name, setName] = useState('Morty Smith')
  const [message, setMessage] = useState(
    'Welcome to my scheduling page. Please follow the instructions to add an event to my calendar.'
  )
  const [language, setLanguage] = useState('English')
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY')
  const [timeFormat, setTimeFormat] = useState('12h')
  const [country, setCountry] = useState('United States')
  const [timezone, setTimezone] = useState('Central Time - US & Canada')

  const inputClasses =
    'w-full border border-gray-300 rounded px-3 py-2 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:outline-none'

  return (
    <div className="max-w-2xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border border-gray-300"
        />
        <button className="px-4 py-2 border rounded-full cursor-pointer">Update</button>
        <button className="text-sm text-gray-500 cursor-pointer">🗑 Remove</button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block ">Name</label>
          <input
            type="text"
            className={inputClasses}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            <option>English</option>
            <option>Thai</option>
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
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
            </select>
          </div>

          <div>
            <label className="block ">Time Format</label>
            <select
              className={inputClasses}
              value={timeFormat}
              onChange={(e) => setTimeFormat(e.target.value)}
            >
              <option value="12h">12h (am/pm)</option>
              <option value="24h">24h</option>
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
            <option>United States</option>
            <option>Thailand</option>
          </select>
        </div>

        <div>
          <label className="block ">Time Zone</label>
          <select
            className={inputClasses}
            value={timezone}
            onChange={(e) => setTimezone(e.target.value)}
          >
            <option>Central Time - US & Canada</option>
            <option>Bangkok - Thailand</option>
          </select>
        </div>

        <div className="flex justify-between mt-6">
          <div className="flex gap-2">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
              Save Changes
            </button>
            <button className="border px-4 py-2 rounded hover:bg-gray-100">Cancel</button>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
