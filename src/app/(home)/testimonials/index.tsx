import { TestimonialsList } from './TestimonialsList';

export function Testimonials() {
    return (
        <section className="mb-36 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center pb-20 text-center">
                <h2 className="2xl:text-5xl md:text-4xl font-bold text-grey-15 pb-2.5">
                    Our Testimonials
                </h2>
                <p className="2xl:text-md 2xl:max-w-[996px] md:max-w-[780px] text-grey-20">
                    Our satisfied clients share their success stories and
                    experiences on their journey to better health and
                    well-being.
                </p>
            </div>
            <TestimonialsList />
        </section>
    );
}
