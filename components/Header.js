// Header.js
"use client";
import React, { useState } from "react";
import duckImg from "../assets/duck.png";
import IndiaImg from "../public/Flags/India.png";
import Link from "next/link";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Button,
  TextField,
  Alert,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  CircularProgress,
  Box,
} from "@mui/material";
// import countryLogos from "@/constants/CountryData";
import Image from "next/image";

const Header = () => {
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

  const countryLogos = countries.map((country) => ({
    name: country,
    logo: `/Flags/${country}.png`,
  }));

  console.log("getting country logo in header", typeof countryLogos);

  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    console.log("getitng event", event.target.value);
    if (event.target.value === "None") {
      setCountry("");
    }
    setCountry(event.target.value);
  };

  return (
    <header className="bg-white-600 pl-4 flex justify-between items-center shadow-md">
      <Link href="/" legacyBehavior>
        <div className="flex items-center hover:cursor-pointer">
          <Image
            src={duckImg}
            alt="logo"
            width={45}
            height={45}
            quality={100}
            className="hover:text-blue-500"
          />
          <span className="text-gray-600 font-bold ml-2 hover:text-blue-500">
            qfinder.io
          </span>
        </div>
      </Link>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex space-x-12">
          <Link href="/blog" legacyBehavior>
            <a className="text-gray-600 font-bold hover:text-blue-500">Blog</a>
          </Link>
          <a href="/temporary-numbers" className="text-gray-600 font-bold hover:text-blue-500">
            Free Temporary Numbers
          </a>
        </div>

        <div className="group relative mb-2">
          <Box sx={{ minWidth: 156 }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={country}
                onChange={handleChange}
                label="Country"
              >
                {countries.map((country) => (
                  <MenuItem value={country}>
                    <div className="w-5 h-5 mb-0 mr-2 overflow-hidden">
                      <Image
                        src={`/Flags/${country}.png`}
                        alt="Logo"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span>{country}</span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </header>
  );
};

export default Header;
