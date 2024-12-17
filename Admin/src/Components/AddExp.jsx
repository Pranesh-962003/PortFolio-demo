import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddExp = () => {


    const [comapny, setComapny] = useState();
    const [role, setRole] = useState();
    const [des, setDes] = useState();
    const [start, setStart] = useState();
    const [end, setEnd] = useState();


     const navigate = useNavigate()

    // console.log(comapny, role, des, start, end);
    const HandleSubmit = (e)=>{
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('comapny', comapny)
        formdata.append('role',role)
        formdata.append('des',des),
        formdata.append('start',start)
        formdata.append('end',end)
        axios.post('http://localhost:3004/expCreate',formdata)
        .then(res=>{
            console.log(res);
            
        }).catch(err=>console.log(err)
        )

        navigate('/experience')
        
    }


  return (
    <div className=' container h-screen flex flex-col items-center justify-center'>
        <form onSubmit={HandleSubmit} className='flex flex-col items-center bg-gray-400 w-3/4 h-3/4 justify-center'>
            <h1 className='text-5xl font-bold'>Add Experience</h1>
            <label className='w-full ml-5 text-xl text-white font-semibold' htmlFor="">Comapny</label>
            <input className='w-[96%] p-2 rounded-full text-lg' type="text"  onChange={(e)=>setComapny(e.target.value)}/>
            <label className='w-full ml-5 text-xl text-white font-semibold' htmlFor="">Role</label>
            <input className='w-[96%] p-2 rounded-full text-lg' type="text" onChange={(e)=>setRole(e.target.value)}/>
            <label className='w-full ml-5 text-xl text-white font-semibold' htmlFor="">Description</label>
            <textarea className='w-[96%] h-[40%] p-3' name="" id="" onChange={(e)=>setDes(e.target.value)}></textarea>
            <label className='w-full ml-5 text-xl text-white font-semibold' htmlFor="">Start</label>
            <input className='w-[96%] p-2 rounded-full text-lg' type="date" name="" id="" onChange={(e)=>setStart(e.target.value)} />
            <label className='w-full ml-5 text-xl text-white font-semibold' htmlFor="">End</label>
            <input className='w-[96%] p-2 rounded-full text-lg' type="date" name="" id="" onChange={(e)=>setEnd(e.target.value)} />

            <button className='px-6 py-3 bg-black text-white my-10 rounded-full font-semibold'>Submit</button>
        </form>
    </div>
  )
}

export default AddExp