import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/disclaimerBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComments, faPhone } from '@fortawesome/free-solid-svg-icons';

interface DisclaimerBannerProps {
  text: string;
  buttonText: string;
}

const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ text, buttonText }) => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="disclaimer-banner">
      <div className="disclaimer-icons">
        <FontAwesomeIcon icon={faEnvelope} size="2x" className="disclaimer-icon" />
        <FontAwesomeIcon icon={faComments} size="2x" className="disclaimer-icon" />
        <FontAwesomeIcon icon={faPhone} size="2x" className="disclaimer-icon" />
      </div>
      <div className="disclaimer-content">
        <p>{text}</p>
        <button onClick={navigateToContact}>{buttonText}</button>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
