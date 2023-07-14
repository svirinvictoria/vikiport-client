// import {Routes, Route, Navigate} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useProxy } from "../../../useProxy";
import "./Content.css";
import Weather from "../../weather/Weather";
import Forex from "../../forex/Forex";
import Cartoon from "../../cartoon/Cartoon";

function Content() {
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
      {/* <header className="App-header">
        <div>Vikiport</div>
      </header> */}

      <div className="divided-display">
          <Cartoon cartoonList={cartoonList}/>
        <div className="info-box">
          <Weather weather={weather}/>
          <Forex forex={forex}/>
        </div>
      </div>
  
      {/* <footer className="ftr">
        <div>
          <p>
            <a href = "https://api.currencyapi.com">
              Exchange rate is taken from currencyapi.com 
            </a>
           
          </p>
          <p>
            <a href = "https://api.openweathermap.org">
            Weather forecast is taken from openweathermap.org
            </a>
            
          </p>
          <p>
            
            <a href="https://rickandmortyapi.com/api/character">Cartoons are taken from rickandmortyapi.com</a>
          </p>
        </div>
        <div>
          <p>
          &copy; All rights reserved to Victoria Svirin 2023
          </p>
        </div>
          <div>
            <p>
              <a
                href="https://www.flaticon.com/free-icons/forex"
                title="forex icons"
              >
                Forex icons created by juicy_fish - Flaticon
              </a>
          </p>
          <p>
          <a
            href="https://www.flaticon.com/free-icons/forecast"
            title="forecast icons"
          >
            Forecast icons created by ChilliColor - Flaticon
          </a>
          </p>
          </div>
       
      </footer> */}
    </div>
  );
}

export default Content;
