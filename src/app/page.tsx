"use client"

import { useRouter } from 'next/navigation'


const App = () => {
  const router=useRouter()
  const submitHandler=(e:any)=> {
    e.preventDefault()
    router.push('/dashboard')
  }


  return (
    <div className='flex flex-col h-[90vh] justify-center'>
      <div>
        <h1 className='text-center text-2xl font-semibold text-blue-500'>Login Page</h1>
        <form className='md:w-2/6 sm:w-4/12 w-6/12 m-auto flex flex-col gap-2' onSubmit={submitHandler}>
          <div>
            <label htmlFor='email' className='text-sm text-slate-500'>Enter your email</label>
          <input type='text' id='email' className='w-full bg-slate-300 rounded p-1.5 outline-none' required/>
          </div>
          <div>
          <label htmlFor='password' className='text-sm text-slate-500'>Enter your password</label>
          <input type='text' id='password' className='w-full bg-slate-300 rounded p-1.5 outline-none' required/>
          </div>
          <div className='text-center'>
            <button className='bg-blue-500 rounded text-white px-4 py-1.5' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App