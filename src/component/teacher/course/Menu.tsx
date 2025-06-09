import React from 'react'

const Menu = () => {
  return (
    <div className='bg-white w-40 '>
        <div className='flex flex-col py-2 text-sm text-gray-500'>
            <span className='hover:bg-orange-600 hover:text-white px-2 cursor-pointer'>Edit Course</span>
            <span className='hover:bg-orange-600 hover:text-white px-2 cursor-pointer'>Delete Course</span>
        </div>
    </div>
  )
}

export default Menu
