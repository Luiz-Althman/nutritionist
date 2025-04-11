'use client';

import Image from 'next/image';

export function Banner() {
    return (
        <section className="grid grid-cols-3 my-20 gap-2.5">
            <div className="grid grid-cols-2 gap-2.5">
                {Array(4)
                    .fill(null)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="bg-green-80-light w-full h-[180px] rounded-lg"
                        />
                    ))}
            </div>

            <div className="flex items-center justify-center bg-green-80-light flex-1 h-full rounded-lg">
                <div className="h-[370px] flex items-center justify-center">
                    <Image
                        src="https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/cover-green-25-cMBwlrI68gphNgL0xKU1bczbdqDMN5.png"
                        alt=""
                        width={200}
                        height={200}
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
                {Array(4)
                    .fill(null)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="bg-green-80-light w-full h-[180px] rounded-lg"
                        />
                    ))}
            </div>
        </section>
    );
}
