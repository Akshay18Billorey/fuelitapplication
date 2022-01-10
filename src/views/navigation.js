import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SettingsIcon from '@mui/icons-material/Settings';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
function refreshMessages() {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    return Array.from(new Array(50)).map(
        () => messageExamples[getRandomInt(messageExamples.length)],
    );
}

export default function FixedBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const [messages, setMessages] = React.useState(() => refreshMessages());

    React.useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
        setMessages(refreshMessages());
    }, [value, setMessages]);

    return (
        <>
            <Box ref={ref}>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <CssBaseline />
                        <List>
                            {messages.map(({ primary, secondary, person }, index) => (
                                <ListItem button key={index + person}>
                                    <ListItemAvatar>
                                        <Avatar alt="Profile Picture" src={person} />
                                    </ListItemAvatar>
                                    <ListItemText primary={primary} secondary={secondary} />
                                </ListItem>
                            ))}
                        </List>
                        {/* <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}> */}
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        >
                            <BottomNavigationAction style={{ color: 'blue' }} label="Select Machine" icon={<Avatar sx={{ background: '#444250', color: '#35c3b4', width: 60, height: 60 }}><DirectionsCarIcon /></Avatar>} />
                            <BottomNavigationAction style={{ color: 'blue' }} label="Select Fuel" icon={<Avatar sx={{ background: '#444250', color: '#35c3b4', width: 60, height: 60 }}><SettingsIcon /></Avatar>} />
                            <BottomNavigationAction style={{ color: 'blue' }} label="Select Date" icon={<Avatar sx={{ background: '#444250', color: '#35c3b4', width: 60, height: 60 }}><TimerOutlinedIcon /></Avatar>} />
                            <BottomNavigationAction style={{ color: 'blue' }} label="Service Location" icon={<Avatar sx={{ background: '#444250', color: '#35c3b4', width: 60, height: 60 }}><LocationOnIcon /></Avatar>} />

                            {/* <BottomNavigationAction style={{ color: 'blue' }} label="Recents" icon={<Avatar sx={{ background: '#444250', color: '#35c3b4', width: 60, height: 60 }}><RestoreIcon /></Avatar>} />
                            <BottomNavigationAction style={{ color: 'blue' }} label="Favorites" icon={<Avatar sx={{ background: '#444250', color: '#35c3b4', width: 60, height: 60 }}><FavoriteIcon /></Avatar>} />
                            <BottomNavigationAction style={{ color: 'blue' }} label="Archive" icon={<Avatar sx={{ background: '#444250', color: '#35c3b4', width: 60, height: 60 }}><ArchiveIcon /></Avatar>} /> */}
                        </BottomNavigation>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

const messageExamples = [
    {
        primary: 'Brunch this week?',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    },
    {
        primary: 'Birthday Gift',
        secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        primary: 'Recipe to try',
        secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
        person: '/static/images/avatar/2.jpg',
    },
    {
        primary: 'Yes!',
        secondary: 'I have the tickets to the ReactConf for this year.',
        person: '/static/images/avatar/3.jpg',
    },
    {
        primary: "Doctor's Appointment",
        secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
        person: '/static/images/avatar/4.jpg',
    },
    {
        primary: 'Discussion',
        secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
        person: '/static/images/avatar/5.jpg',
    },
    {
        primary: 'Summer BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
];
