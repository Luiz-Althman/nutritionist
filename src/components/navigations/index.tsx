'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menus = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Process', path: '/process' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
];

export function Navigations() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-center gap-6">
            {menus.map((item, i) => {
                const isActive = pathname === item.path;

                return (
                    <Link
                        key={i}
                        href={item.path}
                        className={`font-semibold hover:text-green-70 transition-colors duration-300 ease-in-out ${
                            isActive ? 'text-green-70' : 'text-green-97'
                        }`}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </nav>
    );
}
