// import {Routes, Route, Navigate} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useProxy } from "../../hooks/useProxy";

import Forex from "../../components/Forex/Forex";
import Weather from "../../components/Weather/Weather";
import Cartoon from "../../components/Cartoon/Cartoon";
import Spinner from "../../components/Spinner/Spinner";

import "./homepage.scss";

function HomePage() {
  const proxy = useProxy();
  const [weather, setWeather] = useState([]); //weather info
  const [forex, setForex] = useState([]); //forex info
  const [cartoonList, setCartoonList] = useState([]); //cartoon collection
  const [weatherIsLoading, setWeatherIsLoading] = useState(true); //use spinner in weather block
  const [forexIsLoading, setForexIsLoading] = useState(true); //use spinner in forex block
  const [cartoonIsLoading, setCartoonIsLoading] = useState(true); //use spinner in cartoon block

  useEffect(() => {
    async function fetchData() {
      const weatherData = await proxy.updateWeatherPr(); //getting weather from the server
      setWeather(weatherData);
      setWeatherIsLoading(false);

      const forexData = await proxy.updateForexPr(); //getting forex from the server
      setForex(forexData);
      setForexIsLoading(false);

      //getting cartoons collection from the server
      const cartoonCollection = await proxy.updateCartoonPr();

      // cartoonCollection = array of objects
      setCartoonList(cartoonCollection);

      // cartoonList = array of objects
      setCartoonIsLoading(false);
    }

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <div className="divided-display">
        {cartoonIsLoading ? (
          <div className="cartoons-box">
            <Spinner />
          </div>
        ) : (
          <Cartoon cartoonList={cartoonList} />
        )}

        <div className="info-box">
          {weatherIsLoading ? (
            <div className="info info-item info-text-forex">
              <Spinner />
            </div>
          ) : (
            <Weather weather={weather} />
          )}

          {forexIsLoading ? (
            <div className="info info-item info-text-forex">
              <Spinner />
            </div>
          ) : (
            <Forex forex={forex} />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
