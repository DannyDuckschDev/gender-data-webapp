import { useState, useEffect } from "react";

/*Custom hook to handle the scroll-to-top button visibility and functionality
@retun {Object} - showScroll (boolean) and scrollToTop(function)*/

const useScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);

  
    //function to check the scroll position and update the showScroll state
    const checkScrollTop = () => {
        const contentElement = document.querySelector('.content');
        if (contentElement && contentElement.scrollTop >200){
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

      //Function to scroll the window to the top
      const scrollToTop = () => {
        const contentElement = document.querySelector('.content');
        if (contentElement) {
            contentElement.scrollTo({top: 0, behavior:'smooth'});
        }
    };

    /**
     * useEffect hook to add and remove the scroll event listener on the content element.
     */

    useEffect(() => {
        const contentElement = document.querySelector('.content');
        if (contentElement) {
            contentElement.addEventListener('scroll', checkScrollTop);
        }
        return () => {
            if (contentElement) {
                contentElement.removeEventListener('scroll', checkScrollTop);
            }
        };
    }, []);

    return {
        showScroll,
        scrollToTop
    };

};

export default useScrollToTop;