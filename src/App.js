import CardLyon from "./CardLyon";
import Days from "./Days";
import Header from "./Header";

import { useState, useEffect } from "react";

import "./index.css";
import "./App.css";

function App() {
  const [on, setOn] = useState(true);
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [deg, setDeg] = useState("");
  const [weather, setWeather] = useState("");
  const [day, setDay] = useState("");
  const [icon, setIcon] = useState("");
  const [error, setError] = useState(null);

  const setData = (data) => {
    setName(data.city.name);
    setTemp(data.list[0].main.temp);
    setWeather(data.list[0].weather[0].main);
    setIcon(data.list[0].weather[0].icon);
    setWind(data.list[0].wind.speed);
    setDeg(data.list[0].wind.deg);
    setDay(data.list[0].dt);
  };

  useEffect(async () => {
    if (on) {
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=Lyon,FR&units=metric&APPID=cb0a930e7a31a1900ac0ff06d2ddaf24&lang=fr`
      )
        .then((res) => res.json())
        .then(async (data) => {
          setData(data);
          console.log(data);
        });
    }

    await setOn(false);
  }, []);

  return (
    <div>
      <Header />
      <CardLyon
        name={name}
        temp={temp}
        wind={wind}
        deg={deg}
        weather={weather}
        icon={icon}
      />

      <div className="days">
              
    <Days/>
      </div>
    </div>
  );
}

export default App;
