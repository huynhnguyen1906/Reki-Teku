'use client';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ContactBox from '@/components/Index/ContactBox';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main>
                <ContactBox />
                {children}
            </main>
            <Footer />
        </>
    );
}
