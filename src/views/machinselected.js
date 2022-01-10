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
import IconButton from '@mui/material/IconButton';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Col } from "react-bootstrap";
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const AuthStr = window.localStorage.getItem("token");

export default function Machinselected() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [paymentopen, setpaymentOpen] = React.useState(false);
    const [userid, setUserId] = useState();
    const handleClickpaymentOpen = () => {
        setOpen(false);
        setpaymentOpen(true);
    };

    const handlepaymentClose = () => {
        setpaymentOpen(false);
    };
    const [bookingopen, setbookingopen] = React.useState(false);

    const handleClickbookingOpen = () => {
        setpaymentOpen(false);
        setbookingopen(true);
    };

    const handlebookingClose = () => {
        setbookingopen(false);
    };
    const [reviewopen, setreviewopen] = React.useState(false);

    const handleClickreviewOpen = () => {
        setbookingopen(false);
        setreviewopen(true);
    };

    const handlereviewClose = () => {
        setreviewopen(false);
    };
    useEffect(() => {
        axios.get("http://3.110.102.129:5001/api/users/profile", {
            headers: { "x-auth-token": AuthStr },
        }).then((response) => {
            console.log(response.data.data);
            const index = response.data.data._id;
            axios.get("http://3.110.102.129:5001/api/machines/userId/" + index, {
                headers: { "x-auth-token": AuthStr },
            }).then((response) => {
                console.log(response.data.data);
            }).catch((error) => {
                console.log("error" + error);
            });
        }).catch((error) => {
            console.log("error" + error);
        });

    }, []);
    console.log("userid" + userid);

    return (
        <>
            <Container>
                <Box sx={{ flexGrow: 1, paddingLeft: 7, paddingRight: 7 }}>

                    <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", margin: "5px" }}>
                        Confirm Request
                    </Row>
                    <Grid container spacing={2}>
                        <Grid item xs={9}>

                            <Item>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", margin: "15px" }}>
                                        Machine Selected
                                    </Row>
                                    {/* <br />
                                    <br /> */}
                                    <Row>
                                        <Col md={4} >
                                            {/* Vanquish S Aston Martine <br /> FYD 6778 */}
                                            <p>
                                                <span style={{ textalign: "left", color: "gray", fontWeight: "bold" }}>
                                                    Vanquish S Aston Martine
                                                </span><br />
                                                <span style={{ textalign: "left", color: "gray" }}>
                                                    FYD 6778
                                                </span>
                                            </p>

                                        </Col>
                                        <Col md={3} >
                                            <Container style={{ textalign: "left", }}>
                                                <img src={logo} height={35} />
                                            </Container>
                                        </Col>
                                        <Col md={3} >

                                        </Col>
                                        <Col md={2} >

                                        </Col>
                                    </Row>
                                    {/* <br />
                                    <br /> */}
                                    <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", margin: "15px" }}>
                                        Service Address
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="(Home)" />
                                            <FormControlLabel control={<Checkbox size="small" />} label="(Work)" />
                                            <FormControlLabel control={<Checkbox size="small" />} label="(Other)" />
                                        </FormGroup>
                                    </Row>
                                    <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", margin: "15px" }}>
                                        Date & Time
                                    </Row>
                                    <Row>
                                        <Col md={3} >
                                            <span style={{ textalign: "left", color: "black", fontWeight: "bold" }}>
                                                20th June 2018
                                            </span><br />
                                            <span style={{ textalign: "left", color: "gray" }}>
                                                09:00 AM
                                            </span>
                                        </Col>
                                        <Col md={9} >

                                        </Col>
                                    </Row>
                                </Box>
                                <br />
                                <br />
                                <Button onClick={handleClickOpen} style={{ background: "#045195", color: "white", width: "50%", padding: "15px", textTransform: 'none' }} >Confirm and Proceed to Payment</Button>
                                <br />
                                <br />
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item>
                                <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", margin: "15px" }}>
                                    <h5>Payment Summary</h5>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={8} >
                                        {/* <Container style={{ textalign: "left", padding: "5px" }}> */}
                                        <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", marginLeft: "5px" }}>
                                            Fuel Charges
                                        </Row>
                                        {/* </Container> */}
                                    </Col>
                                    <Col md={4} >
                                        <Container style={{ textalign: "left", padding: "5px" }}>
                                            <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195" }}>
                                                $20
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={8} >
                                        {/* <Container style={{ textalign: "left", padding: "5px" }}> */}
                                        <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", marginLeft: "5px" }}>
                                            Delevery Charges
                                        </Row>
                                        {/* </Container> */}
                                    </Col>
                                    <Col md={4} >
                                        <Container style={{ textalign: "left", padding: "5px" }}>
                                            <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195" }}>
                                                $5
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col md={8} >
                                        {/* <Container style={{ textalign: "left",  }}> */}
                                        <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", marginLeft: "5px" }}>
                                            Tax
                                        </Row>
                                        {/* </Container> */}
                                    </Col>
                                    <Col md={4} >
                                        <Container style={{ textalign: "left", padding: "5px" }}>
                                            <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195" }}>
                                                $2
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>

                                <hr />
                                <Row>
                                    <Col md={8} >
                                        {/* <Container style={{ textalign: "left",  }}> */}
                                        <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", marginLeft: "5px" }}>
                                            Amount Payable
                                        </Row>
                                        {/* </Container> */}
                                    </Col>
                                    <Col md={4} >
                                        <Container style={{ textalign: "left", padding: "5px" }}>
                                            <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195" }}>
                                                $27
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                                <hr />
                                <br />
                                <div>
                                    <TextField id="outlined-basic" size="small" label="Add promo code" variant="outlined" />
                                </div>
                                <br /> <br /> <br /> <br /> <br />
                                {/* <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", marginLeft: "15px", marginTop: "35px" }}>
                                    <Row>
                                        <Col md={9}>
                                            <Row style={{ textalign: "left" }}>Logout</Row>
                                        </Col>
                                        <Col md={3} >
                                            <IconButton size="small" >
                                                <PowerSettingsNewIcon sx={{ width: 22, height: 22, color: "#045195" }} />
                                            </IconButton>
                                        </Col>
                                    </Row>
                                </Row> */}
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", margin: "15px" }}>
                            <h5>Select Payment Method</h5>
                        </Row>
                    </DialogTitle>
                    <DialogContent>
                        <hr />
                        <Row>
                            {/* <Container style={{ textalign: "left" }}> */}
                            <span style={{ textalign: "left", color: "#045195", marginLeft: "10px" }}>
                                <PaymentIcon style={{ marginRight: "10px" }} />Paypal
                            </span>
                            {/* </Container> */}
                        </Row>
                        <hr />
                        <Row>
                            {/* <Container style={{ textalign: "left" }}> */}
                            <span style={{ textalign: "left", color: "#045195", marginLeft: "10px" }}>
                                <PaymentIcon style={{ marginRight: "10px" }} />Credit Card
                            </span>
                            {/* </Container> */}
                        </Row>
                        <hr />
                        <Row>
                            {/* <Container style={{ textalign: "left" }}> */}
                            <span style={{ textalign: "left", color: "#045195", marginLeft: "10px" }}>
                                <PaymentIcon style={{ marginRight: "10px" }} />Cash on Delivery
                            </span>
                            {/* </Container> */}
                        </Row>
                        <hr />
                    </DialogContent>
                    <DialogActions >
                        <Grid container alignItems="center"
                            justifyContent="center">
                            <Button onClick={handleClickpaymentOpen} style={{ background: "#045195", color: "white", width: "50%", padding: "10px", textTransform: 'none' }} >Next</Button>
                        </Grid>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={paymentopen}
                    onClose={handlepaymentClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", margin: "15px" }}>
                            <h5>UPI Payment</h5>
                        </Row>
                    </DialogTitle>
                    <DialogContent>

                        <Row>
                            <TextField id="outlined-basic" size="small" label="Account Holder's Name" variant="outlined" />
                        </Row>
                        <br />
                        <Row>
                            <TextField id="outlined-basic" size="small" label="UPI ID" variant="outlined" />
                        </Row>

                    </DialogContent>
                    <DialogActions >
                        <Grid container alignItems="center"
                            justifyContent="center">
                            <Button onClick={handleClickbookingOpen} style={{ background: "#045195", color: "white", width: "50%", padding: "10px", textTransform: 'none' }} >Next</Button>
                        </Grid>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={bookingopen}
                    onClose={handlebookingClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        <img height={180} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hc2KsHgUySUoECEp8odE8R1-QtArhKDhvw&usqp=CAU' />
                        <Row style={{ fontWeight: "bold", color: "black", margin: "15px" }}>
                            <h5>Booking confirmed</h5>
                        </Row>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container alignItems="center"
                            justifyContent="center">
                            <span style={{ color: "black", fontSize: "12px" }} > Hey Samantha, Sit back & relex.</span>
                        </Grid>
                        <Grid container alignItems="center"
                            justifyContent="center">
                            <span style={{ fontWeight: "bold", color: "gray", fontSize: "12px" }}> Your request for Fuel is confirmed.
                            </span>
                        </Grid>
                        <Grid container alignItems="center"
                            justifyContent="center">
                            <p style={{ fontWeight: "bold", color: "gray", margin: "15px" }}> Have a great day</p>

                        </Grid>
                    </DialogContent>
                    <DialogActions >
                        <Grid container alignItems="center"
                            justifyContent="center">
                            <Button onClick={handleClickreviewOpen} style={{ background: "#045195", color: "white", width: "50%", padding: "10px", textTransform: 'none' }} >Go Back</Button>
                        </Grid>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={reviewopen}
                    onClose={handlereviewClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        <Grid container alignItems="center"
                            justifyContent="center">
                            <h5 style={{ fontWeight: "bold", color: "#045195", margin: "15px" }}>Give Review</h5>

                        </Grid>
                        <br />
                        <Grid container alignItems="center"
                            justifyContent="center">
                            <Rating size="large" name="no-value" value={null} />
                        </Grid>

                    </DialogTitle>
                    <DialogContent>
                        <br />
                        <Grid container alignItems="center"
                            justifyContent="center">
                            <TextField
                                id="outlined-multiline-static"
                                label="Let us know your experince"
                                multiline
                                rows={5}
                                variant="outlined"
                            />
                        </Grid>
                    </DialogContent>
                    <DialogActions >
                        <Grid container alignItems="center"
                            justifyContent="center">
                            <Button onClick={handlereviewClose} style={{ background: "#045195", color: "white", width: "50%", padding: "10px", textTransform: 'none' }} >Submit</Button>
                        </Grid>
                    </DialogActions>
                </Dialog>
            </Container>
        </>

    );
}
