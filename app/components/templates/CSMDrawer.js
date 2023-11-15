"use client";
import React from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Avatar, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import { ListItemButton, ListItemIcon, ListItemText, List, SwipeableDrawer } from '@mui/material';
import { navItems, noUserItems } from "./../../../utils/constant/noUserMenu";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';

export default function CSMDrawer({
    open,
    onCloseFunc,
    user, }) {
    const classes = useStyles();
    const role = user?.data?.role || null;
    const navs = role == "user" ? navItems : noUserItems;

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={classes.root}>
                <div className={classes.profile}>
                    <Avatar
                        className={classes.logo}
                        alt=""
                        src="./cafe_shop_management_logo.jpg"
                    />
                    <Typography sx={{ display: "block" }} align="center" variant="body">
                        {"Admin"}
                    </Typography>
                    <Typography sx={{ display: "block" }} align="center" variant="body">
                        {"admin@gmail.com"}
                    </Typography>
                </div>
                <Divider />
                <div className={classes.container}>
                    <List>
                        {navs.map((item, index) => {
                            return (
                                <Box key={index}>
                                    {" "}
                                    {item.sublist ? (
                                        <>
                                        </>
                                    ) : (
                                        <Link href={item.path}>
                                            <ListItemButton onClick={onCloseFunc}>
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                                <ListItemText primary={item.label} />
                                            </ListItemButton>
                                        </Link>
                                    )}
                                </Box>
                            );
                        })}
                    </List>
                </div>
            </div>
        </Box>
    );

    return (
        <div>
            {['left',].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton
                        onClick={toggleDrawer(anchor, true)}
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 250,
        maxWidth: 300,
    },
    logo: {
        marginTop: 16,
        width: 80,
        height: 80,
        margin: "0px auto",
        marginBottom: 16,
    },
    profile: {
        marginBottom: 16,
    },
}));


