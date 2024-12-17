import React, { useEffect, useState } from 'react'
// import { experience } from '../assets/asstes'
import axios from 'axios'


const Experience = () => {


    const [experience, setExpData] = useState([]);
    console.log(experience);
    

    useEffect(()=>{
        axios.get('http://localhost:3004/expUser').then(
            data=>{setExpData(data.data)
                
            }
        )
        .catch(err=>console.log(err)
        )
    },[])




  return (
    <div>
          <div className='flex justify-between items-center mt-10'>
                <h1 className='md:text-8xl font-extrabold text-indigo-500 text-6xl'>Experience</h1>
                <svg className='h-10 w-20' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 5V3H7v2H1v16h22V5zM8 4h8v1H8zm14 16H2V10h20zm0-11H2V6h20z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
            </div>
        <hr className='border border-indigo-500'/>
        <div className='mt-10'>
            <ul className=''>
                {experience.map((exp,index)=>(
                    <li className='p-4' key={index}>
                        <h1 className='md:text-5xl font-extrabold text-gray-500 text-4xl'>{exp.comapny}</h1>
                        <h3 className='md:text-3xl text-xl mt-2 font-semibold text-gray-500'>{exp.role}</h3>
                        <p className='md:text-base text-gray-400 mt-2'>{exp.des}</p>
                        <p className='md:text-base text-gray-400'><span className='md:text-xl text-base text-indigo-500 font-bold'>Start : </span>{exp.start}</p>
                        <p className='md:text-base text-gray-400'><span className='md:text-xl text-base text-indigo-500 font-bold'>End : </span>{exp.end}</p>
                    </li>
                ))}

            </ul>
        </div>
    </div>
  )
}

export default Experience