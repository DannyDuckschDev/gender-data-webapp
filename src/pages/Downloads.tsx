// src/pages/DownloadPage.tsx

import React from 'react';
import contentData from '../data/downloadContent.json';
import { ContentData, Section as SectionType } from '../types';
import Section from '../components/Section';
import ScrollToTopButton from '../components/ScrollToTopButton';
import useDownloadProgress from '../hooks/useDownloadProgress';
import useToggleExpand from '../hooks/useToggleExpand';
import '../styles/download.css';
import '../styles/button.css';

// Initialize the contents from the imported data
const contents: SectionType[] = (contentData as ContentData).sections;

const DownloadPage: React.FC = () => {
    // Hook to manage the expanded state of sections
    const { isExpanded, toggleExpand } = useToggleExpand();
    // Hook to manage download progress
    const { downloadProgress, startDownload } = useDownloadProgress();

    return (
        <div className="download-page">
            {/* Render each section */}
            {contents.map((section: SectionType) => (
                <Section
                    key={section.title}
                    section={section}
                    isExpanded={isExpanded}
                    toggleExpand={toggleExpand}
                    startDownload={startDownload}
                    downloadProgress={downloadProgress}
                />
            ))}
            {/* Scroll to top button for easy navigation */}
            <ScrollToTopButton selector='body' /> {/*selector needs to be body*/}
        </div>
    );
};

export default DownloadPage;
