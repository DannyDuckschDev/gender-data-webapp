// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Info from './pages/info';
import Periode from './pages/Periode';
import Kontakt from './pages/Kontakt';
import './styles/main.css';
import data from './data/data.json';
import { Content } from './types';

function App() {
  const contents: Content[] = data;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/periode" element={<Periode />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      <div>
        <h1>Content List</h1>
        <ul>
          {contents.map((content) => (
            <li key={content.id}>
              <h2>{content.name}</h2>
              <p>Categories: {content.category.join(', ')}</p>
              <p>Types: {content.types.join(', ')}</p>
              {content.book && (
                <div>
                  <h3>Book:</h3>
                  <p>Author: {content.book.author}</p>
                  <p>Title: {content.book.title}</p>
                  <p>Publication Year: {content.book.publication_year}</p>
                  <a href={content.book.shopping_url}>Buy this book</a>
                </div>
              )}
              {content.article && (
                <div>
                  <h3>Article:</h3>
                  <p>Author: {content.article.author}</p>
                  <p>Date: {content.article.date}</p>
                  <a href={content.article.url}>Read the article</a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
