// src/hooks/useWindowSize.ts

import { useState, useEffect } from "react";

/**
 * Custom hook to determine if the window size is considered mobile.
 * @return {boolean} - true if the window width is less than or equal to 768 pixels, false otherwise.
 */

const useWindowSize = () => {
    const [isMobile, setIsMobile] = useState(false);

    /*
      Function to handle window resize event and update the isMobile state.
    */
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); //Inital check
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

export default useWindowSize;