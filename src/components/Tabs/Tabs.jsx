import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NotesIcon from "@mui/icons-material/Notes";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import InfoIcon from "@mui/icons-material/Info";
import ReviewsIcon from "@mui/icons-material/Reviews";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import Overview from "./Overview";
import Notes from "./Notes";
import Announcements from "./Announcements";
import FAQAccordion from "./FAQs";
import Content from "./Content";
import Review from "./Review";

const tabs = [
  { label: "Overview", icon: <InfoIcon /> },
  { label: "Notes", icon: <NotesIcon /> },
  { label: "Announcements", icon: <AnnouncementIcon /> },
  { label: "FAQs", icon: <QuestionAnswerIcon /> },
  { label: "Review", icon: <ReviewsIcon /> },
  { label: "Content", icon: <FolderCopyIcon /> },
];

const TabsContent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_, newValue) => {
    setTabIndex(newValue);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const filteredTabs = !isMobile
    ? tabs.filter((tab) => tab.label !== "Content")
    : tabs;

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        {/* Full-Width Tabs */}
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="none"
          centered={!isMobile}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            overflow: "visible",
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
            borderBottom:"1px solid #E5E3D4"
          }}
        >
          {filteredTabs.map((tab, index) => (
            <Tab
              key={index}
              icon={tab.icon}
              label={tab.label}
              sx={{ fontSize: "0.8rem", minWidth: 70, px: 0, flex: "1 1 auto" }}
            />
          ))}
        </Tabs>

        {/* Tab Panels */}
        <Box pt={3}>
          {tabIndex === 0 && <Overview />}
          {tabIndex === 1 && <Notes />}
          {tabIndex === 2 && <Announcements />}
          {tabIndex === 3 && <FAQAccordion />}
          {tabIndex === 4 && <Review />}
          {isMobile && tabIndex === 5 && <Content />}
        </Box>
      </Box>
    </Container>
  );
};

export default TabsContent;
