import React from 'react';
import { Form } from 'react-bootstrap';

const UserForm = ({ currentUser , saveUser  }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="text" 
          value={currentUser .name} 
          onChange={(e) => saveUser ({ ...currentUser , name: e.target.value })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          value={currentUser .email} 
          onChange={(e) => saveUser ({ ...currentUser , email: e.target.value })}
        />
      </Form.Group>
    </Form>
  );
};

export default UserForm;