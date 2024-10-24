
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WhatsappCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Whatsapp Integration
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Connect and manage your WhatsApp business account to enable messaging features and customer communication.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WhatsappCard;
