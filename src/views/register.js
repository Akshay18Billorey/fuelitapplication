import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { Axios } from 'axios';
import { useState } from 'react';
export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [number, setNumber] = useState('');


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const User_Register = (e) => {
        e.preventDefault();
        axios.post(
            "http://3.110.102.129:5001/api/users",
            {
                firstName: fname,
                lastName: lname,
                email: email,
                gender: gender,
                number: number,
                role: "2",
            }
        ).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Register
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle><h2>Register Your Account</h2></DialogTitle>
                <DialogContent>
                    <Form>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="enter your name" onChange={(e) => {
                                setFname(e.target.value);
                            }} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="enter your email" onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="enter your Mobile Number" onChange={(e) => {
                                setNumber(e.target.value);
                            }} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select aria-label="Gender" onChange={(e) => {
                                setGender(e.target.value);
                            }}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" onChange={(e) => {
                                setLname(e.target.value);
                            }} />
                        </Form.Group>
                    </Form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={User_Register} style={{ background: "blue", color: "white", width: "100%" }}>Register</Button>
                    {/* <Button onClick={handleClose}>Register</Button> */}
                </DialogActions>
            </Dialog>
        </div>
    );
}
