"use client";
import * as React from 'react';
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
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

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>

            <IconButton variant="outlined" onClick={handleClickOpen}>
                < PersonAddAlt1Icon />
            </IconButton>

            <BootstrapDialog
                TransitionComponent={Transition}
                onClose={handleClickOpen}
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} >
                    Create Cafe Shop
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
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </Typography>

                </DialogContent>
                <DialogActions>
                    <Button className={classes.bntCreate} autoFocus onClick={handleClose}>
                        Create
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
       
    },
    bntCreate: {
        textTransform: 'none',
    },
   

}));