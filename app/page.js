"use client";
import React from "react";
import {  CSMFooter,CSMAppBar } from "./../components/templates";
import { CSMCreateCafeShop } from './../components/organisms/dialogs';
import { CSMCardCafeShop } from './../components/organisms/cards';
import { Typography } from "@mui/material";

const CafeShop = () => {
  return (
    <>
      <CSMAppBar />
        CafeShop

      <CSMCreateCafeShop />

      <CSMCardCafeShop />


      <CSMFooter />
    </>
  );
}

export default CafeShop;

