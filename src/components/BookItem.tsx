// src/components/BookItem.tsx
import { useState, forwardRef } from 'react';
import { Content } from '../types';

// Interface for the props passed to the BookItem component
interface BookItemProps {
  content: Content;  // Content object containing the book data
  isExpanded: boolean; // Flag indicating if the description is expanded
  toggleDescription: (id: number) => void; // Function to toggle the description
  isHighlighted: boolean; // Flag indicating if the item is highlighted
  clearHighlight: () => void; // Function to clear the highlight
  currentCategory: string; // Current selected category for highlighting
}

// The BookItem component is a forward-ref component for book content display
const BookItem = forwardRef<HTMLDivElement, BookItemProps>(({ content, toggleDescription, isHighlighted, clearHighlight, currentCategory }, ref) => {
  // State to manage the expanded/collapsed state of the description
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  // Function to handle the toggle of description
  const handleToggle = () => {
    setIsTextExpanded(!isTextExpanded);
    toggleDescription(content.id);
  };

  return (
    // Render the book item with conditional highlighting and ref forwarding
    <div className={`book-item ${isHighlighted ? 'highlighted' : ''}`} ref={ref}>
      {isHighlighted && (
        <button className="clear-highlight-btn" onClick={clearHighlight}>End Highlight</button>
      )}
      {/* Image for the book cover */}
      <img src={content.book?.cover_url} alt={content.name} className="book-cover" />
      <div className="book-info">
        <h3>{content.name}</h3>
        <p>Author: {content.book?.author}</p>
        <p>Publication Year: {content.book?.publication_year}</p>
        {/* Toggle between showing the full description or an excerpt */}
        {isTextExpanded ? (
          <p className="expanded-text">{content.book?.description}</p>
        ) : (
          <p>{content.book?.excerpt}</p>
        )}
        {/* Container for the toggle button and buy link */}
        <div className="container-btn-link">
          <button onClick={handleToggle} className="toggle-description-btn">
            {isTextExpanded ? '▲ Read Less' : '▼ Read More'}
          </button>
          <a href={content.book?.shopping_url} target="_blank" rel="noopener noreferrer" className="read-link">
            Buy The Book
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

export default BookItem;
