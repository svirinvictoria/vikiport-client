import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/Home/HomePage";
import InfoPage from "./pages/InfoPage/InfoPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import PersonPage from "./pages/PersonPage/PersonPage";

import "./Root.scss";

function Root() {
  return (
    <div className="Root">
      <Header />
      <div className="content">
        <div>Comming Soon</div>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/in" element={<InfoPage />} />
          <Route path="/person/:id" element={<PersonPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes> */}
      </div>
      <Footer />
    </div>
  );
}

export default Root;
