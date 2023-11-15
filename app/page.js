"use client";
import React from "react";
import { CSMAppBar, CSMFooter } from "./components/templates";
import { Typography } from "@mui/material";
import { CSMCreateCafeShop } from './components/organisms';


const CafeShop = () => {
  return (
    <>
      <CSMAppBar />
      <Typography>
        CafeShop
      </Typography>

      <CSMCreateCafeShop />


      <CSMFooter />
    </>
  );
}

export default CafeShop;

