import React from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
