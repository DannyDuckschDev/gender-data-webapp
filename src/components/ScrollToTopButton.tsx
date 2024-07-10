import React from 'react';
import '../styles/button.css';
import useScrollToTop from '../hooks/useScrollToTop';


/*Button component to scroll the window to the top
@retun {JSX.Element} ScrollToTopButton component*/

const ScrollToTopButton: React.FC = () => { 
    const {showScroll, scrollToTop} = useScrollToTop();

    /* Debug output
    console.log('ScrollToTopButton rendered');
    console.log('showScroll:', showScroll);
    */
    return (
        <button
          // Conditionally apply 'show' class based on showScroll prop
          className={`scroll-to-top ${showScroll ? 'show' : ''}`}
          // Attach the scrollToTop function to the button's onClick event
          onClick={scrollToTop}
        >
          &#8679;
        </button>
      );
 };


export default ScrollToTopButton;