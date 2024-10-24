
import React from 'react';
import { Typography, Box } from '@mui/material';

const SMSHistory = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        SMS History
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        View and manage the history of all SMS messages sent through the system. This page displays message details including sender, recipient, content, status, and timestamp.
      </Typography>
    </Box>
  );
};

export default SMSHistory;
