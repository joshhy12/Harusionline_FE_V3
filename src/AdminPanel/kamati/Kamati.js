import React from 'react';
import './kamati.css';

const Kamati = () => {
  return (
    <div className="kamati-container">
            <h2 className="text-center" style={{ color: '#24366b' }}>Kamati Kuu</h2>
            <div className="kamati-card">
        <div className="kamati-card-body">
          <div className="kamati-header">
            <button className="kamati-btn kamati-btn-primary">Add New Committee Member</button>
            <div className="kamati-search">
              <input type="text" className="kamati-input" placeholder="Search..." />
              <button className="kamati-btn kamati-btn-secondary">Search</button>
            </div>
          </div>
          <div className="kamati-table-wrapper">
            <table className="kamati-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>+255 123 456 789</td>
                  <td>Chairman</td>
                  <td><span className="kamati-badge kamati-badge-success">Active</span></td>
                  <td>
                    <button className="kamati-btn kamati-btn-sm kamati-btn-outline-primary">Edit</button>
                    <button className="kamati-btn kamati-btn-sm kamati-btn-outline-danger">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>+255 987 654 321</td>
                  <td>Secretary</td>
                  <td><span className="kamati-badge kamati-badge-success">Active</span></td>
                  <td>
                    <button className="kamati-btn kamati-btn-sm kamati-btn-outline-primary">Edit</button>
                    <button className="kamati-btn kamati-btn-sm kamati-btn-outline-danger">Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kamati;