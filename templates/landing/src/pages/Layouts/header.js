import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollspyNav from './Scrollspy';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Form from './Form'

import logo_light from '../../images/adarshmishratraininglogo.jpg';
import logo_dark from '../../images/logo-dark.png';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false, modal: false, loginmodal: false, registermodal: false, isOpenMenu: false };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleregisterModal = this.toggleregisterModal.bind(this);
        this.toggleloginModal = this.toggleloginModal.bind(this);
        this.toggleHeader = this.toggleHeader.bind(this);
    }

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal,

        }));
    }

    toggleregisterModal() {
        this.setState(prevState => ({

            registermodal: !prevState.registermodal,

        }));
    }


    toggleloginModal() {
        this.setState(prevState => ({

            loginmodal: !prevState.loginmodal
        }));
    }

    toggleHeader = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }


    render() {

        return (
            <React.Fragment>

                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}>
                        <h5 id="exampleModalLongTitle">Get in touch</h5>
                    </ModalHeader>
                    <ModalBody className="p-4">
                        <div className="custom-form">
                            <div id="message"></div>
                            <Form />
                        </div>
                    </ModalBody>
                </Modal>



                <Modal isOpen={this.state.registermodal} toggle={this.toggleregisterModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleregisterModal}>
                        <h5 id="exampleModalLongTitle">Create new account</h5>
                    </ModalHeader>
                    <ModalBody className="p-4">
                        <div className="custom-form">
                            <div id="message"></div>
                            <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mb-4">
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Your Name..." />
                                        </div>
                                        <div className="form-group mb-4">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your Email..." />
                                        </div>
                                        <div className="form-group mb-4">
                                            <input name="subject" id="subject" type="text" className="form-control" placeholder="Your Subject..." />
                                        </div>
                                        <div className="form-group">
                                            <input name="subject" id="subject" type="text" className="form-control" placeholder="Mobile no" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-12 text-right">
                                        <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Register" />
                                        <div id="simple-msg"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </ModalBody>
                </Modal>




                <Modal isOpen={this.state.loginmodal} toggle={this.toggleloginModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleloginModal}>
                        <h5 id="exampleModalLongTitle">Login</h5>
                    </ModalHeader>
                    <ModalBody className="p-4">
                        <div className="custom-form">
                            <div id="message"></div>
                            <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group mb-4">
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Your Name..." />
                                        </div>
                                        <div className="form-group mb-4">
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your Email..." />
                                        </div>

                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-12 text-right">
                                        <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Login " />
                                        <div id="simple-msg"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </ModalBody>
                </Modal>


                <div id="is-sticky">
                    <nav id="nav-bar" className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
                        <div className="container">
                            <Link className="logo text-uppercase" to="/">
                                <img src={logo_light} alt="" className="logo-light" height="100" />
                                {/* <img src={logo_dark} alt="" className="logo-dark" height="14" /> */}
                            </Link>
                            <button className="navbar-toggler" type="button" onClick={this.toggleHeader}>
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpenMenu ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarCollapse">

                                <ScrollspyNav
                                    scrollTargetIds={["home", "about", "services", "portfolio", "testimonial", "pricing"]}
                                    activeNavClass="active"
                                    scrollDuration="800"
                                    headerBackground="true"
                                    className={this.state.isOpenMenu ? "navbar-nav ml-0 float-left" : "navbar-nav   ml-auto navbar-center"}>

                                    <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                                        <li className="nav-item active">
                                            <a href="#home" className="nav-link">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#about" className="nav-link">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#services" className="nav-link">Services</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#portfolio" className="nav-link">Courses</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#testimonial" className="nav-link">Testimonial</a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a href="#pricing" className="nav-link">Pricing</a>
                                        </li> */}
                                        <li>
                                            {/* <Link onClick={this.toggleModal} to="#" className="nav-link">Contact</Link> */}
                                            <button onClick={this.toggleModal} className="btn btn-sm navbar-btn float-left">Enroll</button>
                                        </li>
                                    </ul>
                                    {/* <button onClick={this.toggleregisterModal} className="btn btn-sm navbar-btn float-left">Register</button>
                                    <button onClick={this.toggleloginModal} className="btn btn-sm navbar-btn float-left">Login</button> */}
                                </ScrollspyNav>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment >
        );
    }
}

export default Header;


