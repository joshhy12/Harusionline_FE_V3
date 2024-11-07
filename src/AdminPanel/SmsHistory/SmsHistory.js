import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SMSHistory = () => {
  const [perPage, setPerPage] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');

  const smsData = [
    {
      muda: '2024-12-01 11:34:38',
      recipientName: 'Paulo Transporter',
      phoneNumber: '255763600949',
      message: 'Habari Paulo Transporter, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (Pretty Confimation) (Umechangia 0/= Bado: 200,000/=) Tarehe ya Ubarikio ni 2024-12-01 (siku 25 kutoka sasa ). Mawasiliano/michango: 0755891534 AHSANTE https://prettyconfimation.harusi.online. Pretty Confimation',
      status: 'Success'
    },
    {
      muda: '2024-12-01 09:30:16',
      recipientName: 'Magufulu Transporter',
      phoneNumber: '255718418090',
      message: 'Habari Paulo Transporter, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (Pretty Confimation) (Umechangia 0/= Bado: 200,000/=) Tarehe ya Ubarikio ni 2024-12-01 (siku 25 kutoka sasa ). Mawasiliano/michango: 0755891534 AHSANTE https://prettyconfimation.harusi.online. Pretty Confimation',
      status: 'Failed'
    },
    {
      muda: '2024-12-01 06:37:44',
      recipientName: 'Kikwete Transporter',
      phoneNumber: '255713302810',
      message: 'Habari Paulo Transporter, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (Pretty Confimation) (Umechangia 0/= Bado: 200,000/=) Tarehe ya Ubarikio ni 2024-12-01 (siku 25 kutoka sasa ). Mawasiliano/michango: 0755891534 AHSANTE https://prettyconfimation.harusi.online. Pretty Confimation',
      status: 'Failed'
    },
    {
      muda: '2024-12-01 05:36:01',
      recipientName: 'Joshy Lucas',
      phoneNumber: '255655320361',
      message: 'Habari Paulo Transporter, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (Pretty Confimation) (Umechangia 0/= Bado: 200,000/=) Tarehe ya Ubarikio ni 2024-12-01 (siku 25 kutoka sasa ). Mawasiliano/michango: 0755891534 AHSANTE https://prettyconfimation.harusi.online. Pretty Confimation',
      status: 'Success'
    },
    {
      muda: '2024-12-01 05:36:00',
      recipientName: 'Tumbo Tumbo',
      phoneNumber: '255766504372',
      message: 'Habari Paulo Transporter, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (Pretty Confimation) (Umechangia 0/= Bado: 200,000/=) Tarehe ya Ubarikio ni 2024-12-01 (siku 25 kutoka sasa ). Mawasiliano/michango: 0755891534 AHSANTE https://prettyconfimation.harusi.online. Pretty Confimation',
      status: 'Success'
    }
  ];

  // Update the message column in your columns array
const columns = [
  { name: 'Muda', selector: (row) => row.muda, sortable: true, width: '150px' },
  { name: 'Recipient Name', selector: (row) => row.recipientName, sortable: true, width: '150px' },
  { name: 'Phone Number', selector: (row) => row.phoneNumber, sortable: true, width: '130px' },
  {
    name: 'Message',
    selector: (row) => row.message,
    sortable: true,
    width: '630px', // Reduced from 800px
    wrap: true,
    cell: (row) => (
      <div style={{ 
        whiteSpace: 'normal', 
        wordWrap: 'break-word',
        lineHeight: '1.2em',
        height: '4.8em', // This will show 4 lines (1.2em * 4)
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
        {row.message}
      </div>
    )
  },
  {
    name: 'Status',
    selector: (row) => row.status,
    sortable: true,
    width: '100px',
    cell: (row) => (
      <span style={{
        padding: '6px 12px',
        borderRadius: '4px',
        fontSize: '12px',
        fontWeight: '500',
        backgroundColor: row.status === 'Success' ? '#e8edfb' : '#ffebee',
        color: row.status === 'Success' ? '#0066ee' : '#d32f2f'
      }}>
        {row.status}
      </span>
    )
  }
  
];


  const filteredData = smsData.filter(sms =>
    sms.recipientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sms.phoneNumber.includes(searchTerm)
  );

  const customStyles = {
    rows: {
      style: {
        fontSize: '120px', // Smaller font size for rows
        minHeight: '40px', // Reduced row height
      },
    },
    headCells: {
      style: {
        fontSize: '15px', // Smaller font size for headers
        fontWeight: 'bold',
      },
    },
  };


  return (
    <div className="container mt-4">
      <h2 className="text-center" style={{ color: '#24366b' }}>SMS History</h2>
      <div className="search-box mb-3">
        <Form.Group controlId="searchInput">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by recipient name or phone number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
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
  );
};

export default SMSHistory;