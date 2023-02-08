import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Book Abode</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                            <Nav.Link as={Link} to={"/blog"} >Blog</Nav.Link>
                            <Nav.Link as={Link} to={"/fun"} >Fun</Nav.Link>
                            <div className="g-2">
                                <Button as={Link} to={"/signup"} variant="outline-info">Sign Up</Button>{' '}
                                <Button as={Link} to={"/signin"} variant="outline-info">Sign In</Button>{' '}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* Books Author Blog Fun Search */}
        </>
    )
}

export default Header