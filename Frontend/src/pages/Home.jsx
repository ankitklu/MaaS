import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);


  const submitHandler = ()=>{
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen){
      
      gsap.to(panelRef.current, {
        height: '70%',
        duration: 1,
        opacity: 1,
        display: 'block'
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }
    else{
      gsap.to(panelRef.current, {
        height: '0%',
        duration: 1,
        opacity: 0,
        display: 'none'
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  },[panelOpen, panelCloseRef])



  return (
    <div className='h-screen relative'>
        <img className='w-40 mb-10 absolute left-5 top-5' src="https://mobilityservice.se/resources/logo%20mobility%20service.png" alt="" />
        <div>
          {/* Image for temporary use  */}
          <img className='w-full h-screen object-cover' 
     src="https://images.unsplash.com/photo-1586449480537-3a22cf98b04c" 
     alt="Background" />
        </div>
        <div className="bg-white flex flex-col justify-end h-screen absolute top-0 w-full p-5">
          <div className='h-[30%] p-6 bg-white relative'>

          <h5 ref={panelCloseRef} className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

            <h4 className='text-2xl font-semibold'>Find a Trip</h4>
            <form onSubmit={(e)=>{
              submitHandler(e);
            }}>
              <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full '></div>
              <input 
              onClick={()=>{
                setPanelOpen(!panelOpen)
              }}
              value={pickup}
              onChange={(e)=>{
                setPickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              type="text" 
              placeholder='Add a pick-up location'/>
              <input 
              onClick={()=>{
                setPanelOpen(!panelOpen)
              }}
              value={destination}
              onChange={(e)=>{
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter your destination'/>
            </form>
          </div>
          <div ref={panelRef} className=' bg-red-500 p-5 '> 
              <LocationSearchPanel/>
          </div>
        </div>
    </div>
  )
}

export default Home