import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form submitted')
    setEmail('')
    setPassword('')
  }

  return (
    <div className='min-h-screen w-screen flex items-center justify-center bg-[#26658c]'>

      <div className='w-[380px] rounded-2xl bg-[#023859] px-10 py-12 text-white shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-[#4f8fbf]'>

        <h1 className='text-4xl font-bold text-center mb-2'>
          Welcome Back
        </h1>

        <p className='text-center text-gray-300 mb-10'>
          Sign in to continue
        </p>

        <form 
        onSubmit={(e)=>{
          submitHandler(e)
        }}
        className='flex flex-col gap-6'>

          <input
            type="email"
            placeholder='Enter your Email'
            className='w-full px-5 py-3 rounded-lg bg-transparent border border-[#4f8fbf] outline-none focus:ring-2 focus:ring-[#5fa8d3] placeholder:text-gray-400'
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            required
          />

          <input
            type="password"
            placeholder='Enter your Password'
            className='w-full px-5 py-3 rounded-lg bg-transparent border border-[#4f8fbf] outline-none focus:ring-2 focus:ring-[#5fa8d3] placeholder:text-gray-400'
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
          />

          <button
            type='submit'
            className='mt-4 w-full py-3 rounded-lg bg-[#26658c] hover:bg-[#357ca5] transition-all duration-300 font-semibold text-lg shadow-md'
          >
            Sign In
          </button>

        </form>

        <p className='text-center text-gray-300 mt-8 text-sm'>
          Don&apos;t have an account?{" "}
          <span className='text-[#7cc6fe] cursor-pointer hover:underline'>
            Sign Up
          </span>
        </p>

      </div>

    </div>
  )
}

export default Login