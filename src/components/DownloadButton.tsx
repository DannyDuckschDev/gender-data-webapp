// src/components/DownloadButton.tsx

import React from 'react';
// Define the props for the DownloadButton component
interface DownloadButtonProps {
    downloadKey: string; // Unique key for tracking download progress
    label: string; // Label for the button
    url: string; // URL to download the file from
    startDownload: (key: string, url: string) => void; // Function to start the download
    downloadProgress?: number; // Optional prop to track download progress
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ downloadKey, label, url, startDownload, downloadProgress }) => {
    
    //console.log(`DownloadButton: ${label}, Progress: ${downloadProgress}`); // Debug output
    
    // Render the button and loader
    return (
        <div className="button-with-loader">
            <button className="download-button" onClick={() => startDownload(downloadKey, url)}>{label}</button>
            {downloadProgress !== undefined && downloadProgress < 100 && (
                <div className="loader"></div>
            )}
        </div>
    );
};

export default DownloadButton;
