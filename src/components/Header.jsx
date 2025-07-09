
import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className='py-4 px-6 flex justify-between items-center bg-amber-200 shadow-md'>
      <div className='font-bold text-2xl text-emerald-700'>Shopping App</div>

      <div className='flex gap-2 items-center'>
        <input
          className='border border-gray-300 py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-200 w-64'
          placeholder='Search for products...'
        />
        <button className='bg-emerald-500 text-white py-1.5 px-4 rounded-md hover:bg-emerald-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2'>
          Search
        </button>
      </div>

      <div className='flex gap-4'>
        <Link to="/profile" className='text-emerald-700 hover:text-emerald-900 font-medium transition duration-200'>
          Profile
        </Link>
        <Link to="/signup" className='text-emerald-700 hover:text-emerald-900 font-medium transition duration-200'>
          Signup
        </Link>
      </div>
    </div>
  )
}

export default Header