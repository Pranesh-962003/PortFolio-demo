import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container mx-auto bg-indigo-500 p-3 rounded-md mt-3'>
        <nav className='flex justify-between items-center'>
            
                <ul className='flex gap-5 text-white font-semibold'>
                    <li><a className='hover:text-blue-800' href="#">Home</a></li>
                    <li><a className='hover:text-blue-800' href="#">Skille</a></li>
                    <li><a className='hover:text-blue-800' href="#">Projects</a></li>
                    <li><a className='hover:text-blue-800' href="#">Experience</a></li>
                    <li><Link to='/contact' className='hover:text-blue-800'> Contact</Link></li>
                </ul>
            
            <div className='rounded-full h-8 w-8 overflow-hidden'>
                <img src="/vite.svg" alt="" />
            </div>
        </nav>
    </div>
  )
}

export default Navbar