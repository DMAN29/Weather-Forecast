import React, { useEffect, useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
const Nav = (props) => {
    const [search, setSearch] = useState("");
    const [coordinate,setCoordinate] = useState("");
    useEffect(()=>{
        props.onClick(coordinate);
    },[coordinate]);
    const checking = ()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
          } else {
            console.log("Geolocation not supported");
          }
          
          function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            setCoordinate(`lat=${latitude}&lon=${longitude}`);
          }
          
          function error() {
            console.log("Unable to retrieve your location");
          }
    }

    return <>
        <div className='w-full bg-black text-white py-3 px-5 fixed sm:flex sm:justify-between top-0 space-y-3'>
            <h1 className='text-3xl sm:text-left text-center'>WeatheNow</h1>
            {/* /////////////////// Search Bar /////////////////////// */}
            <div className='flex sm:justify-normal justify-around'>
                <button className='bg-gray-800 rounded-lg px-4' onClick={()=>{ checking();setCoordinate("")} }><GpsFixedIcon/> <span className='hidden sm:inline'>
                Current Location
                </span></button>
                <div className='sm:ml-8 bg-gray-800 p-2 rounded-md'>
                    <input className="bg-gray-800 outline-none" type="text" placeholder='Search for location' onChange={(e) => { return setSearch(e.target.value) }}
                        value={search}
                    />
                    <button onClick={() => { props.onClick(`q=${search}`) 
                    setSearch("") }}>
                        <SearchOutlinedIcon />
                    </button>
                </div>
            </div>
            </div>
    </>
}

export default Nav