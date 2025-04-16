import React from 'react';
import { FaCalendarAlt, FaCheckCircle, FaMoneyBillWave, FaUsers, FaRing, FaGift, FaMapMarkerAlt, FaPhotoVideo, FaMusic, FaUtensils, FaCar } from 'react-icons/fa';
import { ProgressBar } from 'react-bootstrap';
import './Dashboard.css';

const Dashboard = () => {
  const weddingDate = new Date('2025-06-15');
  const today = new Date();
  const daysToGo = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24));
  
  // Sample wedding data
  const weddingData = {
    coupleNames: "John & Neema",
    weddingDate: weddingDate,
    daysToGo: daysToGo,
    budget: {
      total: 15000000,
      spent: 8500000,
      remaining: 6500000,
      percentage: 57
    },
    guests: {
      invited: 150,
      confirmed: 112,
      pending: 38
    },
    checklist: {
      completed: 12,
      total: 22
    },
    vendors: {
      photographer: { booked: true, paid: true },
      caterer: { booked: true, paid: false },
      musician: { booked: false, paid: false },
      decorator: { booked: true, paid: true }
    },
    gifts: {
      received: 24,
      totalExpected: 150
    }
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-TZ', { 
      style: 'currency', 
      currency: 'TZS',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Format date
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="couple-dashboard container mt-4">
      {/* Wedding Header */}
      <div className="wedding-header text-center mb-4">
        <h1 className="couple-names">{weddingData.coupleNames}</h1>
        <h3 className="wedding-date">
          <FaCalendarAlt className="me-2" />
          {formatDate(weddingData.weddingDate)}
        </h3>
        <div className={`days-to-go ${weddingData.daysToGo <= 30 ? 'soon' : ''}`}>
          {weddingData.daysToGo} {weddingData.daysToGo === 1 ? 'day' : 'days'} to go!
        </div>
      </div>

      {/* Main Stats */}
      <div className="row g-4 mb-4">
        {/* Budget Card */}
        <div className="col-md-4">
          <div className="dashboard-card budget-card">
            <div className="card-header">
              <FaMoneyBillWave size={24} />
              <h3>Wedding Budget</h3>
            </div>
            <div className="card-body">
              <div className="budget-total">
                <span>Total Budget:</span>
                <strong>{formatCurrency(weddingData.budget.total)}</strong>
              </div>
              <div className="budget-progress">
                <ProgressBar 
                  now={weddingData.budget.percentage} 
                  label={`${weddingData.budget.percentage}%`} 
                  variant={weddingData.budget.percentage > 80 ? 'danger' : 'success'}
                />
              </div>
              <div className="budget-details">
                <div>
                  <span>Spent:</span>
                  <strong>{formatCurrency(weddingData.budget.spent)}</strong>
                </div>
                <div>
                  <span>Remaining:</span>
                  <strong>{formatCurrency(weddingData.budget.remaining)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guest Management Card */}
        <div className="col-md-4">
          <div className="dashboard-card guests-card">
            <div className="card-header">
              <FaUsers size={24} />
              <h3>Guest Management</h3>
            </div>
            <div className="card-body">
              <div className="guest-stats">
                <div className="guest-stat">
                  <div className="stat-number">{weddingData.guests.invited}</div>
                  <div className="stat-label">Invited</div>
                </div>
                <div className="guest-stat">
                  <div className="stat-number confirmed">{weddingData.guests.confirmed}</div>
                  <div className="stat-label">Confirmed</div>
                </div>
                <div className="guest-stat">
                  <div className="stat-number pending">{weddingData.guests.pending}</div>
                  <div className="stat-label">Pending</div>
                </div>
              </div>
              <div className="guest-actions">
                <button className="btn btn-sm btn-outline-primary">Send Reminders</button>
                <button className="btn btn-sm btn-outline-secondary">Add Guests</button>
              </div>
            </div>
          </div>
        </div>

        {/* Checklist Card */}
        <div className="col-md-4">
          <div className="dashboard-card checklist-card">
            <div className="card-header">
              <FaCheckCircle size={24} />
              <h3>Wedding Checklist</h3>
            </div>
            <div className="card-body">
              <div className="checklist-progress">
                <ProgressBar 
                  now={(weddingData.checklist.completed / weddingData.checklist.total) * 100} 
                  label={`${weddingData.checklist.completed}/${weddingData.checklist.total}`} 
                />
              </div>
              <div className="checklist-items">
                <div className="checklist-item complete">
                  <FaCheckCircle className="me-2" />
                  <span>Book Venue</span>
                </div>
                <div className="checklist-item complete">
                  <FaCheckCircle className="me-2" />
                  <span>Send Invitations</span>
                </div>
                <div className="checklist-item incomplete">
                  <FaCheckCircle className="me-2" />
                  <span>Finalize Menu</span>
                </div>
                <div className="checklist-item incomplete">
                  <FaCheckCircle className="me-2" />
                  <span>Dress Fitting</span>
                </div>
              </div>
              <button className="btn btn-sm btn-outline-primary mt-2">View Full Checklist</button>
            </div>
          </div>
        </div>
      </div>

    {/* Vendor Status */}
<div className="row mb-4">
  <div className="col">
    <div className="dashboard-card vendors-card">
      <div className="card-header">
        <FaUsers size={24} />
        <h3>Vendor Status</h3>
      </div>
      <div className="card-body">
        <div className="vendor-grid">
          <div className={`vendor-item ${weddingData.vendors.photographer.booked ? 'booked' : ''}`}>
            <FaPhotoVideo size={30} />
            <div>Photographer</div>
            <div className={`status ${weddingData.vendors.photographer.paid ? 'paid' : 'pending'}`}>
              {weddingData.vendors.photographer.paid ? 'Paid' : 'Deposit Paid'}
            </div>
          </div>
          <div className={`vendor-item ${weddingData.vendors.caterer.booked ? 'booked' : ''}`}>
            <FaUtensils size={30} />
            <div>Caterer</div>
            <div className={`status ${weddingData.vendors.caterer.paid ? 'paid' : 'pending'}`}>
              {weddingData.vendors.caterer.paid ? 'Paid' : 'Deposit Paid'}
            </div>
          </div>
          <div className={`vendor-item ${weddingData.vendors.musician.booked ? 'booked' : ''}`}>
            <FaMusic size={30} />
            <div>Musician</div>
            <div className="status not-booked">Not Booked</div>
          </div>
          <div className={`vendor-item ${weddingData.vendors.decorator.booked ? 'booked' : ''}`}>
            <FaRing size={30} />
            <div>Decorator</div>
            <div className={`status ${weddingData.vendors.decorator.paid ? 'paid' : 'pending'}`}>
              {weddingData.vendors.decorator.paid ? 'Paid' : 'Deposit Paid'}
            </div>
          </div>
          <div className={`vendor-item ${weddingData.vendors.venue ? 'booked' : ''}`}>
            <FaMapMarkerAlt size={30} />
            <div>Venue</div>
            <div className="status paid">Paid</div>
          </div>
          <div className={`vendor-item ${weddingData.vendors.transport ? 'booked' : ''}`}>
            <FaCar size={30} />
            <div>Transport</div>
            <div className="status pending">Deposit Paid</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Bottom Row */}
      <div className="row g-4">
        {/* Gifts Registry */}
        <div className="col-md-6">
          <div className="dashboard-card gifts-card">
            <div className="card-header">
              <FaGift size={24} />
              <h3>Gifts Registry</h3>
            </div>
            <div className="card-body">
              <div className="gifts-progress">
                <ProgressBar 
                  now={(weddingData.gifts.received / weddingData.gifts.totalExpected) * 100} 
                  label={`${weddingData.gifts.received}/${weddingData.gifts.totalExpected} Gifts`} 
                />
              </div>
              <div className="gifts-list">
                <div className="gift-item">
                  <div className="gift-name">Kitchen Set</div>
                  <div className="gift-status">15/20 purchased</div>
                </div>
                <div className="gift-item">
                  <div className="gift-name">Honeymoon Fund</div>
                  <div className="gift-status">TZS 1,200,000 raised</div>
                </div>
                <div className="gift-item">
                  <div className="gift-name">Bedding Set</div>
                  <div className="gift-status">5/10 purchased</div>
                </div>
              </div>
              <button className="btn btn-sm btn-outline-primary mt-2">Manage Registry</button>
            </div>
          </div>
        </div>

        {/* Wedding Details */}
        <div className="col-md-6">
          <div className="dashboard-card details-card">
            <div className="card-header">
              <FaMapMarkerAlt size={24} />
              <h3>Wedding Details</h3>
            </div>
            <div className="card-body">
              <div className="detail-item">
                <strong>Ceremony Venue:</strong>
                <p>St. Mary's Cathedral, Dar es Salaam</p>
              </div>
              <div className="detail-item">
                <strong>Reception Venue:</strong>
                <p>Serena Hotel, Dar es Salaam</p>
              </div>
              <div className="detail-item">
                <strong>Ceremony Time:</strong>
                <p>10:00 AM</p>
              </div>
              <div className="detail-item">
                <strong>Reception Time:</strong>
                <p>2:00 PM</p>
              </div>
              <div className="detail-item">
                <strong>Theme Colors:</strong>
                <div className="theme-colors">
                  <span className="color-swatch" style={{backgroundColor: '#6d4c41'}}></span>
                  <span className="color-swatch" style={{backgroundColor: '#f48fb1'}}></span>
                  <span className="color-swatch" style={{backgroundColor: '#d7ccc8'}}></span>
                </div>
              </div>
              <button className="btn btn-sm btn-outline-primary mt-2">Edit Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;