import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <Navbar expand="lg" className="bg-dark text-white">
            <Container>
                <Navbar.Brand className={"text-white"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/"}> BAKERY </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-nav bar-nav text-white" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={"text-white"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/all"}> Home </Link></Nav.Link>
                        <Nav.Link className={"text-white"} href="#link">Menu</Nav.Link>
                        <Nav.Link className={"text-white"} href="#link">About Us</Nav.Link>
                        <Nav.Link className={"text-white"} href="#link">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
