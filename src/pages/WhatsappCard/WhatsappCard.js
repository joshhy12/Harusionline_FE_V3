  import React, { useState } from 'react';
  import { Card, CardContent, Typography } from '@mui/material';
  import DataTable from 'react-data-table-component';
  import { Form } from 'react-bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';

  const WhatsappCard = () => {
    const [perPage, setPerPage] = useState(100);
    const [searchTerm, setSearchTerm] = useState('');

    const whatsappData = [
      { id: 1, name: 'Mr&Mrs Hance Humphrey', number: '255752848541', status: '✅✅ Read', sentTime: '2024-09-07T13:03:02.000000Z', deliveryTime: '', reply: 'Habari Paulo Transporter, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (Pretty Confimation) (Umechangia 0/= Bado: 200,000/=)  ' },
      { id: 2, name: 'Mr&Mrs Hance Humphrey', number: '255752848541', status: '✔ Sent', sentTime: '2024-09-07T13:02:57.000000Z', deliveryTime: '', reply: 'Habari Paulo Transporter, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (Pretty Confimation) (Umechangia 0/= Bado: 200,000/=)  ' },
      { id: 3, name: 'Mr&Mrs Gozibert', number: '255682392032', status: '✅ Delivered', sentTime: '2024-08-28T16:57:36.000000Z', deliveryTime: '', reply: 'Habari Paulo Transporter, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (Pretty Confimation) (Umechangia 0/= Bado: 200,000/=)  ' },
      { id: 4, name: 'KAGE/FRAZIA', number: '255767516150', status: '✔ Sent', sentTime: '2024-08-27T18:32:24.000000Z', deliveryTime: '', reply: 'Habari Paulo Transporter, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (Pretty Confimation) (Umechangia 0/= Bado: 200,000/=)  ' },
      { id: 5, name: 'Jackline P Mwibule', number: '255763600949', status: '✅ Delivered', sentTime: '2024-09-14T11:34:39.000000Z', deliveryTime: '2024-09-14 11:34:42', reply: 'Habari Paulo Transporter, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (Pretty Confimation) (Umechangia 0/= Bado: 200,000/=)  ' },
      { id: 6, name: 'Frank', number: '255655320361', status: '✅ Delivered', sentTime: '2024-09-14T05:36:01.000000Z', deliveryTime: '2024-09-14 05:56:59', reply: 'Habari Paulo Transporter, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (Pretty Confimation) (Umechangia 0/= Bado: 200,000/=)  ' },
      { id: 7, name: 'John Doe', number: '255655320362', status: '✅✅ Read', sentTime: '2024-09-14T05:36:01.000000Z', deliveryTime: '2024-09-14 05:56:59', reply: 'Habari Paulo Transporter, kwa upendo mkubwa tunakukumbusha kumailza/kupunguza ahadi yako (Pretty Confimation) (Umechangia 0/= Bado: 200,000/=)  ' },
    ];

    const columns = [
      { name: 'SN', selector: (row) => row.id, sortable: true, width: '40px' },
      { name: 'Recipient Name', selector: (row) => row.name, sortable: true, width: '150px' },
      { name: 'Recipient Number', selector: (row) => row.number, sortable: true, width: '130px' },
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
            backgroundColor: row.status.includes('Read') ? '#e0f2e9' : row.status.includes('Delivered') ? '#e8edfb' : '#ffebee',
            color: row.status.includes('Read') ? '#2e7d32' : row.status.includes('Delivered') ? '#0066ee' : '#d32f2f'
          }}>
            {row.status}
          </span>
        )
      },
      { name: 'Sent Time', selector: (row) => row.sentTime, sortable: true, width: '150px' },
      { name: 'Delivery Time', selector: (row) => row.deliveryTime, sortable: true, width: '150px' },
      {
        name: 'Reply',
        selector: (row) => row.reply,
        sortable: true,
        width: '450px',
        wrap: true,
        cell: (row) => (
          <div style={{
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            lineHeight: '1.2em',
            height: '4.8em',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {row.reply}
          </div>
        )
      }
    ];

    const filteredData = whatsappData.filter(whatsapp =>
      whatsapp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      whatsapp.number.includes(searchTerm)
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
          <h2 className="text-center" style={{ color: '#24366b' }}>Whatsapp Cards Status</h2>
        
          <Typography variant="body2" color="textSecondary" gutterBottom>
    Monitor message statuses in real-time, track delivery confirmations, and manage guest interactions effortlessly. Get comprehensive insights into message engagement, response rates, and guest participation - all in one centralized dashboard.

       </Typography>

        
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
        </CardContent>
      </Card>
    );
  };

  export default WhatsappCard;