import React from "react";
import Box from "@mui/material/Box";
import { BiFontSize } from "react-icons/bi";

export default function Header() {
  return (
    <>
      <header className="text-center my-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
          Kruti Sathe
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Senior Web Developer with 4 Years of Experience
        </p>
      </header>
    </>
  );
}
