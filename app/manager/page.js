"use client";
import React from "react";
import { makeStyles } from "@mui/styles";
import useSWR from 'swr';
import { CSMFooter, CSMAppBar } from "./../../components/templates";
import { CSMCreateManager, CSMEditManager } from './../../components/organisms/dialogs';
import { CSMTableManager } from './../../components/organisms/table';
import { Stack, Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
// imprt components table
import { Table, TableBody, TableCell, Paper } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Manager = () => {
    const classes = useStyles();
    // function handle get data 
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } = useSWR("http://localhost:3000/api/manager", fetcher);
    if (error) return <Typography>An error has occurred!</Typography>;
    if (!data) return <Box className={classes.progress}> <CircularProgress /></Box>;
    console.log(data);

    // function handle delete data 
    async function handleDelete(id) {
        console.log("delete item id number :",id);
        const postData = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ma_id: id,
            }),
        };
        const res = await fetch(`http://localhost:3000/api/manager`, postData);
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
                        <Typography variant="h6" gutterBottom>Manager</Typography>

                        <Stack direction="row" spacing={2}>
                            <CSMEditManager />
                            <CSMCreateManager />
                        </Stack>
                    </Box><br />

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow className={classes.tableRow}>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Gender</TableCell>
                                    <TableCell align="left">Address</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell align="left">Birth Date</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    {data.map((item, index) => {
                                        return (
                                            <Box key={index}>
                                                <CSMTableManager
                                                    ma_id={item.ma_id}
                                                    name={item.name}
                                                    gender={item.gender}
                                                    address={item.address}
                                                    email={item.email}
                                                    phone={item.phone}
                                                    birth_date={item.birth_date}
                                                    position={item.position}
                                                    onDelete={() => handleDelete(item.ma_id)}
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

export default Manager;



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
