import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import HomeContainer from './containers/HomeContainer';
import MonitorDetailsContainer from './containers/MonitorDetailsContainer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/monitor/:id" element={<MonitorDetailsContainer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
