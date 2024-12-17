import React, { useState } from 'react'
import axios from 'axios'
import {Await, Link} from 'react-router-dom'

const Add = () => {

  const [file,setFile] = useState();
  const [title, setTitle] = useState();
  const [description, setdescription] = useState();
  const [link1, setLink1] = useState();
  const [link2, setLink2] = useState();

    const Submit = async(e) =>{
        e.preventDefault();
        const formdata = await new FormData()
        await formdata.append('file', file)
        formdata.append('title',title)
        formdata.append('description',description)
        formdata.append('link1',link1)
        formdata.append('link2',link2)
        axios.post('http://localhost:3004/create',formdata)
      

    }

  return (
    <div className='container mx-auto h-screen flex flex-col items-center justify-center'>
        <form onSubmit={Submit} className='bg-blue-400 rounded-lg flex flex-col p-4 h-3/4 items-center justify-center w-full'>
        <p className='text-5xl font-bold m-2'>Add Projects</p>
            <label className='w-full text-3xl font-semibold text-white' htmlFor="">Title</label>
           
            <input onChange={(e)=>setTitle(e.target.value)} className='w-full h-10 rounded-lg pl-3 text-blue-950' type="text" />
            <label className='w-full text-3xl font-semibold text-white' htmlFor="">description about project</label>
            <textarea onChange={(e)=>{setdescription(e.target.value)}} className='w-full h-40 rounded-lg pl-3 pt-2 text-blue-950' type='textarea'  />
            <label className='w-full text-3xl font-semibold text-white' htmlFor="">Link1</label>
            <input onChange={(e)=>setLink1(e.target.value)} className='w-full h-10 rounded-lg pl-3 text-blue-950' type="text" />
            <label className='w-full text-3xl font-semibold text-white' htmlFor="">Link2</label>
            <input onChange={(e)=>setLink2(e.target.value)} className='w-full h-10 rounded-lg pl-3 text-blue-950'  type="text" />
            <label htmlFor="">Image</label>
           
            <input className='h-20 w-80' type="file" name="" id="" onChange={(e)=>{setFile(e.target.files[0])}}/>
            <button className='text-3xl font-semibold text-white px-6 py-3 bg-green-300 rounded-full mt-10'>Submit</button>
        </form>

        <Link to='/view'>View</Link>
        <Link to={`/experience`}>Experience</Link>
    </div>
  )
}

export default Add