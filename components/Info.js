'use client'
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Info = () => {
  const HelpQuestions = [
    {
      id: 1,
      ques: "What is a temporary phone number?",
      ans: "A temporary (or disposable) phone number is one which you do not own but can use it to receive SMS/text messages. Some providers will let you send messages but this usually incurs a cost.",
    },
    {
      id: 2,
      ques: "Why use a temporary/disposable phone number?",
      ans: "They protect your identity, it means you do not have to provide your real phone number when signing up to apps or services. They also prevent SMS spam.",
    },
    //more dat
  ];

  const FlexData = [
    { id: 1, heading: 'ACTIVE NUMBERS', number: '17593462' },
    { id: 2, heading: 'MESSAGES RECEIVED', number: '748' },
    { id: 3, heading: 'DATA LOGGED', number: '0' },
    { id: 4, heading: 'PRIVATE NUMBERS AVAILABLE', number: '∞' },
  ];


  return (
    <>
      <div>
        <ul className="list-disc pl-6">
          <li className="flex items-center text-gray-600 mb-2">
            <CheckIcon className="mr-2" /> Bypass SMS & OTP (One Time Passcode)
            verification using one of our disposable and anonymous numbers.
          </li>
          <li className="flex items-center text-gray-600 mb-2">
            <CheckIcon className="mr-2" /> Stop SMS spam by never having to
            reveal your real number.
          </li>
          <li className="flex items-center text-gray-600 mb-2">
            <CheckIcon className="mr-2" /> Protect yourself from fraudulent
            websites that ask for your phone number.
          </li>
          <li className="flex items-center text-gray-600 mb-2">
            <CheckIcon className="mr-2" /> Nothing is logged, and all messages
            are automatically deleted after 24 hours.
          </li>
          <li className="flex items-center text-gray-600 mb-2">
            <CheckIcon className="mr-2" /> Receive an unlimited amount of free
            SMS messages online in an instant.
          </li>
        </ul>
      </div>

      <Grid container spacing={3} justifyContent="center" className="p-4">
      {FlexData.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <Card className="border rounded-md shadow-md">
            <CardContent className="flex flex-col items-center p-4">
              <Typography variant="h8" component="div" className="mb-2">
                {item.heading}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                className={`font-semibold ${item.heading === 'PRIVATE NUMBERS AVAILABLE' ? 'text-4xl' : ''}`}
              >
                {item.number}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Need Some Help?</h2>
      {HelpQuestions.map((item) => (
        <div key={item.id} className="mb-4">
          <h3 className="text-lg font-bold mb-0">{item.ques}</h3>
          <p className="text-gray-600">{item.ans}</p>
        </div>
      ))}
    </div>

    <div className="p-4 text-left">
      <h1 className="text-3xl font-bold mb-4">Let us know what you think</h1>
      <p className="text-gray-600 mb-4">
        Comments? Suggestions? Improvements?{' '}
        <a href="https://www.google.com" className="text-blue-500" target="_blank" rel="noopener noreferrer">
          Contact us
        </a>
      </p>
    </div>
    </>
  );
};

export default Info;
