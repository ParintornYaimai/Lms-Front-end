import React from 'react'
import FinishAssignment from '@/component/dashboard/finishAssignment'

const Dashboard = () => {
  return (
    <div >
      <div className='flex flex-col mx-5 '>
        {/* name */}
        <div className='sm:my-5 sm:ml-15'>
          <h1 className='text-xl sm:text-4xl font-bold'>Hello Parintorn 👋🏼</h1>
          <span className='text-lg sm:text-xl text-gray-500'>Let' learn something new today!</span>
        </div>

        {/*ลองใช้ h-[200px] ก่อนถ้ากล่องไม่ขยายค่อยใช้ => min-h-[200px] เฉพาะ 1,3 */}
        <div className='mt-10 '>
          <div className='flex gap-8'>
            {/* one */}
            <div className="basis-1/4 max-h-[220px] rounded-lg border border-gray-200 shadow-lg p-4">Box 1</div>
            {/* two */}
            <div className="basis-2/4 h-[220px] rounded-lg border border-gray-200 shadow-lg p-4 overflow-auto">Box 2</div>
            {/* three */}
            <div className="basis-1/4 max-h-[220px] rounded-lg border border-gray-200 shadow-lg p-4">Box 3</div>
          </div>
        </div>

        <div className='mt-10'>
          <div className='flex gap-8'>
            {/* one */}
            <div className="flex-1 max-h-[300px] rounded-lg border border-gray-200 shadow-lg p-4">Box 1</div>
            {/* two */}
            <div className="flex-1 h-[300px] rounded-lg border border-gray-200 shadow-lg p-4 overflow-auto">Box 2</div>
            {/* three */}
            <div className="flex-1 max-h-[300px] rounded-lg border border-gray-200 shadow-lg p-4">Box 3</div>
          </div>
        </div>

        <div className='my-10 mx-10'>
          <div className='flex gap-8'>
            {/* one */}
            <div className="basis-full md:basis-2/4 h-[300px] rounded-lg border border-gray-200 shadow-lg p-4">Box 1</div>
            {/* two */}
            <div className="basis-full md:basis-2/4 h-[300px] rounded-lg border border-gray-200 shadow-lg p-4 overflow-auto">Box 2</div>
            {/* three */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard