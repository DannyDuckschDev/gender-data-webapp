import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/disclaimerBanner.css';

interface DisclaimerBannerProps {
  text: string;
  buttonText: string;
  imageUrl: string; 
}

const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ text, buttonText, imageUrl }) => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="disclaimer-banner">
      <img src={imageUrl} alt="Disclaimer" className="disclaimer-image" />
      <div className="disclaimer-content">
        <p>{text}</p>
        <button onClick={navigateToContact}>{buttonText}</button>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
