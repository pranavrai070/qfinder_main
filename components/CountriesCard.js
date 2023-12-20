"use client";
import React from "react";
import {
  Card,
  CardContent,
  Button,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const CountriesCard = () => {
  const countries = [
    "Australia",
    "Austria",
    "Belgium",
    "Brazil",
    "Canada",
    "Denmark",
    "Finland",
    "France",
    "Hungary",
    "India",
    "Indonesia",
    "Ireland",
    "Israel",
    "Italy",
    "Kenya",
    "Latvia",
    "Mexico",
    "Morocco",
    "Netherlands",
    "Norway",
    "Pakistan",
    "Poland",
    "Russia",
    "South Africa",
    "Spain",
    "Sweden",
    "Switzerland",
    "UK",
    "Ukraine",
    "USA",
  ];

  return (
    <div className="mb-4">
      <Grid container spacing={2}>
        {countries.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card>
              <CardContent className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 mb-0 overflow-hidden mr-2">
                    <Image
                      src={`/Flags/${item}.png`}
                      alt="Logo"
                      width={36}
                      height={36}
                    />
                  </div>
                  <Typography variant="h6" className="mb-2">
                    {item}
                  </Typography>
                </div>
                <div className="flex items-center">
                  <Link href={`/temporary-numbers/${item}`}>
                    <Button variant="outlined" className="ml-2">
                      Open
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CountriesCard;
