import React, {useEffect, useState} from 'react';
import { useProxy } from './useProxi';
import './App.css';
import forecast from "./img/forecast.png";
import forex_img from "./img/forex.png"

function App() {
  const proxy = useProxy()
   const [weather, setWeather] = useState([]);//weather info
   const [forex, setForex] = useState([]);//forex info
   const [cartoon, setCartoon] = useState([]);//cartoon img

  useEffect(()=>{
    async function fetchData(){
      const weatherData = await proxy.updateWeatherPr();//getting weather from the server
      setWeather(weatherData);

      const forexData = await proxy.updateForexPr();//getting forex from the server
      setForex(forexData);

      const cartoonCollection = await proxy.updateCartoonPr();//getting cartoons collection from the server
      
      const cartoonItem = cartoonCollection&& cartoonCollection.map((singleCartoon)=>{ //getting single cartoon from the collection
        return <div>
          {singleCartoon.name}
          {singleCartoon.image}</div>
      });
      setCartoon(cartoonItem);
      console.log(cartoonItem);
    }
    fetchData();
  }, []);

 
  

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Vikiport
        </p>
      </header>
      <div className="divided-display">
        <div className="cartoons-box">
          <div className="cartoon-item">
            {cartoon}
          </div>
          
        </div>
        <div className="info-box">
          <div className="info-weather info-item info-text-weather">
            <div> <img src={forecast} className='bcg'/></div>
            {weather}
          </div>
          <div className="info-forex info-item info-text-forex">
            <div> <img src={forex_img} className='bcg'/></div>
            {forex}
          </div>
        </div>
      </div>
      <footer>
        <p>
        <a href="https://www.flaticon.com/free-icons/forex" title="forex icons">Forex icons created by juicy_fish - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/foggy" title="foggy icons">Foggy icons created by Freepik - Flaticon</a><a href="https://www.flaticon.com/free-icons/humidity" title="humidity icons">Humidity icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/forecast" title="forecast icons">Forecast icons created by ChilliColor - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/temperature" title="temperature icons">Temperature icons created by Freepik - Flaticon</a></p>
      </footer>
    </div>
  );
}

export default App;
