import { storys } from '@/mocks/About-storys';
import Image from 'next/image';

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
