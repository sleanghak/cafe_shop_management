"use client";
import * as React from 'react';
import {Snackbar,MuiAlert} from '@mui/material';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CSMSnackbarError({ children }) {
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
      <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error">{children}</Alert>
      </Snackbar>
    </>
  );
}
