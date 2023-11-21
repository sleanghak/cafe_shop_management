"use client";
import React from "react";
import { makeStyles } from "@mui/styles";
import useSWR from 'swr';
import { CSMFooter, CSMAppBar } from "./../../components/templates";
import { CSMCreateReport, CSMEditReport } from './../../components/organisms/dialogs';
import { CSMTableReport } from './../../components/organisms/table';
import { Stack, Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
// imprt components table
import { Table, TableBody, TableCell, Paper } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Report = () => {
  const classes = useStyles();
  // function handle get data 
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("http://localhost:3000/api/report", fetcher);
  if (error) return <Typography>An error has occurred!</Typography>;
  if (!data) return <Box className={classes.progress}> <CircularProgress /></Box>;

  // function handle delete data 
  async function handleDelete(id) {
    console.log("delete item id number :",id);
    const postData = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        re_id: id,
      }),
    };
    const res = await fetch(`http://localhost:3000/api/report`, postData);
    const response = await res.json();
    if (response["message"] == "success") {
      console.log(response["message"]);
    } else {
      console.log(response["message"]);
    }
    console.log(response);
  }


  return (
    <>
      <CSMAppBar />
      <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
        <Grid item xs={11}>

          <Box position={'relative'} className={classes.iconCreate}>
            <Typography variant="h6" gutterBottom>Report</Typography>

            <Stack direction="row" spacing={2}>
              <CSMEditReport />
              <CSMCreateReport />
            </Stack>
          </Box><br />

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <TableCell>ID</TableCell>
                  <TableCell align="left">Quantity</TableCell>
                  <TableCell align="left">Total Price&nbsp;($)</TableCell>
                  <TableCell align="left">Report Type</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  {data.map((item, index) => {
                    return (
                      <Box key={index}>
                        <CSMTableReport
                          re_id={item.re_id}
                          quantity={item.quantity}
                          total_price={item.total_price}
                          report_type={item.report_type}
                          date={item.date}
                          onDelete={() => handleDelete(item.re_id)}
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
    </>
  );
}

export default Report;



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
