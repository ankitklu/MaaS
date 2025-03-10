import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

  const[email, setEmail]= useState('')
  const[password, setPassword]= useState('') 

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(email + password)
    setEmail('')  
    setPassword('')
  } 


  return (
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <img className='w-40 mb-10' src="https://mobilityservice.se/resources/logo%20mobility%20service.png" alt="" />
  
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              type="email"
              placeholder='email@example.com'
            />
  
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
  
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}

              className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
              required type="password"
              placeholder='password'
            />
  
            <button
              className='bg-[url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
            >Login</button>
  
          </form>
          <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
        </div>
        <div>
          <Link
            to='/captain-login'
            className='bg-[url(https://images.unsplash.com/photo-1626139331922-323c61f7f19d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Sign in as Captain</Link>
        </div>
      </div>
    )
}

export default UserLogin