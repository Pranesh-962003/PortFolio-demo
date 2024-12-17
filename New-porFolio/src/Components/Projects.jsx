import React, { useEffect, useState } from 'react'
import { projects_list as demo } from '../assets/asstes'
import axios from 'axios'
const Projects = () => {

    const [projects_list, setProjects] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3004/getProjects').then(
            projectss=>{setProjects(projectss.data)}
        )
    },[])

    projects_list.map(items=>{
        console.log(items.image);
        
    })


  return (
    <div className='container'>
           <div className='flex justify-between items-center mt-10'>
            <h1 className='md:text-8xl font-extrabold text-indigo-500 text-6xl'>Projects</h1>
            <svg className='h-10 w-20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 5V3H7v2H1v16h22V5zM8 4h8v1H8zm14 16H2V10h20zm0-11H2V6h20z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
            
        </div>
        <hr className='border border-indigo-500'/>
        <div className='mt-10 container'>
            <ul className='w-full flex flex-col gap-5 p-10 '>
                {projects_list.map((items,index)=>(
                    <li key={index} className=' flex md:flex-row flex-col bg-gray-800 p-10 rounded-2xl '>
                        <div className='md:w-[70%]'>
                            <h1 className='text-4xl md:text-6xl md:font-extrabold text-violet-600'>{items.title}</h1>
                            <p className='text-sm mt-4 md:text-lg text-gray-400'>{items.description}</p>
                            
                            <div className='flex md:gap-3 md:justify-start justify-around sm:mb-5'>
                            <a href={items.link1} target='_blank' className='px-6 py-2 bg-indigo-500 rounded-full mt-3 text-white'>Linkedin</a>
                            <a href={items.link2} target='_blank' className='px-6 py-2 bg-indigo-500 rounded-full mt-3 text-white'>GitHub</a>
                            </div>
                        </div>
                        <div className='flex items-center justify-center md:w-[30%]'>
                                <img className='h-500 w-full rounded-lg' src={'http://localhost:3004/images/'+items.image} alt="" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Projects