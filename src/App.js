

import CardLyon from './CardLyon';

import { useState,useEffect } from 'react';





function App() {
  const [on, setOn] = useState(true)
  const [name, setName] = useState('');
  const [temp, setTemp] = useState('');
  const [wind, setWind] = useState('');
  const [weather, setWeather] = useState('');
  const [error, setError] = useState(null);

  const setData = (data) => {
console.log(data)
    setName(data.name)
    setTemp(data.main.temp)
    setWeather(data.weather.main)
    setWind(data.wind.speed)
  
  };

useEffect(() => {
     if (on) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Lyon,FR&units=metric&APPID=cb0a930e7a31a1900ac0ff06d2ddaf24&lang=fr`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        } else {
          setData(data)
          console.log(data)
          return 
        }
        setOn(false)
      })
    } 
  },[])

  return (
    
      <div>
       <CardLyon name={name} temp={temp} wind={wind} weather={weather}/>
        </div>
    
  );
}





export default App;
