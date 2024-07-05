import React, { useState } from 'react';
import '../styles/download.css';
import periodTeaRecipePdf from '../assets/PeriodTeaRecipe.pdf';

const Download: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});
    const [downloadProgress, setDownloadProgress] = useState<{ [key: string]: number }>({});

    const toggleExpand = (key: string) => {
        setIsExpanded(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    const startDownload = (key: string, url: string) => {
        setDownloadProgress(prevState => ({ ...prevState, [key]: 0 }));
        const interval = setInterval(() => {
            setDownloadProgress(prevState => {
                const progress = prevState[key] + 10;
                if (progress >= 100) {
                    clearInterval(interval);
                    window.open(url, '_blank');
                    return { ...prevState, [key]: 100 };
                }
                return { ...prevState, [key]: progress };
            });
        }, 300);
    };

    return (
        <div className="download-page">
            <h2 className="international">International</h2>
            <div className="section-separator international"></div>

            <div className="download-card">
                <div className="card-header" onClick={() => toggleExpand('periodTea')}>
                    <span>Period Tea Recipe</span>
                    <button className="toggle-button">
                        {isExpanded['periodTea'] ? '▲' : '▼'}
                    </button>
                </div>
                {isExpanded['periodTea'] && (
                    <div className="card-content">
                        <p>This is a tea out of fresh herbs to regulate PMS symptoms, reduce period pain and period symptoms.</p>
                        <p>Ingredients:</p>
                        <ul>
                          <li>Raspberry leaf</li>
                          <li>nettle tea</li>
                          <li>chamomile</li>
                          <li>ginger</li>
                          <li>vanilla extract</li>
                          <li>lemon (or alternatively orange)</li>
                        </ul>
                        <p>Preparation: Boil water, add herbs, let steep for 10 minutes, strain and enjoy.</p>
                        <button className="download-button" onClick={() => startDownload('periodTea', periodTeaRecipePdf)}>Download Recipe</button>
                        {downloadProgress['periodTea'] !== undefined && (
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${downloadProgress['periodTea']}%` }}></div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="download-card">
                <div className="card-header" onClick={() => toggleExpand('cycleSyncingApp')}>
                    <span>App for Cycle Syncing</span>
                    <button className="toggle-button">
                        {isExpanded['cycleSyncingApp'] ? '▲' : '▼'}
                    </button>
                </div>
                {isExpanded['cycleSyncingApp'] && (
                    <div className="card-content">
                        <p>This app provides info about different groceries which are beneficial in different phases of the menstrual cycle.</p>
                        <p>It also includes specific workout routines for each phase.</p>
                        <button className="download-button" onClick={() => startDownload('cycleSyncingAndroid', '#')}>Download App Android</button>
                        <button className="download-button" onClick={() => startDownload('cycleSyncingIOS', '#')}>Download App IOS</button>
                        {downloadProgress['cycleSyncingAndroid'] !== undefined && (
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${downloadProgress['cycleSyncingAndroid']}%` }}></div>
                            </div>
                        )}
                        {downloadProgress['cycleSyncingIOS'] !== undefined && (
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${downloadProgress['cycleSyncingIOS']}%` }}></div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <h2 className="germany">Germany</h2>
            <div className="section-separator germany"></div>

            <div className="download-card">
                <div className="card-header" onClick={() => toggleExpand('dickPicsReport')}>
                    <span>Easy Criminal Charge against Dickpics</span>
                    <button className="toggle-button">
                        {isExpanded['dickPicsReport'] ? '▲' : '▼'}
                    </button>
                </div>
                {isExpanded['dickPicsReport'] && (
                    <div className="card-content">
                        <p>The website helps you to easily and quickly file a report against unsolicited sexual pictures.</p>
                        <button className="download-button" onClick={() => startDownload('dickPicsReport', '#')}>Go to Website</button>
                        {downloadProgress['dickPicsReport'] !== undefined && (
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${downloadProgress['dickPicsReport']}%` }}></div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="download-card">
                <div className="card-header" onClick={() => toggleExpand('victimClinic')}>
                    <span>Find the nearest Opferambulanz / Outpatient Clinic for Victims</span>
                    <button className="toggle-button">
                        {isExpanded['victimClinic'] ? '▲' : '▼'}
                    </button>
                </div>
                {isExpanded['victimClinic'] && (
                    <div className="card-content">
                        <p>Victim and trauma outpatient clinics (OTA) are contact points in Germany, Austria and Switzerland for the acute care of victims of traumatizing events, especially victims of violent and sexual crimes.</p>
                        <div className="map-placeholder">Map</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Download;
