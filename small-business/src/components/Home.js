import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


function createData(
  name: string,
  description: string,
  hours: string,
  address: number,
 
) {
  return { name, description, hours, address };
}

const rows = [
  createData("Wister's Bar and grill", "American food", "5PM-10PM", "950 Pine Market Ave Suite 400, Montgomery, TX 77316"),
  createData("Crust Pizza Co.", "Pizza & Pasta", "5PM-10PM", " 2300 Woodforest Pkwy N Suite 100, Montgomery, TX 77316"),
  createData("Citizens Grill", "American Food", "5PM-10PM", "315 Enclave Dr Suite 300, Conroe, TX 77384"),
  createData("Tapped", "Bar & Grill", "5PM-12PM", "525 Woodland Square Blvd Suite 100, Conroe, TX 77384"),
  createData("Wasabi Bistro", "Asian restaurant", "5PM-10PM", "791 Fish Creek Thoroughfare STE 80, Montgomery, TX 77316"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Hours</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.hours}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
