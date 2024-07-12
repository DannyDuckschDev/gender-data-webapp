import React from 'react';
import { DownloadItem } from '../types';
import DownloadButton from './DownloadButton';

// Define the props for the DownloadCard component
interface DownloadCardProps {
    item: DownloadItem; // The item to be displayed in the card
    isExpanded: boolean; // State to determine if the card is expanded
    toggleExpand: (key: string) => void; // Function to toggle the card expansion
    startDownload: (key: string, url: string) => void; // Function to start the download
    downloadProgress: { [key: string]: number }; // Object to track download progress
}

const DownloadCard: React.FC<DownloadCardProps> = ({ item, isExpanded, toggleExpand, startDownload, downloadProgress }) => {
    
     //console.log(`DownloadCard: ${item.label}, Progress: ${downloadProgress[item.key]}`); // Debug output

    return (
        <div className="download-card">
            <div className="card-header" onClick={() => toggleExpand(item.key)}>
                <span>{item.label}</span>
                <button className="toggle-button">
                    {isExpanded ? '▲' : '▼'}
                </button>
            </div>
            {isExpanded && (
                <div className="card-content">
                    {item.description && <p>{item.description}</p>}
                    {item.ingredients && (
                        <>
                            <h4>Ingredients:</h4>
                            <ul>
                                {item.ingredients.map((ingredient: string) => (
                                    <li key={ingredient}>{ingredient}</li>
                                ))}
                            </ul>
                        </>
                    )}
                    {item.preparation && (
                        <>
                            <h4>Preparation:</h4>
                            <p>{item.preparation}</p>
                        </>
                        )}
                    <div className="download-buttons">
                        <DownloadButton
                            downloadKey={item.key} 
                            label={item.label}
                            url={item.url}
                            startDownload={startDownload}
                            downloadProgress={downloadProgress[item.key]}
                        />
                        {item.additionalDownload && (
                            <DownloadButton
                                downloadKey={`${item.key}_DE`} 
                                label={item.additionalDownload.label}
                                url={item.additionalDownload.url}
                                startDownload={startDownload}
                                downloadProgress={downloadProgress[`${item.key}_DE`]}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DownloadCard;
