import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light" id="services">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg="7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Services</p>
                                    <h3>What We Do</h3>
                                    <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="4">
                                <div className="agency-services-box text-center p-4 bg-white mt-4">
                                    <div className="agency-services-icon">
                                        <i className="pe-7s-monitor display-4"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mt-4 mb-4 f-18">Live Training</h5>
                                        <p className="text-muted">It is a long established fact that a reader will be by the content.</p>
                                        <div>
                                            <Link yo="#" className="text-custom">
                                                <i className="mdi mdi-arrow-right h3"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="agency-services-box text-center p-4 bg-white mt-4">
                                    <div className="agency-services-icon">
                                        <i className="pe-7s-notebook display-4"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mt-4 mb-4 f-18">Online Classes</h5>
                                        <p className="text-muted">The European languages are members of the separate existence</p>
                                        <div>
                                            <Link to="#" className="text-custom">
                                                <i className="mdi mdi-arrow-right h3"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <div className="agency-services-box text-center p-4 bg-white mt-4">
                                    <div className="agency-services-icon">
                                        <i className="pe-7s-exapnd2 display-4"></i>
                                    </div>
                                    <div className="services-desc">
                                        <h5 className="mt-4 mb-4 f-18">Live Sessions</h5>
                                        <p className="text-muted">He lay on his armour-like back, and if he lifted his head a little</p>
                                        <div>
                                            <Link to="#" className="text-custom">
                                                <i className="mdi mdi-arrow-right h3"></i>
                                            </Link>
                                        </div>
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

export default Services;


