import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, ComposedChart, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Takwimu.css';

const Takwimu = () => {
  // Budget data for pie chart
  const budgetData = [
    { name: 'Budget', value: 40 },
    { name: 'Pledges', value: 20 },
    { name: 'Donations', value: 30 },
    { name: 'Expenses', value: 50 },
  ];

  // Monthly wedding events data
  const monthlyEventsData = [
    { name: 'Jan', events: 12 },
    { name: 'Feb', events: 8 },
    { name: 'Mar', events: 15 },
    { name: 'Apr', events: 10 },
    { name: 'May', events: 14 },
  ];

  // Daily guest confirmations data
  const dailyGuestData = [
    { day: 1, guests: 12 },
    { day: 2, guests: 19 },
    { day: 3, guests: 15 },
    { day: 4, guests: 21 },
    { day: 5, guests: 18 },
    { day: 6, guests: 25 },
    { day: 7, guests: 22 },
    { day: 8, guests: 30 },
    { day: 9, guests: 28 },
    { day: 10, guests: 35 },
  ];

  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="takwimu-container">
      <h1 className="takwimu-title">Takwimu</h1>
      
      {/* Summary Cards */}
      <div className="card-container">
        <div className="summary-card budget-card">
          <div>
            <p className="card-label">Total Budget</p>
            <p className="card-value">TZS 301,000.00</p>
          </div>
          <div className="icon-container">
            <i className="fas fa-money-bill-wave budget-icon"></i>
          </div>
        </div>
        
        <div className="summary-card pledges-card">
          <div>
            <p className="card-label">Pledges</p>
            <p className="card-value pledges-value">TZS 201,000.00</p>
          </div>
          <div className="icon-container">
            <i className="fas fa-hand-holding-usd pledges-icon"></i>
          </div>
        </div>
        
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

      {/* Charts Section */}
      <Row className="g-4 mt-4">
        {/* Monthly Events Bar Chart */}
        <Col md={6}>
          <div className="takwimu-card">
            <div className="takwimu-card-header">
              <h5 className="takwimu-card-title">Monthly Wedding Events</h5>
            </div>
            <div className="takwimu-card-body">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyEventsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}`, 'Events']} />
                  <Legend />
                  <Bar dataKey="events" fill="#8884d8" name="Wedding Events" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>

        {/* Budget Distribution Pie Chart */}
        <Col md={6}>
          <div className="takwimu-card">
            <div className="takwimu-card-header">
              <h5 className="takwimu-card-title">Budget Distribution</h5>
            </div>
            <div className="takwimu-card-body">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={budgetData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
      </Row>

      {/* Daily Guest Confirmations Line Chart */}
      <Row className="mt-4">
        <Col md={12}>
          <div className="takwimu-card">
            <div className="takwimu-card-header">
              <h5 className="takwimu-card-title">Daily Guest Confirmations</h5>
            </div>
            <div className="takwimu-card-body">
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={dailyGuestData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}`, 'Guests']} />
                  <Legend />
                  <Bar dataKey="guests" fill="#413ea0" name="Guest Confirmations" />
                  <Line type="monotone" dataKey="guests" stroke="#ff7300" name="Trend" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Col>
      </Row>

      {/* Original Statistics Cards */}
      <Row className="g-4 mt-4">
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
    </div>
  );
};

export default Takwimu;
