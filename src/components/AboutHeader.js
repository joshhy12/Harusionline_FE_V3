import React from 'react';

export const AboutHeader = ({ content }) => (
  <div className="row justify-content-center text-center mb-4 mb-md-5">
    <div className="col-xl-9 col-xxl-8">
      <span className="text-muted">About Us</span>
      <h2 className="display-5 fw-bold">{content.title}</h2>
      <p className="lead">{content.description}</p>
    </div>
  </div>
);
