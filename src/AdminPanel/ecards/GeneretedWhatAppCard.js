import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button, Modal } from '@mui/material';
import image1 from '../images/1.jpg';

const GeneratedWhatsAppCard = () => {
  const [history, setHistory] = useState([]);
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('cardHistory')) || [];
    setHistory(storedHistory);
  }, []);

  const handleSendCards = (cards) => {
    const newHistory = [...history, { id: Date.now(), cards }];
    setHistory(newHistory);
    localStorage.setItem('cardHistory', JSON.stringify(newHistory));
  };

  const handleViewDetails = (bundle) => {
    setSelectedBundle(bundle);
    setShowModal(true);
  };

  const handleResendCards = (cards) => {
    // Implement resend logic here
    console.log('Resending cards:', cards);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBundle(null);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <h2 className="text-center" style={{ color: '#24366b' }}>Generated WhatsApp Cards</h2>
      <Grid container spacing={3}>
        {history.map((bundle) => (
          <Grid item xs={12} sm={6} md={3} key={bundle.id}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={image1}
                alt={`Bundle ${bundle.id}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bundle {bundle.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {bundle.cards.length} cards
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined" fullWidth onClick={() => handleViewDetails(bundle)}>
                  View Details
                </Button>
                <Button size="small" variant="outlined" fullWidth onClick={() => handleResendCards(bundle.cards)}>
                  Resend All
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal open={showModal} onClose={handleCloseModal}>
        <Box sx={{ p: 4, backgroundColor: 'white', margin: 'auto', maxWidth: '80%' }}>
          <Typography variant="h6" gutterBottom>
            Bundle Details
          </Typography>
          {selectedBundle && selectedBundle.cards.map((card, index) => (
            <Card key={index} sx={{ mb: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={image1}
                alt={`Card ${index + 1}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card {index + 1}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined" fullWidth onClick={() => handleResendCards([card])}>
                  Resend
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Modal>
    </Box>
  );
};

export default GeneratedWhatsAppCard;