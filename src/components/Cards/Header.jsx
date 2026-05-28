import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between p-10'>
          <div className=''>
            <h3 className='font-bold'>Hello 👋 <br />
              <span className='font-bold text-2xl'>Abhishek</span>
            </h3>
          </div>
          <div className='flex items-center'>
            <button className='px-1 py-1 bg-red-500 text-white text-xs rounded-xs font-semibold'>Logout</button>
          </div>
    </div>
  )
}

export default Header
