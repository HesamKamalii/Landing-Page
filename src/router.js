import React from "react";
import Temp from "./Header/Navbar";
import Home from "./Header/Header";
import Landing from "./Landing";


let router = [
  { path: "/", element: <Landing /> },

  { path: "/temp", element: <Temp /> },
  
];

export default router;