import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Star } from 'lucide-react';
import Image from 'next/image';

const items = [
    {
        img: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/woman-water-MVBW9h7bGTSx1W1a9PyZuC1FXL83Y6.png',
        title: 'Weight Loss',
        subtitle: 'The Benefits of Hydration for Weight Loss',
        description:
            'Discover how staying hydrated can support your weight loss goals and improve overall health.',
        avatarUrl: '',
        avatarFallback: 'LA',
        userName: 'Luiz Althman',
        date: '23 May 2023',
        hour: '5 min read',
    },
    {
        img: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/woman-eats-pyq5VkJCVKbpEaiDo7yH5WzVHYdafy.png',
        title: 'Mindful Eating',
        subtitle: 'Cultivating a Healthy Relationship with Food',
        description:
            'Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.',
        avatarUrl: '',
        avatarFallback: 'ST',
        userName: 'Sarah Thompson',
        date: '23 May 2023',
        hour: '5 min read',
    },
    {
        img: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/two-woman-blogs-hNhjxOC8ALCESH7ztcvlvPGMf68SJ1.png',
        title: 'Understanding Macronutrients',
        subtitle: 'Carbohydrates, Proteins, and Fats',
        description:
            'Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.',
        avatarUrl: '',
        avatarFallback: 'MW',
        userName: 'Mark Wilson',
        date: '23 May 2023',
        hour: '5 min read',
    },
    {
        img: 'https://6qqnle6r40wks5gf.public.blob.vercel-storage.com/eats-d4kqwpeNjqBehd5Au00Vk9I1FQdKA6.png',
        title: 'Healthy Snacks on the Go',
        subtitle: 'Quick and Nutritious Options',
        description:
            'Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.',
        avatarUrl: '',
        avatarFallback: 'EJ',
        userName: 'Emily Johnson',
        date: '23 May 2023',
        hour: '5 min read',
    },
];

export function Posts() {
    return (
        <div className="grid grid-cols-2 gap-7">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="p-10 bg-green-90-light rounded-xl flex flex-col min-h-full"
                >
                    <div className="pb-10">
                        <Image src={item.img} alt="" width={703} height={428} />
                    </div>

                    <div className="flex flex-col flex-grow justify-between">
                        <header className="pb-8">
                            <h3 className="text-grey-20 2xl:text-md pb-1">
                                {item.title}
                            </h3>
                            <p className="text-grey-15 2xl:text-2xl md:text-xl font-semibold">
                                {item.subtitle}
                            </p>
                        </header>
                        <p className="2xl:text-md text-grey-30 pb-8">
                            {item.description}
                        </p>

                        <footer className="flex justify-between items-center bg-green-97 2xl:p-5 md:p-4 rounded-xl mt-auto">
                            <div className="flex items-center 2xl:gap-4 md:gap-3 md:w-[70%]">
                                <Avatar className="2xl:size-14 md:size-12 rounded-xl">
                                    <AvatarImage
                                        src={item.avatarUrl}
                                        alt="@shadcn"
                                    />
                                    <AvatarFallback className="rounded-xl">
                                        {item.avatarFallback}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-green-15 2xl:text-xl md:text-md font-semibold">
                                        {item.userName}
                                    </p>
                                    <p className="text-grey-35 2xl:text-md">
                                        {item.date} - {item.hour}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5 2xl:w-[30%]">
                                <button
                                    type="button"
                                    className="bg-green-95 2xl:p-4 md:p-3 cursor-pointer flex items-center rounded-xl"
                                >
                                    <Heart className="2xl:h-6 2xl:w-6 md:w-5 md:h-5" />
                                </button>
                                <button
                                    type="button"
                                    className="bg-green-95 2xl:p-4 md:p-3 cursor-pointer flex items-center rounded-xl"
                                >
                                    <Star className="2xl:h-6 2xl:w-6 md:w-5 md:h-5" />
                                </button>
                            </div>
                        </footer>
                    </div>
                </div>
            ))}
        </div>
    );
}
