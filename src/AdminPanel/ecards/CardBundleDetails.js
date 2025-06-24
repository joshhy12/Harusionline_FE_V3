import React, { useState } from 'react';
import { cardTemplates } from './cardData';
import { FaSearch, FaWhatsapp, FaSms, FaEye, FaArrowLeft, FaTimes, FaShare, FaDownload, FaPaperPlane } from 'react-icons/fa';
import './design.css';
import testCardImage from './testcard.png';

const CardBundleDetails = ({ bundle, cards, onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedCard, setSelectedCard] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const getTemplateById = (id) => {
    const template = cardTemplates.find(template => template.id === id);
    return template || {
      imageUrl: testCardImage,
      name: 'Default Template'
    };
  };

  const handleSendCard = (cardId, method) => {
    alert(`Sending card ${cardId} via ${method}`);
  };

  const handleViewCard = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCard(null);
  };

  const handleSendAllUnsent = () => {
    const unsentCards = cards.filter(c => c.status === 'unsent');
    if (unsentCards.length === 0) {
      alert('No unsent cards to send.');
      return;
    }
    alert(`Sending all ${unsentCards.length} unsent cards.`);
  };

  const handleShareCard = (cardId) => {
    alert(`Sharing card ${cardId}`);
  };

  const handleDownloadCard = (cardId) => {
    alert(`Downloading card ${cardId}`);
  };

  const filteredCards = cards.filter(card =>
    card.recipientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.recipientPhone.includes(searchTerm)
  );

  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortBy === 'name') return a.recipientName.localeCompare(b.recipientName);
    if (sortBy === 'status') return a.status.localeCompare(b.status);
    if (sortBy === 'date') return new Date(a.createdAt) - new Date(b.createdAt);
    return 0;
  });

  return (
    <div className="card-bundle-details-container">
      {/* Header Section */}
      <div className="bundle-header">
        <button className="back-button" onClick={onBack}>
          <FaArrowLeft /> Back to Bundles
        </button>
        <div className="bundle-title">
          <h2>Bundle #{bundle.bundleId}</h2>
          <span className={`status-badge ${bundle.paymentStatus}`}>
            {bundle.paymentStatus}
          </span>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="stats-overview">
        <div className="stat-card">
          <div className="stat-value">{bundle.totalCards}</div>
          <div className="stat-label">Total Cards</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{cards.filter(c => c.status === 'sent').length}</div>
          <div className="stat-label">Sent</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{cards.filter(c => c.status === 'unsent').length}</div>
          <div className="stat-label">Unsent</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">${bundle.amount.toFixed(2)}</div>
          <div className="stat-label">Total Amount</div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="action-bar">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="action-buttons">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="name">Sort by Name</option>
            <option value="status">Sort by Status</option>
            <option value="date">Sort by Date</option>
          </select>
          
          {bundle.paymentStatus === 'paid' && (
            <button 
              className="send-all-button"
              onClick={handleSendAllUnsent}
            >
              <FaPaperPlane /> Send All Unsent
            </button>
          )}
        </div>
      </div>

      {/* Cards Grid */}
      {filteredCards.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🎁</div>
          <h3>No cards found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      ) : (
        <div className="enhanced-cards-grid">
          {sortedCards.map(card => {
            const template = getTemplateById(card.templateId);
            return (
              <div key={card.cardId} className={`e-card ${card.status}`}>
                <div className="card-image-container">
                  <img
                    src={template.imageUrl}
                    alt={template.name}
                    className="card-image"
                    onClick={() => handleViewCard(card)}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = testCardImage;
                    }}
                  />
                  <div className="card-status-badge">{card.status}</div>
                </div>
                
                <div className="card-info">
                  <h4 className="recipient-name">{card.recipientName}</h4>
                  <p className="recipient-phone">{card.recipientPhone}</p>
                  
                  {card.status === 'sent' && (
                    <p className="sent-date">
                      Sent: {new Date(card.sentAt).toLocaleDateString()}
                    </p>
                  )}
                  
                  <div className="card-actions">
                    <button 
                      className="action-button view-button"
                      onClick={() => handleViewCard(card)}
                    >
                      <FaEye /> View
                    </button>
                    
                    <div className="send-options">
                      {card.status === 'unsent' && bundle.paymentStatus === 'paid' ? (
                        <>
                          <button
                            className="action-button whatsapp-button"
                            onClick={() => handleSendCard(card.cardId, 'whatsapp')}
                          >
                            <FaWhatsapp />
                          </button>
                          <button
                            className="action-button sms-button"
                            onClick={() => handleSendCard(card.cardId, 'sms')}
                          >
                            <FaSms />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="action-button share-button"
                            onClick={() => handleShareCard(card.cardId)}
                          >
                            <FaShare />
                          </button>
                          <button
                            className="action-button download-button"
                            onClick={() => handleDownloadCard(card.cardId)}
                          >
                            <FaDownload />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Card Preview Popup */}
      {showPopup && selectedCard && (
        <div className="card-preview-modal">
          <div className="modal-overlay" onClick={handleClosePopup}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h3>Card Preview</h3>
              <button className="close-button" onClick={handleClosePopup}>
                <FaTimes />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="card-preview-image">
                <img 
                  src={getTemplateById(selectedCard.templateId).imageUrl} 
                  alt="Card Preview" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = testCardImage;
                  }}
                />
              </div>
              
              <div className="card-details">
                <div className="detail-section">
                  <h4>Recipient Details</h4>
                  <p><strong>Name:</strong> {selectedCard.recipientName}</p>
                  <p><strong>Phone:</strong> {selectedCard.recipientPhone}</p>
                  <p>
                    <strong>Status:</strong> 
                    <span className={`status-tag ${selectedCard.status}`}>
                      {selectedCard.status}
                    </span>
                  </p>
                </div>
                
                <div className="detail-section">
                  <h4>Card Information</h4>
                  <p><strong>Template:</strong> {getTemplateById(selectedCard.templateId).name}</p>
                  {selectedCard.message && (
                    <p><strong>Message:</strong> {selectedCard.message}</p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button
                className="modal-button share-button"
                onClick={() => handleShareCard(selectedCard.cardId)}
              >
                <FaShare /> Share
              </button>
              <button
                className="modal-button download-button"
                onClick={() => handleDownloadCard(selectedCard.cardId)}
              >
                <FaDownload /> Download
              </button>
              
              {selectedCard.status === 'unsent' && bundle.paymentStatus === 'paid' && (
                <div className="send-options">
                  <button
                    className="modal-button whatsapp-button"
                    onClick={() => handleSendCard(selectedCard.cardId, 'whatsapp')}
                  >
                    <FaWhatsapp /> Send via WhatsApp
                  </button>
                  <button
                    className="modal-button sms-button"
                    onClick={() => handleSendCard(selectedCard.cardId, 'sms')}
                  >
                    <FaSms /> Send via SMS
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardBundleDetails;