import React from 'react';
import '../styles/button.css';
import useScrollToTop from '../hooks/useScrollToTop';

interface ScrollToTopButtonProps {
  selector: string; // Selector for the element to watch for scroll events
}

// ScrollToTopButton component definition
const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ selector }) => {
  // Use the custom hook to get showScroll state and scrollToTop function
  const { showScroll, scrollToTop } = useScrollToTop(selector);

  return (
    // Button element with conditional class based on showScroll state
    <button
      className={`scroll-to-top ${showScroll ? 'show' : ''}`}
      onClick={scrollToTop} // Attach scrollToTop function
    >
      &#8679; {/* Up arrow symbol */}
    </button>
  );
};

export default ScrollToTopButton;
