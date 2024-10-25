import React from 'react';
import { FaPaperPlane, FaBell, FaEnvelope, FaIdCard, FaUsers } from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="container mt-4">
      {/* Heading section */}
      <h2 className="dashboard-heading">Dashboard</h2>

      {/* Top section */}
      <div className="row bg-light p-4 rounded-lg">
        <div className="col text-center">
          <div className="text-dark">Ahadi</div>
          <div className="dashText" style={{ fontSize: '1.5rem' }}>TZS 201,000</div>
          <div className="text-dark mt-2"><u>Walioahidi</u></div>
          <div className="dashText font-weight-bold" style={{ fontSize: '1.5rem' }}>3</div>
        </div>
        <div className="col text-center">
          <div className="text-dark">Michango</div>
          <div className="dashText" style={{ fontSize: '1.5rem' }}>TZS 0.00</div>
          <div className="text-dark mt-2"><u>Waliotoa</u></div>
          <div className="dashText font-weight-bold" style={{ fontSize: '1.5rem' }}>0</div>
        </div>
        <div className="col text-center">
          <div className="text-dark">Bajeti</div>
          <div className="dashText" style={{ fontSize: '1.5rem' }}>TZS 0.00</div>
          <br />
          <div className="dashText mt-2">Pledges PDF</div>
        </div>
        <div className="col text-center">
          <div className="text-dark">Matumizi</div>
          <div className="dashText" style={{ fontSize: '1.5rem' }}>TZS 0.00</div>
          <br />
          <div className="dashText mt-2">Pledges Excel</div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="row mt-4">
        <div className="col text-center">
          <div className="bg-light p-4 rounded-lg">
            <div className="dashText">
              <FaPaperPlane className="mb-2" size={24} />
              <div>Tuma Taarifa</div>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div className="bg-light p-4 rounded-lg">
            <div className="dashText">
              <FaBell className="mb-2" size={24} />
              <div>Kumbusha Michango</div>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div className="bg-light p-4 rounded-lg">
            <div className="dashText">
              <FaEnvelope className="mb-2" size={24} />
              <div>Tuma Mialiko</div>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div className="bg-light p-4 rounded-lg">
            <div className="dashText">
              <FaIdCard className="mb-2" size={24} />
              <div>E-cards</div>
            </div>
          </div>
        </div>
        <div className="col text-center">
          <div className="bg-light p-4 rounded-lg">
            <div className="dashText">
              <FaUsers className="mb-2" size={24} />
              <div>Import Contacts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
