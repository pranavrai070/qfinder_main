"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  IconButton,
  Typography,
  Grid,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Link from "next/link";

const MainGrid = () => {
  const data = [
    { id: 1, logo: "India", phoneNumber: "+1234567890", country: "India" },
    { id: 2, logo: "Brazil", phoneNumber: "+9876543210", country: "Brazil" },
    { id: 3, logo: "Poland", phoneNumber: "+1112223333", country: "Poland" },
    { id: 4, logo: "Canada", phoneNumber: "+4445556666", country: "Canada" },
    { id: 5, logo: "USA", phoneNumber: "+7778889999", country: "USA" },
    { id: 6, logo: "Russia", phoneNumber: "+3334445555", country: "Russia" },
    { id: 7, logo: "USA", phoneNumber: "+6667778888", country: "USA" },
    { id: 8, logo: "Canada", phoneNumber: "+2223334444", country: "Canada" },
    { id: 9, logo: "Mexico", phoneNumber: "+5556667777", country: "Mexico" },
    {
      id: 10,
      logo: "Netherlands",
      phoneNumber: "+9990001111",
      country: "Netherlands",
    },
    {
      id: 11,
      logo: "Australia",
      phoneNumber: "+1231231234",
      country: "Australia",
    },
    { id: 12, logo: "Canada", phoneNumber: "+4564564567", country: "Canada" },
    {
      id: 13,
      logo: "Australia",
      phoneNumber: "+7897897890",
      country: "Australia",
    },
    { id: 14, logo: "Mexico", phoneNumber: "+9876543210", country: "Mexico" },
    { id: 15, logo: "Italy", phoneNumber: "+1010101010", country: "Italy" },
    { id: 16, logo: "Canada", phoneNumber: "+134567010", country: "Canada" },
  ];

  const [copiedCardId, setCopiedCardId] = useState(null);

  const handleCopyToClipboard = (text, cardId) => {
    // Implement copy to clipboard logic here
    // You can use document.execCommand('copy') or a third-party library for this
    // console.log(`Copying: ${text}`);
    try {
      // Create a textarea element to hold the text
      const textarea = document.createElement("textarea");
      textarea.value = text;

      // Append the textarea to the DOM
      document.body.appendChild(textarea);

      // Select and copy the text from the textarea
      textarea.select();
      document.execCommand("copy");

      // Set state to show "Copied" text for the specific card
      setCopiedCardId(cardId);

      // Reset the state after 2 seconds
      setTimeout(() => {
        setCopiedCardId(null);
      }, 2000);

      // Remove the textarea from the DOM
      document.body.removeChild(textarea);

      console.log(`Copying: ${text} to clipboard`);
    } catch (error) {
      console.error("Unable to copy to clipboard:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Free Numbers:</h2>
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
                <div className="flex items-center">
                  {copiedCardId === item.id ? (
                    <CheckIcon/>
                  ) : (
                    <Tooltip title="Copy">
                      <IconButton
                        onClick={() =>
                          handleCopyToClipboard(item.phoneNumber, item.id)
                        }
                      >
                        <FileCopyIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  <Link href={`/temporary-numbers/${item.country}/${item.phoneNumber.replace(/\D/g, '')}`}>
                  <Button variant="outlined" className="ml-2">
                    Select
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

export default MainGrid;
