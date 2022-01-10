import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ButtonGroup from '@mui/material/ButtonGroup';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SettingsIcon from '@mui/icons-material/Settings';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import { Container } from 'react-bootstrap';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Row } from "react-bootstrap";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DialogContentText from '@mui/material/DialogContentText';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import placeholder from '../logo.svg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
// import Calendar from 'react-calendar';
import DatePicker from 'sassy-datepicker';
// import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Modal from 'react-modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import StaticTimePicker from '@mui/lab/StaticTimePicker';
import TimePicker from 'react-time-picker';
import ClockPicker from '@mui/lab/ClockPicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticTimePicker from '@mui/lab/StaticTimePicker';
import axios from 'axios';
import { ButtonToolbar } from 'react-bootstrap';
import { useEffect } from 'react';
// import makeStyles from '@material-ui/core';
import './imagestyle.css';
// import 'react-calendar/dist/Calendar.css';
const Input = styled('input')({
    display: 'none',
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: "#045195",
                        // color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};




SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};
const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleCloseSimpleDialog = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };
    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
    return (
        <Dialog onClose={handleCloseSimpleDialog} open={open}>
            <DialogTitle>Set backup account</DialogTitle>
            <List sx={{ pt: 0 }}>
                {emails.map((email) => (
                    <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} />
                    </ListItem>
                ))}

                <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                    <ListItemAvatar>
                        <Avatar>
                            <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Add account" />
                </ListItem>
            </List>
        </Dialog>
    );
}
export default function SimpleBottomNavigation() {
    const AuthStr = window.localStorage.getItem("token");
    // const [value, onChange] = useState(new Date());
    const [isModalSelectFuelOpen, setIsModalSelectFuelOpen] = useState(false)
    const [isModalSelectQuantityOpen, setIsModalSelectQuantityOpen] = useState(false)
    const [isModalSelectMachinOpen, setIsModalSelectMachinOpen] = useState(false)
    const [isModalSelectTimeOpen, setIsModalSelectTimeOpen] = useState(false)
    const [isModalSelectDateOpen, setIsModalSelectDateOpen] = useState(false)
    const [isModalServiceLocationOpen, setIsModalServiceLocationOpen] = useState(false)
    const [timepickervalue, settimepickerValue] = React.useState(new Date());
    const [openSimpleDialog, setOpenSimpleDialog] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
    const [timevalue, onTimeChange] = useState('10:00');
    const [fuelQuantity, setfuelQuantity] = useState();
    const handleClickOpenSimpleDialog = () => {
        setOpenSimpleDialog(true);
    };

    const handleCloseSimpleDialog = (value) => {
        setOpenSimpleDialog(false);
        setSelectedValue(value);
    };


    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [{ alt, src }, setImg] = useState({
        src: placeholder,
        alt: 'Upload an Image'
    });

    const handleImg = (e) => {
        if (e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });
        }
    }
    const [openSelect, setopenSelect] = React.useState(false);
    const handleCloseSelect = () => {
        setopenSelect(false);
    };

    const handleRequestFuel = () => {
        console.log("false");
        axios.post("http://3.110.102.129:5001/api/orders",
            {
                // machine: "driver machine 2",
                // address: "test1 address",
                // serviceDate: "20-10-21",
                // serviceTime: "9AM",
                // fuelType: "Petrol",
                // quantity: "300",
                // status: "Pending",
                // amountPaid: 7000
                machine: selectedmachintype,
                address: "test1 address",
                serviceDate: date,
                serviceTime: timepickervalue,
                fuelType: FuelTypeName,
                quantity: fuelQuantity,
                status: "Pending",
                amountPaid: Amount
            },
            {
                headers: { "x-auth-token": AuthStr },
            }).then((response) => {
                console.log(response);
                SetFuelstype(response.data.data);
            })
    };

    const [calvalue, oncalvalueChange] = useState(new Date());
    const [fuelstype, SetFuelstype] = useState([]);
    const [machintype, SetMachintype] = useState([]);
    const [selectedmachintype, SetSelectedMachintype] = useState();
    const [selectedfuelntype, SetSelectedFueltype] = useState();
    const [date, setDate] = useState(new Date());
    const [FuelTypeName, SetFuelTypeName] = useState();
    const [FuelTypePrice, SetFuelTypePrice] = useState();
    const numbers = [1, 2, 3, 4, 5];
    useEffect(() => {
        axios.get("http://3.110.102.129:5001/api/fuels", {
            headers: { "x-auth-token": AuthStr },
        }).then((response) => {
            console.log(response);
            SetFuelstype(response.data.data);
        })
        axios.get("http://3.110.102.129:5001/api/machines", {
            headers: { "x-auth-token": AuthStr },
        }).then((response) => {
            console.log(response);
            SetMachintype(response.data.data);
        })
    }, []);
    // console.log(fuelstype);
    // console.log(machintype);
    const handleMachinTypeChange = (e) => {
        SetSelectedMachintype(e.target.value);
    }
    const handleFuelTypeChange = (e) => {
        // SetSelectedFueltype("e.target.value");
        console.log(e.target.value);
        const id = e.target.value;
        axios.get("http://3.110.102.129:5001/api/fuels/" + id, {
            headers: { "x-auth-token": AuthStr },
        }).then((response) => {
            console.log(response.data.data);
            console.log(response.data.data.name);
            console.log(response.data.data.price);
            SetFuelTypeName(response.data.data.name);
            SetFuelTypePrice(response.data.data.price);
            // const fuelsname = response.data.data.name;
            // const fuelsprice = response.data.data.price;
            // console.log(fuelsname);
            // console.log(fuelsprice);
        })
    }
    const FuelQuantityHandler = (e) => {
        setfuelQuantity(e.target.value);
    };
    console.log(date);
    console.log("Price", FuelTypePrice);
    console.log("Name", FuelTypeName);
    console.log(timepickervalue);
    console.log(fuelQuantity);
    const Amount = FuelTypePrice * fuelQuantity;
    console.log(Amount);
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8} style={{ textAlign: "center" }}>
                    <Box style={{ background: "white", marginTop: "-10px", padding: '25px', border: '1px solid gray', borderRadius: 16 }}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        >
                            <BottomNavigationAction onClick={e => { setIsModalSelectMachinOpen(true) }} style={{ color: 'blue' }} label="Select Machine" icon={<Avatar sx={{ background: '#444250', color: '#35c3b4', width: 60, height: 60 }}><DirectionsCarIcon /></Avatar>} />
                            <BottomNavigationAction onClick={e => { setIsModalSelectFuelOpen(true) }} style={{ color: 'blue' }} label="Select Fuel" icon={<Avatar sx={{ background: '#444250', color: '#35c3b4', width: 60, height: 60 }}><SettingsIcon /></Avatar>} />
                            <BottomNavigationAction onClick={e => { setIsModalSelectQuantityOpen(true) }} style={{ color: 'blue' }} label="Choose Quantity" icon={<Avatar sx={{ background: '#444250', color: '#35c3b4', width: 60, height: 60 }}><SettingsIcon /></Avatar>} />
                            <BottomNavigationAction onClick={e => { setIsModalSelectDateOpen(true) }} style={{ color: 'blue' }} label="Select Date" icon={<Avatar sx={{ background: '#444250', color: '#35c3b4', width: 60, height: 60 }}><TimerOutlinedIcon /></Avatar>} />
                            <BottomNavigationAction onClick={e => { setIsModalServiceLocationOpen(true) }} style={{ color: 'blue' }} label="Service Location" icon={<Avatar sx={{ background: '#444250', color: '#35c3b4', width: 60, height: 60 }}><LocationOnIcon /></Avatar>} />
                        </BottomNavigation>
                        <br />
                    </Box>
                    <Button onClick={handleRequestFuel} style={{ background: "#045195", padding: "15px", marginTop: "-25px", color: "white", width: "40%" }} >Request Fuel</Button>
                </Grid>
                <Modal
                    isOpen={isModalSelectFuelOpen}
                    onRequestClose={() => setIsModalSelectFuelOpen(false)}
                    style={{
                        overlay: {
                            zIndex: 10,
                            display: 'flex',
                            justifyContent: 'left',
                            background: 'rgba(0,0,0,0.5)'
                        },
                        content: {
                            height: '60%',
                            width: '25%',
                            position: 'fixed',
                            alignSelf: 'center',
                            top: "25%",
                            bottom: 0,
                            left: "32%",
                            right: 0,
                            background: "#e3e3e3",
                            border: '2px solid white',
                            borderRadius: 16,
                        }
                    }}
                >
                    <div>
                        {/* fuelstype */}
                        <Grid>
                            <Grid item>
                                <List>
                                    {
                                        fuelstype.map((number) =>
                                            <ListItem >
                                                <table class="table">
                                                    <tr>
                                                        <th scope="row">
                                                            <ListItemAvatar>
                                                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                                                    <PersonIcon />
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                        </th>
                                                        <td style={{ textAligne: "left" }}>
                                                            <ListItemText>{number.name}</ListItemText>
                                                        </td>
                                                        <td>
                                                            <input class="form-check-input" type="radio" name="fueltyperadio" value={number._id} onChange={handleFuelTypeChange} />
                                                        </td>
                                                    </tr>
                                                </table>
                                            </ListItem>
                                        )
                                    }
                                </List>
                            </Grid>
                        </Grid>
                    </div>
                </Modal>
                <Modal
                    isOpen={isModalSelectQuantityOpen}
                    onRequestClose={() => setIsModalSelectQuantityOpen(false)}
                    style={{
                        overlay: {
                            zIndex: 10,
                            display: 'flex',
                            justifyContent: 'left',
                            background: 'rgba(0,0,0,0.5)'
                        },
                        content: {
                            height: '60%',
                            width: '25%',
                            position: 'fixed',
                            alignSelf: 'center',
                            top: "25%",
                            bottom: 0,
                            left: "37%",
                            right: 0,
                            background: "#e3e3e3",
                            border: '2px solid white',
                            borderRadius: 16,
                        }
                    }}
                >
                    <div>
                        <h2>Chose Quantity</h2>
                        <Grid>
                            <Grid item>
                                <Row>
                                    <Col>
                                        <Button variant='outlined' style={{ width: "100%", margin: "5px" }} value="10" onClick={FuelQuantityHandler}>10 Ltr</Button>
                                    </Col>
                                    <Col>
                                        <Button variant='outlined' style={{ width: "100%", margin: "5px" }} value="20" onClick={FuelQuantityHandler}>20 Ltr</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button variant='outlined' style={{ width: "100%", margin: "5px" }} value="30" onClick={FuelQuantityHandler}>30 Ltr</Button>
                                    </Col>
                                    <Col>
                                        <Button variant='outlined' style={{ width: "100%", margin: "5px" }} value="50" onClick={FuelQuantityHandler}>50 Ltr</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button variant='outlined' style={{ width: "100%", margin: "5px" }} value="100" onClick={FuelQuantityHandler}>100 Ltr</Button>
                                    </Col>
                                    <Col>
                                    </Col>
                                </Row>
                                {/* <div>
                                    <Button variant='outlined' style={{ width: "100%", margin: "5px" }} value="10" onClick={FuelQuantityHandler}>10 Ltr</Button>
                                    <Button variant='outlined' style={{ width: "100%", margin: "5px" }} value="20" onClick={FuelQuantityHandler}>20 Ltr</Button>
                                    <Button variant='outlined' style={{ width: "100%", margin: "5px" }} value="30" onClick={FuelQuantityHandler}>30 Ltr</Button>
                                    <Button variant='outlined' style={{ width: "100%", margin: "5px" }} value="40" onClick={FuelQuantityHandler}>40 Ltr</Button>
                                </div> */}
                                <div style={{ marginTop: "5px" }}>
                                    <TextField fullWidth id="outlined-basic" onChange={FuelQuantityHandler} size="small" label="Custom Quantity Type Here..." variant="outlined" />
                                </div>
                                <Button style={{ background: "#045195", fontSize: "16px", color: "white", fontWeight: "600", marginTop: "10px", width: "100%", padding: "5px", textTransform: 'none' }} >Submit</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Modal>
                <Modal
                    isOpen={isModalSelectMachinOpen}
                    onRequestClose={() => setIsModalSelectMachinOpen(false)}
                    style={{
                        overlay: {
                            zIndex: 8,
                            display: 'flex',
                            justifyContent: 'left',
                            background: 'rgba(0,0,0,0.5)',
                        },
                        content: {
                            height: '60%',
                            width: '25%',
                            position: 'fixed',
                            alignSelf: 'center',
                            top: "25%",
                            bottom: 0,
                            left: "23%",
                            right: 0,
                            background: "#e3e3e3",
                            border: '2px solid white',
                            borderRadius: 16,
                        }
                    }}
                >
                    <div>
                        <List>
                            {
                                machintype.map((machin) =>
                                    <ListItem >
                                        <table class="table">
                                            <tr>
                                                <th scope="row">
                                                    <ListItemAvatar>
                                                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                                            <PersonIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                </th>
                                                <td style={{ textAligne: "left" }}>
                                                    {/* <ListItemText>{number.number}</ListItemText> */}
                                                    <ListItemText>{machin.number}<br /><spam style={{ fontSize: "12px" }}>{machin.fuelType}</spam></ListItemText>
                                                </td>
                                                <td>
                                                    <input class="form-check-input" type="radio" name="fueltyperadio" value={machin.number} onChange={handleMachinTypeChange} />
                                                </td>
                                            </tr>
                                        </table>
                                    </ListItem>
                                )
                            }
                        </List>
                        {/* <List>
                            {
                                fuelstype.map((machin) =>
                                    <ListItem>
                                        <table class="table">
                                            <tr style={{ textalign: "left" }}>
                                                <th scope="row">
                                                    <ListItemAvatar>
                                                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                                            <PersonIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                </th>
                                                <td>
                                                    <ListItemText>{machin.name}<br /><spam style={{ fontSize: "12px" }}>{machin.model}</spam></ListItemText>
                                                </td>
                                                <td>
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" value={machin.name} onChange={handleMachinTypeChange} />
                                                </td>
                                            </tr>
                                        </table>
                                    </ListItem>
                                )
                            }
                            <ListItem control={<Radio />}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AddIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Add new car" />
                            </ListItem>
                        </List> */}
                    </div>
                </Modal>
                <Modal
                    isOpen={isModalSelectDateOpen}
                    onRequestClose={() => setIsModalSelectDateOpen(false)}
                    style={{
                        overlay: {
                            zIndex: 8,
                            display: 'flex',
                            justifyContent: 'left',
                            background: 'rgba(0,0,0,0.5)'
                        },
                        content: {
                            height: '60%',
                            width: '25%',
                            position: 'fixed',
                            alignSelf: 'center',
                            top: "25%",
                            bottom: 0,
                            left: "44%",
                            right: 0,
                            background: "#e3e3e3",
                            border: '2px solid white',
                            borderRadius: 16,
                        }
                    }}
                >
                    <div>
                        <ButtonGroup disableElevation variant="contained" style={{ width: "100%", border: "1px solid gray" }}>
                            <Button onClick={e => { setIsModalSelectDateOpen(true) }} style={{ background: "#045195", fontSize: "16px", color: "white", fontWeight: "600", width: "50%", padding: "5px", textTransform: 'none' }} >Date</Button>
                            <Button onClick={e => { setIsModalSelectTimeOpen(true) }} style={{ background: "white", fontSize: "16px", color: "black", fontWeight: "600", width: "50%", padding: "5px", textTransform: 'none' }} >Time</Button>
                        </ButtonGroup>
                        <DatePicker
                            style={{ marginTop: "5px", width: "100%", border: "1px solid gray" }}
                            selected={date}
                            onChange={(date) => setDate(date)}
                        />
                    </div>
                </Modal>
                <Modal
                    isOpen={isModalSelectTimeOpen}
                    onRequestClose={() => setIsModalSelectTimeOpen(false)}
                    style={{
                        overlay: {
                            zIndex: 8,
                            display: 'flex',
                            justifyContent: 'left',
                            background: 'rgba(0,0,0,0.5)'
                        },
                        content: {
                            height: '60%',
                            width: '25%',
                            position: 'fixed',
                            alignSelf: 'center',
                            top: "25%",
                            bottom: 0,
                            left: "44%",
                            right: 0,
                            background: "#e3e3e3",
                            border: '2px solid white',
                            borderRadius: 16,
                        }
                    }}
                >
                    <div>
                        <ButtonGroup disableElevation variant="contained" style={{ width: "100%", border: "1px solid gray" }}>
                            <Button onClick={e => { setIsModalSelectDateOpen(true); setIsModalSelectTimeOpen(false) }} style={{ background: "white", fontSize: "16px", color: "black", fontWeight: "600", width: "50%", padding: "5px", textTransform: 'none' }} >Date</Button>
                            <Button onClick={e => { setIsModalSelectTimeOpen(true); setIsModalSelectDateOpen(false) }} style={{ background: "#045195", fontSize: "16px", color: "white", fontWeight: "600", width: "50%", padding: "5px", textTransform: 'none' }} >Time</Button>
                        </ButtonGroup>
                        <LocalizationProvider dateAdapter={AdapterDateFns} style={{ marginTop: "5px", width: "150px", border: "1px solid gray" }}>
                            <StaticTimePicker
                                displayStaticWrapperAs="mobile"
                                value={timepickervalue}
                                onChange={(newValue) => {
                                    settimepickerValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        {/* <TimePicker
                            onChange={onTimeChange}
                            value={timevalue}
                        /> */}
                        {/* <DatePicker style={{ marginTop: "5px", width: "100%", border: "1px solid gray" }} /> */}
                    </div>
                </Modal>
                <Modal
                    isOpen={isModalServiceLocationOpen}
                    onRequestClose={() => setIsModalServiceLocationOpen(false)}
                    style={{
                        overlay: {
                            zIndex: 8,
                            display: 'flex',
                            justifyContent: 'left',
                            background: 'rgba(0,0,0,0.5)'
                        },
                        content: {
                            height: '60%',
                            width: '25%',
                            position: 'fixed',
                            alignSelf: 'center',
                            top: "25%",
                            bottom: 0,
                            left: "52%",
                            right: 0,
                            background: "#e3e3e3",
                            border: '2px solid white',
                            borderRadius: 16,
                        }
                    }}
                >
                    <div>
                        <Grid>
                            <Row>
                                <Col md={3}>
                                    <Avatar sx={{ background: '#444250', color: '#35c3b4', width: 50, height: 50 }}><LocationOnIcon /> </Avatar>
                                </Col>
                                <Col md={9}><p style={{ paddingTop: "12px", fontWeight: "bold", color: "black" }}>Service Location</p> </Col>
                            </Row>
                        </Grid>
                        <div style={{ paddingTop: "10px" }}>
                            <TextField fullWidth id="outlined-basic" size="small" label="Search your service location" variant="outlined" />
                        </div>
                    </div>
                </Modal>
                <Grid item xs={2}>
                </Grid>


                <SimpleDialog
                    selectedValue={selectedValue}
                    open={openSimpleDialog}
                    onClose={handleCloseSimpleDialog}
                />
            </Grid >
            {/* <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="xs"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Grid container alignItems="center"
                        justifyContent="center">
                        <h5 style={{ fontWeight: "bold", color: "#045195" }}>Add Machine</h5>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <form encType="multipart/form-data">
                        <div className="form__img-input-container">
                            <input
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                id="photo"
                                className="visually-hidden"
                                onChange={handleImg}
                            />
                            <label htmlFor="photo" className="form-img__file-label">
                            </label>
                            <img src={src} alt={alt} className="form-img__img-preview" />
                        </div>
                    </form>
                    <DialogContentText id="alert-dialog-description" pt={1}>
                        <TextField fullWidth id="outlined-basic" size="small" label="Add Machine Make" variant="outlined" />
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" pt={1}>
                        <TextField fullWidth id="outlined-basic" size="small" label="Add Machine Model" variant="outlined" />
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" pt={1}>
                        <TextField fullWidth id="outlined-basic" size="small" label="Add Machine Type" variant="outlined" />
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" pt={1}>
                        <TextField fullWidth id="outlined-basic" size="small" label="Add Machine Number" variant="outlined" />
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" pt={1}>
                        <TextField fullWidth id="outlined-basic" size="small" label="Add Machine Fuel Type" variant="outlined" />
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" pt={1}>
                        <TextField fullWidth id="outlined-basic" size="small" label="Add Machine Quantity" variant="outlined" />
                    </DialogContentText>
                    <DialogContentText alignItems="center" pt={1}>
                        <Grid container alignItems="center"
                            justifyContent="center" >
                            <Button onClick={handleClose} style={{ background: "#045195", color: "white", width: "50%", padding: "10px", textTransform: 'none' }} >Go Back</Button>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
            </Dialog> */}


            <Dialog
                open={openSelect}
                onClose={handleCloseSelect}
            >
                <DialogContent style={{ background: 'lightgray' }}>
                    <List sx={{ pt: 0 }}>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Vanquish S Aston Martine<br /><p style={{ fontSize: "12px" }}>FYD 6778</p></ListItemText>
                        </ListItem>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>BMW M4<br /><p style={{ fontSize: "12px" }}>MYS 5521</p></ListItemText>
                        </ListItem>


                        <ListItem autoFocus button>
                            <ListItemAvatar>
                                <Avatar>
                                    <AddIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Add new car" />
                        </ListItem>
                    </List>
                </DialogContent>
            </Dialog>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth
                maxWidth="xs"
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Grid container alignItems="center"
                        justifyContent="center">
                        <h5 style={{ fontWeight: "bold", color: "#045195" }}>Add Machine</h5>
                    </Grid>
                </BootstrapDialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <form encType="multipart/form-data">
                            <div className="form__img-input-container">
                                <input
                                    type="file"
                                    accept=".png, .jpg, .jpeg"
                                    id="photo"
                                    className="visually-hidden"
                                    onChange={handleImg}
                                />
                                <label htmlFor="photo" className="form-img__file-label">
                                </label>
                                <img src={src} alt={alt} className="form-img__img-preview" />
                            </div>
                        </form>
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" pt={1}>
                        <TextField fullWidth id="outlined-basic" size="small" label="Add Machine Make" variant="outlined" />
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" pt={1}>
                        <TextField fullWidth id="outlined-basic" size="small" label="Add Machine Model" variant="outlined" />
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" pt={1}>
                        <TextField fullWidth id="outlined-basic" size="small" label="Add Machine Type" variant="outlined" />
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" pt={1}>
                        <TextField fullWidth id="outlined-basic" size="small" label="Add Machine Number" variant="outlined" />
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" pt={1}>
                        <TextField fullWidth id="outlined-basic" size="small" label="Add Machine Fuel Type" variant="outlined" />
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" pt={1}>
                        <TextField fullWidth id="outlined-basic" size="small" label="Add Machine Quantity" variant="outlined" />
                    </DialogContentText>
                    <DialogContentText pt={1}>
                        <Grid container alignItems="center"
                            justifyContent="center" >
                            <Button onClick={handleClose} style={{ background: "#045195", color: "white", width: "50%", padding: "7px", textTransform: 'none' }} >Save</Button>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
            </BootstrapDialog>
        </>
    );
}
