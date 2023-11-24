"use client";
import React from 'react';
import { makeStyles } from "@mui/styles";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TableCell, } from '@mui/material';
// import components dialog
import { Button, Box } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Slide from '@mui/material/Slide';
import InfoIcon from '@mui/icons-material/Info';
// "emp_id": 7,
// "name": "Leanghak SEIREY",
// "gender": "M",
// "address": "Russian Federation Boulevard, Toul Kork, Phnom Penh, Cambodia.",
// "email": "infor@gmail.com",
// "phone": "012 34 56 78",
// "birth_date": "2023-11-12T08:00:00.000Z",
// "position": "Full-Stack Developer",
// "ma_id": 1
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CSMTableEmployee = ({ emp_id, name, gender, address, email, phone, birth_date, position, onDelete }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
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
                    <IconButton onClick={handleClickOpen} color="error">
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </div>
            <React.Fragment>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClickOpen}
                >
                    <DialogTitle>
                        <Box className={classes.infor}>
                            <InfoIcon color='error' />
                            <Box sx={{ ml: 1, mt: -0.5 }}>
                                Delete Cafe Shop
                            </Box>
                        </Box>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText >
                            Are you sure you want to delete this employee?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Box onClick={handleClose}>
                            <Button color='error' onClick={onDelete}>Yes</Button>
                        </Box>
                        <Button onClick={handleClose}>No</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </>
    );
}
export default CSMTableEmployee;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    infor: {
        display: 'flex',
        justifyContent: "start",
    }
}));

