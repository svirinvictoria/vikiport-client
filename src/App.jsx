import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import Info from "./components/routing/info/Info";
import Content from "./components/routing/content/Content";

import "./App.css";

function App() {
  const navigate = useNavigate();
  const goToInfoHandler = () => navigate("/in");
  const goToContentPage = () => navigate("/");

  return (
    <div className="App">
      <header className="App-header">
        <div className="header" onClick={goToContentPage}>Vikiport</div>
        <button className="header-btn" onClick={goToInfoHandler}>About this site
        </button>
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/in" element={<Info />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      {/* <div className="divided-display">
          <Cartoon cartoonList={cartoonList}/>
        <div className="info-box">
          <Weather weather={weather}/>
          <Forex forex={forex}/>
        </div>
      </div> */}

      <footer className="ftr">
        <div>
          <p>
            <a href="https://api.currencyapi.com">
              Exchange rate is taken from currencyapi.com
            </a>
          </p>
          <p>
            <a href="https://api.openweathermap.org">
              Weather forecast is taken from openweathermap.org
            </a>
          </p>
          <p>
            <a href="https://rickandmortyapi.com/api/character">
              Cartoons are taken from rickandmortyapi.com
            </a>
          </p>
        </div>
        <div>
          <p>&copy; All rights reserved to Victoria Svirin 2023</p>
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
      </footer>
    </div>
  );
}

export default App;
