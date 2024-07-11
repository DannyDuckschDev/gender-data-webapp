import { useState } from 'react';

// Custom hook to manage download progress
const useDownloadProgress = () => {
    // State to track the progress of multiple downloads
    const [downloadProgress, setDownloadProgress] = useState<{ [key: string]: number }>({});

    // Function to start a download
    const startDownload = (key: string, url: string) => {
        // Initialize the progress for the given key
        setDownloadProgress(prevState => ({ ...prevState, [key]: 0 }));
        
         // Update the progress at regular intervals
        const interval = setInterval(() => {
            setDownloadProgress(prevState => {
                const progress = prevState[key] + 10;
                //console.log(`Downloading ${key}: ${progress}%`); // Debug output

                // When download is complete, clear the interval and open the URL
                if (progress >= 100) {
                    clearInterval(interval);
                    window.open(url, '_blank');
                    return { ...prevState, [key]: 100 };
                }
                return { ...prevState, [key]: progress };
            });
        }, 300);
    };

    return {
        downloadProgress, // Return the current download progress
        startDownload, // Return the function to start a download
    };
};

export default useDownloadProgress;
