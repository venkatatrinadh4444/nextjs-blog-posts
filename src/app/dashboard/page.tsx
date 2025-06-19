"use client"

import { useRouter } from "next/navigation"
import Posts from "./Posts"
import { useEffect, useState } from "react"
import axios from "axios"


const Dashboard=()=> {
    const router=useRouter()
    const [data,setData]=useState([])

    const gettingData= ()=> {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>setData(res.data)).catch(err=>console.log(err))
    }

   useEffect(()=> {
    gettingData()
   },[])

    return (
        <div className="text-center my-4 mx-10">
            <h1 className="text-xl font-medium text-blue-500">All Posts</h1>
            <button className="rounded bg-blue-500 text-white font-semibold p-4 py-1 my-2 cursor-pointer" onClick={()=>router.push('/')}>Logout</button>
            <Posts data={data}/>
        </div>
    )
}

export default Dashboard