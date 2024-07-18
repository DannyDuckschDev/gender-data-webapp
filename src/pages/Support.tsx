import React from 'react';
import clinics from '../data/clinicForVictims.json';
import supportCards from '../data/supportCards.json';
import '../styles/support.css';
import ScrollToTopButton from '../components/ScrollToTopButton';
import DisclaimerBanner from '../components/DisclaimerBanner';
import '../styles/button.css';
import SupportCard from '../components/SupportCard';
import OutpatientClinicInfo from '../components/OutpatientClinicInfo';
import { Clinic, SupportCard as SupportCardType } from '../types';

// Type assertion for clinics data
const clinicData: Clinic[] = clinics.map(clinic => ({
  ...clinic,
  position: clinic.position as [number, number] // Ensure position is treated as LatLngTuple
}));

// Main Support component
const Support: React.FC = () => {
  return (
    <div className="support-page">
      <DisclaimerBanner
        text="I'd love to be as inclusive as possible. This project has just started. Please feel free to share your knowledge on organizations, NGOs, Apps, Software, etc. you’d think would fit in here. Right now the offers I share here are unfortunately available in German. The outpatient clinic for victims DEFINITELY takes care of you if you can't speak German, but the websites are in German."
        buttonText="To the contact form"
        imageUrl="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="support-cards">
        {supportCards.map((card: SupportCardType) => (
          <SupportCard
            key={card.id}
            id={card.id}
            icon={card.icon}
            title={card.title}
            content={card.content}
            buttonText={card.buttonText}
            buttonLink={card.buttonLink}
          />
        ))}
      </div>
      <OutpatientClinicInfo clinicData={clinicData} />
      <ScrollToTopButton />
      <div className="container-contact-copyright">
        <p>Photo Banner by <a href="https://unsplash.com/de/@lunarts">Volodymyr Hryshchenko</a> on <a href="https://unsplash.com/de">Unsplash</a></p>
      </div>
    </div>
  );
};

export default Support;
