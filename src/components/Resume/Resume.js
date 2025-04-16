import React from "react";
import Header from "./Header";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Box from "@mui/material/Box";

export default function Resume() {
  return (
    <Box sx={{ display: "block", margin: "auto 0px" }}>
      <Box
        sx={{
          border: "1px solid black",
          boxShadow: "5px 5px 5px black",
          width: "100%", // stays within parent Box
          boxSizing: "border-box",
          opacity: "150%",
        }}
      >
        <Header />
        <Experience />
        <Education />
        <Skills />
        <footer className="text-center text-sm text-gray-500 my-8">
          <p>© {new Date().getFullYear()} Kruti Sathe. All rights reserved.</p>
        </footer>
      </Box>
    </Box>
  );
}
