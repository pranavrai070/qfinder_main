import React from "react";
import Image from "next/image";
import { Card, CardContent, Button, Typography, Grid } from "@mui/material";

const Page=({params})=>{
   const countryName=params.country;
   const data = [
      { id: 1, logo: 'India', phoneNumber: '+1234567890', country: 'India' },
      { id: 2, logo: 'Brazil', phoneNumber: '+9876543210', country: 'Brazil' },
      { id: 3, logo: 'Poland', phoneNumber: '+1112223333', country: 'Poland' },
      { id: 4, logo: 'Canada', phoneNumber: '+4445556666', country: 'Canada' },
      { id: 5, logo: 'USA', phoneNumber: '+7778889999', country: 'USA' },
      { id: 6, logo: 'Russia', phoneNumber: '+3334445555', country: 'Russia' },
      { id: 7, logo: 'USA', phoneNumber: '+6667778888', country: 'USA' },
      { id: 8, logo: 'Canada', phoneNumber: '+2223334444', country: 'Canada' },
      { id: 9, logo: 'Mexico', phoneNumber: '+5556667777', country: 'Mexico' },
      { id: 10, logo: 'Netherlands', phoneNumber: '+9990001111', country: 'Netherlands' },
      { id: 11, logo: 'Australia', phoneNumber: '+1231231234', country: 'Australia' },
      { id: 12, logo: 'Canada', phoneNumber: '+4564564567', country: 'Canada' },
      { id: 13, logo: 'Australia', phoneNumber: '+7897897890', country: 'Australia' },
      { id: 14, logo: 'Mexico', phoneNumber: '+9876543210', country: 'Mexico' },
      { id: 15, logo: 'Italy', phoneNumber: '+1010101010', country: 'Italy' },
      { id: 16, logo: 'Canada', phoneNumber: '+134567010', country: 'Canada' },
    ];

    const activeNumbers=data.reduce((acc,val)=>{
        if(val.country===countryName) acc++;
        return acc;
    },0);

    const filterData=data.filter((item)=>{
      if(item.country==countryName)
      return item;
    });

    console.log('consoling filter data in component',filterData);


   return (
      <div className="mx-4 p-12">
         <h1 className="text-3xl font-bold mb-4">{countryName} Temporary Phone Numbers</h1>
         <h1 className="text-2xl font-bold mb-2">{activeNumbers} Active Numbers</h1>
         <div className="container mx-auto p-4">
         <Grid container spacing={2}>
        {filterData.map((item) => (
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
                <Button variant="contained" className="bg-teal-500 text-white">
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      </div>
      </div>
   )
};

export default Page;