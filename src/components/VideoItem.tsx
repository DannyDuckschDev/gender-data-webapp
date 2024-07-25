// src/components/VideoItem.tsx
import { useState, forwardRef } from 'react';
import { Content } from '../types';

// Interface for the props passed to the VideoItem component
interface VideoItemProps {
  content: Content;
  isExpanded: boolean;
  toggleDescription: (id: number) => void;
  isHighlighted: boolean;
  clearHighlight: () => void;
}

// The VideoItem component is a forward-ref component for video content display
const VideoItem = forwardRef<HTMLDivElement, VideoItemProps>(({ content, toggleDescription, isHighlighted, clearHighlight }, ref) => {
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
      <img src={content.video?.thumbnail} className="video-item-thumbnail" alt={content.name} />
      <div className="video-info">
        <h3>{content.name}</h3>
        <p>Channel: {content.video?.channel}</p>
        <p>Platform: {content.video?.platform}</p>
        <p>Date: {content.video?.date}</p>
        {isTextExpanded ? (
          <p className="expanded-text">{content.video?.description}</p>
        ) : (
          <p>{content.video?.excerpt}</p>
        )}
        <div className="container-btn-link">
          <button onClick={handleToggle} className="toggle-description-btn">
            {isTextExpanded ? '▲ Read less' : '▼ Read more'}
          </button>
          <a href={content.video?.url} target="_blank" rel="noopener noreferrer" className="read-link">
            Watch the full video
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

export default VideoItem;
