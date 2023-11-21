"use client";
import React from 'react';
import { makeStyles } from "@mui/styles";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableCell, } from '@mui/material';

//     "re_id": 7,
//     "date": "2023-11-11T08:00:00.000Z",
//     "quantity": 1,
//     "report_type": "1",
//     "total_price": 1

const CSMTableReport = ({ re_id, quantity, total_price, report_type, date, onDelete }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TableCell component="th" scope="row">
                {re_id}
            </TableCell>
            <TableCell align="left">{quantity}</TableCell>
            <TableCell align="left">{total_price}</TableCell>
            <TableCell align="left">{report_type}</TableCell>
            <TableCell align="left">{date}</TableCell>
            <TableCell align="right">
                <IconButton onClick={onDelete} color="error">
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </div>
    );
}
export default CSMTableReport;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },

}));

