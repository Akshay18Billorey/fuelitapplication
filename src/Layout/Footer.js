import React, { Component } from 'react'
import { AppBar } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import logo from './logo.png';
export class Footer extends Component {
    render() {
        return (
            // <div>
            <footer class="sticky-footer">
                <br />
                <AppBar position="bottom" style={{ background: "#045195" }}>
                    <Container>
                        <br />
                        <br />
                        <br />
                        <Row >
                            <Col style={{ textAlign: "center" }}><img src={logo} height={100} /></Col>
                            <Col>
                                <Typography variant="body1" color="inherit">
                                    INDUSTRY
                                </Typography>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.<br />
                                    Facilisis facilisis dignissim<br />
                                    eget velit adipiscing.
                                </p>
                            </Col>
                            <Col>
                                <Typography variant="body1" color="inherit">
                                    INFORMATION
                                </Typography>
                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.<br />
                                    Facilisis facilisis dignissim<br />
                                    eget velit adipiscing.
                                </p>
                            </Col>
                            <Col>
                                <Typography variant="body1" color="inherit">
                                    © 2021 FUELIT PVT. LTD.
                                </Typography>
                                <p>Country india USA UAE</p>
                            </Col>
                        </Row>
                        <br />
                        <br />
                    </Container>
                </AppBar>
            </footer>
            // </div>
        )
    }
}
export default Footer


// import React from "react";
// import { AppBar } from "@mui/material";
// import { Container } from "@mui/material";
// import { Typography } from "@mui/material";
// import { Toolbar } from "@mui/material";
// import { Grid } from "@mui/material";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import logo from './logo.png';
// export default function Footer() {
//     return (
//         <AppBar position="bottom" style={{ background: "#045195" }}>
//             <Container>
//                 <br />
//                 <br />
//                 <br />
//                 <Row >
//                     <Col style={{ textAlign: "center" }}><img src={logo} height={100} /></Col>
//                     <Col>
//                         <Typography variant="body1" color="inherit">
//                             INDUSTRY
//                         </Typography>
//                         <p>
//                             Lorem ipsum dolor sit amet,
//                             consectetur adipiscing elit.<br />
//                             Facilisis facilisis dignissim<br />
//                             eget velit adipiscing.
//                         </p>
//                     </Col>
//                     <Col>
//                         <Typography variant="body1" color="inherit">
//                             INFORMATION
//                         </Typography>
//                         <p>
//                             Lorem ipsum dolor sit amet,
//                             consectetur adipiscing elit.<br />
//                             Facilisis facilisis dignissim<br />
//                             eget velit adipiscing.
//                         </p>
//                     </Col>
//                     <Col>
//                         <Typography variant="body1" color="inherit">
//                             © 2021 FUELIT PVT. LTD.
//                         </Typography>
//                         <p>Country india USA UAE</p>
//                     </Col>
//                 </Row>
//                 <br />
//                 <br />
//             </Container>
//         </AppBar>
//     )
// }