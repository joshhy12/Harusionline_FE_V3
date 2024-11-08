import React from 'react';

const Michango = () => {
  const data = [
    {
      fullName: 'John Doe',
      amount: '10,000',
      recordedBy: 'Admin User',
      date: '2024-01-20'
    },
    {
      fullName: 'Jane Smith',
      amount: '15,000',
      recordedBy: 'Admin User',
      date: '2024-01-21'
    },
    {
      fullName: 'Robert Johnson',
      amount: '20,000',
      recordedBy: 'Admin User',
      date: '2024-01-22'
    }
  ];

  return (
    <div className="container mt-4">
         <h2 className="text-center" style={{ color: '#24366b' }}>Michango Management</h2>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-primary me-2">
              <i className="fas fa-file-pdf me-2"></i>Funds PDF
            </button>
            <button className="btn btn-success">
              <i className="fas fa-file-excel me-2"></i>Funds Excel
            </button>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Amount</th>
                  <th>Recorded By</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.fullName}</td>
                    <td>{item.amount}</td>
                    <td>{item.recordedBy}</td>
                    <td>{item.date}</td>
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

export default Michango;