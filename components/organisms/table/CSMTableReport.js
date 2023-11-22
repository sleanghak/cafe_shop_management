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
//     "re_id": 7,
//     "date": "2023-11-11T08:00:00.000Z",
//     "quantity": 1,
//     "report_type": "1",
//     "total_price": 1
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CSMTableReport = ({ re_id, quantity, total_price, report_type, date, onDelete }) => {
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
                    {re_id}
                </TableCell>
                <TableCell align="left">{quantity}</TableCell>
                <TableCell align="left">{total_price}</TableCell>
                <TableCell align="left">{report_type}</TableCell>
                <TableCell align="left">{date}</TableCell>
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
export default CSMTableReport;

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

