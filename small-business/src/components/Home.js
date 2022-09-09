import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import business from "../business.json";
import { TabUnselected } from "@mui/icons-material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import Link from "react-router-dom";

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
          {business.map((business, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {business.Name}
              </TableCell>
              <TableCell>
                {" "}
                <Link to={`/business/${business.id}`}></Link>
              </TableCell>
              <TableCell align="right">{business.Description}</TableCell>
              <TableCell align="right">{business.Hours}</TableCell>
              <TableCell align="right">{business.Address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
