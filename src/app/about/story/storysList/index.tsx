import Image from 'next/image';

const storys = [
    {
        id: 1,
        image: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/story-woman-fitness-KWQlLfi826wHB6aWh5ozsXSyOtFVCe.png',
        title: 'Inspiring Transformations Story',
        description:
            ' Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time.',
        date: 'July 1, 2025',
    },
    {
        id: 2,
        image: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/story-woman-trophy-7yKdR5mQwGMY9AJmlSZYhNB2CAFRur.png',
        title: 'Recognition and Accolades Story',
        description:
            'Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field.',
        date: 'March 10, 2023',
    },
    {
        id: 3,
        image: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/story-plants-IaalMkkUBiRPdNTZjT6ece5dGATEd0.png',
        title: 'Continued Growth Story',
        description:
            'Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people.',
        date: 'November 2, 2021',
    },
    {
        id: 4,
        image: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/story-meeting-LpfJEULqMZmQADfsOJ8gprt2378JkF.png',
        title: 'Collaborating for Success Story',
        description:
            'Nutritionist established partnerships with renowned health professionals, including nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients.',
        date: 'July 15, 2019',
    },
    {
        id: 5,
        image: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/story-friends-Xa3rlOqxDoOsewFHMP90CWYk3Upv0K.png',
        title: 'Enhanced Support Story',
        description:
            'In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients.',
        date: 'April 1, 2018',
    },
    {
        id: 6,
        image: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/story-job-JUIwLkc9NuMMtAFJk6eFg2qistFtXH.png',
        title: 'Innovating for Clients Story',
        description:
            'Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches.',
        date: 'January 20, 2017',
    },
    {
        id: 7,
        image: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/story-party-G5ag35U2f7K1sPnLEmhgLyvaYP4O9A.png',
        title: 'Celebrating Success Stories',
        description:
            'Nutritionist celebrated its 500th client success story. These stories showcased the positive impact of personalized nutrition coaching on individuals (aspas) lives, further motivating our team to continue providing exceptional services.',
        date: 'September 5, 2015',
    },

    {
        id: 8,
        image: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/story-training-6NO27uYGm80XMr0iFiYN7CTdmIymaA.png',
        title: 'Expanding Reach Story',
        description:
            'Nutritionist expanded its services by launching an online platform, allowing individuals from all over the world to access personalized nutrition plans and expert guidance. This milestone brought convenience and accessibility to our growing client base.',
        date: 'June 10, 2014',
    },
    {
        id: 9,
        image: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/story-woman-juggling-blS83mPD9LDX6udYzthYOdaRtPsknP.png',
        title: 'Research and Expertise Story',
        description:
            'After extensive research and collaborating with nutrition experts, Sarah Mitchell and her team developed a comprehensive program rooted in scientific knowledge and evidence-based strategies. This milestone marked the establishment of Nutritionist as a trusted source of personalized nutrition coaching.',
        date: 'March 15, 2012',
    },
    {
        id: 10,
        image: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/story-woman-drawing-Xye2ToxGt7be9wKNz0P26Uf3JfeSsJ.png',
        title: 'The Inception Storyy',
        description:
            'On this day, Nutritionist was born with the vision of helping individuals achieve their weight loss and health goals through personalized nutrition coaching. The founder, Sarah Mitchell, recognized the need for a sustainable and effective approach to healthy living, and thus began the journey of Nutritionist.',
        date: 'January 1, 2010',
    },
];

export function StorysList() {
    return (
        <div className="bg-green-90-light rounded-t-xl rounded-b-xl mb-36">
            {storys.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div
                        key={item.id}
                        className={`flex flex-col md:flex-row ${
                            isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                        } justify-between items-stretch relative`}
                    >
                        <div className="flex-1 relative h-[300px] md:h-auto">
                            <Image
                                src={item.image}
                                alt=""
                                width={634}
                                height={420}
                                className={`object-cover w-full h-full ${
                                    index === 0 && 'rounded-tl-xl'
                                } ${
                                    index === storys.length - 1 &&
                                    'rounded-br-xl'
                                }`}
                            />
                        </div>

                        <div className={`hidden md:block w-3 bg-green-70`} />

                        <div
                            className={`flex flex-col justify-center flex-1 ${
                                isEven
                                    ? 'items-start text-left'
                                    : 'items-end text-right'
                            }`}
                        >
                            <p
                                className={`text-2xl font-semibold text-green-15 w-full md:w-[75%]     px-10`}
                            >
                                {item.title}
                            </p>
                            <div
                                className={`bg-green-70 w-[60%] h-1 mb-4 ${
                                    isEven ? 'ml-10' : 'mr-10'
                                } `}
                            />
                            <p
                                className={`text-green-30 mb-4 text-sm w-full  px-10`}
                            >
                                {item.description}
                            </p>
                            <span
                                className={`text-green-50 text-sm w-[70%]  px-10`}
                            >
                                {item.date}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
