
import React from 'react';

const Michango = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Michango Management</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">About Michango</h5>
          <p className="card-text">
            Welcome to the Michango management system. This module helps you track and manage all contributions
            (michango) within the organization. You can record, monitor, and generate reports for various types
            of contributions made by members.
          </p>
          <p className="card-text">
            Use this dashboard to:
            <ul>
              <li>Record new contributions</li>
              <li>View contribution history</li>
              <li>Generate contribution reports</li>
              <li>Track contribution categories</li>
              <li>Monitor payment status</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Michango;
