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
import axios from 'axios';
import { useEffect, useState } from 'react';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
// const [canLoginTruedata, setcanLoginTruedata] = useState([]);
export default function Profile() {
    const AuthStr = window.localStorage.getItem("token");
    // console.log(AuthStr);
    const [profiledata, setProfileData] = useState([]);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [number, setNumber] = useState('');


    useEffect(() => {
        axios.get("http://3.110.102.129:5001/api/users/profile", {
            headers: { "x-auth-token": AuthStr },
        })
            .then((response) => {
                // console.log(response.data.data);
                setProfileData(response.data.data);
                setFname(response.data.data.firstName);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log("error" + error);
            });
    }, []);
    const editUserHandler = () => {
        console.log(fname);
        axios.put(
            "http://3.110.102.129:5001/api/users/profile",
            {
                firstName: fname,
            },
            {
                headers: { "x-auth-token": AuthStr },
            }
        ).then((response) => {
            console.log(response);
            alert("Profile Updated Successfully")
        })
            .catch((error) => {
                console.log("error" + error);
            });
    }
    return (
        <>
            <Container>
                <Box sx={{ flexGrow: 1, }}>

                    <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", margin: "15px" }}>
                        My Profile
                    </Row>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Item>
                                <img src={logo} height={150} width={150} />
                                <Row style={{ textalign: "left", color: "gray", marginLeft: "15px" }}>
                                    Email Address
                                </Row>
                                {/* <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", marginLeft: "15px" }}> */}
                                {/* <p> {profiledata.email}</p> */}
                                <Form.Control readOnly style={{ background: "transparent", marginLeft: "15px", border: 'none', fontWeight: "bold", color: "#045195" }} value={profiledata.email} />
                                {/* </Row> */}
                                <br />
                                <Row style={{ textalign: "left", color: "gray", marginLeft: "15px" }}>
                                    Phone Number
                                </Row>
                                {/* <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", marginLeft: "15px" }}> */}
                                {/* <p> {profiledata.number}</p> */}
                                <Form.Control readOnly style={{ background: "transparent", marginLeft: "15px", border: 'none', fontWeight: "bold", color: "#045195" }} value={profiledata.number} />
                                {/* </Row> */}
                                <br />
                                <Row style={{ textalign: "left", color: "gray", marginLeft: "15px" }}>
                                    Gender
                                </Row>
                                {/* <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", marginLeft: "15px" }}> */}
                                {/* <p>{profiledata.gender}</p> */}
                                <Form.Control readOnly style={{ background: "transparent", marginLeft: "15px", border: 'none', fontWeight: "bold", color: "#045195" }} value={profiledata.gender} />
                                {/* </Row> */}

                                <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", marginLeft: "15px", marginTop: "35px" }}>
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
                                </Row>
                            </Item>
                            {/* })
                            } */}
                        </Grid>
                        <Grid item xs={9}>

                            <Item>
                                <Row style={{ textalign: "left", fontWeight: "bold", color: "#045195", marginLeft: "15px" }}>
                                    Edit Profile
                                </Row>
                                <br />
                                <br />
                                <br />
                                <br />
                                <Box sx={{ flexGrow: 1 }}>
                                    <Form>
                                        <Grid container style={{ textAlign: "left", padding: "5px" }} spacing={2}>
                                            <Grid item xs={3}>
                                                <Form.Label>Name</Form.Label>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Form.Control type="text" style={{ color: "#045195" }} value={fname} onChange={(e) => {
                                                    setFname(e.target.value);
                                                }} />
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Form.Label>Email </Form.Label>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Form.Control type="text" readOnly style={{ color: "#045195" }} value={profiledata.email} />
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Form.Label>Phone Number</Form.Label>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Row>
                                                    <Col md={3} >
                                                        <Form.Select aria-label="Country" style={{ fontsize: "8px", color: "#045195" }}>
                                                            <option value="+91">+91</option>
                                                            <option value="+1">+1</option>
                                                            <option value="+2">+2</option>
                                                            <option value="+3">+3</option>
                                                        </Form.Select>
                                                    </Col>
                                                    <Col md={9}>
                                                        <Form.Control readOnly type="text" style={{ color: "#045195" }} value={profiledata.number} />
                                                    </Col>
                                                </Row>
                                            </Grid>
                                            <Grid item xs={3}>
                                                <Form.Label>Gender</Form.Label>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Form.Select aria-label="Gender" style={{ color: "#045195" }}>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>
                                                </Form.Select>
                                            </Grid>
                                        </Grid>

                                    </Form>
                                </Box>
                                <br />
                                <br />
                                <Button onClick={editUserHandler} style={{ background: "#045195", color: "white", width: "50%", padding: "15px", textTransform: 'none' }} >Update Profile</Button>
                                <br />
                                <br />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>

    );
}
