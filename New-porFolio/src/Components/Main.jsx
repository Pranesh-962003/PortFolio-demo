import React from 'react'

const Main = () => {
  return (
    <div className='constainer flex justify-between md:h-[80vh] md:flex-row flex-col '>
        <div className='md:pl-10 flex flex-col justify-center md:items-start items-center gap-3 md:w-1/2'>
            <h1 className='lg:text-9xl md:text-6xl text-7xl font-bold text-gray-700'>Pranesh</h1>
            <p className='font-semibold lg:text-6xl md:text-5xl text-3xl text-gray-500'>Web Developer</p>
            <p className=' p-3'>A web developer combines creativity and technical skills to design and build websites that are both functional and user-friendly. They use languages like HTML, CSS, and JavaScript to create interactive digital experiences. Despite challenges like tight deadlines and constant learning, the satisfaction of seeing their work impact users is deeply rewarding.</p>
        </div>
        <div className='md:w-1/2 flex items-center justify-center'>
            <img src="/src/assets/sideimage.png" alt="" />
        </div>
    </div>
  )
}

export default Main