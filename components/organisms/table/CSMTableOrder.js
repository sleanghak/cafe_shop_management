"use client";
import React from 'react';
import { makeStyles } from "@mui/styles";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableCell, } from '@mui/material';

// "or_id": 5,
// "name": "Phearom",
// "quantity": 2,
// "price": 0.5,
// "date": "2023-11-11T08:00:00.000Z",
// "total_price": 1.9900000095367432,
// "re_id": 1

const CSMTableOrder = ({ or_id, name, quantity, price, date, total_price, onDelete }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TableCell component="th" scope="row">
                {or_id}
            </TableCell>
            <TableCell align="left">{name}</TableCell>
            <TableCell align="left">{quantity}</TableCell>
            <TableCell align="left">{price}</TableCell>
            <TableCell align="left">{total_price}</TableCell>
            <TableCell align="left">{date}</TableCell>
            <TableCell align="right">
                <IconButton onClick={onDelete} color="error">
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </div>
    );
}
export default CSMTableOrder;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },

}));

