import React from 'react'
import FinishAssignment from '@/component/dashboard/FinishAssignment'
import Resource from '@/component/dashboard/Resource'
import MiniCalendar from '@/component/dashboard/MiniCalendar'
import BarChartComponent from '@/component/dashboard/BarChart'
import TaskProgress from '@/component/dashboard/TaskProgress'
import TodoList from '@/component/dashboard/Todolist'
import Recent from '@/component/dashboard/Recent'
import UpComing from '@/component/dashboard/UpComing'


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
            <div className="basis-1/4 max-h-[220px] rounded-lg border border-gray-200 shadow-lg p-4 hover:scale-101 transition-transform duration-300">
              <FinishAssignment/>
            </div>
            {/* two */}
            <div className="basis-2/4 h-[220px] rounded-lg border border-gray-200 shadow-lg p-4 overflow-auto hover:scale-101 transition-transform duration-300">
              <Resource/>
            </div>
            {/* three */}
            <div className="basis-1/6 max-h-[220px] rounded-lg border border-gray-200 shadow-lg hover:scale-101 transition-transform duration-300">
              <MiniCalendar/>
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <div className='flex gap-8'>
            {/* one */}
            <div className="basis-2/4 max-h-[300px] rounded-lg border border-gray-200 shadow-lg p-4 hover:scale-101 transition-transform duration-300">
              <BarChartComponent/>
            </div>
            {/* two */}
            <div className="basis-1/4 h-[300px] rounded-lg border border-gray-200 shadow-lg p-4 overflow-auto hover:scale-101 transition-transform duration-300">
              <TaskProgress/>
            </div>
            {/* three */}
            <div className="basis-1/3 max-h-[300px] rounded-lg border border-gray-200 shadow-lg p-4 hover:scale-101 transition-transform duration-300">
              <TodoList/>
            </div>
          </div>
        </div>

        <div className='my-10 mx-10'>
          <div className='flex gap-8'>
            {/* one */}
            <div className="basis-full md:basis-2/4 h-[300px] rounded-lg border border-gray-200 shadow-lg p-4 hover:scale-101 transition-transform duration-300">
              <Recent/>
            </div>
            {/* two */}
            <div className="basis-full md:basis-2/4 h-[300px] rounded-lg border border-gray-200 shadow-lg p-4 overflow-auto hover:scale-101 transition-transform duration-300">
              <UpComing/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard