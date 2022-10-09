import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import HeroSection from './components/pages/hero/HeroSection';
import PortfolioSection from './components/pages/portfolio/PortfolioSection';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection />}></Route>
          <Route path="/portfolio" element={<PortfolioSection />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
