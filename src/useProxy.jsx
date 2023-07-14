import config from "./config/config";

export const useProxy = (props) => {
  //filling weather window
  async function updateWeatherPr() {
    // console.log("Entering updateWeather")
    try {
      const fillWeather = await fetch(
        config.serverDomainUrl + "api/weather/v1/actual"
      );
      const weatherAsObject = await fillWeather.json();
      const data = weatherAsObject.data;
      const payload = JSON.parse(data[0].payload);
      const temp = payload.main.temp;
      const humidity = payload.main.humidity;
      const visibility = payload.visibility;

      const weatherResponse = { temp, humidity, visibility};
      return (weatherResponse );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  //filling forex window
  async function updateForexPr() {
    try {
      const fillForex = await fetch(
        config.serverDomainUrl + "api/forex/v1/actual"
      );
      const forexAsObject = await fillForex.json();
      const data = forexAsObject.data;
      const payload = JSON.parse(data.payload);
      const dollar = payload.data.USD.value;
      const euro = payload.data.EUR.value.toFixed(2);
      const pound = payload.data.GBP.value.toFixed(2);
      const yen = payload.data.JPY.value.toFixed(2);
      const shekel = payload.data.ILS.value.toFixed(2);

      const forexResult = {dollar, euro, pound, yen, shekel};
      return (
       forexResult
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  //filling cartoon images
  async function updateCartoonPr() {
    try {
      // console.log("Entered cartoon update");
      const fillCartoon = await fetch(
        config.serverDomainUrl + "api/cartoon/v1/characters"
      );
      const cartoonAsArray = await fillCartoon.json();
      const cartoonCollection = cartoonAsArray.data;
      return cartoonCollection;
    } catch (error) {
      console.log(error);
      return  null;
    }
  }

  return {
    updateWeatherPr: updateWeatherPr,
    updateForexPr: updateForexPr,
    updateCartoonPr: updateCartoonPr,
  };
};
