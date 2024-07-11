// src/components/Section.tsx

import React from 'react';
import { Section as SectionType, ContentItem, DownloadItem, LinkItem } from '../types';
import DownloadCard from './DownloadCard';

// Define the props for the Section component
interface SectionProps {
    section: SectionType;// Section data containing title and items
    isExpanded: { [key: string]: boolean }; // State to track expanded items
    toggleExpand: (key: string) => void; // Function to toggle item expansion
    startDownload: (key: string, url: string) => void; // Function to start the download
    downloadProgress: { [key: string]: number }; // Object to track download progress
}

const Section: React.FC<SectionProps> = ({ section, isExpanded, toggleExpand, startDownload, downloadProgress }) => {
    return (
        <div>
            <h2 className={section.title.toLowerCase().replace(' ', '-')}>{section.title}</h2>
            <div className={`section-separator ${section.title.toLowerCase().replace(' ', '-')}`}></div>
            {section.items.map((item: ContentItem) => {
                if (item.type === 'download') {
                    const downloadItem = item as DownloadItem;
                    return (
                        <DownloadCard
                            key={downloadItem.key}
                            item={downloadItem}
                            isExpanded={isExpanded[downloadItem.key]}
                            toggleExpand={toggleExpand}
                            startDownload={startDownload}
                            downloadProgress={downloadProgress}
                        />
                    );
                } else {
                    const linkItem = item as LinkItem;
                    return (
                        <div key={linkItem.key} className="download-card">
                            <div className="card-header" onClick={() => toggleExpand(linkItem.key)}>
                                <span>{linkItem.label}</span>
                                <button className="toggle-button">
                                    {isExpanded[linkItem.key] ? '▲' : '▼'}
                                </button>
                            </div>
                            {isExpanded[linkItem.key] && (
                                <div className="card-content">
                                    {linkItem.description && <p>{linkItem.description}</p>}
                                    <button className="download-button" onClick={() => window.open(linkItem.url, '_blank')}>{linkItem.label}</button>
                                </div>
                            )}
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Section;
