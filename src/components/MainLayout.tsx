import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
