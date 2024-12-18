import React from "react";
import {
  Box,
  Typography,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccordionCom from "./AccordionCom";


const SectionProgressList = ({ setIsVisibleSide}) => {

  const handleClose = () => {
    setIsVisibleSide(true); 
  };

  return (
    <Box sx={{borderLeft:"2px solid #DCE4C9"}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            backgroundColor: "white",
            padding: "10px",
            borderBottom:"1px solid #D8DBBD",
            position:"fixed",
            zIndex:1,
          }}
        >
          <Typography sx={{color:"#2d2f31", fontWeight:"bold"}}>
            Course Content
          </Typography>

          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ marginLeft:"200px"}}
            >
            <CloseIcon />
          </IconButton>
        </Box>    
        <AccordionCom />
    </Box>
  );
};

export default SectionProgressList;
