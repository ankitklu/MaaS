import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-3 w-[93%] text-center absolute top-0' onClick={()=> {props.setVehiclePanel(false)}}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i> </h5>
          <h3 className='text-2xl font-semibold mb-3'>Choose a Vehicle</h3>

              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className='flex border-2 border-gray-200 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-14' src="https://purepng.com/public/uploads/large/purepng.com-hyundai-santa-fe-white-carcarvehicletransporthyundai-961524650727bljaq.png" alt="" />
                <div className='ml-2 w-1/2'>
                  <h4 className='font-medium text-base'>Uber Go <span><i className="ri-user-3-fill"></i>4</span></h4>
                  <h5 className='font-medium text-sm'> 2 mins away </h5>
                  <p className='font-normal text-xs'>Affordable, compact rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$193.20</h2>
              </div>

              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className='flex border-2 border-gray-200 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-14 w-16' src="https://static.vecteezy.com/system/resources/previews/024/819/250/large_2x/electric-motorbike-electric-bike-e-bike-e-motorbike-electric-vehicle-e-vehicle-transparent-background-ai-generated-png.png" alt="" />
                <div className='ml-2 w-1/2'>
                  <h4 className='font-medium text-base'>Uber Bike <span><i className="ri-user-3-fill"></i>1</span></h4>
                  <h5 className='font-medium text-sm'> 2 mins away </h5>
                  <p className='font-normal text-xs'>Affordable, bike rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$10.20</h2>
              </div>

              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className='flex border-2 border-gray-200 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
                <img className='h-14' src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png" alt="" />
                <div className='ml-2 w-1/2'>
                  <h4 className='font-medium text-base'>Uber Auto <span><i className="ri-user-3-fill"></i>1</span></h4>
                  <h5 className='font-medium text-sm'> 2 mins away </h5>
                  <p className='font-normal text-xs'>Affordable, auto rides</p>
                </div>
                <h2 className='text-xl font-semibold'>$200.20</h2>
              </div>
    </div>
  )
}

export default VehiclePanel