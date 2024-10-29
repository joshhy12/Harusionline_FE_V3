  import React from 'react';
  import { Table } from 'react-bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';

  const SMSHistory = () => {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">SMS History</h2>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Muda</th>
              <th>Taarifa</th>
              <th>Recipient Name</th>
              <th>Phone Number</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>14/09/2024 11:34:38 AM</td>
              <td>Jackline P Mwibule</td>
              <td>255763600949</td>
              <td>Karibu Jackline P Mwibule kwenye SHUGHULI (Fortunatus&Dorah). Namba ya Kadi: 23D (SINGLE)...</td>
              <td>Success</td>
            </tr>
            <tr>
              <td>9:30:16 AM</td>
              <td>BUSHIRI KINYOWA</td>
              <td>255718418090</td>
              <td>Karibu BUSHIRI KINYOWA, kwenye Harusi ya Fortunatus&Dorah Namba ya kadi 53A (SINGLE)...</td>
              <td>Failed</td>
            </tr>
            <tr>
              <td>6:37:44 AM</td>
              <td>Ms Melisa Mugonzibwa</td>
              <td>255713302810</td>
              <td>Karibu Ms Melisa Mugonzibwa, kwenye Harusi ya Fortunatus&Dorah Namba ya kadi 75C (SINGLE)...</td>
              <td>Failed</td>
            </tr>
            <tr>
              <td>5:36:01 AM</td>
              <td>Frank</td>
              <td>255655320361</td>
              <td>Karibu Frank kwenye SHUGHULI (Fortunatus&Dorah). Namba ya Kadi: 20D (SINGLE)...</td>
              <td>Success</td>
            </tr>
            <tr>
              <td>5:36:00 AM</td>
              <td>Adella Kirenga</td>
              <td>255766504372</td>
              <td>Karibu Adella Kirenga kwenye SHUGHULI (Fortunatus&Dorah). Namba ya Kadi: 22D (DOUBLE)...</td>
              <td>Success</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  };

  export default SMSHistory;
