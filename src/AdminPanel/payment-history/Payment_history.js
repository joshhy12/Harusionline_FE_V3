
import React from 'react';
import { Table, Typography } from 'antd';
import './payment_history.css';

const { Title, Text } = Typography;

const PaymentHistory = () => {
  const columns = [
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    }
  ];

  const data = [
    {
      key: '1',
      transactionId: 'TRX001',
      date: '2023-12-01',
      amount: '$100.00',
      status: 'Completed'
    },
    {
      key: '2',
      transactionId: 'TRX002',
      date: '2023-12-05',
      amount: '$75.50',
      status: 'Pending'
    },
    {
      key: '3',
      transactionId: 'TRX003',
      date: '2023-12-10',
      amount: '$250.00',
      status: 'Completed'
    },
    {
      key: '4',
      transactionId: 'TRX004',
      date: '2023-12-15',
      amount: '$180.00',
      status: 'Failed'
    }
  ];

  return (
    <div className="payment-history-container">
      <Title level={2}>Payment History</Title>
      <Text className="description">
        View all your past transactions and payment details. Track the status of your payments and maintain a record of all financial activities.
      </Text>
      <Table 
        columns={columns} 
        dataSource={data} 
        className="payment-table"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default PaymentHistory;
