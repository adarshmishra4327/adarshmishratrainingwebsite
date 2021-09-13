import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import img1 from '../../../images/portfolio/img-1.jpg';
import img2 from '../../../images/portfolio/img-2.jpg';
import img3 from '../../../images/portfolio/img-3.jpg';
import img4 from '../../../images/portfolio/img-4.jpg';

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDiv: "all"
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section" id="portfolio">
                    <div className="container">
                        <Row className="justify-content-center">
                            <Col lg="7">
                                <div className="title text-center mb-5">
                                    <p className="text-uppercase text-muted mb-2 f-13 subtitle">Latest Courses</p>
                                    <h3>Courses </h3>
                                    <p className="text-muted mt-3">Dantes remained confused and silent by this explanation of the thoughts which had unconsciously been working in his mind, or rather soul.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="vertical-content mt-3 mb-3">


                            <Col lg="9">
                                <Row className="container-grid projects-wrapper">
                                    {this.state.currentDiv === "development" || this.state.currentDiv === "branding" || this.state.currentDiv === "all" ?
                                        <Col lg="6" >
                                            <div className="item-box mt-4">
                                                <Link className="mfp-image" to={img1} title="">
                                                    <img className="item-container img-fluid mx-auto" src='https://images.unsplash.com/photo-1545670723-196ed0954986?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="1" />
                                                    <div className="item-mask">
                                                        <div className="item-caption text-white text-center">
                                                            <div className="mb-4">
                                                                <i className="pe-7s-expand1 h2"></i>
                                                            </div>
                                                            <h5>Software Development</h5>
                                                            <p className="text-uppercase">Javascript , Python </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Col>
                                        : null}

                                    {this.state.currentDiv === "development" || this.state.currentDiv === "designing" || this.state.currentDiv === "all" ?
                                        <Col lg="6">
                                            <div className="item-box mt-4">
                                                <Link className="mfp-image" to={img2} title="">
                                                    <img className="item-container img-fluid mx-auto" src='https://images.unsplash.com/photo-1529257970492-611e6f055357?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByZW1pZXJlJTIwcHJvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="1" />
                                                    <div className="item-mask">
                                                        <div className="item-caption text-white text-center">
                                                            <div className="mb-4">
                                                                <i className="pe-7s-expand1 h2"></i>
                                                            </div>
                                                            <h5>Graphic Design</h5>
                                                            <p className="text-uppercase">photoshop  , premiere pro</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Col>
                                        : null}


                                    {this.state.currentDiv === "development" || this.state.currentDiv === "branding" || this.state.currentDiv === "all" ?
                                        <Col lg="6" >
                                            <div className="item-box mt-4">
                                                <Link className="mfp-image" to={img3} title="">
                                                    <img className="item-container img-fluid mx-auto" src='https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="1" />
                                                    <div className="item-mask">
                                                        <div className="item-caption text-white text-center">
                                                            <div className="mb-4">
                                                                <i className="pe-7s-expand1 h2"></i>
                                                            </div>
                                                            <h5>Digital Marketing</h5>
                                                            <p className="text-uppercase">Blogging , Posting </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Col>
                                        : null}

                                    {this.state.currentDiv === "branding" || this.state.currentDiv === "designing" || this.state.currentDiv === "all" ?
                                        <Col lg="6">
                                            <div className="item-box mt-4">
                                                <Link className="mfp-image" to={img4} title="">
                                                    <img className="item-container img-fluid mx-auto" src='https://images.unsplash.com/photo-1591238372338-22d30c883a86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvbXB1dGVyJTIwaGFyZHdhcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="1" />
                                                    <div className="item-mask">
                                                        <div className="item-caption text-white text-center">
                                                            <div className="mb-4">
                                                                <i className="pe-7s-expand1 h2"></i>
                                                            </div>
                                                            <h5>Hardware & Networking</h5>
                                                            <p className="text-uppercase">Hardware , Networking</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </Col>
                                        : null}
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Portfolio;


