import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ComposedChart } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Takwimu.css';

const Takwimu = () => {
  const data = [
    { name: 'Budget', value: 40 },
    { name: 'Ahadi', value: 20 },
    { name: 'Michango', value: 30 },
    { name: 'Matumizi', value: 50 },
  ];

  return (
    <div className="takwimu-container">
      <h1 className="stylish-heading" style={{ color: '#4169e1', textAlign: 'center' }}>Takwimu </h1>

      
    {/* New Cards with manual CSS */}
<div className="card-container">
  {/* Total Budget Card */}
  <div className="summary-card budget-card">
    <div>
      <p className="card-label">Total Budget</p>
      <p className="card-value">TZS 301,000.00</p>
    </div>
    <div className="icon-container">
      <i className="fas fa-money-bill-wave budget-icon"></i>
    </div>
  </div>
  
  {/* Pledges Card */}
  <div className="summary-card pledges-card">
    <div>
      <p className="card-label">Pledges</p>
      <p className="card-value pledges-value">TZS 201,000.00</p>
    </div>
    <div className="icon-container">
      <i className="fas fa-hand-holding-usd pledges-icon"></i>
    </div>
  </div>
  
  {/* Cash Collected Card */}
  <div className="summary-card cash-card">
    <div>
      <p className="card-label">Cash Collected</p>
      <p className="card-value cash-value">TZS 0.00</p>
    </div>
    <div className="icon-container">
      <i className="fas fa-coins cash-icon"></i>
    </div>
  </div>
</div>

      
      {/* Original Content */}
      <Row className="g-4">
        <Col md={6}>
          <div className="takwimu-card">
            <div className="takwimu-card-header">
              <h5 className="takwimu-card-title">Event Statistics</h5>
            </div>
            <div className="takwimu-card-body">
              <div className="takwimu-stat">
                <span className="takwimu-stat-label">Budget:</span>
                <span className="takwimu-stat-value">TZS 0.00</span>
              </div>
              <div className="takwimu-stat">
                <span className="takwimu-stat-label">Ahadi:</span>
                <span className="takwimu-stat-value">TZS 201,000.00</span>
              </div>
              <div className="takwimu-stat">
                <span className="takwimu-stat-label">Pesa Taslimu:</span>
                <span className="takwimu-stat-value">TZS 0.00</span>
              </div>
              <div className="takwimu-stat">
                <span className="takwimu-stat-label">Matumizi:</span>
                <span className="takwimu-stat-value">TZS 0.00</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className="takwimu-card">
            <div className="takwimu-card-header">
              <h5 className="takwimu-card-title">Guest Statistics</h5>
            </div>
            <div className="takwimu-card-body">
              <div className="takwimu-stat">
                <span className="takwimu-stat-label">Orodha Ya Wageni:</span>
                <span className="takwimu-stat-value">368</span>
              </div>
              <div className="takwimu-stat">
                <span className="takwimu-stat-label">Walio Ahidi:</span>
                <span className="takwimu-stat-value">3</span>
              </div>
              <div className="takwimu-stat">
                <span className="takwimu-stat-label">Waliochangia:</span>
                <span className="takwimu-stat-value">0</span>
              </div>
              <div className="takwimu-stat">
                <span className="takwimu-stat-label">Wataohudhuria:</span>
                <span className="takwimu-stat-value">0</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="takwimu-chart-container">
        <div className="takwimu-card">
          <div className="takwimu-card-header">
            <h5 className="takwimu-card-title">Events Statistics</h5>
          </div>
          <div className="takwimu-card-body">
            <ComposedChart width={800} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" barSize={20} />
              <Line type="monotone" dataKey="value" stroke="#ff7300" strokeWidth={2} />
            </ComposedChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Takwimu;
