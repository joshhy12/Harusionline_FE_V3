import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaGift, FaTag, FaEnvelopeOpenText, FaWhatsapp } from 'react-icons/fa';
import './PaymentHistory.css';

const Payments = () => {
  const paymentData = [
    {
      date: '2024-08-27 17:24:25',
      transactionToken: 'C1462D8E-F4D1-414E-A804-B6E047663770',
      reference: 'R60068274',
      for: 'ecard',
      amount: 4000,
      paymentMethod: 'Online',
      status: 'Paid'
    },
    {
      date: '2024-08-26 15:30:00',
      transactionToken: 'B1462D8E-F4D1-414E-A804-B6E047663771',
      reference: 'R60068275',
      for: 'SMS TopUp',
      amount: 2000,
      paymentMethod: 'Mobile Money',
      status: 'Paid'
    },
    {
      date: '2024-08-25 12:15:30',
      transactionToken: 'A1462D8E-F4D1-414E-A804-B6E047663772',
      reference: 'R60068276',
      for: 'WhatsApp Credit',
      amount: 5000,
      paymentMethod: 'Bank Transfer',
      status: 'Pending'
    },
    {
      date: '2024-08-25 12:15:30',
      transactionToken: 'A1462D8E-F4D1-414E-A804-B6E047663772',
      reference: 'R60068276',
      for: 'WhatsApp Credit',
      amount: 5000,
      paymentMethod: 'Bank Transfer',
      status: 'Failed'
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center" style={{ color: '#24366b' }}> Payments Panel  </h2>

          <p className="text-muted">
          </p>

          <div className="dashboard row mt-4">
            <div className="dashboard col text-center">
              <Link to="/admin/sms-topup" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaPaperPlane className="mb-2" size={24} />
                    <div>Message TopUp</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="dashboard col text-center">
              <Link to="/admin/ecards" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaEnvelopeOpenText className="mb-2" size={24} />
                    <div>Buy Ecards</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="dashboard col text-center">
              <Link to="/admin/send-invitations" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaWhatsapp className="mb-2" size={24} />
                    <div>WhatApp Credit</div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="dashboard col text-center">
              <Link to="/admin/send-invitations" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaGift className="mb-2" size={24} />
                    <div>Discount </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>


      <div className="Payment-row mt-4">
        <div className="Payment-col">
          <h3 className="Payment-title mb-3">Historia ya malipo</h3>
          <div className="Payment-table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
            <table className="Payment-table">
              <thead className="Payment-thead">
                <tr>
                  <th>Date</th>
                  <th>Transaction Token</th>
                  <th>Reference</th>
                  <th>Payment For</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentData.map((payment, index) => (
                  <tr key={index} className="Payment-row">
                    <td>{payment.date}</td>
                    <td>{payment.transactionToken}</td>
                    <td>{payment.reference}</td>
                    <td>{payment.for}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.paymentMethod}</td>
                    <td>
                      <span className={`Payment-badge Payment-badge-${payment.status === 'Paid'
                          ? 'success'
                          : payment.status === 'Failed'
                            ? 'danger'
                            : 'warning'
                        }`}>
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>




    </div>
  );
};

export default Payments;