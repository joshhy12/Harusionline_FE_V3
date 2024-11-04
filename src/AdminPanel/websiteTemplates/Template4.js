import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './styles/Template4.module.css';

const Template4 = ({ event }) => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.sidebar}>
        <img 
          src={event?.wallpaper[0]?.md_photo || ""} 
          alt="Floral decoration" 
          width="100" 
          height="100"
        />
        <h1>{event?.couple_names || "Olivia & Enrico"}</h1>
        <p>{new Date(event?.event_date).toLocaleDateString() || "15.11.2023"}</p>
        
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Couple</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Friends</a></li>
          <li><a href="#">Organization</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">When & Where</a></li>
          <li><a href="#">R.S.V.P.</a></li>
          <li><a href="#">Gift Registry</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <div className={styles.mainContent}>
        <div>
          <h1>{event?.couple_names || "Olivia & Enrico"}</h1>
          <p>
            {new Date(event?.event_date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }).toUpperCase()} – {event?.location || "NEW YORK"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Template4;
