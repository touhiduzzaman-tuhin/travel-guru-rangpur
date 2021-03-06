import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Icon/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                <Navbar.Brand as={Link} to='/'>
                    <img style={{height: '45px', backgroundColor: 'white'}} src={logo} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Form className="" inline>                           
                            <FormControl type="text" placeholder= 'Search Your Destination' className="mr-sm-2" />
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/news' className='px-3'>News</Nav.Link>
                        <Nav.Link as={Link} to='destination' className='px-3'>Destination</Nav.Link>
                        <Nav.Link as={Link} to='/blog' className='px-3'>Blog</Nav.Link>
                        <Nav.Link  as={Link} to='/contact' className='px-3'>Contact</Nav.Link>
                        <Link to="/login" className='px-3'>
                            <Button variant='warning'>
                                Login
                            </Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;