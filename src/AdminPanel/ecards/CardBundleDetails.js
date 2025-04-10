import React, { useState } from 'react';
import { cardTemplates } from './cardData';
import { FaSearch, FaWhatsapp, FaSms, FaEye, FaArrowLeft } from 'react-icons/fa';
import './design.css';
// Import the test image
import testCardImage from './testcard.png'; // Adjust the path as needed

const CardBundleDetails = ({ bundle, cards, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name'); // Default sort by name

  const getTemplateById = (id) => {
    const template = cardTemplates.find(template => template.id === id);
    // Return the template if found, otherwise return an object with a default image
    return template || { 
      imageUrl: testCardImage, 
      name: 'Default Template' 
    };
  };

  const handleSendCard = (cardId, method) => {
    // Implement send logic
    alert(`Sending card ${cardId} via ${method}`);
  };

  const handleViewCard = (card) => {
    // Implement preview logic
    alert(`Previewing card for ${card.recipientName}`);
  };

  const handleSendAllUnsent = () => {
    const unsentCards = cards.filter(c => c.status === 'unsent');
    if (unsentCards.length === 0) {
      alert('No unsent cards to send.');
      return;
    }
    alert(`Sending all ${unsentCards.length} unsent cards.`);
  };

  // Filter cards based on search term
  const filteredCards = cards.filter(card => 
    card.recipientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.recipientPhone.includes(searchTerm)
  );

  // Sort cards based on selected sort option
  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === 'name') {
      return a.recipientName.localeCompare(b.recipientName);
    } else if (sortBy === 'status') {
      return a.status.localeCompare(b.status);
    } else if (sortBy === 'date') {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
    return 0;
  });

  return (
    <div className="cards-in-bundle-container">
      <div className="bundle-info-header">
        <button className="back-to-bundles" onClick={onBack}>
          <FaArrowLeft /> Back to All Bundles
        </button>
        <h2>
          Bundle #{bundle.bundleId} - {bundle.totalCards} Cards
          <span className={`bundle-status-badge ${bundle.paymentStatus}`}>
            {bundle.paymentStatus}
          </span>
        </h2>
      </div>

      <div className="bundle-details-panel">
        <div className="bundle-stats">
          <div className="stat-item">
            <span className="stat-label">Purchase Date:</span>
            <span className="stat-value">{bundle.purchaseDate}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Amount:</span>
            <span className="stat-value">${bundle.amount.toFixed(2)}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Sent:</span>
            <span className="stat-value">{cards.filter(c => c.status === 'sent').length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Unsent:</span>
            <span className="stat-value">{cards.filter(c => c.status === 'unsent').length}</span>
          </div>
        </div>

        {bundle.paymentStatus === 'paid' && (
          <button 
            className="send-all-unsent-btn"
            onClick={handleSendAllUnsent}
          >
            Send All Unsent Cards
          </button>
        )}
      </div>

      <div className="cards-controls">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by name or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="sort-container">
          <label htmlFor="sortSelect">Sort by:</label>
          <select 
            id="sortSelect" 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="name">Recipient Name</option>
            <option value="status">Status</option>
            <option value="date">Creation Date</option>
          </select>
        </div>
      </div>

      {filteredCards.length === 0 ? (
        <div className="no-results">
          <p>No cards match your search criteria.</p>
        </div>
      ) : (
        <div className="cards-grid">
          {sortedCards.map(card => {
            const template = getTemplateById(card.templateId);
            return (
              <div key={card.cardId} className={`e-card ${card.status}`}>
                <div className="card-preview">
                  <img
                    src={template.imageUrl}
                    alt={template.name}
                    className="card-thumbnail"
                    onError={(e) => {
                      e.target.onerror = null; // Prevent infinite loop
                      e.target.src = testCardImage; // Set default image on error
                    }}
                  />
                  <span className={`card-status-indicator ${card.status}`}>
                    {card.status}
                  </span>
                </div>
                <div className="card-content">
                  <div className="card-details">
                    <h4 className="recipient-name">{card.recipientName}</h4>
                    <p className="recipient-phone">{card.recipientPhone}</p>
                    {card.status === 'sent' && (
                      <p className="sent-date">
                        Sent: {new Date(card.sentAt).toLocaleDateString()}
                      </p>
                    )}
                    {card.viewCount > 0 && (
                      <p className="view-count">
                        Viewed: {card.viewCount} times
                      </p>
                    )}
                  </div>
                  <div className="card-actions">
                    <button
                      className="view-card-btn"
                      onClick={() => handleViewCard(card)}
                    >
                      <FaEye /> View
                    </button>
                    {card.status === 'unsent' && bundle.paymentStatus === 'paid' && (
                      <div className="send-options">
                        <button
                          className="send-btn whatsapp"
                          onClick={() => handleSendCard(card.cardId, 'whatsapp')}
                        >
                          <FaWhatsapp /> WhatsApp
                        </button>
                        <button
                          className="send-btn sms"
                          onClick={() => handleSendCard(card.cardId, 'sms')}
                        >
                          <FaSms /> SMS
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CardBundleDetails;
