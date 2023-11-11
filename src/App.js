import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";
import HomeContainer from "./containers/HomeContainer";
import Banner from "./components/shared/banner";
import RedesSociais from "./components/shared/redesSociais";
import NoticiasSection from "./components/NoticiasSection"; // Importe o componente NoticiasSection
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
          <Route path="/" element={<RedesSociais />} />
        </Routes>
        <div>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            {/* Adicione a rota para a seção de notícias */}
          </Routes>
          <Routes>
            <Route path="" element={<NoticiasSection />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
