// import {Routes, Route, Navigate} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useProxy } from "../../hooks/useProxy";

import Forex from "../../components/Forex/Forex";
import Weather from "../../components/Weather/Weather";
import Cartoon from "../../components/Cartoon/Cartoon";

import "./HomePage.css";

function HomePage() {
  const proxy = useProxy();
  const [weather, setWeather] = useState([]); //weather info
  const [forex, setForex] = useState([]); //forex info
  const [cartoonList, setCartoonList] = useState([]); //cartoon collection


  useEffect(() => {
    async function fetchData() {
      const weatherData = await proxy.updateWeatherPr(); //getting weather from the server
      setWeather(weatherData);

      const forexData = await proxy.updateForexPr(); //getting forex from the server
      setForex(forexData);

      const cartoonCollection = await proxy.updateCartoonPr(); //getting cartoons collection from the server
      // cartoonCollection = array of objects
      setCartoonList(cartoonCollection);
      // cartoonList = array of objects
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">

      <div className="divided-display">
          <Cartoon cartoonList={cartoonList}/>
        <div className="info-box">
          <Weather weather={weather}/>
          <Forex forex={forex}/>
        </div>
      </div>
  
      
    </div>
  );
}

export default HomePage;
