import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { } from 'react-bootstrap';
import { FaPaperPlane, FaGift,  FaIdCard, FaWhatsapp } from 'react-icons/fa';

import './admin_ecards.css';

const AdminEcards = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div className="container">
    <div className="row">
      <div className="col-12">
      <h2 className="text-center" style={{ color: '#24366b' }}> Ecards Panel  </h2>

        <p className="text-muted">
        </p>

        <div className="dashboard row mt-4">
          <div className="dashboard col text-center">
            <Link to="/admin/sms-topup" className="text-decoration-none">
              <div className="dashboard bg-dash p-4 rounded-lg">
                <div className="dashText">
                  <FaPaperPlane className="mb-2" size={24} />
                  <div>Genereted WhatApp Card</div>
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
            <Link to="admin/whatsapp-card" className="text-decoration-none">
              <div className="dashboard bg-dash p-4 rounded-lg">
                <div className="dashText">
                  <FaWhatsapp className="mb-2" size={24} />
                  <div>WhatApp Message</div>
                </div>
              </div>
            </Link>
          </div>

          <div className="dashboard col text-center">
            <Link to="#" className="text-decoration-none">
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

export default AdminEcards;
