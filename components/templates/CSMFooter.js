"use client";
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Box, Typography } from '@mui/material';

export default function CSMFooter() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="body1" gutterBottom>
                &copy; Copyright 2023, Cafe Shop Management. All Rights Reserved.
            </Typography>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f9fafb',
        padding: '2rem 0',
        borderTop: ' 1px solid #eaeaea',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));
