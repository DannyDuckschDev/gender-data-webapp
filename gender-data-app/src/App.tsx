// src//App.tsx
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Alltagswissen from './pages/Alltagswissen';
import Periode from './pages/Periode';
import Kontakt from './pages/Kontakt';
import Forum from './pages/Forum';
import './styles/main.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alltagswissen" element={<Alltagswissen />} />
        <Route path="/periode" element={<Periode />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
