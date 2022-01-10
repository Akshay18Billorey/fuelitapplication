// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BentoIcon from '@mui/icons-material/Bento';
import logo from './logo_img.png';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import LogoutIcon from '@mui/icons-material/Logout';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Profile from '../views/profile';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const pages = ['Home', 'About', 'Terms and Conditions', 'Chat with Us'];
// const settings = ['View Profile', 'My Machines', 'My Address'];

const AccountMenu = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="static" style={{ background: "white" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <img src={logo} height={50} />
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton style={{ color: "#045195" }}
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                                style={{ textAlign: 'center' }}
                            >
                                <Button style={{ color: "#045195", textTransform: "none" }}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Home
                                </Button>
                                <Button style={{ color: "#045195", textTransform: "none" }}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    About
                                </Button>
                                <Button style={{ color: "#045195", textTransform: "none" }}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Terms and Conditions
                                </Button>
                                <Button style={{ color: "#045195", textTransform: "none" }}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Chat with Us
                                </Button>
                                {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography style={{ color: "#045195" }} textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))} */}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <img src={logo} height={50} />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                            {/* <Link className='nav-link' to="/Dashboard"> */}
                            <Button style={{ color: "#045195", textTransform: "none", fontWeight: '700' }}
                                // onClick={<Link className='nav-link' to="/Dashboard" />}
                                sx={{ my: 2, ml: 4, color: 'white', display: 'block' }}
                            >
                                <Link style={{ color: "#045195" }} class="nav-link" to="/Dashboard">Home</Link>
                                {/* <Link to="/Dashboard">  Home</Link> */}
                            </Button>
                            {/* </Link> */}
                            <Button style={{ color: "#045195", textTransform: "none", fontWeight: '700' }}
                                // onClick={handleCloseNavMenu}
                                sx={{ my: 2, ml: 4, color: 'white', display: 'block' }}
                            >
                                <Link style={{ color: "#045195" }} class="nav-link" to="/Dashboard">About</Link>
                            </Button>
                            <Button style={{ color: "#045195", textTransform: "none", fontWeight: '700' }}
                                // onClick={handleCloseNavMenu}
                                sx={{ my: 2, ml: 4, color: 'white', display: 'block' }}
                            >
                                <Link style={{ color: "#045195" }} class="nav-link" to="/Dashboard">Terms and Conditions</Link>
                            </Button>
                            <Button style={{ color: "#045195", textTransform: "none", fontWeight: '700' }}
                                // onClick={handleCloseNavMenu}
                                sx={{ my: 2, ml: 4, color: 'white', display: 'block' }}
                            >
                                <Link style={{ color: "#045195" }} class="nav-link" to="/Dashboard">Chat with Us</Link>
                            </Button>
                            {/* {pages.map((page) => (
                            <Button style={{ color: "#045195" }}
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))} */}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem style={{ color: "#045195" }} >
                                    <PersonOutlineOutlinedIcon style={{ marginRight: "15px" }} /> <Link style={{ color: "#045195" }} class="nav-link" to="/profile">View Profile</Link>
                                </MenuItem>
                                <MenuItem style={{ color: "#045195" }}>
                                    <DirectionsCarIcon style={{ marginRight: "15px" }} /> <Link style={{ color: "#045195" }} class="nav-link" to="/machine">My Machines</Link>
                                </MenuItem>
                                <MenuItem style={{ color: "#045195" }}>
                                    <BentoIcon style={{ marginRight: "15px" }} /> <Link style={{ color: "#045195" }} class="nav-link" to="/myorder">My Order</Link>
                                </MenuItem>
                                <MenuItem style={{ color: "#045195" }}>
                                    <LocationOnIcon style={{ marginRight: "15px" }} /> <Link style={{ color: "#045195" }} class="nav-link" to="/Dashboard">My Address</Link>
                                </MenuItem>
                                {/* {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseNavMenu} style={{ color: "#045195" }}>
                                    <Typography textAlign="center" style={{ color: "#045195", margin: "5px" }}> {setting}</Typography>
                                </MenuItem>
                            ))} */}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Log Out">
                                <IconButton style={{ color: "#045195" }} sx={{ p: 2 }}>
                                    <PowerSettingsNewIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <br />
        </>
    );
};
export default AccountMenu;
