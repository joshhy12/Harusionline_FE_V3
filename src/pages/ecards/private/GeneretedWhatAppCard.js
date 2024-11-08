  import React from 'react';
  import { Typography, Box, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
  import image1 from '../images/1.jpg';


  const GeneratedWhatsAppCard = () => {
    const cards = [1, 2, 3, 4]; // Placeholder for demo cards

    return (
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <h2 className="text-center" style={{ color: '#24366b' }}>Genereted WhatAppCard Ecards  </h2>
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={image1}
                  alt={`Card ${card}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Card Location
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="outlined" fullWidth>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };

  export default GeneratedWhatsAppCard;