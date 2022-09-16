import React from "react";
import { Router, Route } from "react-router-dom";
import cookie from "cookie";
import Login from "./components/Login";
import Add from "./containers/AddListing";
import Listings from "./containers/Listings";
import ListingDetails from "./containers/ListingDetails";

export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component } = props;
};

const routes = () => {
  return (
    <Router>
      <Route exact path="/" element={<Listings />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/AddListing" element={<ProtectedRoute component={Add} />} />
      <Route path="/Listings/:id" element={<ListingDetails />} />
    </Router>
  );
};

export default routes;
