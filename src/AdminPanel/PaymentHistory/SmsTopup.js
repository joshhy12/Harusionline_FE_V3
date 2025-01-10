import React, { useState } from 'react';
import './SmsTopup.css';

const SmsTopup = () => {
    const [smsCount, setSmsCount] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);

    const SMS_RATES = {
        100: 2500,
        500: 12500,
        900: 22500,
        1000: 25000
    };

    const calculatePrice = (count) => {
        const numCount = Number(count);
        if (numCount <= 0) {
            return 0;
        }

        // Find the appropriate rate
        if (numCount <= 100) {
            return (numCount / 100) * SMS_RATES[100];
        } else if (numCount <= 500) {
            return (numCount / 500) * SMS_RATES[500];
        } else if (numCount <= 900) {
            return (numCount / 900) * SMS_RATES[900];
        } else {
            return (numCount / 1000) * SMS_RATES[1000];
        }
    };

    const handleSmsInputChange = (e) => {
        const value = e.target.value;
        setSmsCount(value);
        setTotalAmount(calculatePrice(value));
    };

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
                    <div
                        key={index}
                        className="sms-card"
                        onClick={() => {
                            setSmsCount(item.quantity);
                            setTotalAmount(SMS_RATES[item.quantity]);
                        }}
                    >
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
                <input
                    type="number"
                    placeholder="Enter number of SMS e.g. 100"
                    className="sms-input"
                    value={smsCount}
                    onChange={handleSmsInputChange}
                />

                <button className="sms-button">
                    Jumla: TZS {totalAmount.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </button>

                <button className="sms-button">Next</button>
            </div>
        </div>
    );
};

export default SmsTopup;
