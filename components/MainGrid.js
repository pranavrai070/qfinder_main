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
                    <CheckIcon />
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
                  <Link
                    href={`/temporary-numbers/${
                      item.country
                    }/${item.phoneNumber.replace(/\D/g, "")}`}
                  >
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
