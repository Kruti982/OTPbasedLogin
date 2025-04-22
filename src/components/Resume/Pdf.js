import React, { useRef } from "react";
import ReactToPdf from "react-to-pdf";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Resume from "./Resume";

export default function Pdf() {
  const resumeRef = useRef();

  return (
    <>
      <Box textAlign="center" my={2}>
        <ReactToPdf
          targetRef={resumeRef}
          filename="Kruti_Sathe_Resume.pdf"
          options={{ orientation: "portrait", unit: "in", format: "letter" }}
          scale={0.8}
        >
          {({ toPdf }) => (
            <Button variant="contained" color="primary" onClick={toPdf}>
              Download PDF
            </Button>
          )}
        </ReactToPdf>
      </Box>

      <Box
        ref={resumeRef}
        sx={{
          display: "block",
          margin: "auto",
          padding: 2,
          border: "1px solid black",
          boxShadow: "5px 5px 5px black",
          width: "100%",
          maxWidth: "800px",
          boxSizing: "border-box",
          backgroundColor: "white",
        }}
      >
        <Resume />
      </Box>
    </>
  );
}
