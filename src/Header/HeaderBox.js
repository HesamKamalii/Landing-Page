import React from "react";
import Box from "@mui/material/Box";
import "./HeaderBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// This exports the whole icon packs for Brand and Solid.
library.add(fab, fas);

export default function HeaderBox(props) {
  console.log(props.icon);

  return (
    <div >
      <Box 
        
        height={150}
        width={200}
        my={4}
        display="flex"
        alignItems="center"
        flexDirection = "column"
        justifyContent = "center"
        gap={4}
        p={2}
        sx={{ border: "2px solid grey" }}  
      >
        <FontAwesomeIcon icon={props.icon} style={{ color: "#FFD43B" }} />
        <h3> <a href="#" target="_blank" rel="noopener noreferrer">{props.text}</a> </h3>
      </Box>
    </div>
  );
}
