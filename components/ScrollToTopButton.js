import { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.css';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const { scrollTop, clientHeight } = document.documentElement;
        setIsVisible(scrollTop >= clientHeight / 2);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleButtonClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <button
        className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : ''}`}
        onClick={handleButtonClick}
      >
        <svg fill="#f9f7f3" width="32px" height="32px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg">
            <path d="M114,74.5a19.92,19.92,0,0,0-28.5,0L57,103a9.9,9.9,0,0,0,14,14L99.5,88.5,128,117a9.9,9.9,0,0,0,14-14Z"/><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z"/>
        </svg>
      </button>
    );
  }

export default ScrollToTopButton
