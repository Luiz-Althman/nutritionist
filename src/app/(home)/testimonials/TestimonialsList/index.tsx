'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Circle, Quote } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useState } from 'react';

const testimonials = new Array(6).fill({
    id: 1,
    text: "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
    name: 'Lucas Almeida',
    avatar: '',
    avatarFallback: 'LA',
});

export function TestimonialsList() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 3,
            spacing: 15,
        },
        loop: true,
    });

    return (
        <div className="relative flex flex-col items-center">
            <button
                onClick={() => instanceRef.current?.prev()}
                type="button"
                name="Botão para voltar o ultimo feedback"
                aria-label="Botão para voltar o ultimo feedback"
                className="absolute -left-20 top-1/2 -translate-y-1/2 cursor-pointer text-grey-20 hidden md:block bg-green-95 rounded-xl p-3"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <div ref={sliderRef} className="keen-slider md:max-w-[1000px]">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide border border-green-90-light rounded-lg flex flex-col gap-4 w-[518px]"
                    >
                        <div className="2xl:p-10 md:p-8">
                            <header className="md:pb-10">
                                <Quote className="text-green-30 2xl:w-10 2xl:h-10 md:w-8 md:h-8 rotate-180" />
                            </header>
                            <p className="2xl:text-md text-grey-20">
                                {testimonial.text}
                            </p>
                        </div>
                        <footer className="bg-green-95 flex items-center gap-2 2xl:px-10 2xl:py-8 md:py-5 md:px-8">
                            <Avatar className="2xl:w-14 2xl:h-14 md:w-12 md:h-12 rounded-xl">
                                <AvatarImage src={testimonial.avatar} />
                                <AvatarFallback className="rounded-xl">
                                    {testimonial.avatarFallback}
                                </AvatarFallback>
                            </Avatar>
                            <p className="2xl:text-md text-green-15 font-semibold">
                                {testimonial.name}
                            </p>
                        </footer>
                    </div>
                ))}
            </div>
            <button
                type="button"
                name="Botão para prosseguir ao próximo feedback"
                aria-label="Botão para prosseguir ao próximo feedback"
                onClick={() => instanceRef.current?.next()}
                className="absolute -right-20 top-1/2 -translate-y-1/2 cursor-pointer text-grey-20 hidden md:block bg-green-95 rounded-xl p-3"
            >
                <ChevronRight className="w-8 h-8" />
            </button>
            <div className="flex gap-2 pt-10">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => {
                            instanceRef.current?.moveToIdx(index, true, {
                                duration: 1000,
                            });
                            setCurrentSlide(index);
                        }}
                        className="text-gray-400 hover:text-gray-600 transition p-1.5"
                        name="Botão de navegação dos feedbacks"
                        aria-label="Botão de navegação dos feedbacks"
                    >
                        {currentSlide === index ? (
                            <Circle className="w-4 h-4 text-green-30" />
                        ) : (
                            <Circle className="w-4 h-4 text-green-85" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
