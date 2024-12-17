
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ExpUpdate = () => {

    // const {id} = useParams()
    const [comapny, setComapny] = useState();
    const [role, setRole] = useState();
    const [des, setDes] = useState();
    const [start, setStart] = useState();
    const [end, setEnd] = useState();

    const [data, setData] = useState();
    
    

     const navigate = useNavigate()

    const {id} = useParams()

    useEffect(()=>{
        axios.get('http://localhost:3004/getexp/'+id)
        .then(result=>{
            setComapny(result.data.comapny)
            setRole(result.data.role)
            setDes(result.data.des)
            setStart(result.data.start)
            setEnd(result.data.end)
        }

        ).catch(err=>{console.log(err);
        })
    },[])   




    const HandleUpdate = (e) =>{
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('comapny', comapny)
        formdata.append('role',role)
        formdata.append('des',des),
        formdata.append('start',start)
        formdata.append('end',end)
        axios.put('http://localhost:3004/expUpdatedata/'+id,formdata)
        .then(user=>console.log(user)
        ).catch(err=>console.log(err)
        )
       
    }




  return (
    <div className=' container h-screen flex flex-col items-center justify-center'>
        <form onSubmit={HandleUpdate} className='flex flex-col items-center bg-gray-400 w-3/4 h-3/4 justify-center'>
            <h1 className='text-5xl font-bold my-3'>Update Experience</h1>
            <label className='w-[90%] text-lg font-semibold text-white' htmlFor="">Comapny</label>
            <input className='w-[90%] p-2 rounded-full' type="text" value={comapny} onChange={(e)=>setComapny(e.target.value)}/>
            <label htmlFor="">Role</label>
            <input className='w-[90%] p-2 rounded-full' type="text" value={role} onChange={(e)=>setRole(e.target.value)}/>
            <label htmlFor="">Description</label>
            <textarea className='w-[90%] h-[50%] p-2 rounded-lg' name="" value={des} id="" onChange={(e)=>setDes(e.target.value)}></textarea>
            <label htmlFor="">Start</label>
            <input className='w-[90%] p-2 rounded-full' type="date" name="" id="" value={start} onChange={(e)=>setStart(e.target.value)} />
            <label htmlFor="">End</label>
            <input className='w-[90%] p-2 rounded-full' type="date" name="" id="" value={end} onChange={(e)=>setEnd(e.target.value)} />

            <button className='px-6 py-3 font-semibold bg-green-400 rounded-full text-white my-3'>Submit</button>
            
        </form>
    </div>
  )
}

export default ExpUpdate