import React from 'react';
import './SmsTopup.css';

const SmsTopup = () => {
    return (
        <div className="sms-topup-container">
            <h2 className="text-center" style={{ color: '#24366b' }}>Manunuzi ya SMS</h2>

            
            <div className="sms-card-grid">
                {[
                    { label: 'Sms 100', quantity: 100, price: 'TZS 2500' },
                    { label: 'Sms 500', quantity: 500, price: 'TZS 12500' },
                    { label: 'Sms 900', quantity: 900, price: 'TZS 22500' },
                    { label: 'Sms 1000', quantity: 1000, price: 'TZS 25000' }
                ].map((item, index) => (
                    <div key={index} className="sms-card">
                        <div className="sms-card-header">{item.label}</div>
                        <div className="sms-card-content">
                            <i className="bi bi-envelope-plus-fill"></i>
                            <div className="sms-quantity">{item.quantity}</div>
                            <div className="sms-unit">*Sms</div>
                        </div>
                        <div className="sms-price">{item.price}</div>
                    </div>
                ))}
            </div>
            
            <div className="sms-input-group">
                <input type="number" placeholder="Enter number of SMS e.g. 100" className="sms-input"/>
                
                <button className="sms-button">Jumla: TZS 0.00</button>
                <button className="sms-button">Next</button>
               
            </div>
            
           
        </div>
    );
};

export default SmsTopup;
