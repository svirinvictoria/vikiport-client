import config from "../config/config";

export const useProxy = (props) => {
  //filling weather window
  async function updateWeatherPr() {
    try {
      const fillWeather = await fetch(
        config.serverDomainUrl + "api/weather/v1/actual"
      );
      const weatherAsObject = await fillWeather.json();
      const weather = weatherAsObject.data;
      const temp = weather.main.temp;
      const humidity = weather.main.humidity;
      const visibility = weather.visibility;
      const weatherResponse = { temp, humidity, visibility };
      return weatherResponse;

    } catch (error) {
      console.log(error);
      return null;
    }
  }

  //filling forex window
  async function updateForexPr() {
    try {
      const fillForex = await fetch(config.serverDomainUrl + "api/forex/v1/actual");
      const forexAsObject = await fillForex.json();

      const forex = forexAsObject.data.data;
      const dollar = forex.data.USD.value;
      const euro = forex.data.EUR.value.toFixed(2);
      const pound = forex.data.GBP.value.toFixed(2);
      const yen = forex.data.JPY.value.toFixed(2);
      const shekel = forex.data.ILS.value.toFixed(2);

      const forexResult = { dollar, euro, pound, yen, shekel };
      return forexResult;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  //filling cartoon images
  async function updateCartoonPr() {
    try {
      const fillCartoon = await fetch(
        config.serverDomainUrl + "api/cartoon/v1/cartoons"
      );
      const cartoonAsArray = await fillCartoon.json();
      const cartoonCollection = cartoonAsArray.data;
      return cartoonCollection;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  //getting single image from cartoon array
  async function getSingleItemPr(id) {
    try {
      const fillCartoon = await fetch(
        config.serverDomainUrl + "api/cartoon/v1/cartoons/" + id
      );
      const character = await fillCartoon.json();
      return character.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  return {
    updateWeatherPr: updateWeatherPr,
    updateForexPr: updateForexPr,
    updateCartoonPr: updateCartoonPr,
    getSingleItemPr: getSingleItemPr,
  };
};
