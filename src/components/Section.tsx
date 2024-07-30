// src/components/Section.tsx

import React from 'react';
import { Section as SectionType, ContentItem, DownloadItem, LinkItem } from '../types';
import DownloadCard from './DownloadCard';

interface SectionProps {
    section: SectionType;
    isExpanded: { [key: string]: boolean };
    toggleExpand: (key: string) => void;
    startDownload: (key: string, url: string) => void;
    downloadProgress: { [key: string]: number };
}

const Section: React.FC<SectionProps> = ({ section, isExpanded, toggleExpand, startDownload, downloadProgress }) => {
    const sectionClassName = section.title.toLowerCase().replace(' ', '-');

    return (
        <div className={sectionClassName}>
            <h2 className={sectionClassName}>{section.title}</h2>
            <div className={`section-separator ${sectionClassName}`}></div>
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
                                    {linkItem.description && (
                                        <>
                                            <h4>Description</h4>
                                            <p dangerouslySetInnerHTML={{ __html: linkItem.description }}></p>
                                        </>
                                    )}
                                    {linkItem.details && linkItem.details.map((detail, index) => (
                                        <div key={index}>
                                            <h4>{detail.title}</h4>
                                            <p>{detail.content}</p>
                                            {detail.phases && (
                                                <ul>
                                                    {detail.phases.map((phase, phaseIndex) => (
                                                        <li key={phaseIndex}>
                                                            <strong>{phase.name}</strong>: {phase.description}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                    <div className="download-buttons">
                                        <button className="download-button" onClick={() => window.open(linkItem.iosUrl, '_blank')}>
                                            Download App iOS
                                        </button>
                                        {linkItem.androidUrl && (
                                            <button className="download-button" onClick={() => window.open(linkItem.androidUrl, '_blank')}>
                                                Download App Android
                                            </button>
                                        )}
                                    </div>
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
