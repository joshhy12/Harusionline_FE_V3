import React from 'react';
import { Table, Button } from 'react-bootstrap';

const UserTable = ({ users, editUser , deleteUser  }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Button variant="info" onClick={() => editUser (user)} className="me-2">Edit</Button>
              <Button variant="danger" onClick={() => deleteUser (user.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;