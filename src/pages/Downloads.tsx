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
    const { isExpanded, toggleExpand } = useToggleExpand();
    const { downloadProgress, startDownload } = useDownloadProgress();

    return (
        <div className="download-page">
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
            <ScrollToTopButton />
        </div>
    );
};

export default DownloadPage;
