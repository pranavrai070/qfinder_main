import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, Button, Typography, Grid } from "@mui/material";

const Page=({params})=>{
   const countryName=params.country;
   const data = [
    {
      id: 1,
      logo: "India",
      phoneNumber: "+1234567890",
      carrier: "N/A",
      country: "India",
      free: true,
    },
    {
      id: 2,
      logo: "Brazil",
      phoneNumber: "+9876543210",
      carrier: "N/A",
      country: "Brazil",
      free: true,
    },
    {
      id: 3,
      logo: "Poland",
      phoneNumber: "+1112223333",
      carrier: "N/A",
      country: "Poland",
      free: true,
    },
    {
      id: 4,
      logo: "Canada",
      phoneNumber: "+4445556666",
      carrier: "N/A",
      country: "Canada",
      free: true,
    },
    {
      id: 5,
      logo: "USA",
      phoneNumber: "+7778889999",
      carrier: "N/A",
      country: "USA",
      free: true,
    },
    {
      id: 6,
      logo: "Russia",
      phoneNumber: "+3334445555",
      carrier: "N/A",
      country: "Russia",
      free: true,
    },
    {
      id: 7,
      logo: "USA",
      phoneNumber: "+6667778888",
      carrier: "N/A",
      country: "USA",
      free: true,
    },
    {
      id: 8,
      logo: "Canada",
      phoneNumber: "+2223334444",
      carrier: "N/A",
      country: "Canada",
      free: true,
    },
    {
      id: 9,
      logo: "Mexico",
      phoneNumber: "+5556667777",
      carrier: "N/A",
      country: "Mexico",
      free: true,
    },
    {
      id: 10,
      logo: "Netherlands",
      phoneNumber: "+9990001111",
      carrier: "N/A",
      country: "Netherlands",
      free: true,
    },
    {
      id: 11,
      logo: "Australia",
      phoneNumber: "+1231231234",
      carrier: "N/A",
      country: "Australia",
      free: true,
    },
    {
      id: 12,
      logo: "Canada",
      phoneNumber: "+4564564567",
      carrier: "N/A",
      country: "Canada",
      free: true,
    },
    {
      id: 13,
      logo: "Australia",
      phoneNumber: "+7897897890",
      carrier: "N/A",
      country: "Australia",
      free: true,
    },
    {
      id: 14,
      logo: "Mexico",
      phoneNumber: "+9876543210",
      carrier: "N/A",
      country: "Mexico",
      free: true,
    },
    {
      id: 15,
      logo: "Italy",
      phoneNumber: "+1010101010",
      carrier: "N/A",
      country: "Italy",
      free: true,
    },
    {
      id: 16,
      logo: "Canada",
      phoneNumber: "+134567010",
      carrier: "N/A",
      country: "Canada",
      free: true,
    },
    {
      id: 17,
      logo: "India",
      phoneNumber: "+1234567890",
      carrier: "EE",
      country: "India",
      free: false,
    },
    {
      id: 18,
      logo: "Australia",
      phoneNumber: "+9876543210",
      carrier: "EE",
      country: "Australia",
      free: false,
    },
    {
      id: 19,
      logo: "Canada",
      phoneNumber: "+1112223333",
      carrier: "Vodafone",
      country: "Canada",
      free: false,
    },
    {
      id: 20,
      logo: "USA",
      phoneNumber: "+4445556666",
      carrier: "O2",
      country: "USA",
      free: false,
    },
    {
      id: 21,
      logo: "Brazil",
      phoneNumber: "+7778889999",
      carrier: "Three",
      country: "Brazil",
      free: false,
    },
    {
      id: 22,
      logo: "France",
      phoneNumber: "+87366287999",
      carrier: "Vodafone",
      country: "France",
      free: false,
    },
    {
      id: 23,
      logo: "Hungary",
      phoneNumber: "+7859889999",
      carrier: "EE",
      country: "Hungary",
      free: false,
    },
    {
      id: 24,
      logo: "Ireland",
      phoneNumber: "+6538889999",
      carrier: "O2",
      country: "Ireland",
      free: false,
    },
  ];

    const activeNumbers=data.reduce((acc,val)=>{
        if(val.country===countryName) acc++;
        return acc;
    },0);

    const filterData=data.filter((item)=>{
      if(item.country===countryName)
      return item;
    });



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
                <Link href={`/temporary-numbers/${countryName}/${item.phoneNumber.replace(/\D/g, '')}`}>
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
      </div>
   )
};

export default Page;