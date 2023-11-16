"use client";
import React from "react";
import { makeStyles } from '@mui/styles';
import { Avatar, Box, Typography } from "@mui/material";
import styles from "./../../styles/typography.module.css";
import Link from "next/link";

export default function CSMLogo({ href }) {
    const classes = useStyles();
    return (
        <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' } }}>
            <Box className={classes.root}>
                <Link href={href}>
                    <Avatar
                        alt="logo"
                        src="./cafe_shop_management_logo.jpg"
                        sx={{ width: 65, height: 65 }}
                    />
                </Link>
                <Box sx={{ flexDirection: 'column', ml: 2, minWidth: '281px' }}>
                    <Typography className={styles.title} component="h1" variant="h5">
                        Cafe Shop Management
                    </Typography>
                    <Typography className={styles.title} variant="body1" gutterBottom>
                        Group5 E9 Year4 G24
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
}));

