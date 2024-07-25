// src/components/ArticleItem.tsx
import { useState, forwardRef } from 'react';
import { Content } from '../types';

// Interface for the props passed to the ArticleItem component
interface ArticleItemProps {
  content: Content;
  isExpanded: boolean;
  toggleDescription: (id: number) => void;
  isHighlighted: boolean;
  clearHighlight: () => void; // New prop to clear highlight
}

// The ArticleItem component is a forward-ref component for article content display
const ArticleItem = forwardRef<HTMLDivElement, ArticleItemProps>(({ content, toggleDescription, isHighlighted, clearHighlight }, ref) => {
  // State to manage the expanded/collapsed state of the description
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  // Function to handle the toggle of description
  const handleToggle = () => {
    setIsTextExpanded(!isTextExpanded);
    toggleDescription(content.id);
  };

  return (
    // Render the article item with conditional highlighting and ref forwarding
    <div className={`article-item ${isHighlighted ? 'highlighted' : ''}`} ref={ref}>
      {isHighlighted && (
        <button className="clear-highlight-btn " onClick={clearHighlight}>End Highlight</button> // Button to end highlight
      )}
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
        <div className="categories">
          <h4>Categories:</h4>
          <div className="category-tags">
            {content.category.map((cat, index) => (
              <span key={index} className="category-tag">{cat}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ArticleItem;
