import React, { useState, useEffect } from 'react';
import MapSupport from '../components/MapSupport';
import { Clinic } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';


// Props interface for the OutpatientClinicInfo component
interface OutpatientClinicInfoProps {
  clinicData: Clinic[];
}

// OutpatientClinicInfo component
const OutpatientClinicInfo: React.FC<OutpatientClinicInfoProps> = ({ clinicData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the expansion state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // Manually trigger map update after state change
    if (isExpanded) {
      // Trigger a resize event to update the map
      window.dispatchEvent(new Event('resize'));
    }
  }, [isExpanded]);

  return (
    <div className="map-card">
      <div className="map-card-content">
        <div className="card-header" onClick={toggleExpand}>
          <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" />
          <span>Find the nearest Outpatient Clinic for Victims</span>
          <button className="toggle-button">{isExpanded ? '▲' : '▼'}</button>
        </div>
        {isExpanded && (
          <div className="card-content">
            <p>
              Victim and trauma outpatient clinics ("Opfer- und Trauerambulanz / OTA") are contact points in Germany, Austria and Switzerland for the acute care of victims of traumatizing events, especially victims of violent and sexual crimes.
            </p>
            <p>
              According to recent EU statistics, <strong>one in four women in Germany</strong> will experience physical or sexual violence at some point in their lives, often within a domestic setting. In such cases, victims often find it difficult to immediately decide to file a report. This decision is frequently made some time after the event, by which point it may be too late to collect evidence.
            </p>
            <p>
              Examinations should take place <em>as soon as possible after the incident</em>, potentially even at night. Crucial evidence can be collected in the first few hours following a crime, which might otherwise be lost forever. Therefore, contact with the violence clinic should occur without delay.
            </p>
            <p>
              Victims receive <strong>confidential, free-of-charge, and legally admissible examinations</strong>. If they decide to press charges later, the anonymously collected evidence can be retrieved. The evidence is stored to be used when needed - sometimes up to 6 years. But the time limits differ from clinic to clinic. So please asked the medical staff at the clinic. Additionally, upon request, contact can be made with victim support organizations or anonymous telephone counseling services.
            </p>
            <p>
              <strong>Note:</strong> Information provided without warranty. (Legal disclaimer)
            </p>
            <div className="map-container">
              <MapSupport clinicData={clinicData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutpatientClinicInfo;
