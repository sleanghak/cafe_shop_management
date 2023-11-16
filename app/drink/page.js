"use client";
import React from 'react';
import { CSMAppBar, CSMFooter } from "./../../components/templates";
import { CSMCreateDrink } from './../../components/organisms/dialogs';

const Drink = () => {
    return (
        <>
            <CSMAppBar />
            Drink
            <CSMCreateDrink />
            <CSMFooter />
        </>
    );
}

export default Drink;