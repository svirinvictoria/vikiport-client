import usd_img from "./img/usd.png";
import eur_img from "./img/eur.png";
import pound_img from "./img/pound.png";
import yen_img from "./img/yen.png";
import shekel_img from "./img/shekel.png";

export const useProxy = (props) => {
  //filling weather window
  async function updateWeatherPr() {
    // console.log("Entering updateWeather")
    try {
      const fillWeather = await fetch(
        "http://localhost:4000/api/weather/v1/actual"
      );
      const weatherAsObject = await fillWeather.json();
      const data = weatherAsObject.data;
      const payload = JSON.parse(data[0].payload);
      const temp = payload.main.temp;
      const humidity = payload.main.humidity;
      const visibility = payload.visibility;

      //    console.log("payload", payload);
      return (
        <div>
          <div>Temperature: {temp}</div>
          <div>Humidity: {humidity}</div>
          <div>Visibility: {visibility}</div>
        </div>
      );
    } catch (error) {
      // console.log("Entering error")
      console.log(error);
      return "Can't get weather info";
    }
  }

  //filling forex window
  async function updateForexPr() {
    try {
      const fillForex = await fetch(
        "http://localhost:4000/api/forex/v1/actual"
      );
      const forexAsObject = await fillForex.json();
      const data = forexAsObject.data;
      const payload = JSON.parse(data.payload);
      const dollar = payload.data.USD.value;
      const euro = payload.data.EUR.value.toFixed(2);
      const pound = payload.data.GBP.value.toFixed(2);
      const yen = payload.data.JPY.value.toFixed(2);
      const shekel = payload.data.ILS.value.toFixed(2);

      console.log("payload", payload);
      console.log("USD", dollar);
      return (
        <div>
          <div>
            <img src={usd_img} className="coin-icon" />
            USD (USA) = {dollar}
          </div>
          <div>
            <img src={eur_img} className="coin-icon" />
            Euro (EU) = {euro}
          </div>
          <div>
            <img src={pound_img} className="coin-icon" />
            Pound Sterling (GB) = {pound}
          </div>
          <div>
            <img src={yen_img} className="coin-icon" />
            Yen (Japan) = {yen}{" "}
          </div>
          <div>
            {" "}
            <img src={shekel_img} className="coin-icon" />
            Shekel (Israel) = {shekel}{" "}
          </div>
        </div>
      );
    } catch (error) {
      console.log(error);
      return "Can't get forex info";
    }
  }

  //filling cartoon images
  async function updateCartoonPr() {
    try {
      // console.log("Entered cartoon update");
      const fillCartoon = await fetch(
        "http://localhost:4000/api/cartoon/v1/characters"
      );
      const cartoonAsArray = await fillCartoon.json();

      const cartoonCollection = cartoonAsArray.data;
      // console.log("returning cartoon as array");
      // console.log(cartoonCollection);

      return cartoonCollection;
    } catch (error) {
      console.log(error);
      return "Can't get cartoon info";
    }
  }

  return {
    updateWeatherPr: updateWeatherPr,
    updateForexPr: updateForexPr,
    updateCartoonPr: updateCartoonPr,
  };
};
