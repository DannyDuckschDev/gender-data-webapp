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
                <div className="card-header" onClick={() => toggleExpand('loremIpsumDolor')}>
                    <span>Lorem ipsum dolor sit amet</span>
                    <button className="toggle-button">
                        {isExpanded['loremIpsumDolor'] ? '▲' : '▼'}
                    </button>
                </div>
                {isExpanded['loremIpsumDolor'] && (
                    <div className="card-content">
                        <p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                        <button className="download-button" onClick={() => startDownload('loremIpsumDolor', '#')}>Go to Website</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Download;
