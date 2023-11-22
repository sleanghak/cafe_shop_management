"use client";
import React from "react";
import { makeStyles } from "@mui/styles";
import useSWR from 'swr';
import { CSMFooter, CSMAppBar } from "./../components/templates";
import { CSMCreateCafeShop, CSMEditCafeShop } from './../components/organisms/dialogs';
import { CSMTableCafeShop } from './../components/organisms/table';
import { Stack, Box, Grid } from "@mui/material";
import { Typography, } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
// imprt components table
import { Table, TableBody, TableCell, Paper } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// imprt components Snackbar
import { Button, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const CafeShop = () => {
  const classes = useStyles();

  const [deletedSuccess, setDeletedSuccess] = React.useState(false);
  const [deletedError, setDeletedError] = React.useState(false);
  const handleDeletedSuccess = () => {
    setDeletedSuccess(false);
  };

  const handleDeletedError = () => {
    setDeletedError(false);
  };

  // function handle get data 
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("http://localhost:3000/api/cafeshop", fetcher);
  if (error) return <Typography>An error has occurred!</Typography>;
  if (!data) return <Box className={classes.progress}> <CircularProgress /></Box>;

  // function handle delete data 
  async function handleDelete(id) {
    console.log("delete item id number :", id);
    const postData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cs_id: id,
      }),
    };
    const res = await fetch(`http://localhost:3000/api/cafeshop`, postData);
    const response = await res.json();
    if (response["message"] == "success") {
      console.log(response["message"]);
      setDeletedSuccess(true);
      setDeletedError(false);
    } else {
      console.log(response["message"]);
      setDeletedError(true);
      setDeletedSuccess(false);
    }
    console.log(response);
  }


  return (
    <>
      <CSMAppBar />
      <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
        <Grid item xs={11}>

          <Box position={'relative'} className={classes.iconCreate}>
            <Typography variant="h6" gutterBottom>Cafe Shop</Typography>

            <Stack direction="row" spacing={2}>
              <CSMEditCafeShop />
              <CSMCreateCafeShop />
            </Stack>
          </Box><br />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <TableCell>ID</TableCell>
                  <TableCell align="left">City</TableCell>
                  <TableCell align="left">Address</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  {data.map((item, index) => {
                    return (
                      <Box key={index}>
                        <CSMTableCafeShop
                          cs_id={item.cs_id}
                          cs_city={item.cs_city}
                          cs_address={item.cs_address}
                          date={item.date}
                          onDelete={() => handleDelete(item.cs_id)}
                        />
                      </Box>
                    );
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid >
      <CSMFooter />
      {/* Snackbar deleted success */}
      <Snackbar open={deletedSuccess} autoHideDuration={6000} onClose={handleDeletedSuccess}>
        <Alert onClose={handleDeletedSuccess} severity="success" sx={{ width: '100%' }}>
          Delete Success!
        </Alert>
      </Snackbar>
      {/* Snackbar deleted unsuccess */}
      <Snackbar open={deletedError} autoHideDuration={6000} onClose={handleDeletedError}>
        <Alert onClose={handleDeletedError} severity="error" sx={{ width: '100%' }}>
          Delete Unsuccess!
        </Alert>
      </Snackbar>
    </>
  );
}

export default CafeShop;



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  iconCreate: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  progress: {
    position: "absolute",
    top: '50%',
    left: '50%',
  },
  tableRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

