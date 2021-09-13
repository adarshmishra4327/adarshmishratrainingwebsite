
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import ScrollUpButton from "react-scroll-up-button";

import '../../css/pe-icon-7.css';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <footer className="bg-footer">
                    <div className="container">
                        <Row>
                            <Col lg="3">
                                <div className="text-white">
                                    <h3 className="mb-4 footer-list-title f-17">Adarsh Mishra Training</h3>
                                    <ul className="footer-icons list-inline mb-4">
                                        <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-facebook"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-twitter"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-instagram"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#" className=""><i className="mdi mdi-google"></i></Link></li>
                                    </ul>
                                    <p className="copyright mt-3">{new Date().getFullYear()} © Adarsh Mishra Training.</p>
                                    <p className="copyright mt-3"> Mobile no:- +91 7363050571, +91 7908999648</p>
                                    <p className="copyright mt-3"> Emailid:- adarshmishra4327@gmail.com</p>
                                </div>
                            </Col>
                            <Col lg="9">
                                <Row>
                                    <Col lg="3">

                                    </Col>
                                    <Col lg="3">
                                        {/* <div>
                                            <p className="text-white mb-4 footer-list-title f-17">Resources</p>
                                            <ul className="list-unstyled footer-list-menu">
                                                <li><Link to="#">Help & Support</Link></li>
                                                <li><Link to="#">Privacy Policy</Link></li>
                                                <li><Link to="#">Terms & Conditions</Link></li>
                                            </ul>
                                        </div> */}
                                    </Col>
                                    <Col lg="3">
                                        {/* <div>
                                            <p className="text-white mb-4 footer-list-title f-17">More Info</p>
                                            <ul className="list-unstyled footer-list-menu">
                                                <li><Link to="#">Pricing</Link></li>
                                                <li><Link to="#">For Marketing</Link></li>
                                                <li><Link to="#">For CEOs </Link></li>
                                                <li><Link to="#">For Agencies</Link></li>
                                                <li><Link to="#">Our Apps</Link></li>
                                            </ul>
                                        </div> */}


                                    </Col>
                                    <Col lg="3">
                                        {/* <div>
                                            <p className="text-white mb-4 footer-list-title f-17">Help center</p>
                                            <ul className="list-unstyled footer-list-menu">
                                                <li><Link to="#">Accounting </Link></li>
                                                <li><Link to="#">Billing</Link></li>
                                                <li><Link to="#">General Question</Link></li>
                                            </ul>
                                        </div> */}
                                        <div>
                                            <p className="text-white mb-4 footer-list-title f-17">Company</p>
                                            <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                                                <li className="nav-item active">
                                                    <a href="#home" className="nav-link">Home</a>
                                                </li>

                                                <li className="nav-item">
                                                    <a href="#services" className="nav-link">Services</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#portfolio" className="nav-link">Courses</a>
                                                </li>

                                                {/* <li className="nav-item">
                                            <a href="#pricing" className="nav-link">Pricing</a>
                                        </li> */}
                                                {/* <li>
                                            <Link onClick={this.toggleModal} to="#" className="nav-link">Contact</Link>
                                        </li> */}
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </footer>
                <ScrollUpButton style={{ width: "30px", height: "30px", position: "fixed", bottom: "10px", right: "20px", padding: "5px", textAlign: "center", zIndex: "10000", borderRadius: "3px", backgroundColor: "rgba(19, 206, 103, 0.7)" }} />

            </React.Fragment >
        );
    }
}

export default Footer;


