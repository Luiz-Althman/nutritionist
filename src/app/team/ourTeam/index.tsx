'use client';

import { BannerWithTexture } from '@/components/bannerWithTexture';
import { Slogan } from '@/components/slogan';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { useState } from 'react';

const management = [
    {
        id: 1,
        src: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/sarah-BC1nyIt8h4eCHxLW3zETVwLtOVOOrR.png',
        name: 'Sarah Mitchell',
        role: 'Founder and CEO',
    },
    {
        id: 2,
        src: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/emily-okOT8O6Eulpus2EiWI3nlcvjkOeHxX.png',
        name: 'Emily Thompson',
        role: 'Chief Operating Officer',
    },
    {
        id: 3,
        src: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/john-qkxicfukxKwXIkWNYM3NtMJqzBTuvP.png',
        name: 'John Davis',
        role: 'Chief Financial Officer',
    },
    {
        id: 4,
        src: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/rachel-WnoHmDjZpIXQEb8WeuoBipEGqoXv3C.png',
        name: 'Rachel Adams',
        role: 'Chief Marketing Officer',
    },
];

export function OurTeam() {
    const [tab, setTab] = useState('management');
    return (
        <section>
            <BannerWithTexture
                title="Meet Our Team of Experts"
                description="Our team at Nutritionist is composed of highly skilled
                    professionals who are passionate about helping you achieve
                    your health and wellness goals. With a diverse range of
                    expertise in nutrition, coaching, and support, our team is
                    dedicated to providing you with the guidance and
                    personalized care you need. Get to know the experts behind
                    our success and discover how they can make a positive impact
                    on your journey to better health."
            />
            <Tabs value={tab} onValueChange={setTab} className="w-full">
                <TabsList className="bg-green-20 w-full rounded-none rounded-bl-lg rounded-br-lg">
                    <TabsTrigger
                        className="data-[state=active]:bg-green-25 text-white"
                        value="management"
                    >
                        Management Team
                    </TabsTrigger>
                    <TabsTrigger
                        className="data-[state=active]:bg-green-25 text-white"
                        value="nutritionists"
                    >
                        Nutritionists and Dietitians
                    </TabsTrigger>
                    <TabsTrigger
                        className="data-[state=active]:bg-green-25 text-white"
                        value="support"
                    >
                        Customer Support
                    </TabsTrigger>
                    <TabsTrigger
                        className="data-[state=active]:bg-green-25 text-white"
                        value="marketing"
                    >
                        Marketing and Communications
                    </TabsTrigger>
                    <TabsTrigger
                        className="data-[state=active]:bg-green-25 text-white"
                        value="tecnology"
                    >
                        Technology and Development
                    </TabsTrigger>
                </TabsList>

                <TabsContent
                    value={tab}
                    className="mt-10 flex justify-between flex-1 w-full 2xl:gap-7 md:gap-5"
                >
                    {management.map((item) => (
                        <div
                            className="bg-green-70 2xl:w-[376px] md:w-[305px] flex items-center justify-center rounded-lg relative"
                            key={item.id}
                        >
                            <Image
                                src={item.src}
                                alt=""
                                width={240}
                                height={300}
                                className=""
                                quality={100}
                            />
                            <div className="absolute bg-green-95 p-5 -bottom-10 left-0 rounded-tr-4xl">
                                <p className="text-grey-15 font-semibold 2xl:text-2xl md:text-xl">
                                    {item.name}
                                </p>
                                <p className="text-grey-30 2xl:text-md">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </TabsContent>
            </Tabs>
            <Slogan
                title="Join Our Team"
                description="We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals."
                buttonName="Apply Now"
            />
        </section>
    );
}
