import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const urbanist = Urbanist({
    variable: '--font-urbanist',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Nutritionist',
    description: 'Application for nutritionists',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${urbanist.variable} bg-grey-97`}>
                <main>
                    <div className="bg-green-15 pt-3.5">
                        <Header />
                    </div>

                    {children}
                    <div className="bg-green-15 py-10">
                        <Footer />
                    </div>
                </main>
            </body>
        </html>
    );
}
