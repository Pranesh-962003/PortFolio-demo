import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {

    const {id} = useParams()
    

     const [title, setTitle] = useState();
      const [description, setdescription] = useState();
      const [link1, setLink1] = useState();
      const [link2, setLink2] = useState();


    
    const [projects, setProjects] = useState([])

useEffect(()=>{
    axios.get('http://localhost:3004/getProjects/'+id).then(data=>{
        setTitle(data.data.title)
        setdescription(data.data.description)
        setLink1(data.data.link1)
        setLink2(data.data.link2)
        
    })
    .catch(err=>console.log(err)
    )
},[])




    const HandleSubmit = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:3004/update/'+id,{title, description, link1, link2})
        .then(res=>console.log(res)
        ).catch(err=>console.log(err)
        )
    }



  return (
    <div className='container mx-auto h-screen flex items-center justify-center'>
        <p>{id}</p>
        <form onSubmit={HandleSubmit}  className='bg-blue-400 rounded-lg flex flex-col p-4 h-3/4 items-center justify-center w-full'>
        <p className='text-5xl font-bold m-2'>Add Projects</p>
            <label className='w-full text-3xl font-semibold text-white' htmlFor="">Title</label>
           
            <input value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full h-10 rounded-lg pl-3 text-blue-950' type="text" />
            <label className='w-full text-3xl font-semibold text-white' htmlFor="">description about project</label>
            <textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} className='w-full h-40 rounded-lg pl-3 pt-2 text-blue-950' type='textarea'  />
            <label className='w-full text-3xl font-semibold text-white' htmlFor="">Link1</label>
            <input value={link1} onChange={(e)=>setLink1(e.target.value)} className='w-full h-10 rounded-lg pl-3 text-blue-950' type="text" />
            <label className='w-full text-3xl font-semibold text-white' htmlFor="">Link2</label>
            <input value={link2} onChange={(e)=>setLink2(e.target.value)} className='w-full h-10 rounded-lg pl-3 text-blue-950'  type="text" />

            <button className='text-3xl font-semibold text-white px-6 py-3 bg-green-300 rounded-full mt-10'>Submit</button>
        </form>
    </div>
  )
}

export default Update