import {Metadata} from 'next';

import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import React from "react";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'


export const metadata: Metadata = {
    title: {
        template: '%s | Shopin Dashboard',
        default: 'Shopin Dashboard',
    },
    description: 'Shopin dashboard Learn Dashboard built with App Router.',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        // <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} antialiased`}>
                    {/*<SignedOut>*/}
                    {/*    <SignInButton/>*/}
                    {/*</SignedOut>*/}
                    {/*<SignedIn>*/}
                    {/*    <UserButton/>*/}
                    {/*</SignedIn>*/}
                    {children}
                </body>
            </html>
        {/*</ClerkProvider>*/}
    );
}
