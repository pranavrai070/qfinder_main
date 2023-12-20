'use client'
import React from 'react';
import { Card, CardContent, Button, IconButton, Typography, Grid } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const MainGrid = () => {
  const data = [
    { id: 1, logo: 'Logo1', phoneNumber: '+1234567890', country: 'India' },
    { id: 2, logo: 'Logo2', phoneNumber: '+9876543210', country: 'Brazil' },
    { id: 3, logo: 'Logo3', phoneNumber: '+1112223333', country: 'USA' },
    { id: 4, logo: 'Logo4', phoneNumber: '+4445556666', country: 'Canada' },
    { id: 5, logo: 'Logo5', phoneNumber: '+7778889999', country: 'Australia' },
    { id: 6, logo: 'Logo6', phoneNumber: '+3334445555', country: 'Brazil' },
    { id: 7, logo: 'Logo7', phoneNumber: '+6667778888', country: 'USA' },
    { id: 8, logo: 'Logo8', phoneNumber: '+2223334444', country: 'Canada' },
    { id: 9, logo: 'Logo9', phoneNumber: '+5556667777', country: 'Australia' },
    { id: 10, logo: 'Logo10', phoneNumber: '+9990001111', country: 'Brazil' },
    { id: 11, logo: 'Logo11', phoneNumber: '+1231231234', country: 'USA' },
    { id: 12, logo: 'Logo12', phoneNumber: '+4564564567', country: 'Canada' },
    { id: 13, logo: 'Logo13', phoneNumber: '+7897897890', country: 'Australia' },
    { id: 14, logo: 'Logo14', phoneNumber: '+9876543210', country: 'Brazil' },
    { id: 15, logo: 'Logo15', phoneNumber: '+1010101010', country: 'USA' },
  ];
  
      
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Free Numbers:</h2>
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card>
              <CardContent className="flex flex-col items-center">
                <img src={item.logo} alt="Logo" className="h-16 w-16 mb-2" />
                <Typography variant="h6" className="mb-2">
                  {item.phoneNumber}
                </Typography>
                <div className="flex items-center">
                  <IconButton onClick={() => handleCopyToClipboard(item.phoneNumber)}>
                    <FileCopyIcon />
                  </IconButton>
                  <Button variant="outlined" className="ml-2">
                    Select
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const handleCopyToClipboard = (text) => {
  // Implement copy to clipboard logic here
  // You can use document.execCommand('copy') or a third-party library for this
  console.log(`Copying: ${text}`);
};

export default MainGrid;
