import React, { useState } from 'react';
import { Content } from '../types';

interface BookItemProps {
  content: Content;
  isExpanded: boolean;
  toggleDescription: (id: number) => void;
}

/**
 * Component to display a book item with expandable description.
 * @param {BookItemProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const BookItem: React.FC<BookItemProps> = ({ content, toggleDescription }) => {
  // State to manage the expanded/collapsed state of the description
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  // Function to handle the toggle of description
  const handleToggle = () => {
    setIsTextExpanded(!isTextExpanded);
    toggleDescription(content.id);
  };

  return (
    <div className="book-item">
      {/* Book cover image */}
      <img src={content.book?.cover_url} alt={content.name} className="book-cover" />
      <div className="book-info">
        <h3>{content.name}</h3>
        <p>Author: {content.book?.author}</p>
        <p>Publication Year: {content.book?.publication_year}</p>
        {/* Conditionally render the expanded description or excerpt */}
        {isTextExpanded ? (
          <p className="expanded-text">{content.book?.description}</p>
        ) : (
          <p>{content.book?.excerpt}</p>
        )}
        <div className="container-btn-link">
          {/* Button to toggle the description */}
          <button onClick={handleToggle} className="toggle-description-btn">
            {isTextExpanded ? '▲ Read less' : '▼ Read more'}
          </button>
          {/* Link to read the full article */}
          <a href={content.book?.shopping_url} target="_blank" rel="noopener noreferrer" className="read-link">
            Read the full article
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
