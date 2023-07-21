import forecast from "../../images/forecast.png";

import "./Weather.scss";

function Weather (props){

    const weatherElements = props.weather ? <div>
          <div>Temperature: {props.weather.temp}&#8451;</div>
          <div>Humidity: {props.weather.humidity}&#37;</div>
          <div>Visibility: {props.weather.visibility}</div>
        </div> : <div>Can't load actual weather</div>

    return(
        <div className="info info-item info-text-weather">
            <div>
              {" "}
              <img src={forecast} className="bcg" alt="" />
            </div>
            {weatherElements}
          </div>
    )
}

export default Weather;