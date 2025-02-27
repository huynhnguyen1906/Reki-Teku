'use client';
import React, { createContext, useContext } from 'react';

interface CompanyProfileContextType {
    profile: any;
}

const CompanyProfileContext = createContext<CompanyProfileContextType | undefined>(undefined);

export function CompanyProfileContextProvider({
    companyProfile,
    children,
}: {
    companyProfile: any;
    children: React.ReactNode;
}) {
    return (
        <CompanyProfileContext.Provider value={{ profile: companyProfile }}>{children}</CompanyProfileContext.Provider>
    );
}

export function useCompanyProfileContext() {
    const context = useContext(CompanyProfileContext);
    if (!context) {
        throw new Error('useCompanyProfileContext must be used within a CompanyProfileContextProvider');
    }
    return context;
}
