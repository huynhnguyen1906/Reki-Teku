'use client';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../public/images/logo-white.svg';
import Image from 'next/image';
import Style from '@styles/componentsStyles/Header.module.scss';
import '@styles/componentsStyles/CustomNavBar.scss';

export default function Header() {
    return (
        <header className={Style.Header}>
            <Navbar expand="lg" className={Style.Navbar}>
                <Navbar.Brand href="/">
                    <Image src={logo} alt="logo" width={45} height={45} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex justify-content-end">
                        <Nav.Link href="/about">歴てくについて</Nav.Link>
                        <Nav.Link href="/tours">ツアー紹介</Nav.Link>
                        <Nav.Link href="/news">お知らせ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
