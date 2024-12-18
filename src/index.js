import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CoursePage from "./pages/CoursePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CoursePage />
  </ThemeProvider>
);
