"use client";
import * as React from 'react';
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { IconButton, Button } from '@mui/material';
import { TextField, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Slide from '@mui/material/Slide';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function CSMCreateDrink() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [id, setID] = React.useState();
    const [name, setName] = React.useState();
    const [category, setCategory] = React.useState();
    const [price, setPrice] = React.useState();

    // function handle open dialog
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // function handle create cafe shop
    async function handleCreate() {
        setLoading(true);
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                dr_id: id,
                name: name,
                category: category,
                price: price,
                or_id: "1",
                emp_id:"1",
            }),
        };
        const res = await fetch(`http://localhost:3000/api/drink`, postData);
        const response = await res.json();
        if (response["message"] == "success") {
            setLoading(false);
            setOpen(false);
        } else {
            setLoading(false);
            setOpen(true);
        }
        console.log(response["message"]);
        console.log(response);
    }
    return (
        <>
            <React.Fragment>
                <Button onClick={handleClickOpen} variant="contained" startIcon={<AddIcon />}>
                    Create
                </Button>
                <BootstrapDialog
                    TransitionComponent={Transition}
                    onClose={handleClickOpen}
                    open={open}
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} >
                        Create Drink
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
                                        onChange={(e) => setID(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        label="Name"
                                        name="name"
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        label="Category"
                                        name="category"
                                        type="text"
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        label="Price"
                                        name="price"
                                        type="text"
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </Grid>
                                
                            </Grid>

                        </DialogContent>
                        <DialogActions>
                            <Button
                                type="submit"
                                className={classes.bntCreate}
                                autoFocus
                                onClick={() => { handleCreate() }}
                            >
                                {loading ? "Loading..." : "Create"}
                            </Button>
                        </DialogActions>
                    </form>
                </BootstrapDialog>
            </React.Fragment >
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