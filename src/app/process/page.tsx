import { BannerWithTexture } from '@/components/bannerWithTexture';
import { BoxInfo } from '@/components/boxInfo';
import { Slogan } from '@/components/slogan';
import { process } from '@/mocks/Process-works';

export default function Process() {
    return (
        <section className="2xl:px-40 md:px-20 mt-24">
            <div>
                <div className="mb-24">
                    <BannerWithTexture
                        title="Your Journey to Health and Wellness"
                        description="At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our &rsquo;How it Works&rsquo; process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here&rsquo;s a detailed breakdown of our process:"
                    />
                </div>
                <div className="flex flex-col items-center justify-center pb-16 text-center">
                    <h2 className="2xl:text-5xl md:text-4xl font-bold text-grey-15 pb-2.5">
                        How It Works
                    </h2>
                    <p className="2xl:text-md 2xl:max-w-[996px] md:max-w-[780px] text-grey-20">
                        We provide a step-by-step guide on how to get started on
                        your journey towards better health and nutrition. We are
                        here to simplify the process and make it easy for you to
                        navigate our platform and access the resources you need
                        to achieve your goals. Here&rsquo;s how it works
                    </p>
                </div>
                <BoxInfo items={process} />
                <Slogan
                    title="Are you ready to embark on a transformative journey towards better health and wellness?"
                    description="Join us at Nutritionist and let us guide you on the path to a healthier and happier you."
                    buttonName="Join Us Now"
                />
            </div>
        </section>
    );
}
