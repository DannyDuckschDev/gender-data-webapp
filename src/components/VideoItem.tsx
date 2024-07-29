// src/components/VideoItem.tsx
import { useState, forwardRef } from 'react';
import { Content } from '../types';

// Interface for the props passed to the VideoItem component
interface VideoItemProps {
  content: Content; // Content object containing the video data
  isExpanded: boolean; // Flag indicating if the description is expanded
  toggleDescription: (id: number) => void; // Function to toggle the description
  isHighlighted: boolean; // Flag indicating if the item is highlighted
  clearHighlight: () => void; // Function to clear the highlight
  currentCategory: string; // Current selected category for highlighting
}

// The VideoItem component is a forward-ref component for video content display
const VideoItem = forwardRef<HTMLDivElement, VideoItemProps>(({ content, toggleDescription, isHighlighted, clearHighlight, currentCategory }, ref) => {
    // State to manage the expanded/collapsed state of the description
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  // Function to handle the toggle of description
  const handleToggle = () => {
    setIsTextExpanded(!isTextExpanded);
    toggleDescription(content.id);
  };

  return (
    // Render the video item with conditional highlighting and ref forwarding
    <div className={`video-item ${isHighlighted ? 'highlighted' : ''}`} ref={ref}>
      {isHighlighted && (
        <button className="clear-highlight-btn" onClick={clearHighlight}>End Highlight</button>
      )}
      {/* Image for the video thumbnail */}
      <img src={content.video?.thumbnail} className="video-item-thumbnail" alt={content.name} />
      <div className="video-info">
        <h3>{content.name}</h3>
        <p>Channel: {content.video?.channel}</p>
        <p>Platform: {content.video?.platform}</p>
        <p>Date: {content.video?.date}</p>
        {/* Toggle between showing the full description or an excerpt */}
        {isTextExpanded ? (
          <p className="expanded-text">{content.video?.description}</p>
        ) : (
          <p>{content.video?.excerpt}</p>
        )}
        {/* Container for the toggle button and watch link */}
        <div className="container-btn-link">
          <button onClick={handleToggle} className="toggle-description-btn">
            {isTextExpanded ? '▲ Read less' : '▼ Read more'}
          </button>
          <a href={content.video?.url} target="_blank" rel="noopener noreferrer" className="read-link">
            Watch the full video
          </a>
        </div>
        {/* Container for the categories */}
        <div className="categories">
          <h4>Categories:</h4>
          <div className="category-tags">
            {/* Map over the categories and conditionally apply highlighting */}
            {content.category.map((cat, index) => (
              <span key={index} className={`category-tag ${currentCategory === cat? 'highlight-category' : '' }`}>{cat}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default VideoItem;
