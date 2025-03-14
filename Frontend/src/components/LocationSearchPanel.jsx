import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props)

  // sample array for location
  const locations=['24B, Damanjodi, Sector-3, Nalco Township', '22B, Damanjodi, Sector-3, Nalco Township', '21B, Damanjodi, Sector-3, Nalco Township', '20B, Damanjodi, Sector-3, Nalco Township', '19B, Damanjodi, Sector-3, Nalco Township']


  return (
    <div>
      {/* this is just a sample data */}

      {
        locations.map((location, index)=>(
          <div onClick={()=>{ props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} key={index} className='flex border-2 gap-4 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
            <h2 className='bg-[#eee] h-10 flex items-center justify-center w-16 p-2 rounded-full'>
              <i class='ri-map-pin-fill'></i> 
            </h2>
            <h4 className='font-medium'>{location}</h4>
          </div>
        ))
      }

      </div>
  )
}

export default LocationSearchPanel