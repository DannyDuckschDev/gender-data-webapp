// src/components/BookItem.tsx
import { useState, forwardRef } from 'react';
import { Content } from '../types';

// Interface for the props passed to the BookItem component
interface BookItemProps {
  content: Content;
  isExpanded: boolean;
  toggleDescription: (id: number) => void;
  isHighlighted: boolean;
  clearHighlight: () => void;
}

// The BookItem component is a forward-ref component for book content display
const BookItem = forwardRef<HTMLDivElement, BookItemProps>(({ content, toggleDescription, isHighlighted, clearHighlight }, ref) => {
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
      <img src={content.book?.cover_url} alt={content.name} className="book-cover" />
      <div className="book-info">
        <h3>{content.name}</h3>
        <p>Author: {content.book?.author}</p>
        <p>Publication Year: {content.book?.publication_year}</p>
        {isTextExpanded ? (
          <p className="expanded-text">{content.book?.description}</p>
        ) : (
          <p>{content.book?.excerpt}</p>
        )}
        <div className="container-btn-link">
          <button onClick={handleToggle} className="toggle-description-btn">
            {isTextExpanded ? '▲ Read Less' : '▼ Read More'}
          </button>
          <a href={content.book?.shopping_url} target="_blank" rel="noopener noreferrer" className="read-link">
            Buy The Book
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

export default BookItem;
