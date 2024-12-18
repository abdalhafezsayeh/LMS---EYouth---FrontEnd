import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const drawerWidth = 400;

const Layout = ({ children, sidebar, isVisibleSide }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        position: "relative",
      }}
    >
      {/* Sidebar with Animation */}
      {!isMobile && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            right: !isVisibleSide ? 0 : `-${drawerWidth}px`,
            height: "100vh",
            width: `${drawerWidth}px`,
            backgroundColor: "white",
            boxShadow: 2,
            overflowY: "auto",
            transition: "right 0.5s ease",
            zIndex: 1200,
          }}
        >
          {sidebar}
        </Box>
      )}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginRight: !(isVisibleSide || isMobile) ? `${drawerWidth}px` : 0, 
          transition: "margin-right 0.5s ease",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
