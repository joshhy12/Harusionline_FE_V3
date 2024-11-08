import React from 'react';
import { Link } from 'react-router-dom';

export const AboutSection = ({ title, description, link, image }) => (
  <div className="col-md-4">
    <div className="shadow p-4">
      <img src={image} alt={title} className="img-fluid rounded mb-4" />
      <h2 className="fw-semibold text-primary mt-1">
        <Link to={link} className="text-primary text-decoration-none">
          {title}
        </Link>
      </h2>
      <p className="mt-3">{description}</p>
    </div>
  </div>
);
