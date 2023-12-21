import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(received,sender, message) {
    return { received, sender, message};
  }
  

  const rows = [
    createData('1 minute ago', '*******1234', '[Fambase] 9876 is your verification code, valid for 5 minutes. To keep your account safe, never forward this code. i tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas a'),
    createData('5 minute ago', '*******5678', '[Insta] 5432 is your verification code, valid for 5 minutes. To keep your account safe, never forward this code.'),
    createData('9 minute ago', '*******9012', '[Facebook] 7890 is your verification code, valid for 5 minutes. To keep your account safe, never forward this code.'),
    createData('13 minute ago', '*******3456', '[LinkedIn] 1234 is your verification code, valid for 5 minutes. To maintain the security of your account, please do not share this code.'),
    createData('15 minute ago', '*******7890', '[Google] 5678 is your verification code, valid for 5 minutes. Your account security is important, avoid sharing this code.'),
    createData('15 minute ago', '*******2345', '[Microsoft] 9012 is your verification code, valid for 5 minutes. For your account\'s safety, please avoid sharing this code.'),
    createData('16 minute ago', '*******6789', '[Amazon] 3456 is your verification code, valid for 5 minutes. Please refrain from sharing this code for security reasons.'),
    createData('18 minute ago', '*******0123', '[Uber] 9012 is your verification code, valid for 5 minutes. Keep your account secure, avoid sharing this code with anyone.'),
    createData('19 minute ago', '*******4567', '[Netflix] 3456 is your verification code, valid for 5 minutes. To protect your account, do not share this code with others.'),
    createData('21 minute ago', '*******8901', '[Spotify] 9012 is your verification code, valid for 5 minutes. Keep your account safe, avoid sharing this code.'),
    createData('22 minute ago', '*******2345', '[Airbnb] 5678 is your verification code, valid for 5 minutes. Please do not share this code for security reasons.'),
    createData('25 minute ago', '*******6789', '[WhatsApp] 9012 is your verification code, valid for 5 minutes. Keep your account secure, avoid sharing this code.'),
    createData('26 minute ago', '*******0123', '[Snapchat] 2345 is your verification code, valid for 5 minutes. For security, please avoid sharing this code.'),
    createData('29 minute ago', '*******4567', '[Etsy] 6789 is your verification code, valid for 5 minutes. Keep your account secure, avoid sharing this code with anyone.'),
    createData('31 minute ago', '*******8901', '[Twitch] 0123 is your verification code, valid for 5 minutes. To protect your account, do not share this code with others.'),
    createData('32 minute ago', '*******2345', '[Yahoo] 4567 is your verification code, valid for 5 minutes. Keep your account safe, avoid sharing this code.'),
    createData('33 minute ago', '*******6789', '[Pinterest] 8901 is your verification code, valid for 5 minutes. Please refrain from sharing this code for security reasons.'),
    createData('35 minute ago', '*******0123', '[Cloud9] 2345 is your verification code, valid for 5 minutes. To maintain the security of your account, please do not share this code.'),
    createData('36 minute ago', '*******4567', '[Zoom] 6789 is your verification code, valid for 5 minutes. For your account\'s safety, please avoid sharing this code.'),
    createData('39 minute ago', '*******8901', '[Reddit] 0123 is your verification code, valid for 5 minutes. Keep your account secure, avoid sharing this code with anyone.'),
    createData('42 minute ago', '*******2345', '[Apple] 6789 is your verification code, valid for 5 minutes. To protect your account, do not share this code with others.'),
    createData('44 minute ago', '*******6789', '[Instagram] 0123 is your verification code, valid for 5 minutes. Please do not share this code for security reasons.'),
    createData('46 minute ago', '*******0123', '[Lyft] 2345 is your verification code, valid for 5 minutes. Keep your account safe, avoid sharing this code.'),
    createData('49 minute ago', '*******4567', '[Fitbit] 6789 is your verification code, valid for 5 minutes. To maintain the security of your account, please do not share this code.'),
    createData('51 minute ago', '*******6789', '[Walmart] 0123 is your verification code, valid for 5 minutes. For your account\'s safety, please avoid sharing this code.'),
    createData('52 minute ago', '*******0123', '[Snapchat] 6789 is your verification code, valid for 5 minutes. Keep your account secure, avoid sharing this code with anyone.'),
    createData('53 minute ago', '*******4567', '[WhatsApp] 8901 is your verification code, valid for 5 minutes.'),
  ];
  

  

const MessageTable=()=>{
    return(
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Received</StyledTableCell>
              <StyledTableCell align="center">Sender</StyledTableCell>
              <StyledTableCell align="center"> Message</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.received}
                </StyledTableCell>
                <StyledTableCell align="left">{row.sender}</StyledTableCell>
                <StyledTableCell align="left">{row.message}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
};

export default MessageTable;