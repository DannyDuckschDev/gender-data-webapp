import React, { useState } from 'react';
import { Content } from '../types';

interface VideoItemProps {
  content: Content;
  isExpanded: boolean;
  toggleDescription: (id: number) => void;
}

/**
 * Component to display a video item with expandable description.
 * @param {VideoItemProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const VideoItem: React.FC<VideoItemProps> = ({ content, toggleDescription }) => {
  // State to manage the expanded/collapsed state of the description
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  // Function to handle the toggle of description
  const handleToggle = () => {
    setIsTextExpanded(!isTextExpanded);
    toggleDescription(content.id);
  };

  return (
    <div className="video-item">
      <div className="video-info">
        <h3>{content.name}</h3>
        <p>Channel: {content.video?.channel}</p>
        <p>Platform: {content.video?.platform}</p>
        <p>Date: {content.video?.date}</p>
        {/* Conditionally render the expanded description or excerpt */}
        {isTextExpanded ? (
          <p className="expanded-text">{content.video?.description}</p>
        ) : (
          <p>{content.video?.excerpt}</p>
        )}
        <div className="container-btn-link">
          {/* Button to toggle the description */}
          <button onClick={handleToggle} className="toggle-description-btn">
            {isTextExpanded ? '▲ Read less' : '▼ Read more'}
          </button>
          {/* Link to watch the full video */}
          <a href={content.video?.url} target="_blank" rel="noopener noreferrer" className="read-link">
            Watch the full video
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
