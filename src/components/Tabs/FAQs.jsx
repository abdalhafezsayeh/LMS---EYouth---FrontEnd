import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQAccordion() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ mb: 1, boxShadow: 1 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="subtitle1" fontWeight="bold">
            What Does Royalty Free Mean?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
            donec turpis egestas volutpat. Quisque nec non amet quis. Varius
            tellus justo odio parturient mauris curabitur lorem in.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ mb: 1, boxShadow: 1 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="subtitle1" fontWeight="bold">
            What Does Royalty Free Mean?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
            donec turpis egestas volutpat. Quisque nec non amet quis. Varius
            tellus justo odio parturient mauris curabitur lorem in.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ mb: 1, boxShadow: 1 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="subtitle1" fontWeight="bold">
            What Does Royalty Free Mean?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
            donec turpis egestas volutpat. Quisque nec non amet quis. Varius
            tellus justo odio parturient mauris curabitur lorem in.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
