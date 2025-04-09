import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Navigations } from '../navigations';
import Link from 'next/link';

export function Header() {
    return (
        <header className="flex flex-col mx-auto 2xl:px-40 md:px-20 ">
            <div className="relative z-40 bg-green-20 rounded-md py-2.5 overflow-hidden  text-md">
                <div className="relative z-50 flex items-center justify-center gap-2">
                    <Image
                        src="/header-icon.svg"
                        alt="Nutritionist"
                        width={24}
                        height={24}
                    />
                    <p className="flex items-center text-white">
                        <span className="pr-3.5">
                            Join Our Personalized Nutrition Demo For Free
                        </span>
                        <ArrowRight className="text-white" size={24} />
                    </p>
                </div>
                <Image
                    src="https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/scribble-balByeKfHzrUoySdg1c8covmWCsKS4.png"
                    alt="Rabisco para decoração"
                    width={194}
                    height={44}
                    className="absolute -top-5 left-0 z-50"
                />
                <Image
                    src="https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/scribble-balByeKfHzrUoySdg1c8covmWCsKS4.png"
                    alt="Rabisco para decoração"
                    width={194}
                    height={44}
                    className="absolute -top-5 right-0 z-50 rotate-45"
                />
            </div>
            <div className="mt-4 border-t-green-20 border-t py-6">
                <div className="flex justify-between">
                    <Link href="/" className="cursor-pointer">
                        <Image
                            src="https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/logo-desktop-UXe9NQhDiSX2Enau742XcaQDXizinA.png"
                            width={194}
                            height={45}
                            alt="Logo Nutritionist"
                        />
                    </Link>
                    <div className="flex items-center justify-center gap-10">
                        <Navigations />
                        <Button>Contact Us</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
