import Image from 'next/image';
import { Navigations } from '../navigations';
import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { ContactFooter } from './contactFooter';

export function Footer() {
    return (
        <footer className="flex flex-col mx-auto 2xl:px-40 md:px-20 ">
            <div className="flex justify-between items-center pb-10">
                <Link href="/" className="cursor-pointer">
                    <Image
                        src="https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/logo-desktop-UXe9NQhDiSX2Enau742XcaQDXizinA.png"
                        width={194}
                        height={45}
                        alt="Logo Nutritionist"
                    />
                </Link>
                <Navigations />
                <Link
                    href="#top"
                    className="flex items-center text-green-97 gap-2 cursor-pointer hover:text-green-70 transition-colors duration-300 ease-in-out"
                >
                    Go To Top
                    <span className="bg-green-20 rounded-full p-3">
                        <ArrowUp className="w-4 h-4 font-bold" />
                    </span>
                </Link>
            </div>
            <div className="bg-green-20 py-3.5 px-4 border border-green-25 rounded-lg flex justify-between items-center">
                <ContactFooter />
                <div>
                    <p className="text-green-95">
                        &copy; Desenvolvido por{' '}
                        <Link
                            href="https://devluizalthman.vercel.app"
                            target="_blank"
                            className="text-green-70"
                        >
                            Luiz Althman
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
