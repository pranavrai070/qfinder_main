"use client";
import React from "react";
import Image from "next/image";
import { Card, CardContent, Button, Typography, Grid } from "@mui/material";
import Link from "next/link";

const RentalNumbers = () => {
  const data = [
    { id: 1, logo: "India", phoneNumber: "+1234567890", carrier: "EE" ,country:"India"},
    { id: 2, logo: "Australia", phoneNumber: "+9876543210", carrier: "EE",country:"Australia" },
    { id: 3, logo: "Canada", phoneNumber: "+1112223333", carrier: "Vodafone",country:"Canada" },
    { id: 4, logo: "USA", phoneNumber: "+4445556666", carrier: "O2",country:"USA" },
    { id: 5, logo: "Brazil", phoneNumber: "+7778889999", carrier: "Three",country:"Brazil" },
    { id: 6, logo: "France", phoneNumber: "+87366287999", carrier: "Vodafone",country:"France" },
    { id: 7, logo: "Hungary", phoneNumber: "+7859889999", carrier: "EE",country:"Hungary" },
    { id: 8, logo: "Ireland", phoneNumber: "+6538889999", carrier: "O2",country:"Ireland" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Rental Numbers:</h2>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card>
              <CardContent className="flex flex-col items-center">
              <div className="w-8 h-8 mb-2 overflow-hidden">
                  <Image
                    src={`/Flags/${item.logo}.png`}
                    alt="Logo"
                    width={36}
                    height={36}
                  />
                </div>
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
                <Link href={`/temporary-numbers/${item.country}/${item.phoneNumber.replace(/\D/g, '')}`}>
                <Button variant="contained" className="bg-teal-500 text-white">
                  Select
                </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RentalNumbers;
