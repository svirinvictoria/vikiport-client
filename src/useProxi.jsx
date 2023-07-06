

export const useProxy = (props) => {
    //filling weather window
    async function updateWeatherPr(){
        // console.log("Entering updateWeather")
        try {
            const fillWeather = await fetch ("http://localhost:4000/api/weather/v1/actual");
            // console.log("Entering fetch")
            const weatherAsArray = await fillWeather.json();
            const weatherAsString = JSON.stringify(weatherAsArray)
            return  weatherAsString;
        } catch (error){
            // console.log("Entering error")
            console.log(error);
            return "Can't get weather info"
        }
    }

     //filling forex window
     async function updateForexPr(){
        try {
            const fillForex = await fetch ("http://localhost:4000/api/forex/v1/actual");
            const forexAsArray = await fillForex.json();
            const forexAsString = JSON.stringify(forexAsArray);
            // console.log(forexAsString);
            return forexAsString;
        } catch (error){
            console.log(error);
            return "Can't get forex info"
        }
    }

     //filling cartoon images
     async function updateCartoonPr(){
        try {
            console.log("Entered cartoon update");
            const fillCartoon = await fetch ("http://localhost:4000/api/cartoon/v1/characters");
            const cartoonAsArray = await fillCartoon.json();
            const cartoonCollection= cartoonAsArray.data;
            console.log("returning cartoon as array");
            console.log(cartoonCollection);
            return cartoonCollection;
        } catch (error){
            console.log(error);
            return "Can't get cartoon info"
        }
    }
    

    return {updateWeatherPr:updateWeatherPr, 
        updateForexPr:updateForexPr, 
        updateCartoonPr:updateCartoonPr
    }
}