import * as React from 'react';
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


const api = [
    {
        name:'Abhishek Tiwari',
        city:'Prayagraj',
        Mobile_no:'9866532075',
        graduation:"B-tech"
    },
    {
        name:'Abhishek Mishra',
        city:'Hyderabad',
        Mobile_no:'8388654488',
        graduation:"BCom"
    },
    {
        name:'Suraj Tiwari',
        city:'Chandigarh',
        Mobile_no:'8854092374',
        graduation:"BA"
    },
    {
        name:'Aryan Shukla',
        city:'Ambala Cant',
        Mobile_no:'7753092547',
        graduation:"M-tech"
    },
    {
        name:'Himanshu Tiwari',
        city:'Lucknow',
        Mobile_no:'8896474376',
        graduation:"BSc"
    },
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Your Name</StyledTableCell>
            <StyledTableCell align="center">Your City</StyledTableCell>
            <StyledTableCell align="center">Mobile Number&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="center">Graduation&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {api.map((data,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {data.name}
              </StyledTableCell>
              <StyledTableCell align="center">{data.city}</StyledTableCell>
              <StyledTableCell align="center">{data.Mobile_no}</StyledTableCell>
              <StyledTableCell align="center">{data.graduation}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
