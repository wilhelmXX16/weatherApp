import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCard from './components/WeatherCard'

function App() {
  
  //use geolocalition 
  const [coords, setCoords] = useState()
  // para traer el clima
  const [weather, setWeather] = useState()
  //cambiar de faringe a celcius
  const [temperture, setTemperture] = useState()
  

  useEffect(() => {
    //esta peticion es para trae la informacion de nuestra ubicacion
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude, 
        lon: pos.coords.longitude
      }
      setCoords(obj);
    }
    navigator.geolocation.getCurrentPosition(success)
  },[])

  // console.log(coords)

  // ------ peticion a la api del clima ------
   
  useEffect(() => {
    if(coords){
      const APIKEY = '30956a5dbf356d82a97193d02a2882d5'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
      axios.get(URL)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(0)
          const farenheit = (celsius * 9/5+32 ).toFixed(0)
          setTemperture ({celsius, farenheit})
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  },[coords])

  //  console.log(weather.weather[0].main)

  return (
    <div className={`App imag-${weather?.weather[0].main}`}>
      {
        weather ? 
        <WeatherCard weather={weather} temperture={temperture}/>
        :
        <Loading />
      }
    </div>
  )
}

export default App
