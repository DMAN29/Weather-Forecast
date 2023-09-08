import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav'
import Section from './Components/Section'
const App = () => {
  const [data,setData] = useState(null);
  const [city, setCity] = useState('q=mumbai');
  const apiKey = '95db6887f454510c5e2ffa451b921906'
   const resCity = (cityName)=>{
    if(cityName!== ''){
        setCity(cityName);
    }
  }
  useEffect(()=>{
    search();
  },[city]);
  
  const search = async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?${city}&units=metric&appid=${apiKey}`
      const resource = await fetch(url);
      setData(await resource.json());
  }

  return <>
    <Nav onClick={resCity}/>  
    <Section response = {data}/>
  </>
}

export default App