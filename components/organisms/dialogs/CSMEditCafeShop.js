"use client";
import * as React from 'react';
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { IconButton, Button } from '@mui/material';
import { TextField, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import Slide from '@mui/material/Slide';

// imprt components Snackbar
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function CSMEditCafeShop() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [id, setID] = React.useState();
    const [city, setCity] = React.useState();
    const [address, setAddress] = React.useState();
    const [date, setDate] = React.useState();

    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);
    const handleSuccess = () => {
        setSuccess(false);
    };
    const handleError = () => {
        setError(false);
    };
    // function handle open dialog
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // function handle eit cafe shop
    async function handleEdit() {
        setLoading(true);
        const postData = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cs_city: city,
                cs_address: address,
                date: date,
                cs_id: id,
            }),
        };
        const res = await fetch(`http://localhost:3000/api/cafeshop`, postData);
        const response = await res.json();
        if (response["message"] == "success") {
            setLoading(false);
            setOpen(false);
            setError(false);
            setSuccess(true);
            console.log(response["message"]);
        } else {
            setLoading(false);
            setOpen(false);
            setSuccess(false);
            setError(true);
            console.log(response["message"]);
        }
        console.log(response);
    }

    return (
        <>
            <React.Fragment>
                <Button color="secondary" onClick={handleClickOpen} variant="contained" startIcon={<EditIcon />}>
                    Edit
                </Button>

                <BootstrapDialog
                    TransitionComponent={Transition}
                    onClose={handleClickOpen}
                    open={open}
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} >
                        Edit Cafe Shop
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <form
                        onSubmit={(e) => { e.preventDefault() }}
                    >
                        <DialogContent dividers>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        label="ID"
                                        name="id"
                                        type="text"
                                        value={id}
                                        onChange={(e) => setID(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        label="City"
                                        name="city"
                                        type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        label="Address"
                                        name="address"
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="date"
                                        type="datetime-local"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </Grid>
                            </Grid>

                        </DialogContent>
                        <DialogActions>
                            <Button
                                type="submit"
                                className={classes.bntCreate}
                                autoFocus
                                onClick={() => { handleEdit() }}
                            >
                                {loading ? "Loading..." : "Update"}
                            </Button>
                        </DialogActions>
                    </form>
                </BootstrapDialog>
            </React.Fragment >

            <Snackbar open={success} autoHideDuration={6000} onClose={handleSuccess}>
                <Alert onClose={handleSuccess} severity="success" sx={{ width: '100%' }}>
                    Edit Success!
                </Alert>
            </Snackbar>
            {/* Snackbar deleted unsuccess */}
            <Snackbar open={error} autoHideDuration={6000} onClose={handleError}>
                <Alert onClose={handleError} severity="error" sx={{ width: '100%' }}>
                    Edit Unsuccess!
                </Alert>
            </Snackbar>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {

    },
    bntCreate: {
        textTransform: 'none',
    },
}));