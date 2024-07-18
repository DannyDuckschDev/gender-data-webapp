import React, { useState } from 'react';
import { Content } from '../types';

interface ArticleItemProps {
  content: Content;
  isExpanded: boolean;
  toggleDescription: (id: number) => void;
}

/**
 * Component to display an article item with expandable description.
 * @param {ArticleItemProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */

const ArticleItem: React.FC<ArticleItemProps> = ({ content, toggleDescription }) => {
    // State to manage the expanded/collapsed state of the description
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  // Function to handle the toggle of description
  const handleToggle = () => {
    setIsTextExpanded(!isTextExpanded);
    toggleDescription(content.id);
  };

  return (
    <div className="article-item">
      <img src={content.article?.image_url} alt={content.name} className="article-image" />
      <div className="article-info">
        <h3>{content.name}</h3>
        <p>Author: {content.article?.author}</p>
        <p>Date: {content.article?.date}</p>
        {isTextExpanded ? (
          <p className="expanded-text">{content.article?.description}</p>
        ) : (
          <p>{content.article?.excerpt}</p>
        )}
        <div className="container-btn-link">
          <button onClick={handleToggle} className="toggle-description-btn">
            {isTextExpanded ? '▲ Read less' : '▼ Read more'}
          </button>
          <a href={content.article?.url} target="_blank" rel="noopener noreferrer" className="read-link">
            Read the full article
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
