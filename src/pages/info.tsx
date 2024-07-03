import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import { Content } from '../types';
import '../styles/info.css';

const contents: Content[] = data;

const Info: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('All');
  const [categories, setCategories] = useState<string[]>([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      setIsSidebarOpen(false);
    } else {
      setIsMobile(false);
      setIsSidebarOpen(true);
    }
  };

  const filterContentsByCategory = () => {
    if (currentCategory === 'All') {
      return contents;
    }
    return contents.filter(content => content.category.includes(currentCategory));
  };

  const extractCategories = (contents: Content[]): string[] => {
    const categoriesSet = new Set<string>();
    contents.forEach(content => {
      content.category.forEach(cat => categoriesSet.add(cat));
    });
    return Array.from(categoriesSet);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    const uniqueCategories = extractCategories(contents);
    setCategories(uniqueCategories);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredContents = filterContentsByCategory();

  return (
    <div className="info-page">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <h2>Media Types</h2>
        <ul>
          <li><a href="#article">Article</a></li>
          <li><a href="#books">Books</a></li>
          <li><a href="#videos">Videos</a></li>
        </ul>
        <h2>Categories</h2>
        <ul>
          {categories.map(category => (
            <li key={category} onClick={() => setCurrentCategory(category)}>
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {isMobile && <button className="menu-btn" onClick={toggleSidebar}>☰</button>}
        <h1>Information</h1>
        <div className="media-section">
          <section className="container-content-articles">
            <h2 id='article'>Articles</h2>
            {filteredContents.filter(content => content.types.includes('Article'))
              .map(content => (
                <div key={content.id} className="article-item">
                  {content.article && (
                    <>
                      {content.article.image_url && <img src={content.article.image_url} alt={content.name} className="article-image" />}
                      <div className="article-info">
                        <h3>{content.name}</h3>
                        <p>Author: {content.article.author}</p>
                        <p>Date: {content.article.date}</p>
                        <a href={content.article.url}>Read the article</a>
                      </div>
                    </>
                  )}
                </div>
              ))}
          </section>
          <section className="container-content-books">
            <h2 id='books'>Books</h2>
            {filteredContents.filter(content => content.types.includes('Book'))
              .map(content => (
                <div key={content.id} className="book-item">
                  {content.book && (
                    <>
                      {content.book.cover_url && <img src={content.book.cover_url} alt={content.name} className="book-cover" />}
                      <div className="book-info">
                        <h3>{content.name}</h3>
                        <p>Author: {content.book.author}</p>
                        <p>Title: {content.book.title}</p>
                        <p>Publication Year: {content.book.publication_year}</p>
                        <a href={content.book.shopping_url}>Buy this book</a>
                      </div>
                    </>
                  )}
                </div>
              ))}
          </section>
          <section className="container-content-videos">
            <h2 id='videos'>Videos</h2>
            {filteredContents.filter(content => content.types.includes('Video'))
              .map(content => (
                <div key={content.id} className='video-item'>
                  <h3>{content.name}</h3>
                  {content.video && (
                    <a href={content.video.url}>Watch the video</a>
                  )}
                </div>
              ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Info;
