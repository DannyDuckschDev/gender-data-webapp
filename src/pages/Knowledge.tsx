//backup Knowledge.tsx

import React, { useState } from 'react';
import data from '../data/data.json';
import { Content } from '../types';
import '../styles/knowledge.css';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../styles/button.css';
import Sidebar from '../components/Sidebar';
import useWindowSize from '../hooks/useWindowSize';
import useCategories from '../hooks/useCategories';
import ArticleItem from '../components/ArticleItem';
import BookItem from '../components/BookItem';
import VideoItem from '../components/VideoItem';

// Initialize the contents from the imported data
const contents: Content[] = data;

const Info: React.FC = () => {

  // State variables for sidebar, mobile view, current category, and categories list
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobile = useWindowSize();
  const [currentCategory, setCurrentCategory] = useState('All');
  const categories = useCategories(contents);
  const [expandedContent, setExpandedContent] = useState<number | null>(null);

  // Function to toggle the sidebar's visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
  // Filter contents by the current category
  const filterContentsByCategory = () => {
    if (currentCategory === 'All') {
      return contents;
    }
    return contents.filter(content => content.category.includes(currentCategory));
  };

  const resetFilters = () => {
    setCurrentCategory('All');
  };

  
  const toggleDescription = (id: number) => {
    setExpandedContent(expandedContent === id ? null : id);
  };

  const filteredContents = filterContentsByCategory();


  return (
    <div className="info-page">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        resetFilters={resetFilters}
      />
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {isMobile && <button className="menu-btn" onClick={toggleSidebar}>☰</button>}
        <h1>Information</h1>
        <div className="media-section">
          <section className="container-content-articles">
            <h2 id="article">Articles</h2>
            {filteredContents.filter(content => content.types.includes('Article'))
              .map(content => (
                <ArticleItem
                  key={content.id}
                  content={content}
                  isExpanded={expandedContent === content.id}
                  toggleDescription={toggleDescription}
                />
              ))}
          </section>
          <section className="container-content-books">
            <h2 id="books">Books</h2>
            {filteredContents.filter(content => content.types.includes('Book'))
              .map(content => (
                  <BookItem
                    key={content.id}
                    content={content}
                    isExpanded={expandedContent === content.id}
                    toggleDiscription={toggleDescription}
                  />
              ))}
          </section>
          <section className="container-content-videos">
            <h2 id="videos">Videos</h2>
            {filteredContents.filter(content => content.types.includes('Video'))
              .map(content => (
                <VideoItem
                  key={content.id}
                  content={content}
                  isExpanded={expandedContent === content.id}
                  toggleDescription={toggleDescription}
                />
              ))}
          </section>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Info;