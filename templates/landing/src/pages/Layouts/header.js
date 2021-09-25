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
                                <img height="30" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAABhYWGlpaUoKCjIyMg6Ojrz8/P7+/vj4+OwsLB1dXX4+PgcHBzR0dE9PT3b29uVlZXp6em/v7/W1tZKSkoZGRmUlJRFRUWrq6uMjIybm5tycnIICAi2traEhIQwMDBXV1ddXV1RUVH7uHxfAAACwUlEQVR4nO3c65KiMBBAYRQBAVFAZVB0GJ33f8fxsrve8mOnqmN3Ued7g1MmXBJDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA/TNPlJny3zTKdvqUuSbt4pCXu0sR3X7RTy7vaRV4bV/1eOXA02vcrf4HZWjvvYp35CuwK7bY/is5ToP4I/WvvJTFrtLvuNB4G6nyhXfVgMZcOTHLtpie59E3j09IYPWs+ZQNr7Rv9q10tWjjX7nEQnYmzD+0ch4+ZYGHdauc4tJLDNNWucUoFCy1OQ9mJuNGOcZJ8rum0Y5wkH04tXkpPF1PBwuH/hpl2jJPkc1upHeNUChbW2jFOknf85KBd43CUfH+ahto5DqHoAvHcyiLUTSH7lp/02kEveuGX/OVEu+jJZCkbaO+xRvKB5qoeazc9GMuuYVyYWk6UX0w8MzQV5SfhVaS3cfgojvwEBsHKxprizuP2WrLRv/M3G7/bwEml29hUvre5T6J8HX9N3u8rXufeJuCzWTmP3m1eSq4AAwAAAAAAAACAIZgmdZYf2vjd2kOe1Yn/Y6RJ2Wnu5y+60vPu2mqrvUVabD3uAAez0MKphDb0ts02y22cQNznnhJnR+20f45+Ei39KWrsI9DWAcRcPtDA/0zuFRvpwPKg3fTkIPk/9pOpvRMXnezjTWrjWwP31pJH14Jgqd3jIPr/RHMnuc9ET3PXti6kVwVnSH/D4jSUnYgWj8yMRqFgYaUd41RR+AvDH6XDv9IM/25R2zlMcjMRPUM6+Kc2kxNR9mRQaWEZ8VEr/Aps734hea84K7+1i558C/+Exj7X5ueDbVvtqAdb+UBbdwzxr7VdGPqimfCXzG6JVg7l954CTwPVxOWmyXxukqb6I3Unu076qu7jQmsbcV/E/gbovajKxxry6m1HSAEAAAAAAAAAAAAAAAAAAAAAAAbsBwrVRF+QvcPoAAAAAElFTkSuQmCC' />
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


