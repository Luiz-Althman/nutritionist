'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const socialMedias = [
    {
        id: 1,
        icon: <Mail className="w-5 h-5 text-green-70" />,
        link: 'mailto:luizalthmandev@gmail.com',
        paragraph: 'luizalthmandev@gmail.com',
    },
    {
        id: 2,
        icon: <Phone className="w-5 h-5 text-green-70" />,
        link: 'tel:(11) 99999-9999',
        paragraph: '(11) 99999-9999',
    },
    {
        id: 3,
        icon: <MapPin className="w-5 h-5 text-green-70" />,
        link: 'https://devluizalthman.vercel.app',
        paragraph: 'Somewhere in the World',
    },
];

export function ContactFooter() {
    return (
        <div className="flex gap-2 items-center">
            {socialMedias.map((item) => (
                <Link
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    className="flex items-center gap-2 border border-green-25 py-3.5 px-3 rounded-sm"
                >
                    {item.icon}
                    <p className="text-green-95 hover:text-green-70">
                        {item.paragraph}
                    </p>
                </Link>
            ))}
        </div>
    );
}
