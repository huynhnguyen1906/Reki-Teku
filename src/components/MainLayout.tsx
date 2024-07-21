'use client';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ContactBox from '@/components/Index/ContactBox';
import { useFirstDocId } from '@/hooks/useFirstDocId';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { firstDocIds } = useFirstDocId();
    return (
        <>
            <Header newsId={firstDocIds?.newsId} tourId={firstDocIds?.tourId} />
            <main>
                <ContactBox />
                {children}
            </main>
            <Footer newsId={firstDocIds?.newsId} tourId={firstDocIds?.tourId} />
        </>
    );
}
