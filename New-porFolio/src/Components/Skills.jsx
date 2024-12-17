import React from 'react'
import{ skills } from '../assets/asstes.js'

const Skills = () => {
  return (
    <div className='pb-32'>
        <div className='flex justify-between items-center mt-10'>
            <h1 className='md:text-8xl font-extrabold text-indigo-500 text-6xl'>Skills</h1>
            <svg className='h-30 w-14 text-gray-400' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z"/></svg>
            
        </div>
        <hr className='border border-indigo-500'/>
        <div className='mt-5'>
           
            <p className='text-gray-600 text-xl font-medium'>Skills Known for Developing</p>
            <div className='container flex items-center justify-center'>
                <ul className='mt-36 gap-20 grid grid-cols-2 md:flex md:flex-row md:flex-wrap items-center justify-center'>
                    {skills.map((item,index)=>(
                        <li className='border border-gray-500 p-4  w-30 flex flex-col items-center justify-center text-center rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300' key={index}>
                           
                            <img className='h-20 w-20 ' src={item.image} alt="" />
                            <p className='text-gray-600 text-xl mt-3'>{item.Title}</p>
                            <a href={item.link} target='_blank' className='px-6 py-2 bg-indigo-500 rounded-full mt-3 text-white'>Know More</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills