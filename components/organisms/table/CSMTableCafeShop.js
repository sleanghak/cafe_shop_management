"use client";
import React from 'react';
import { makeStyles } from "@mui/styles";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableCell, } from '@mui/material';

    // "cs_id": 5,
    // "cs_city": "Phnom Penh",
    // "cs_address": "Phnom Penh",
    // "date": "2023-11-18T18:16:00.000Z"

const CSMTableCafeShop = ({ cs_id, cs_city, cs_address, date, onDelete }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TableCell component="th" scope="row">
                {cs_id}
            </TableCell>
            <TableCell align="left">{cs_city}</TableCell>
            <TableCell align="left">{cs_address}</TableCell>
            <TableCell align="left">{date}</TableCell>
            <TableCell align="right">
                <IconButton onClick={onDelete} color="error">
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </div>
    );
}
export default CSMTableCafeShop;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },

}));

