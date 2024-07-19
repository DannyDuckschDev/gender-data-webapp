import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import { Content } from '../types';
import '../styles/knowledge.css';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../styles/button.css';
import Sidebar from '../components/Sidebar';
import useWindowSize from '../hooks/useWindowSize';
import useCategories from '../hooks/useCategories';
import useFilteredContents from '../hooks/useFilteredContents';
import ArticleItem from '../components/ArticleItem';
import BookItem from '../components/BookItem';
import VideoItem from '../components/VideoItem';
import SearchBar from '../components/SearchBar';

const contents: Content[] = data;

const Knowledge: React.FC = () => {
  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // Determine if the device is mobile
  const isMobile = useWindowSize();
  
  // State to manage the current category filter
  const [currentCategory, setCurrentCategory] = useState('All');
  
  // Get categories from contents
  const categories = useCategories(contents);
  
  // State to manage which content is expanded
  const [expandedContent, setExpandedContent] = useState<number | null>(null);
  
  // State to manage the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Effect to handle sidebar visibility based on window size
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  // Function to toggle the sidebar's visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to reset category filters
  const resetFilters = () => {
    setCurrentCategory('All');
  };

  // Function to toggle the description of the content
  const toggleDescription = (id: number) => {
    setExpandedContent(expandedContent === id ? null : id);
  };

  // Get the filtered contents based on the search term and current category
  const filteredContents = useFilteredContents(contents, searchTerm, currentCategory);

  // Filter contents by type
  const filteredArticles = filteredContents.filter(content => content.type === 'Article');
  const filteredBooks = filteredContents.filter(content => content.type === 'Book');
  const filteredVideos = filteredContents.filter(content => content.type === 'Video');

  return (
    <div className="info-page">
      {/* Sidebar component with categories and filters */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        resetFilters={resetFilters}
      />
      {/* Main content area */}
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Toggle button for sidebar visibility on mobile devices */}
        {isMobile && <button className="menu-btn" onClick={toggleSidebar}>☰</button>}
        <h1>Information</h1>
        {/* Search bar for filtering content */}
        <div className='search-container'>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        {/* Section for displaying media content */}
        <div className="media-section">
          {/* Articles section */}
          {filteredArticles.length > 0 && (
            <section className="container-content-articles">
              <h2 id="article">Articles</h2>
              {filteredArticles.map(content => (
                <ArticleItem
                  key={content.id}
                  content={content}
                  isExpanded={expandedContent === content.id}
                  toggleDescription={toggleDescription}
                />
              ))}
            </section>
          )}
          {/* Books section */}
          {filteredBooks.length > 0 && (
            <section className="container-content-books">
              <h2 id="books">Books</h2>
              {filteredBooks.map(content => (
                <BookItem
                  key={content.id}
                  content={content}
                  isExpanded={expandedContent === content.id}
                  toggleDescription={toggleDescription}
                />
              ))}
            </section>
          )}
          {/* Videos section */}
          {filteredVideos.length > 0 && (
            <section className="container-content-videos">
              <h2 id="videos">Videos</h2>
              {filteredVideos.map(content => (
                <VideoItem
                  key={content.id}
                  content={content}
                  isExpanded={expandedContent === content.id}
                  toggleDescription={toggleDescription}
                />
              ))}
            </section>
          )}
        </div>
      </div>
      {/* Scroll to top button for easy navigation */}
      <ScrollToTopButton selector='.content' />
    </div>
  );
};

export default Knowledge;
