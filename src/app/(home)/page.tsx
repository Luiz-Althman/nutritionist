import { Banner } from './banner';
import { Blogs } from './blogs';
import { Features } from './features';
import { Pricing } from './pricing';
import { Testimonials } from './testimonials';

export default function Home() {
    return (
        <>
            <Banner />
            <div className="2xl:px-40 md:px-20">
                <Features />
                <Blogs />
                <Testimonials />
                <Pricing />
            </div>
        </>
    );
}
