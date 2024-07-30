import { useState, useEffect, useCallback } from "react";

const useScrollToTop = (selector: string) => {
    const [showScroll, setShowScroll] = useState(false);

    // Function to check the scroll position and update the showScroll state
    const checkScrollTop = useCallback(() => {
        let scrollTop: number;

        // If the selector is 'body', get the scroll position of the window or document body
        if (selector === 'body') {
            scrollTop = window.scrollY || document.documentElement.scrollTop;
            //console.log('Scrolling window or document body'); //Debug output
        } else {
            // Otherwise, get the scroll position of the specified element
            const scrollElement = document.querySelector(selector) as HTMLElement;
            if (scrollElement) {
                scrollTop = scrollElement.scrollTop;
                //console.log(`Scrolling specific element: ${selector}`); //Debug output
            } else {
                scrollTop = 0; // If the element is not found, set scrollTop to 0
                //console.log('Specified element not found'); //Debug output
            }
        }

        // console.log('Scroll position:', scrollTop); //Debug output

        // Show or hide the scroll-to-top button based on the scroll position
        if (scrollTop > 200) {
            setShowScroll(true);
            //console.log('setShowScroll: true'); //Debug output
        } else {
            setShowScroll(false);
            //console.log('setShowScroll: false'); //Debug output
        }
    }, [selector]);

    // Function to scroll the page or element to the top
    const scrollToTop = useCallback(() => {
        if (selector === 'body') {
            // Scroll the window to the top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // console.log('Scrolling window to top'); //Debug output
        } else {
            // Scroll the specified element to the top
            const scrollElement = document.querySelector(selector) as HTMLElement;
            if (scrollElement) {
                scrollElement.scrollTo({ top: 0, behavior: 'smooth' });
                // console.log('Scrolling element to top:', scrollElement);//Debug output
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // console.log('Fallback to scrolling window to top'); //Debug output
            }
        }
    }, [selector]);

    // useEffect hook to add and remove the scroll and resize event listeners
    useEffect(() => {
        // Add event listener for window scroll and observe changes in document body size
        if (selector === 'body') {
            window.addEventListener('scroll', checkScrollTop);
            const resizeObserver = new ResizeObserver(() => {
                checkScrollTop();
            });
            resizeObserver.observe(document.body);
             // console.log('Eventlistener added to window, Observer added to body'); //Debug output

             // Cleanup event listeners and observer on component unmount
            return () => {
                window.removeEventListener('scroll', checkScrollTop);
                resizeObserver.unobserve(document.body);
                // console.log('Eventlistener removed from window, Observer removed from body'); //Debug output
            };
        } else {
            // Add event listener for element scroll and observe changes in element size
            const scrollElement = document.querySelector(selector) as HTMLElement;
            if (scrollElement) {
                scrollElement.addEventListener('scroll', checkScrollTop);
                const resizeObserver = new ResizeObserver(() => {
                    checkScrollTop();
                });
                resizeObserver.observe(scrollElement);
                // console.log('Eventlistener added to scrollElement:', scrollElement); //Debug output

                // Cleanup event listeners and observer on component unmount
                return () => {
                    scrollElement.removeEventListener('scroll', checkScrollTop);
                    resizeObserver.unobserve(scrollElement);
                    // console.log('Eventlistener removed from scrollElement:', scrollElement); //Debug output
                };
            }
        }
    }, [checkScrollTop, selector]);

    return {
        showScroll,
        scrollToTop
    };
};

export default useScrollToTop;
