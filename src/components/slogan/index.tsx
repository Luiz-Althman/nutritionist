import Image from 'next/image';
import { Button } from '../ui/button';

interface SloganProps {
    title: string;
    description: string;
    buttonName: string;
}

export function Slogan({ title, description, buttonName }: SloganProps) {
    return (
        <div className="bg-green-95 p-14 flex justify-between items-center gap-36 mt-24 rounded-xl relative z-40 overflow-hidden">
            <Image
                src="https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/scribble-balByeKfHzrUoySdg1c8covmWCsKS4.png"
                alt="Rabisco para decoração"
                width={194}
                height={44}
                className="absolute -top-10 -left-20 rotate-45"
            />
            <div className="flex flex-col">
                <p className="pb-2.5 text-grey-15 font-semibold md:text-2xl 2xl:text-4xl">
                    {title}
                </p>
                <p className="2xl:text-md text-grey-20">{description}</p>
            </div>
            <div className="">
                <Button type="button" name="book-a-demo">
                    {buttonName}
                </Button>
            </div>
            <Image
                src="https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/clover-Rf410XdSMvmX0DyZ3F9PpyoILa8Jrr.png"
                alt="Trevo para decoração"
                width={113}
                height={113}
                className="absolute -bottom-10 -right-5"
            />
        </div>
    );
}
