"use client";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CSMSnackbarSuccess({ children }) {
    const [snackbar, setSnackbar] = React.useState(false);

    const handleClickSnackbar = () => {
        setSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbar(false);
    };

    return (
        <>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Button variant="outlined" onClick={handleClickSnackbar}>
                    Open success snackbar
                </Button>
                <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="success">{children}</Alert>
                </Snackbar>
            </Stack>
        </>
    );
}
