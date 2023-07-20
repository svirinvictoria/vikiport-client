import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import ErrorPage from "./pages/ErrorPage/ErrorPage";
import InfoPage from "./pages/InfoPage/InfoPage";
import HomePage from "./pages/HomePAge/HomePage";
import PersonPage from "./pages/PersonPage/PersonPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/in" element={<InfoPage />} />
          <Route path="/person/:id" element={<PersonPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
