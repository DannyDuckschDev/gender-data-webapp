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

// Transforming clinic data to ensure the correct position type
const clinicData: Clinic[] = clinics.map(clinic => ({
  ...clinic,
  position: clinic.position as [number, number]
}));

const Support: React.FC = () => {

  return (
    <div className="support-page">
      {/* Disclaimer banner at the top of the page */}
      <DisclaimerBanner
        text="I strive to be as inclusive as possible and am always open to feedback. This project has just started, and I greatly appreciate your input on organizations, NGOs, apps, software, and other resources that could be included here. Although the resources I share are currently available in German, the outpatient clinic for victims will assist you even if you do not speak German."
        buttonText="To the contact form"
      />
      {/* Rendering support cards */}
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
       {/* Outpatient clinic information */}
      <OutpatientClinicInfo clinicData={clinicData} />
      {/* Scroll to top button for easy navigation */}
      <ScrollToTopButton selector='body' /> {/*selector needs to be body*/}
      {/* Footer-like div with copyright information */}
    </div>
  );
};

export default Support;
