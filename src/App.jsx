import React, {useEffect, useState} from 'react';
import { useProxy } from './useProxi';
import './App.css';

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
          <div className="info-weather info-item">
            {weather}
          </div>
          <div className="info-forex info-item">
            {forex}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
