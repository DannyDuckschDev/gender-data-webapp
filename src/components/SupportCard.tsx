import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faPhone, IconDefinition, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

//Map Icon names to FontAwesome icons, icon names are defined in the folder data/supportCard.json
const iconMap: { [key: string]: IconDefinition} = {
  gavel: faGavel,
  phone: faPhone,
  handsHelping: faShieldAlt
};

// Props interface for the SupportCard component
interface SupportCardProps {
  id: string; // Unique identifier for the card
  icon: string; // Icon representing the support card
  title: string; // Title of the support card
  content: string; // Main content of the support card
  buttonText: string; // Text for the button
  buttonLink: string; // URL the button links to
  onToggle?: () => void; // Function to call when the card is toggled
}

// SupportCard component
const SupportCard: React.FC<SupportCardProps> = ({ id, icon, title, content, buttonText, buttonLink, onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expansion state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <div key={id} className={`support-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="card-header" onClick={toggleExpand}>
        <FontAwesomeIcon icon={iconMap[icon]} size='2x' />
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
