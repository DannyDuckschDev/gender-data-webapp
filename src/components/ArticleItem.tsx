// src/components/ArticleItem.tsx
import { useState, forwardRef } from 'react';
import { Content } from '../types';

// Interface for the props passed to the ArticleItem component
interface ArticleItemProps {
  content: Content;  // Content object containing the article data
  isExpanded: boolean; // Flag indicating if the description is expanded
  toggleDescription: (id: number) => void; // Function to toggle the description
  isHighlighted: boolean; // Flag indicating if the item is highlighted
  clearHighlight: () => void; // prop to clear highlight
  currentCategory: string; // Prop to track the current selected category
}

// The ArticleItem component is a forward-ref component for article content display
const ArticleItem = forwardRef<HTMLDivElement, ArticleItemProps>(({ content, toggleDescription, isHighlighted, clearHighlight, currentCategory }, ref) => {
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
        // Button to end highlight
        <button className="clear-highlight-btn " onClick={clearHighlight}>End Highlight</button> 
      )}
      {/* Image for the article */}
      <img src={content.article?.image_url} alt={content.name} className="article-image" />
      <div className="article-info">
        <h3>{content.name}</h3>
        <p>Author: {content.article?.author}</p>
        <p>Date: {content.article?.date}</p>
        
        {/* Toggle between showing the full description or an excerpt */}
        {isTextExpanded ? (
          <p className="expanded-text">{content.article?.description}</p>
        ) : (
          <p>{content.article?.excerpt}</p>
        )}
        {/* Container for the toggle button and read link */}
        <div className="container-btn-link">
          <button onClick={handleToggle} className="toggle-description-btn">
            {isTextExpanded ? '▲ Read less' : '▼ Read more'}
          </button>
          <a href={content.article?.url} target="_blank" rel="noopener noreferrer" className="read-link">
            Read the full article
          </a>
        </div>
        {/* Container for the categories */}
        <div className="categories">
          <h4>Categories:</h4>
          <div className="category-tags">
            {/* Map over the categories and conditionally apply highlighting */}
            {content.category.map((cat, index) => (
              <span key={index} className={`category-tag ${currentCategory === cat? 'highlight-category' : ''}`}>{cat}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ArticleItem;
