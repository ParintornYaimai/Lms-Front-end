'use client'
import React, { use, useEffect, useState } from 'react'
import FinishAssignment from '@/component/dashboard/FinishAssignment'
import Resource from '@/component/dashboard/Resource'
import MiniCalendar from '@/component/dashboard/MiniCalendar'
import BarChartComponent from '@/component/dashboard/BarChart'
import TaskProgress from '@/component/dashboard/TaskProgress'
import TodoList from '@/component/dashboard/Todolist'
import Recent from '@/component/dashboard/Recent'
import UpComing from '@/component/dashboard/UpComing'
import { useAuthStore } from '@/store/authStore';
import toast from 'react-hot-toast'
import { finisAssignment, recentEnrolled, Resources, taskProgress } from '@/services/dashboardService'
import { AssignmentProgressByCategory, FinishAssignmentAggregationResult, RecentEnrolledCourse, ResourceCourse } from '@/types/dashboard'



const Dashboard = () => {
  const user = useAuthStore((state) => state.user)
  const [finishAssignment, setFinishAssignment] = useState<FinishAssignmentAggregationResult>()
  const [resourcesData, setResourcesData] = useState<ResourceCourse>();
  const [recentEnroll, setRecentEnroll] = useState<RecentEnrolledCourse[]>()
  const [taskProgressData, setTaskProgressData] = useState<AssignmentProgressByCategory[]>()

  // FinishAssignment
  useEffect(()=>{
    const fetchFinishAssignment = async()=>{
      try {
        const response = await finisAssignment();
        setFinishAssignment(response)
      } catch (error: any) {
        toast.error(error)
      }
    }
    fetchFinishAssignment()
  },[])

  // Resource
  useEffect(()=>{
    const fetchResources = async()=>{
      try {
        const response = await Resources();
        setResourcesData(response)
      } catch (error: any) {
        toast.error(error)
      }
    }
    fetchResources()
  },[])

  //recentEnrolled
  useEffect(()=>{
    const fetchRecentEnrolled=async()=>{
      try{
        const response = await recentEnrolled()
        setRecentEnroll(response)
      }catch(error: any) {
        toast.error(error)
      }
    }
    fetchRecentEnrolled()
  },[])

  //task progress
  useEffect(()=>{
    const fetchTaskProgress=async()=>{
      try{
        const response = await taskProgress()
        setTaskProgressData(response)
      }catch(error: any) {
        toast.error(error)
      }
    }
    fetchTaskProgress()
  },[])

  return (
    <div >
      <div className='flex flex-col mx-5 '>
        {/* name */}
        <div className='sm:my-5 sm:ml-15'>
          <h1 className='text-xl sm:text-4xl font-bold'>Hello {user?.firstname} 👋🏼</h1>
          <span className='text-lg sm:text-xl text-gray-500'>Let' learn something new today!</span>
        </div>

        {/*ลองใช้ h-[200px] ก่อนถ้ากล่องไม่ขยายค่อยใช้ => min-h-[200px] เฉพาะ 1,3 */}
        <div className='mt-10 '>
          <div className='flex gap-8'>
            {/* one */}
            <div className="basis-1/4 max-h-[220px] rounded-lg border border-gray-200 shadow-lg p-4 hover:scale-101 transition-transform duration-300">
              <FinishAssignment finishAssignment={finishAssignment}/>
            </div>
            {/* two */}
            <div className="basis-2/4 h-[220px] rounded-lg border border-gray-200 shadow-lg p-4 overflow-auto hover:scale-101 transition-transform duration-300">
              <Resource resourcesData={resourcesData}/>
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
              <TaskProgress taskProgressData={taskProgressData}/>
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
              <Recent recentEnroll={recentEnroll}/>
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