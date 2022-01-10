import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Form } from 'react-bootstrap';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import DialogContentText from '@mui/material/DialogContentText';
import OtpInput from 'react-otp-input';
import { Grid } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import Dashboard from './dashboard';
import ReactDOM from "react-dom";
import Layout from '../Layout/layout';
import FormDialog from './register';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    const [OTP, setOTP] = useState("");
    const [token, setToken] = useState();
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };
    const styleObj = {
        fontSize: 14,
        color: "gray",
        paddingBottom: "30px",
    }
    const [otpopen, setOtpOpen] = React.useState(false);
    const [number, setNumber] = useState("");

    const handleClickOtpOpen = () => {
        onClose(selectedValue);
        setOtpOpen(true);
    };

    const handleOtpClose = () => {
        setOtpOpen(false);
    };
    const Get_Otp = (e) => {
        e.preventDefault();
        setToken("asdfgh");
        handleClickOtpOpen();
        // axios.post(
        //     "http://3.110.102.129:5001/api/login/getOtp",
        //     {
        //         number: number,
        //     }
        // ).then((response) => {
        //     console.log(response.data);
        //     setToken(response.data.token);
        //     handleClickOtpOpen();
        // });
    };
    const Validate_Otp = (e) => {
        e.preventDefault();
        const AuthStr = window.localStorage.getItem("token");
        console.log(AuthStr);
        ReactDOM.render(
            <BrowserRouter>
                <Switch>
                    <Layout />
                </Switch>
            </BrowserRouter>,
            document.getElementById("root")
        );
        // axios.post(
        //     "http://3.110.102.129:5001/api/login/validateOtp",
        //     {
        //         OTP: OTP,
        //     },
        //     {
        //         headers: { "x-auth-token": AuthStr },
        //     }
        // ).then((response) => {
        //     console.log(response.data);
        //     handleOtpClose();
        //     setToken(response.data.token);
        //     ReactDOM.render(
        //         <BrowserRouter>
        //             <Switch>
        //                 <Layout />
        //             </Switch>
        //         </BrowserRouter>,
        //         document.getElementById("root")
        //     );
        // });
    };
    if (token) {
        window.localStorage.setItem("token", token);
    } else {
        // alert("You are not registerd")
    }

    return (
        <>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle><h3 style={{ paddingTop: "40px" }}><b>Login/Signup</b></h3></DialogTitle>

                <DialogContent>
                    <Form>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Login with mobile number</Form.Label>
                            <Row>
                                <Col md={3} >
                                    <Form.Select aria-label="Country" style={{ fontsize: "8px" }}>
                                        <option value="+91">+91</option>
                                        <option value="+1">+1</option>
                                        <option value="+2">+2</option>
                                        <option value="+3">+3</option>
                                    </Form.Select>
                                </Col>
                                <Col md={9}>
                                    <Form.Control type="text" onChange={(e) => {
                                        setNumber(e.target.value);
                                    }} />
                                </Col>
                            </Row>
                        </Form.Group>

                    </Form>
                    <Row>
                        <p style={styleObj}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. A dictum eu aliquam diam porta etian. id laoreet ut nibh lobortis cursus id consequat sollicitudin interdum. Eu, iaculis nisi
                            vitae, egestas egestas vitae, et sem elit.
                        </p>
                    </Row>
                </DialogContent>
                <DialogActions style={{ paddingBottom: "40px" }}>
                    <Button onClick={Get_Otp} style={{ background: "blue", color: "white", width: "100%" }}>Continue</Button>
                    {/* <Button onClick={handleClose}>Register</Button> Get_Otp*/}
                </DialogActions>
            </Dialog>
            <Dialog
                open={otpopen}
                onClose={handleOtpClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle> */}
                <DialogTitle><h4 style={{ paddingTop: "20px" }}><b>Varify Your Mobile Number</b></h4></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Enter OTP that has been send to your mobile number
                    </DialogContentText>
                    <Grid
                        item
                        xs={12}
                        container
                        justify="center"
                        alignItems="center"
                        direction="column"
                    >
                        <Grid item spacing={3} marginTop={2} justify="center">
                            <OtpInput
                                inputStyle={{
                                    width: "4rem",
                                    height: "2rem",
                                    margin: "0 1rem",
                                    fontSize: "1.5rem",
                                    // borderRadius: 4,
                                    color: "black",
                                    border: "1px solid rgba(0,0,0,0.3)",
                                    borderRadius: "10px"
                                }}
                                separator={
                                    <span>
                                        <strong>-</strong>
                                    </span>
                                }
                                value={OTP}
                                onChange={setOTP}
                                autoFocus
                                OTPLength={4}
                                otpType="number"
                                disabled={false}
                                secure
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        container
                        justify="right"
                        alignItems="end"
                        direction="column"
                    >
                        <p style={{ color: "dodgerblue", fontSize: "12px" }}>Resend OTP</p>
                    </Grid>
                </DialogContent>
                <DialogActions style={{ paddingBottom: "40px", paddingTop: "20px" }}>
                    <Button style={{ background: "blue", color: "white", width: "100%" }} onClick={Validate_Otp}>Login</Button>
                </DialogActions>
            </Dialog>
        </>

    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(true);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };



    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Login
            </Button>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
            <FormDialog />
        </div>
    );
}
