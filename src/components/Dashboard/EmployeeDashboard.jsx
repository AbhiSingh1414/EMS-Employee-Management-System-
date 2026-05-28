import React from 'react'
import Header from '../Cards/Header'
import TaskListNumber from '../Cards/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] h-screen text-white'>
      <Header/>
      <TaskListNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
