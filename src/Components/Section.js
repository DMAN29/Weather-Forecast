import React from 'react';
import Error from './Error';
const Section = ({ response }) => {
  return <>
    {response === null ? <h1 className='absolute top-[50%] left-[50%] translate-x-[-50%] text-6xl'>Loading...!!!</h1> : response.cod >= 400 ? <Error/> : <div className='mt-28 sm:mt-16  w-11/12 sm:w-2/3 lg:w-3/5 mx-auto py-5 h-[93vh]  md:py-12'>
      <h2 className='text-2xl sm:text-4xl font-bold text-red-200 flex'>{response.name}, {response.sys.country} <img className="h-10 mx-5" src={`https://flagcdn.com/144x108/${response.sys.country.toLowerCase()}.png`} alt="Country Flag" /></h2>
      <div className='text-gray-300'>
        <h3 className='font-semibold p-3 flex justify-between'>
          <span>
            Current Weather
          </span>
          {response.sys.country==='IN'?  <span>
            {new Date(response.dt * 1000).toLocaleTimeString()}
          </span>:null}
        </h3>
        <div className='flex justify-around my-5 md:my-10'>
          <div>
            <img className="bg-stone-400 rounded-xl mx-auto" src={`https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`} alt="weather condition img" />
            <h3 className='text-center mt-3 uppercase font-bold sm:text-xl'>{response.weather[0].description}</h3>
          </div>

          <span className=' text-3xl sm:text-6xl font-bold'>{response.main.temp}&deg;C
            <br />
            <span className='text-lg font-semibold'>Feels like {response.main.feels_like}&deg;C</span>
          </span>
        </div>
        <div className='flex'>
          <div className='text-center mx-auto my-4 text-md md:text-2xl bg-gradient-to-r from-cyan-700 to-blue-900 rounded-xl w-1/4  py-3'>
            <img src="../Images/pressure.png" alt="pressure" className='h-16 md:h-20 mx-auto' /> <h4>
            Pressure
            </h4> <p>
            {response.main.pressure} mb
            </p></div>
          <div className='text-center mx-auto my-4 text-md md:text-2xl bg-gradient-to-r from-cyan-700 to-blue-900 rounded-xl w-1/4 py-3'>
            <img src="../Images/humidity.png" alt="humidity" className='h-16 md:h-20 mx-auto'  />
            <h4>
            Humidity
            </h4>
            <p>
            {response.main.humidity}%
            </p>
            </div>
          <div className='text-center mx-auto my-4 text-md md:text-2xl bg-gradient-to-r from-cyan-700 to-blue-900 rounded-xl  w-1/4 py-3'>
            <img src="../Images/wind.png" alt="wind"  className='h-16 md:h-20 mx-auto'/>
            <h4>
            Wind Speed 
            </h4>
            <p>
            {response.wind.speed} Km/h
            </p>
            </div>
        </div>
      </div>
    </div>
    }
  </>
}

export default Section