"use client";
import React from 'react';
import { makeStyles } from "@mui/styles";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableCell, } from '@mui/material';

// "emp_id": 7,
// "name": "Leanghak SEIREY",
// "gender": "M",
// "address": "Russian Federation Boulevard, Toul Kork, Phnom Penh, Cambodia.",
// "email": "infor@gmail.com",
// "phone": "012 34 56 78",
// "birth_date": "2023-11-12T08:00:00.000Z",
// "position": "Full-Stack Developer",
// "ma_id": 1

const CSMTableEmployee = ({ emp_id, name, gender, address, email, phone, birth_date, position, onDelete }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TableCell component="th" scope="row">
                {emp_id}
            </TableCell>
            <TableCell align="left">{name}</TableCell>
            <TableCell align="left">{gender}</TableCell>
            <TableCell align="left">{address}</TableCell>
            <TableCell align="left">{email}</TableCell>
            <TableCell align="left">{phone}</TableCell>
            <TableCell align="left">{birth_date}</TableCell>
            <TableCell align="left">{position}</TableCell>
            <TableCell align="right">
                <IconButton onClick={onDelete} color="error">
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </div>
    );
}
export default CSMTableEmployee;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },

}));

