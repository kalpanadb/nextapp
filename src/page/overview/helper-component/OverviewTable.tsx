import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableContainerStyled } from './OverView.styled';


const data = [
  // No data initially
];

export default function OverViewTable() {
  return (
    <TableContainerStyled>
      <h1>OverView</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='right'>Name</TableCell>
              <TableCell align="right">Industry</TableCell>
              <TableCell align="right">CompanyName</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Number</TableCell>
              <TableCell align="right">Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <h2>No Data</h2>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow >
                <TableCell align='right'></TableCell>
                <TableCell align='right'></TableCell>
                <TableCell align='right'></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </TableContainerStyled>
  );
}
