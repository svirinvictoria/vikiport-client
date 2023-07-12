import React, { useEffect, useState } from "react";
import { useProxy } from "./useProxy";
import "./App.css";
import forecast from "./img/forecast.png";
import forex_img from "./img/forex.png";

function App() {
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
      // cartoonCollection = array of ojects

      const cartoonElements = cartoonCollection.map((item) => {
        return (
          <div key={item.id} className="cartoon-item">
            <div className="cartoon-header">{item.name}</div>
            <div className="cartoon-image">
              <img className="image-cartoon" src={item.image} alt=""/></div>
          </div>
        );
      });
      //cartoonElements = array of elements

      setCartoonList(cartoonElements);
      // cartoonList = array of elements
    }

    fetchData();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>Vikiport</div>
      </header>

      <div className="divided-display">
        <div className="cartoons-box">{cartoonList}</div>

        <div className="info-box">
          <div className="info info-item info-text-weather">
            <div>
              {" "}
              <img src={forecast} className="bcg" alt="" />
            </div>
            {weather}
          </div>
          <div className="info info-item info-text-forex">
            <div>
              {" "}
              <img src={forex_img} className="bcg" alt=""/>
            </div>
            {forex}
          </div>
        </div>
      </div>
      <footer>
          <p>
          &copy; All rights reserved to Victoria Svirin 2023
          </p>
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
          
      </footer>
    </div>
  );
}

export default App;
