import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { checkAuth } from "../Router";

const Listings = (props) => {
  return (
    <Container maxWidth="lg" className="car-container">
      <h4>Logged in as {props.user.username}</h4>
      <div className="flex-container"></div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Business</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Operating Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((store, idx) => (
            <TableRow key={store.id}>
              <TableCell>
                {" "}
                <Link to={`/Listings/${store.id}`}>{store.business}</Link>
              </TableCell>

              <TableCell>{store["Description"]}</TableCell>
              <TableCell>{store["Address"]}</TableCell>
              <TableCell>{store["Hours"]}</TableCell>
              {checkAuth() ? (
                <TableCell>
                  <DeleteIcon
                    onClick={() => props.removeListing(idx)}
                    className="icon text-red"
                  />
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
