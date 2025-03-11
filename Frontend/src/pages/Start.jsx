import React from 'react'
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className= "bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-300">
          <img src="https://mobilityservice.se/resources/logo%20mobility%20service.png" alt="MaaS Logo" className=""/>
            <div className="bg-white py-5 px-8">
                <h2 className='text-2xl font-bold text-red-900'>Get started with MaaS</h2>
                <Link to="/login" className=' bg-[url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start