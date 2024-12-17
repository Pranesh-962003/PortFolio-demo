import React from 'react'

const Footer = () => {
  return (
    <div>
          <div className='flex justify-between items-center mt-10'>
                <h1 className='md:text-8xl font-extrabold text-indigo-500 text-6xl'>Contact</h1>
                <svg className='h-10 w-20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 5V3H7v2H1v16h22V5zM8 4h8v1H8zm14 16H2V10h20zm0-11H2V6h20z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
            </div>
        <hr className='border border-indigo-500'/>
        <div className='mt-20 container flex md:flex-row gap-5 flex-col justify-between'>
            <div className='w-[80%]'>
                <h1 className='md:text-8xl text-5xl font-semibold text-gray-500'>
                    Let's Work <br />
                    Together
                </h1>
            </div>
            <div className='flex flex-col justify-center w-[30%]'>
                <p className='md:text-xl text-gray-400'><span className='md:text-2xl text-indigo-500 font-semibold'>Phone :</span>6383643060</p>
                <p className='md:text-xl text-gray-400'><span className='md:text-2xl text-indigo-500 font-semibold'>Email :</span>pranesh962003@gmail.com</p>
                <p className='md:text-xl text-gray-400'><span className='md:text-2xl text-indigo-500 font-semibold'>Linkedin :</span></p>
                <p className='md:text-xl text-gray-400'><span className='md:text-2xl text-indigo-500 font-semibold'>Github :</span></p>
            </div>
        </div>

        <hr className='mt-2 pb-3 border-gray-400' />
    </div>
  )
}

export default Footer