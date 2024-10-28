import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaGift, FaTag, FaIdCard, FaWhatsapp } from 'react-icons/fa';
import './PaymentHistory.css';

const Payments = () => {
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
              <Link to="/admin/contribution-reminder" className="text-decoration-none">
                <div className="dashboard bg-dash p-4 rounded-lg">
                  <div className="dashText">
                    <FaIdCard className="mb-2" size={24} />
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
    </div>
  );
};

export default Payments;
