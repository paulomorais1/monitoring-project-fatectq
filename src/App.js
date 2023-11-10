import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import HomeContainer from "./containers/HomeContainer";
import Banner from "./components/shared/banner"; // Importe o componente Banner

import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Banner />} />
        </Routes>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
