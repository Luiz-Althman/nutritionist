import { BoxInfo } from '@/components/boxInfo';
import { StorysList } from './storysList';
import { companyAchievements } from '@/mocks/About-company-achievements';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Story() {
    return (
        <section className="mb-36 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center pb-20 text-center">
                <h2 className="2xl:text-5xl md:text-4xl font-bold text-grey-15 pb-2.5">
                    Our Story
                </h2>
                <p className="2xl:text-md 2xl:max-w-[996px] md:max-w-[780px] text-grey-20">
                    Welcome to Nutritionist, your partner in achieving optimal
                    health through personalized nutrition coaching. Our
                    certified nutritionists are here to guide you on your weight
                    loss journey.
                </p>
            </div>
            <StorysList />
            <div className="flex flex-col items-center justify-center pb-20 text-center">
                <h2 className="2xl:text-5xl md:text-4xl font-bold text-grey-15 pb-2.5">
                    Company Achievements
                </h2>
                <p className="2xl:text-md text-grey-20 max-w-[779px]">
                    At Nutritionist, we take pride in our accomplishments and
                    the positive impact we have made on the lives of our
                    clients. Here are some of our notable achievements
                </p>
            </div>
            <BoxInfo items={companyAchievements} />
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
                        We Are Proud of Our Achievements
                    </p>
                    <p className="2xl:text-md text-grey-20">
                        But our ultimate satisfaction comes from seeing our
                        clients achieve their goals and live healthier, happier
                        lives. Join Nutritionist today and embark on your own
                        transformative journey towards optimal health and
                        well-being.
                    </p>
                </div>
                <div className="">
                    <Button type="button" name="book-a-demo">
                        Book a Demo
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
        </section>
    );
}
