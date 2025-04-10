import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaGift, FaEnvelopeOpenText, FaWhatsapp } from 'react-icons/fa';
import DataTable from 'react-data-table-component';
import { Form } from 'react-bootstrap';
import './PaymentHistory.css';

const Payments = () => {
  const [perPage, setPerPage] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');

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

  const columns = [
    { name: 'Date', selector: (row) => row.date, sortable: true, width: '230px' },
    { name: 'Transaction Token', selector: (row) => row.transactionToken, sortable: true, width: '230px' },
    { name: 'Payment For', selector: (row) => row.for, sortable: true, width: '200px' },
    { name: 'Amount', selector: (row) => row.amount, sortable: true, width: '100px' },
    { name: 'Payment Method', selector: (row) => row.paymentMethod, sortable: true, width: '150px' },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      width: '130px',
      cell: (row) => (
        <span style={{
          padding: '6px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: '500',
          backgroundColor: row.status === 'Paid' ? '#e0f2e9' : row.status === 'Pending' ? '#e8edfb' : '#ffebee',
          color: row.status === 'Paid' ? '#2e7d32' : row.status === 'Pending' ? '#0066ee' : '#d32f2f'
        }}>
          {row.status}
        </span>
      )
    }
  ];

  const filteredData = paymentData.filter(payment =>
    payment.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.transactionToken.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const customStyles = {
    rows: {
      style: {
        fontSize: '120px',
        minHeight: '40px',
      },
    },
    headCells: {
      style: {
        fontSize: '15px',
        fontWeight: 'bold',
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <h1 className="stylish-heading" style={{ color: '#4169e1' }}>Payments Panel </h1>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          Monitor payment statuses in real-time, track transactions, and manage payment interactions effortlessly. Get comprehensive insights into payment processing, success rates, and transaction details - all in one centralized dashboard.
        </Typography>

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
            <Link to="#" className="text-decoration-none">
              <div className="dashboard bg-dash p-4 rounded-lg">
                <div className="dashText">
                  <FaWhatsapp className="mb-2" size={24} />
                  <div>WhatApp Credit</div>
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

        <div className="mt-4">
          <h2 className="text-left" style={{ color: '#24366b' }}>Historia ya malipo</h2>
          <div className="search-box mb-3">
           
          </div>
          <div className="table-scroll">
            <div className="datatable-wrapper">
              <DataTable
                columns={columns}
                data={filteredData}
                pagination
                paginationRowsPerPageOptions={[100, 200, 500]}
                paginationPerPage={perPage}
                onChangeRowsPerPage={setPerPage}
                highlightOnHover
                striped
                dense
                responsive
                customStyles={customStyles}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Payments;