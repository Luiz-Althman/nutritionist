import { BoxInfo } from '@/components/boxInfo';
import { features } from '@/mocks/Home-Features';

export function Features() {
    return (
        <section className="mb-36 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center pb-20">
                <h2 className="2xl:text-5xl md:text-4xl font-bold text-grey-15 pb-2.5">
                    Features
                </h2>
                <p className="2xl:text-md text-grey-20">
                    Welcome to the Feature Section of Nutritionist, your
                    ultimate destination for all things nutrition and wellness.
                </p>
            </div>
            <div>
                <BoxInfo items={features} />
            </div>
        </section>
    );
}
