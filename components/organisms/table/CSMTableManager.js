"use client";
import React from 'react';
import { makeStyles } from "@mui/styles";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableCell, } from '@mui/material';

    // "ma_id": 5,
    // "name": "Nech",
    // "gender": "M",
    // "address": "Kandal province.",
    // "email": "infor@gmail.com",
    // "phone": "012 34 56 78",
    // "birth_date": "11-11-2023"

const CSMTableManager = ({ ma_id, name, gender, address, email, phone, birth_date, onDelete }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TableCell component="th" scope="row">
                {ma_id}
            </TableCell>
            <TableCell align="left">{name}</TableCell>
            <TableCell align="left">{gender}</TableCell>
            <TableCell align="left">{address}</TableCell>
            <TableCell align="left">{email}</TableCell>
            <TableCell align="left">{phone}</TableCell>
            <TableCell align="left">{birth_date}</TableCell>
            <TableCell align="right">
                <IconButton onClick={onDelete} color="error">
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </div>
    );
}
export default CSMTableManager;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },

}));

