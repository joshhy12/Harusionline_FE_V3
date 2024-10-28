import React from 'react';
import { Link } from 'react-router-dom';
import './SmsTopup.css';

const Payments = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-4 mb-3">Payments</h1>
          <p className="text-muted">
            Manage and view all payment transactions in your system. Track payment status, history, and process refunds.
          </p>

          <Link to="/admin/sms-topup">SMS Topup</Link>

        </div>
      </div>
    </div>
  );
};



export default Payments;
