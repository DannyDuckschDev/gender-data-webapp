// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Info from './pages/info';
import Downloads from './pages/Downloads';
import Kontakt from './pages/Kontakt';
import './styles/main.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
