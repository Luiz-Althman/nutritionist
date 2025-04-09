import { Posts } from './Posts';

export function Blogs() {
    return (
        <section className="mb-36 flex flex-col items-center">
            <div className="flex flex-col items-center justify-center pb-20 text-center">
                <h2 className="2xl:text-5xl md:text-4xl font-bold text-grey-15 pb-2.5">
                    Our Blogs
                </h2>
                <p className="2xl:text-md 2xl:max-w-[996px] md:max-w-[780px] text-grey-20">
                    Our blog is a treasure trove of informative and engaging
                    articles written by our team of nutritionists, dietitians,
                    and wellness experts. Here&rsquo;s what you can expect from
                    our blog.
                </p>
            </div>
            <div>
                <Posts />
            </div>
        </section>
    );
}
