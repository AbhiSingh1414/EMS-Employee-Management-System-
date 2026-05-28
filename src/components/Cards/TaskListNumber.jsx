import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex justify-evenly mx-5 mt-5 gap-5'>
      <div className='w-[45%] px-9 py-6 rounded-xl bg-blue-400'>
        <h2 className='text-3xl font-extrabold'>0</h2>
        <h3 className='text-xl font-bold' >New Task</h3>
      </div>

      <div className='w-[45%] px-9 py-6 rounded-xl bg-green-400'>
        <h2 className='text-3xl font-extrabold'>0</h2>
        <h3 className='text-xl font-bold' >New Task</h3>
      </div>

      <div className='w-[45%] px-9 py-6 rounded-xl bg-yellow-400'>
        <h2 className='text-3xl font-extrabold'>0</h2>
        <h3 className='text-xl font-bold' >New Task</h3>
      </div>

      <div className='w-[45%] px-9 py-6 rounded-xl bg-red-400'>
        <h2 className='text-3xl font-extrabold'>0</h2>
        <h3 className='text-xl font-bold' >New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
