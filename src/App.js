import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { useRoutes } from "react-router-dom";
// import { Link } from "react-router-dom";
import router from "./router";
import Header from "./Header/Header";
import AboutCompany from "./AboutCompany/AboutCompany";
import Companies from "./Companies/Companies";
import BenefitSection from "./Benefits/BenefitSection";

export default function App() {
  let routes = useRoutes(router);
  return (
    <>
      <Header />
      <AboutCompany />
      <Companies />
      <BenefitSection/ >
      {routes}
    </>
  );
}
