import React, { useState } from 'react';
import './SmsTopup.css';
import mpesaLogo from './images/2.png';
import tigopesaLogo from './images/1.png';
import airtelLogo from './images/3.png';

const SmsTopup = () => {
    const [smsCount, setSmsCount] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [showPayment, setShowPayment] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const SMS_RATES = {
        100: 5000,
        500: 20000,
        900: 30000,
        1000: 32000
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

    // Payment methods data
    const paymentMethods = [
        { id: 'mpesa', name: 'M-Pesa', image: mpesaLogo },
        { id: 'tigopesa', name: 'Mixed By Yas', image: tigopesaLogo },
        { id: 'airtel', name: 'Airtel Money', image: airtelLogo }
    ];
    

    const handleNextClick = () => {
        setShowPayment(true);
    };

    const handlePaymentSubmit = () => {
        if (!selectedPayment || !phoneNumber) {
            alert('Please select payment method and enter phone number');
            return;
        }
        // Handle payment processing here
        console.log('Processing payment:', {
            amount: totalAmount,
            smsCount,
            paymentMethod: selectedPayment,
            phoneNumber
        });
    };

    return (
        <div className="sms-topup-container">
            {!showPayment ? (
                <>
                    <h2 className="text-center" style={{ color: '#24366b' }}>Manunuzi ya SMS</h2>
                    <div className="sms-card-grid">
                        {[
                            { label: 'Sms 100', quantity: 100, price: 'TZS 5000' },
                            { label: 'Sms 500', quantity: 500, price: 'TZS 20000' },
                            { label: 'Sms 900', quantity: 900, price: 'TZS 30000' },
                            { label: 'Sms 1000', quantity: 1000, price: 'TZS 32000' }
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
                        <button className="sms-button" onClick={handleNextClick}>Next</button>
                    </div>
                </>
            ) : (


                <div className="payment-container">
                    <h2 className="text-center" style={{ color: '#24366b' }}>Choose Payment Method</h2>
                    <div className="payment-summary">
                        <p>SMS Count: {smsCount}</p>
                        <p>Total Amount: TZS {totalAmount.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                    </div>
                    <div className="payment-methods">
                        {paymentMethods.map((method) => (
                            <div
                                key={method.id}
                                className={`payment-method ${selectedPayment === method.id ? 'selected' : ''}`}
                                onClick={() => setSelectedPayment(method.id)}
                            >
                                <img 
                                    src={method.image} 
                                    alt={method.name} 
                                    style={{ width: '180px', height: '180px', objectFit: 'contain' }}
                                />
                                <div style={{ marginTop: '10px' }}>{method.name}</div>
                            </div>
                        ))}
                    </div>
                    {selectedPayment && (
                        <div className="phone-input">
                            <input
                                type="number"
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    )}
                    <div className="payment-buttons">
                        <button onClick={() => setShowPayment(false)}>Back</button>
                        <button onClick={handlePaymentSubmit}>Pay Now</button>
                    </div>
                </div>


            )}
        </div>
    );
};

export default SmsTopup;