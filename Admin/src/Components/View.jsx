import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const View = () => {

    const [projects, setProjects] = useState([])

useEffect(()=>{
    axios.get('http://localhost:3004/getProjects').then(data=>{setProjects(data.data)
        
    })
    .catch(err=>console.log(err)
    )
},[])

  return (
    <div className=' container h-screen mx-auto bg-green-200 flex items-center justify-center'>
      <table className='bg-green-700 rounded-lg p-3'>
        <thead className=''>
            <tr>
                <th className='p-3'>Name</th>
                <th className='p-3'>description</th>
                <th className='p-3'>link1</th>
                <th className='p-3'>link2</th>
                <th className='p-3'>Action</th>
            </tr>

        </thead>
        <tbody>
            {projects.map((items, index)=>(
                <tr className='text-center'>
                    <td className=' p-2'>{items.title}</td>
                    <td className=' p-2'>{items.description}</td>
                    <td className=' p-2'>{items.link1}</td>
                    <td className='p-2'>{items.link2}</td>
                    <td className='p-2 flex flex-wrap gap-4 items-center justify-center'><Link to={`/update/${items._id}`} className='px-6 py-3 bg-indigo-500 rounded-full '>Update</Link>  <Link className='px-6 py-3 bg-red-700 rounded-full '>Delete</Link></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default View