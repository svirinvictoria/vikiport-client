import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import ErrorPage from "./pages/error/errorpage";
import InfoPage from "./pages/info/infopage";
import HomePage from "./pages/home/homepage";
import PersonPage from "./pages/person/personpage";

import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
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
