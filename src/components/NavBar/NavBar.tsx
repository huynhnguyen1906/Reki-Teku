'use client';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../public/images/logo-white.svg';
import Image from 'next/image';

export default function NavBar() {
    return (
        <Navbar expand="lg" className="accent-color-brown">
            <Navbar.Brand href="/">
                <Image src={logo} alt="logo" width={45} height={45} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav w-100">
                <Nav className="d-flex justify-content-end w-100">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
