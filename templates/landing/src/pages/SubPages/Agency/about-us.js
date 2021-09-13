import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import img1 from '../../../images/agency-about/img-1.jpg';
import img2 from '../../../images/agency-about/img-2.jpg';

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="about">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg="7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">About us</p>
                                    <h3>Who We Are</h3>
                                </div>
                            </Col>
                        </Row>
                        <Row className="vertical-content mt-4">
                            <Col lg="7">
                                <Row>
                                    <Col lg="6">
                                        <div className="agency-about-img">
                                            <img src="https://images.unsplash.com/photo-1607968565043-36af90dde238?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGl2ZSUyMHN0cmVhbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid mx-auto d-block" />
                                            <div className="agency-about-img-desc text-center text-white">
                                                <h5 className="mt-3 f-17">Online Live </h5>
                                                <p>This is available in Weekend.</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="6">
                                        <div className="agency-about-img mt-5">
                                            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGVkdWNhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid mx-auto d-block" />
                                            <div className="agency-about-img-desc text-center text-white">
                                                <h5 className="mt-3 f-17">Recorded Video </h5>
                                                <p>It is available on website and app.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="5">
                                <div className="about-content p-4">
                                    <h6 className="mb-4">A Online IT  Training Portal</h6>
                                    <p className="text-muted">It is a long established fact that a reader will be distracted by the readable content of a page looking at its layout. The point of using Lorem Ipsum is that it has a normal distribution of letters.</p>
                                    <div className="pt-4">
                                        <Link to="#" className="btn btn-custom"> <i className="mdi mdi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default AboutUs;


