"use client";
import React from "react";
import { makeStyles } from "@mui/styles";
import { CSMLogo } from './../atoms';
import { Box, } from '@mui/material';
import { Toolbar, Button, } from "@mui/material";
import { CSMDrawer } from './../templates';

const CSMAppBar = ({ }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} position="static" >
            <Toolbar className={classes.toolbar} >
                <Box sx={{ display: { xs: 'flex', md: 'none', lg: 'none' }, }}>
                    <CSMDrawer />
                </Box>

                <CSMLogo href="/" />
                <Box className={classes.menus}>
                    <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }}>
                        <Button className={classes.text} variant="text" href="/">Cafe Shop</Button>
                        <Button className={classes.text} variant="text" href="/drink">Drink</Button>
                        <Button className={classes.text} variant="text" href="/order">Order</Button>
                        <Button className={classes.text} variant="text" href="/employee">Employee</Button>
                        <Button className={classes.text} variant="text" href="/manager">Manager</Button>
                        <Button className={classes.text} variant="text" href="/report">Report</Button>
                    </Box>
                </Box>
            </Toolbar>
        </Box>
    );
};

export default CSMAppBar;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f9fafb',
        borderBottom: ' 1px solid #eaeaea',
    },
    toolbar: {
        boxSizing: 'border-box',
    },
    menus: {
        display: "flex",
        marginLeft: "auto",
        alignItems: "center",
        gap: 5,
    },
    text: {
        // textTransform: 'none',
        color: '#25265EB3',
        fontSize: 15,
    },
    // login: {
    //     backgroundColor: ' #55ACEE',
    //     color: '#FFF',
    //     textTransform: 'none',
    //     border: '1px solid #55ACEE',
    //     "&:hover": {
    //         backgroundColor: ' #55ACEE',
    //         border: '1px solid #55ACEE',
    //     },
    // },
}));
