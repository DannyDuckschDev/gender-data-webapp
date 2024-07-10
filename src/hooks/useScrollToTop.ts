import { useState, useEffect, useCallback } from "react";

/*Custom hook to handle the scroll-to-top button visibility and functionality
@retun {Object} - showScroll (boolean) and scrollToTop(function)*/

const useScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    //Function to scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    //function to check the scroll position and update the showScroll state
    const checkScrollTop = useCallback(() => {
        if (!showScroll && window.pageYOffset > 100){
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 100){
            setShowScroll(false);
        }
    }, [showScroll]);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, [checkScrollTop]);

    return {showScroll, scrollToTop};
};

export default useScrollToTop;