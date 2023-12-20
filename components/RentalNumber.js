"use client";
import React from "react";
import { Card, CardContent, Button, Typography, Grid } from "@mui/material";

const RentalNumbers = () => {
  const data = [
    { id: 1, logo: "Logo1", phoneNumber: "+1234567890", carrier: "EE" ,country:"India"},
    { id: 2, logo: "Logo2", phoneNumber: "+9876543210", carrier: "EE",country:"Australia" },
    { id: 3, logo: "Logo3", phoneNumber: "+1112223333", carrier: "Vodafone",country:"Canada" },
    { id: 4, logo: "Logo4", phoneNumber: "+4445556666", carrier: "O2",country:"USA" },
    { id: 5, logo: "Logo5", phoneNumber: "+7778889999", carrier: "Three",country:"Brazil" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Rental Numbers:</h2>
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card>
              <CardContent className="flex flex-col items-center">
                <img src={item.logo} alt="Logo" className="h-16 w-16 mb-2" />
                <Typography variant="h6" className="mb-2">
                  {item.phoneNumber}
                </Typography>
                <div className="flex items-center mb-2">
                  <div className="bg-green-500 text-white rounded-md px-2 py-1 mb-2 text-xs">
                    Online
                  </div>
                </div>
                <Typography variant="subtitle2" className="text-gray-600 mb-2">
                  Carrier: {item.carrier}
                </Typography>
                <Button variant="contained" className="bg-teal-500 text-white">
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RentalNumbers;
