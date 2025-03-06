import React, { useState, useEffect } from 'react';
import './SpinnerLoader.css';

const SpinnerLoader = () => {
  const [showNoDataMessage, setShowNoDataMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNoDataMessage(true);
    }, 8000); // 8 seconds timeout

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-container">
      {!showNoDataMessage ? (
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="no-data-message">
          No data available at the moment. Please try again later.
        </div>
      )}
    </div>
  );
};

export default SpinnerLoader;