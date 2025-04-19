import React, { useState } from 'react';
import './SmsTopup.css';
import mpesaLogo from './images/2.png';
import tigopesaLogo from './images/1.png';
import airtelLogo from './images/3.png';

const SmsTopup = () => {
    const [smsCount, setSmsCount] = useState('');
    const [whatsappCount, setWhatsappCount] = useState('');
    const [totalAmount, setTotalAmount] = useState(0);
    const [showPayment, setShowPayment] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [creditType, setCreditType] = useState('sms'); // 'sms', 'whatsapp', or 'both'

    const SMS_CREDIT_PRICE = 50;
    const WHATSAPP_CREDIT_PRICE = 75;

    const SMS_RATES = {
        100: 5000,
        500: 20000,
        900: 30000,
        1000: 32000
    };

    const WHATSAPP_RATES = {
        100: 7500,
        500: 37500,
        900: 67500,
        1000: 75000
    };

    const calculatePrice = (count, service) => {
        const numCount = Number(count);
        if (numCount <= 0) {
            return 0;
        }

        if (service === 'sms') {
            if (numCount <= 100) return (numCount / 100) * SMS_RATES[100];
            else if (numCount <= 500) return (numCount / 500) * SMS_RATES[500];
            else if (numCount <= 900) return (numCount / 900) * SMS_RATES[900];
            else return (numCount / 1000) * SMS_RATES[1000];
        } else if (service === 'whatsapp') {
            if (numCount <= 100) return (numCount / 100) * WHATSAPP_RATES[100];
            else if (numCount <= 500) return (numCount / 500) * WHATSAPP_RATES[500];
            else if (numCount <= 900) return (numCount / 900) * WHATSAPP_RATES[900];
            else return (numCount / 1000) * WHATSAPP_RATES[1000];
        }
        return 0;
    };

    const handleSmsInputChange = (e) => {
        const value = e.target.value;
        setSmsCount(value);
        updateTotalAmount(value, whatsappCount);
    };

    const handleWhatsappInputChange = (e) => {
        const value = e.target.value;
        setWhatsappCount(value);
        updateTotalAmount(smsCount, value);
    };

    const updateTotalAmount = (smsValue, whatsappValue) => {
        const smsAmount = creditType !== 'whatsapp' ? calculatePrice(smsValue, 'sms') : 0;
        const whatsappAmount = creditType !== 'sms' ? calculatePrice(whatsappValue, 'whatsapp') : 0;
        setTotalAmount(smsAmount + whatsappAmount);
    };

    const handleCreditTypeSelect = (type) => {
        setCreditType(type);
        
        // Reset counts when changing credit type
        if (type === 'sms') {
            setWhatsappCount('');
        } else if (type === 'whatsapp') {
            setSmsCount('');
        }
        
        updateTotalAmount(
            type !== 'whatsapp' ? smsCount : '', 
            type !== 'sms' ? whatsappCount : ''
        );
    };

    const handleCardClick = (quantity, service) => {
        if (service === 'sms') {
            setSmsCount(quantity);
            updateTotalAmount(quantity, whatsappCount);
        } else {
            setWhatsappCount(quantity);
            updateTotalAmount(smsCount, quantity);
        }
    };

    const paymentMethods = [
        { id: 'mpesa', name: 'M-Pesa', image: mpesaLogo },
        { id: 'tigopesa', name: 'Mixed By Yas', image: tigopesaLogo },
        { id: 'airtel', name: 'Airtel Money', image: airtelLogo }
    ];

    const handleNextClick = () => {
        if ((creditType === 'sms' && !smsCount) ||
            (creditType === 'whatsapp' && !whatsappCount) ||
            (creditType === 'both' && (!smsCount || !whatsappCount))) {
            alert('Please enter the required credit amounts');
            return;
        }
        setShowPayment(true);
    };

    const handlePaymentSubmit = () => {
        if (!selectedPayment || !phoneNumber) {
            alert('Please select payment method and enter phone number');
            return;
        }
        console.log('Processing payment:', {
            amount: totalAmount,
            smsCount: creditType !== 'whatsapp' ? smsCount : 0,
            whatsappCount: creditType !== 'sms' ? whatsappCount : 0,
            paymentMethod: selectedPayment,
            phoneNumber
        });
    };

    return (
        <div className="sms-topup-container">
            {!showPayment ? (
                <>
                    <h1 className="stylish-heading" style={{ color: '#4169e1', textAlign: 'center' }}>Credit Purchase </h1>

                    <div className="credit-type-selector">
                     
                        <div className="credit-type-options">
                            <div
                                className={`credit-type-option ${creditType === 'sms' ? 'selected' : ''}`}
                                onClick={() => handleCreditTypeSelect('sms')}
                            >
                                <i className="bi bi-envelope-fill"></i>
                                <span>SMS Credits</span>
                                <small>1 credit = TZS {SMS_CREDIT_PRICE}</small>
                            </div>
                            <div
                                className={`credit-type-option ${creditType === 'whatsapp' ? 'selected' : ''}`}
                                onClick={() => handleCreditTypeSelect('whatsapp')}
                            >
                                <i className="bi bi-whatsapp"></i>
                                <span>WhatsApp Credits</span>
                                <small>1 credit = TZS {WHATSAPP_CREDIT_PRICE}</small>
                            </div>
                            <div
                                className={`credit-type-option ${creditType === 'both' ? 'selected' : ''}`}
                                onClick={() => handleCreditTypeSelect('both')}
                            >
                                <i className="bi bi-chat-dots-fill"></i>
                                <span>Both Credits</span>
                                <small>Choose both types</small>
                            </div>
                        </div>
                    </div>

                    {/* SMS Cards (shown when SMS or Both is selected) */}
                    {(creditType === 'sms' || creditType === 'both') && (
                        <>
                            <h3 className="text-center">SMS Packages</h3>
                            <div className="sms-card-grid">
                                {[
                                    { label: 'Sms 100', quantity: 100, price: 'TZS 5000' },
                                    { label: 'Sms 500', quantity: 500, price: 'TZS 20000' },
                                    { label: 'Sms 900', quantity: 900, price: 'TZS 30000' },
                                    { label: 'Sms 1000', quantity: 1000, price: 'TZS 32000' }
                                ].map((item, index) => (
                                    <div
                                        key={`sms-${index}`}
                                        className="sms-card"
                                        onClick={() => handleCardClick(item.quantity, 'sms')}
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
                            </div>
                        </>
                    )}

                    {/* WhatsApp Cards (shown when WhatsApp or Both is selected) */}
                    {(creditType === 'whatsapp' || creditType === 'both') && (
                        <>
                            <h3 className="text-center">WhatsApp Packages</h3>
                            <div className="sms-card-grid">
                                {[
                                    { label: 'WhatsApp 100', quantity: 100, price: 'TZS 7500' },
                                    { label: 'WhatsApp 500', quantity: 500, price: 'TZS 37500' },
                                    { label: 'WhatsApp 900', quantity: 900, price: 'TZS 67500' },
                                    { label: 'WhatsApp 1000', quantity: 1000, price: 'TZS 75000' }
                                ].map((item, index) => (
                                    <div
                                        key={`wa-${index}`}
                                        className="sms-card whatsapp-card"
                                        onClick={() => handleCardClick(item.quantity, 'whatsapp')}
                                    >
                                        <div className="sms-card-header">{item.label}</div>
                                        <div className="sms-card-content">
                                            <i className="bi bi-whatsapp"></i>
                                            <div className="sms-quantity">{item.quantity}</div>
                                            <div className="sms-unit">*WhatsApp</div>
                                        </div>
                                        <div className="sms-price">{item.price}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="sms-input-group">
                                <input
                                    type="number"
                                    placeholder="Enter number of WhatsApp credits e.g. 100"
                                    className="sms-input"
                                    value={whatsappCount}
                                    onChange={handleWhatsappInputChange}
                                />
                            </div>
                        </>
                    )}

                    {/* Total and Next Button */}
                    <div className="total-section">
                        <div className="total-amount">
                            Total: TZS {totalAmount.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </div>
                        <button className="next-button" onClick={handleNextClick}>Next</button>
                    </div>
                </>
            ) : (
                <div className="payment-container">
                    <h2 className="text-center" style={{ color: '#24366b' }}>Choose Payment Method</h2>
                    <div className="payment-summary">
                        {creditType !== 'whatsapp' && <p>SMS Count: {smsCount}</p>}
                        {creditType !== 'sms' && <p>WhatsApp Credits: {whatsappCount}</p>}
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
