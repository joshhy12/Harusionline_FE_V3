import React, { useState } from 'react';
import { cardBundles, generatedCards, cardTemplates } from './cardData';
import CardBundleDetails from './CardBundleDetails';
import testcard from './testcard.png';
import './design.css';

const CardBundles = () => {
  const [filter, setFilter] = useState('all');
  const [selectedBundle, setSelectedBundle] = useState(null);
  
  const filteredBundles = cardBundles.filter(bundle => {
    if (filter === 'all') return true;
    return bundle.paymentStatus === filter;
  });
  
  const getCardsInBundle = (bundleId) => {
    return generatedCards.filter(card => card.bundleId === bundleId);
  };
  
  const handleSendAll = (bundleId) => {
    // Implement send all logic
    alert(`Sending all cards in bundle ${bundleId}`);
  };
  
  const handlePayNow = (bundleId) => {
    // Implement payment logic
    alert(`Processing payment for bundle ${bundleId}`);
  };
  
  // Always use the test card image as the default for all bundles
  const getBundlePreviewImage = () => {
    return testcard; // Always return the test card image
  };
  
  if (selectedBundle) {
    return (
      <CardBundleDetails 
        bundle={selectedBundle}
        cards={getCardsInBundle(selectedBundle.bundleId)}
        onBack={() => setSelectedBundle(null)}
      />
    );
  }
  
  return (
    <div className="card-bundles-container">
      <h2 className="bundles-title">Card Bundles</h2>
      <div className="filter-options">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'paid' ? 'active' : ''}`}
          onClick={() => setFilter('paid')}
        >
          Paid
        </button>
        <button 
          className={`filter-btn ${filter === 'unpaid' ? 'active' : ''}`}
          onClick={() => setFilter('unpaid')}
        >
          Unpaid
        </button>
      </div>
      
      <div className="cards-grid">
        {filteredBundles.map(bundle => (
          <div key={bundle.bundleId} className="card-item">
            <img 
              src={getBundlePreviewImage()} 
              alt={`Bundle ${bundle.bundleId}`} 
              className="card-image"
              onClick={() => setSelectedBundle(bundle)}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = testcard;
              }}
            />
            <div className="card-overlay">
              <span className={`status-badge ${bundle.paymentStatus}`}>
                {bundle.paymentStatus}
              </span>
              <div className="card-actions">
                <button 
                  className="view-btn"
                  onClick={() => setSelectedBundle(bundle)}
                >
                  View
                </button>
                {bundle.paymentStatus === 'paid' ? (
                  <button 
                    className="send-all-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSendAll(bundle.bundleId);
                    }}
                  >
                    Send
                  </button>
                ) : (
                  <button 
                    className="pay-now-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePayNow(bundle.bundleId);
                    }}
                  >
                    Pay
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBundles;