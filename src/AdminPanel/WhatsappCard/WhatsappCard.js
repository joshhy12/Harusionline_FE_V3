  import React from 'react';
  import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

  const WhatsappCard = () => {
    const whatsappData = [
      { id: 1, name: 'Mr&Mrs Hance Humphrey', number: '255752848541', status: '✔ Sent', sentTime: '2024-09-07T13:03:02.000000Z', deliveryTime: '', readTime: '', reply: 'Welcome BROADWAYS GROUP > Civil & Electrical Contractors > Transport & Logistics > Security Guard services' },
      { id: 2, name: 'Mr&Mrs Hance Humphrey', number: '255752848541', status: '✔ Sent', sentTime: '2024-09-07T13:02:57.000000Z', deliveryTime: '', readTime: '', reply: '' },
      { id: 3, name: 'Mr&Mrs Gozibert', number: '255682392032', status: '✔ Sent', sentTime: '2024-08-28T16:57:36.000000Z', deliveryTime: '', readTime: '', reply: '' },
      { id: 4, name: 'KAGE/FRAZIA', number: '255767516150', status: '✔ Sent', sentTime: '2024-08-27T18:32:24.000000Z', deliveryTime: '', readTime: '', reply: '' },
      { id: 5, name: 'Jackline P Mwibule', number: '255763600949', status: '✅ Delivered', sentTime: '2024-09-14T11:34:39.000000Z', deliveryTime: '2024-09-14 11:34:42', readTime: '', reply: '' },
      { id: 6, name: 'Frank', number: '255655320361', status: '✅ Delivered', sentTime: '2024-09-14T05:36:01.000000Z', deliveryTime: '2024-09-14 05:56:59', readTime: '', reply: '' },
    ];

    return (
      <Card>
        <CardContent>
          <h2 className="text-center" style={{ color: '#24366b' }}>Whatsapp Cards Status</h2>
        
          <Typography variant="body2" color="textSecondary" gutterBottom>
          Unlock powerful messaging capabilities by linking your WhatsApp Business account. Track message delivery, engage with guests directly, and streamline your wedding communications through our integrated platform. View detailed analytics on message performance and guest responses          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SN</TableCell>
                  <TableCell>Recipient Name</TableCell>
                  <TableCell>Recipient Number</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Sent Time</TableCell>
                  <TableCell>Delivery Time</TableCell>
                  <TableCell>Read Time</TableCell>
                  <TableCell>Reply</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {whatsappData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.number}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.sentTime}</TableCell>
                    <TableCell>{row.deliveryTime}</TableCell>
                    <TableCell>{row.readTime}</TableCell>
                    <TableCell>{row.reply}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    );
  };

  export default WhatsappCard;