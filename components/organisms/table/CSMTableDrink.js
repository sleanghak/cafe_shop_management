"use client";
import React from 'react';
import { makeStyles } from "@mui/styles";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableCell, } from '@mui/material';

// "dr_id": 5,
// "name": "Kim Yanceh",
// "category": "Coca",
// "price": 0.5,
// "or_id": 1,
// "emp_id": 1

const CSMTableDrink = ({ dr_id, name, category, price, onDelete }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TableCell component="th" scope="row">
                {dr_id}
            </TableCell>
            <TableCell align="left">{name}</TableCell>
            <TableCell align="left">{category}</TableCell>
            <TableCell align="left">{price}</TableCell>
            <TableCell align="right">
                <IconButton onClick={onDelete} color="error">
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </div>
    );
}
export default CSMTableDrink;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },

}));

