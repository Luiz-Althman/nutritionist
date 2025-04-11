import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Banner() {
    return (
        <section className="mb-36 flex justify-between 2xl:gap-20 md:gap-10">
            <div className="bg-green-80-light w-1/2 relative rounded-br-4xl">
                <Image
                    src="https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/woman-home-C3aJhwT5pLgSNqEta4Hr01petmp4DJ.png"
                    alt="Mulher apontando para o texto principal"
                    priority
                    fill
                    className="object-cover absolute bottom-0 md:left-0"
                />
            </div>
            <div className="w-1/2 pt-32 flex flex-col items-start 2xl:pr-40 md:pr-20">
                <p className="2xl:text-3xl md:text-xl font-semibold w-1/2 border-b-2 border-green-70 text-green-15 mb-3.5">
                    Transform Your ❤️ Health with
                </p>
                <h1 className="2xl:text-6xl md:text-5xl font-bold text-green-15 mb-5 md:max-w-[610px] 2xl:max-w-[749px]">
                    Personalized Nutrition Coaching
                </h1>
                <p className="2xl:text-md text-grey-20 mb-12">
                    Welcome to Nutritionist, your partner in achieving optimal
                    health through personalized nutrition coaching. Our
                    certified nutritionists are here to guide you on your weight
                    loss journey, providing customized plans and ongoing
                    support. Start your transformation today and experience the
                    power of personalized nutrition coaching.
                </p>
                <div className="flex gap-4 items-center pb-16">
                    <Button>Get Starter Today</Button>
                    <Button variant="ghost">Book a Demo</Button>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div className="border border-green-70 py-2 px-2.5 rounded-full">
                        <div className="flex -space-x-4">
                            <Avatar className="2xl:w-12 2xl:h-12 md:w-8 md:h-8">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="2xl:w-12 2xl:h-12 md:w-8 md:h-8">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar className="2xl:w-12 2xl:h-12 md:w-8 md:h-8">
                                <AvatarImage
                                    src="https://github.com/shadcn.png"
                                    alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                    <div className="text-xl font-semibold">
                        <p className="text-green-20 ">
                            <span className="font-bold text-green-40">
                                430+
                            </span>{' '}
                            Happy Customers
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
