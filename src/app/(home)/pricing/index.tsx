import { PricingList } from './PricingList';

export function Pricing() {
    return (
        <section className="mb-36 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center pb-20 text-center">
                <h2 className="2xl:text-5xl md:text-4xl font-bold text-grey-15 pb-2.5">
                    Our Pricing
                </h2>
                <p className="2xl:text-md 2xl:max-w-[996px] md:max-w-[780px] text-grey-20">
                    We outline our flexible and affordable options to support
                    you on your journey to optimal health and nutrition. We
                    believe that everyone deserves access to personalized
                    nutrition guidance and resources
                </p>
            </div>
            <PricingList />
        </section>
    );
}
