import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'

const Home = () => {

  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const waitingForDriverRef = useRef(null)


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

  // useGSAP(function(){
  //   if(vehiclePanel){
  //     gsap.to(vehiclePanelRef.current, {
  //       transform:'translateY-0',

  //     })
  //   } 
  //   else{
  //     gsap.to(vehiclePanelRef.current, {
  //       transform:'translateY(100%)'
  //     })
  //   }
  // },[vehiclePanel])

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        y: '0%',  // Corrected GSAP property
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        y: '100%',  // Corrected GSAP property
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        y: '0%',  // Corrected GSAP property
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        y: '100%',  // Corrected GSAP property
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        y: '0%',  // Corrected GSAP property
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        y: '100%',  // Corrected GSAP property
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        y: '0%',  // Corrected GSAP property
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        y: '100%',  // Corrected GSAP property
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [waitingForDriver]);



  return (
    <div className='h-screen relative overflow-hidden'>
        <img className='w-16 absolute left-5 top-5' src="https://mobilityservice.se/resources/logo%20mobility%20service.png" alt="" />
        <div className='w-screen h-screen'>
          {/* Image for temporary use  */}
          <img className='w-screen h-screen object-cover' 
     src="https://images.unsplash.com/photo-1586449480537-3a22cf98b04c" 
     alt="Background" />
        </div>
        <div className="bg-white flex flex-col justify-end h-screen absolute top-0 w-full">
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
          <div ref={panelRef} className=' bg-white p-5 '> 
              <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
          </div>
        </div>

        <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
        </div>

        <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
          <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} />
        </div>

        <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
          <LookingForDriver setVehicleFound={setVehicleFound}/>
        </div>

        <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14'>
          <WaitingForDriver waitingForDriver={waitingForDriver}  />
        </div>

    </div>
  )
}

export default Home