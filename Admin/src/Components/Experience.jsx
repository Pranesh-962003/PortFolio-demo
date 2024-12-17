import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const Experience = () => {


    const [expData, setExpData] = useState([]);

    

    useEffect(()=>{
        axios.get('http://localhost:3004/expUser').then(
            data=>{setExpData(data.data)
                
            }
        )
        .catch(err=>console.log(err)
        )
    },[])





    const HandleDelete = (id) =>{
        axios.delete('http://localhost:3004/deleteexp/'+id)
        .then(result=>console.log(result)
        ).catch(err=>console.log(err)
        )
    }
    


  return (
    <div className='container mx-auto flex flex-col items-center justify-center h-screen'>
        <table>
            <thead>
                <tr className='bg-black text-white'>
                    <th className='p-2 border'>Company</th>
                    <th className='p-2 border'>Role</th>
                    <th className='p-2 border'>Description</th>
                    <th className='p-2 border'>start</th>
                    <th className='p-2 border'>end</th>
                    <th className='p-2 border'>Action</th>
                </tr>
             
            </thead>
            {expData[0] ?
            <tbody>
            {
                expData.map((items,index)=>(
                    <tr key={index}>
                        <td className='p-5 bg-gray-500 border '>{items.comapny}</td>
                        <td className='p-5 bg-gray-500 border '>{items.role}</td>
                        <td className='p-5 w-[50%] bg-gray-500 border '>{items.des}</td>
                        <td className='p-5 bg-gray-500 border '>{items.start}</td>
                        <td className='p-5 bg-gray-500 border '>{items.end}</td>
                        <td className='p-5 h-full bg-gray-500 border flex flex-wrap items-center justify-center'><Link to={`/expUpdate/${items._id}`} className='px-6 py-2 bg-blue-500 rounded-full m-2'>Update</Link> <button onClick={()=>{HandleDelete(items._id)}} className='px-6 py-2  bg-red-600 rounded-full text-white'>Delete</button> </td>
                    </tr>
                ))
            }
    </tbody>    
    :
    <p className='p-4 text-black'>No experience data</p>
        }
        </table>
        <Link className='px-6 py-3 bg-green-500 rounded-full mt-10' to={`/addExp`}>Add Experiende</Link>
    </div>
  )
}

export default Experience