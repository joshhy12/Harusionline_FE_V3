import React, { useState } from 'react';
import { cardBundles, generatedCards } from './cardData';
 import CardBundleDetails from './CardBundleDetails';
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
      <div className="bundles-list">
        {filteredBundles.map(bundle => (
          <div key={bundle.bundleId} className={`bundle-card ${bundle.paymentStatus}`}>
            <div className="bundle-header">
              <h3>Bundle #{bundle.bundleId}</h3>
              <span className={`status-badge ${bundle.paymentStatus}`}>
                {bundle.paymentStatus}
              </span>
            </div>
            <div className="bundle-details">
              <p>{bundle.totalCards} cards purchased</p>
              <p>Date: {bundle.purchaseDate}</p>
              <p>Amount: ${bundle.amount.toFixed(2)}</p>
            </div>
            <div className="bundle-actions">
              <button 
                className="view-btn"
                onClick={() => setSelectedBundle(bundle)}
              >
                View Cards
              </button>
              {bundle.paymentStatus === 'paid' ? (
                <button 
                  className="send-all-btn"
                  onClick={() => handleSendAll(bundle.bundleId)}
                >
                  Send All
                </button>
              ) : (
                <button 
                  className="pay-now-btn"
                  onClick={() => handlePayNow(bundle.bundleId)}
                >
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
 };
 export default CardBundles;