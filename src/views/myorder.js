import * as React from 'react';
import logo from "../logo.svg";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Form } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import axios from 'axios';
import { Col } from "react-bootstrap";
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const AuthStr = window.localStorage.getItem("token");
export default function Myorder() {
    const [id, setId] = useState();
    useEffect(() => {
        axios.get("http://3.110.102.129:5001/api/users/profile", {
            headers: { "x-auth-token": AuthStr },
        })
            .then((response) => {
                setId(response.data.data._id);
                console.log(response.data.data);
                const index = response.data.data._id;
                axios.get("http://3.110.102.129:5001/api/orders/userId/" + index, {
                    headers: { "x-auth-token": AuthStr },
                }).then((response) => {
                    console.log(response.data.data);
                });
            })
            .catch((error) => {
                console.log("error" + error);
            });
        // axios.get("http://3.110.102.129:5001/api/orders/userId/" + id, {
        //     headers: { "x-auth-token": AuthStr },
        // }).then((response) => {
        //     console.log(response);
        // });
    }, []);
    return (
        <>
            <Container>
                <Box sx={{ flexGrow: 1, }}>

                    <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", marginLeft: "50px" }}>
                        My Order
                    </Row>
                    <Grid container alignItems="left"
                        justifyContent="left">
                        <ButtonGroup disableElevation variant="contained" style={{ marginLeft: "50px", width: "25%", marginTop: "20px", border: "1px solid gray" }}>
                            <Button style={{ background: "#045195", fontSize: "16px", color: "white", fontWeight: "600", width: "50%", padding: "10px", textTransform: 'none' }} >Resent</Button>
                            <Button style={{ background: "white", fontSize: "16px", color: "black", fontWeight: "600", width: "50%", padding: "10px", textTransform: 'none' }} >Past</Button>
                        </ButtonGroup>
                    </Grid>

                    <Grid container padding={5} spacing={2}>
                        <Grid item xs={6}>
                            <Grid container spacing={1}>
                                <Grid item padding={5} xs={12}>
                                    <Item >
                                        <Grid container alignItems="center"
                                            justifyContent="center">
                                            <h5 style={{ fontSize: '18px', color: "#045195", margin: "15px" }}>Vijay Nagar Road, GJ, Ahmedabad,380013, India</h5>

                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Booking For:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    Machine-2301
                                                </Row>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Date & Time:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    20-10-2001 | 12:00 PM
                                                </Row>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Type and Quantity:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    Diesel and 100 LTR
                                                </Row>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Booking Status:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} pb={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    Accepted
                                                </Row>
                                            </Grid>
                                        </Grid>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={1}>
                                <Grid item padding={5} xs={12}>
                                    <Item >
                                        <Grid container alignItems="center"
                                            justifyContent="center">
                                            <h5 style={{ fontSize: '18px', color: "#045195", margin: "15px" }}>Vijay Nagar Road, GJ, Ahmedabad,380013, India</h5>

                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Booking For:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    Machine-2301
                                                </Row>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Date & Time:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    20-10-2001 | 12:00 PM
                                                </Row>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Type and Quantity:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    Diesel and 100 LTR
                                                </Row>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Booking Status:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} pb={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    Accepted
                                                </Row>
                                            </Grid>
                                        </Grid>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={1}>
                                <Grid item padding={5} xs={12}>
                                    <Item >
                                        <Grid container alignItems="center"
                                            justifyContent="center">
                                            <h5 style={{ fontSize: '18px', color: "#045195", margin: "15px" }}>Vijay Nagar Road, GJ, Ahmedabad,380013, India</h5>

                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Booking For:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    Machine-2301
                                                </Row>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Date & Time:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    20-10-2001 | 12:00 PM
                                                </Row>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Type and Quantity:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    Diesel and 100 LTR
                                                </Row>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Booking Status:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} pb={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    Accepted
                                                </Row>
                                            </Grid>
                                        </Grid>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={1}>
                                <Grid item padding={5} xs={12}>
                                    <Item >
                                        <Grid container alignItems="center"
                                            justifyContent="center">
                                            <h5 style={{ fontSize: '18px', color: "#045195", margin: "15px" }}>Vijay Nagar Road, GJ, Ahmedabad,380013, India</h5>

                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Booking For:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    Machine-2301
                                                </Row>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Date & Time:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    20-10-2001 | 12:00 PM
                                                </Row>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Type and Quantity:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    Diesel and 100 LTR
                                                </Row>
                                            </Grid>
                                        </Grid>
                                        <Grid container alignItems="left" fontSize={14}
                                            justifyContent="left">
                                            <Grid item pl={5} pr={5} pt={3} xs={5}>
                                                <Row style={{ textalign: "left", color: "gray" }}>
                                                    Booking Status:
                                                </Row>
                                            </Grid>
                                            <Grid item pl={5} pr={5} pt={3} pb={3} xs={7}>
                                                <Row style={{ textalign: "left", color: "black" }}>
                                                    Accepted
                                                </Row>
                                            </Grid>
                                        </Grid>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}
