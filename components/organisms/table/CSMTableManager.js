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
// "ma_id": 5,
// "name": "Nech",
// "gender": "M",
// "address": "Kandal province.",
// "email": "infor@gmail.com",
// "phone": "012 34 56 78",
// "birth_date": "11-11-2023"
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CSMTableManager = ({ ma_id, name, gender, address, email, phone, birth_date, onDelete }) => {
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
                    {ma_id}
                </TableCell>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="left">{gender}</TableCell>
                <TableCell align="left">{address}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{phone}</TableCell>
                <TableCell align="left">{birth_date}</TableCell>
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
                            Are you sure you want to delete this cafe shop?
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
export default CSMTableManager;

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

