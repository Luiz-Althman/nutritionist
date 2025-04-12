import { BoxInfo } from '@/components/boxInfo';
import { StorysList } from './storysList';
import { companyAchievements } from '@/mocks/About-company-achievements';
import { Slogan } from '@/components/slogan';

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
            <Slogan
                buttonName="Book a Demo"
                description="But our ultimate satisfaction comes from seeing our
                        clients achieve their goals and live healthier, happier
                        lives. Join Nutritionist today and embark on your own
                        transformative journey towards optimal health and
                        well-being."
                title="We Are Proud of Our Achievements"
            />
        </section>
    );
}
