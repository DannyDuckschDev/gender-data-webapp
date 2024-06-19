//backup info.tsx

// src/components/Info.tsx
import React, { useState, useEffect } from 'react';
import '../styles/info.css';

const categories = ["Female Health", "Medicine", "Safety", "Education"];

const Info: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() =>  {
    window.addEventListener('resize', handleResize);
    handleResize(); //Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="info-page">
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <h2>Categories</h2>
        <ul>
          {categories.map(category => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
      <div className={`content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {isMobile && <button className="menu-btn" onClick={toggleSidebar}>☰</button>}
        <h1>Information</h1>
        <div className="media-section">
          <h2>Articles</h2>
          {/* List of articles */}
          <h2>Books</h2>
          {/* List of books */}
          <h2>Videos</h2>
          {/* List of videos */}
        </div>
      </div>
    </div>
  );
};

export default Info;
