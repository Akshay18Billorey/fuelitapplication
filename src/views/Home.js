import React from 'react'
import { Box } from '@mui/material';
import { Container } from 'react-bootstrap';
import SimpleBottomNavigation from './BottomNavigation';
// import FormDialog from './register';
// import SimpleDialogDemo from './login';
// import { BottomNavigation } from '@mui/material';
import bg_img from "./google@2x.png";
function Home() {
    return (
        <Container maxWidth="sm">
            <Box
                class="candles"
                style={{
                    backgroundImage: `url(${bg_img})`,
                    backgroundSize: "cover",
                    height: "80vh",
                    color: "#f5f5f5",
                    borderRadius: 1,
                }}>
            </Box>
            <Box
                class="candles"
                style={{
                    marginTop: "-100px"
                }}>
                <SimpleBottomNavigation />

            </Box>
            {/* <FormDialog />
            <SimpleDialogDemo /> */}
        </Container>
    )
}

export default Home
