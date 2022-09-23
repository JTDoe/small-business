import React from "react";
import { useParams } from "react-router";

const ListingDetails = (props) => {
  let id = useParams();
  const listings = props.listings.find((b) => b.id === id.id);

  return (
    <div className="business-container">
      <div className="listing">
        <h1>{listings.Name}</h1>
        <h3>{listings.Description}</h3>
        <h4>{listings.Hours}</h4>
        <h3>{listings.Address}</h3>
      </div>
    </div>
  );
};

export default ListingDetails;
