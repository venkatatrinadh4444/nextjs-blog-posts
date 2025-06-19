"use client"

import { useRouter } from "next/navigation"

const ThirdPage=()=> {
    const router=useRouter()
    return (
        <div className="my-2 text-center">
            <h1 className="text-xl font-medium">Third Page</h1>
            <button className='bg-blue-500 rounded text-white px-4 py-1.5 my-2' onClick={()=>router.push('/dashboard')}>Go back</button>
        </div>
    )
}

export default ThirdPage