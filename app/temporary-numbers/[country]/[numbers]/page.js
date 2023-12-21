'use client'
import React,{useState} from "react";
import {
    Card,
    CardContent,
    Button,
    IconButton,
    Typography,
    Grid,
    Tooltip,
  } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MessageTable from "@/components/MessagesTable";

const Page=({params})=>{
    const [copied, setCopied] = useState(false);
    console.log(params);
    const {numbers,country}=params;


    const handleCopyToClipboard = (text) => {
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
          setCopied(true);
    
          // Reset the state after 2 seconds
          setTimeout(() => {
            setCopied(false);
          }, 2000);
    
          // Remove the textarea from the DOM
          document.body.removeChild(textarea);
    
          console.log(`Copying: ${text} to clipboard`);
        } catch (error) {
          console.error("Unable to copy to clipboard:", error);
        }
      };

   return (
        <div className="mx-2 md:mx-4 p-4 md:p-12">
        <h1 className="text-3xl font-bold mb-2">{country} Phone Number : {numbers}
        {copied ? (
                    <CheckIcon/>
                  ) : (
                    <Tooltip title="Copy">
                      <IconButton
                        onClick={() =>
                          handleCopyToClipboard(numbers)
                        }
                      >
                        <FileCopyIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  </h1>       
        <p className="text-gray-600 mb-2">This page will automatically update when a message is received. Do not copy/open links which you are unsure of.</p>

        <h1 className="text-2xl text-gray-600 font-bold mb-2">List of last 40 SMS messages received for this phone number:</h1>
        <MessageTable/>

        </div>
   )
};


export default Page;