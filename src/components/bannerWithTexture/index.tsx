import Image from 'next/image';

interface BannerWithTextureProps {
    title: string;
    description: string;
}

export function BannerWithTexture({
    title,
    description,
}: BannerWithTextureProps) {
    return (
        <div className="bg-green-95 p-24 flex items-center justify-center relative overflow-hidden flex-col">
            <div className="bg-[linear-gradient(to_bottom,rgba(203,234,123,1)_0%,rgba(203,234,123,0)_100%)] p-5 flex items-center justify-center w-[90px] h-[90px] rounded-xl border-2 border-white z-50 mb-16">
                <Image
                    src="https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/cover-green-25-cMBwlrI68gphNgL0xKU1bczbdqDMN5.png"
                    alt=""
                    width={50}
                    height={50}
                />
            </div>
            <Image
                src="https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/background-texture-WIhQqq8OQ40S9H1ggnG8KxGmBb4qEm.png"
                alt=""
                width={643}
                height={326}
                className="w-[643px] h-[326px] absolute top-30 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
            />
            <div className="flex flex-col items-center justify-center text-center">
                <p className="text-grey-15 font-semibold md:text-4xl pb-2.5">
                    {title}
                </p>
                <p className="font-semibold 2xl:text-md text-grey-20 md:max-w-[1120px]">
                    {description}
                </p>
            </div>
        </div>
    );
}
