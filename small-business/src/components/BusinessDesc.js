import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";
import business from "../business.json";

const Business = (props) => {
  const id = useParams().id;
  const business = business.find((c) => c.id === Number(id));

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h2>{business.Name}</h2>
        {Object.keys(business).map((key, idx) => {
          return <Chip key={idx} label={`${key}: ${business[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default Business;