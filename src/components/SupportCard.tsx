import React, { useState } from 'react';

// Props interface for the SupportCard component
interface SupportCardProps {
  id: string; // Unique identifier for the card
  icon: string; // Icon representing the support card
  title: string; // Title of the support card
  content: string; // Main content of the support card
  buttonText: string; // Text for the button
  buttonLink: string; // URL the button links to
}

// SupportCard component
const SupportCard: React.FC<SupportCardProps> = ({ id, icon, title, content, buttonText, buttonLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expansion state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div key={id} className={`support-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-header" onClick={toggleExpand}>
        <span className="icon">{icon}</span>
        <span>{title}</span>
        <button className="toggle-button">{isExpanded ? '▲' : '▼'}</button>
      </div>
      {isExpanded && (
        <div className="card-content">
          <p>{content}</p>
          <button onClick={() => window.open(buttonLink, '_blank')}>{buttonText}</button>
        </div>
      )}
    </div>
  );
};

export default SupportCard;
