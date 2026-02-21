import "./LoadingSpinner.scss";
import { useState, useEffect } from "react";

const LoadingSpinner = ({ delay }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Set a timer to set visibility to false after the specified delay
    const timer = setTimeout(() => {
      setVisible(false);
    }, delay);

    // Cleanup function to clear the timer if the component unmounts prematurely
    return () => clearTimeout(timer);
  }, [delay]); // Re-run effect only if the delay prop changes

  return (
    visible ?
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
      : null
  );
};
export default LoadingSpinner;