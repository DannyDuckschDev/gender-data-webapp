// src/hooks/useWindowSize.ts

import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [isMobile, setIsMobile] = useState(false);

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