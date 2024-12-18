import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { sections } from "../../utils/data";

function AccordionCom() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{paddingTop: isMobile ? "5px":"50px"}}> 
      {sections.map((section, sectionIndex) => (
        <Accordion
          key={sectionIndex}
          defaultExpanded
          elevation={0}
          sx={{
            "&:before": { display: "none" },
            boxShadow: "none",
            border: "none",
            backgroundColor: "transparent",
          }}
        >
          {/* Section Header */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${sectionIndex}-content`}
            id={`panel${sectionIndex}-header`}
            sx={{
              padding: 0,
              minHeight: "auto",
              "& .MuiAccordionSummary-content": {
                marginTop:2
              },
              background:"#EEE"
            }}
          >
            <Box sx={{ marginLeft: "10px" }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <FiberManualRecordIcon sx={{ mr: 1, color: "#999" }} />
                {section.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginLeft: "auto", paddingRight: "10px" }}
              >
                {section.progress}
              </Typography>
            </Box>
          </AccordionSummary>

          {/* Section Content */}
          <AccordionDetails sx={{ padding: 0, paddingX:"10px" }}>
            <List >
              {section.lessons.map((lesson, index) => (
                <ListItem
                  key={index}
                  sx={{
                    alignItems: "flex-start",
                    pb: index !== section.lessons.length - 1 ? 2 : 0,
                    position: "relative",
                  }}
                >
                  {/* Progress Line */}
                  {index !== section.lessons.length - 1 && (
                    <Box
                      sx={{
                        position: "absolute",
                        left: 27,
                        top: 30,
                        height: "calc(100% - 20px)",
                        width: "2px",
                        backgroundColor: "#DDD",
                      }}
                    />
                  )}

                  {/* Icon */}
                  <ListItemIcon sx={{ minWidth: "35px" }}>
                    {lesson.completed ? (
                      <CheckCircleOutlineIcon color="success" />
                    ) : (
                      <PlayCircleOutlineIcon color="action" />
                    )}
                  </ListItemIcon>

                  {/* Text */}
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        fontWeight={lesson.completed ? "bold" : "normal"}
                        sx={{
                          color: lesson.completed
                            ? "text.primary"
                            : "text.secondary",
                        }}
                        style={{ marginTop: "-8px" }}
                      >
                        {lesson.title}
                      </Typography>
                    }
                    secondary={
                      <Typography variant="body2" color="textSecondary">
                        {lesson.duration}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default AccordionCom;
