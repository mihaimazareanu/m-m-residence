import { useState, useEffect } from 'react';
import styles from './ThemeSlider.module.css';

const ThemeSlider = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if the user has set their OS preference to dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
    console.log(styles)
  }, []);

  const handleThemeToggle = () => {
    console.log("Toggling theme:", !darkMode);
    setDarkMode(!darkMode);
    // TODO: Add logic to save the user's preference to local storage or a cookie
    
  };

  return (
    <div className={styles.container}>
      <label className={styles.switch}>
        <input type="checkbox" checked={darkMode} onChange={handleThemeToggle} />
        <span className={styles.slider}></span>
      </label>
      <p className={styles.label}>Toggle dark mode</p>
    </div>
  );
};

export default ThemeSlider;