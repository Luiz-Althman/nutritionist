'use client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

const plansMonthly = [
    {
        id: 1,
        title: 'Basic Plan',
        subTitle: 'Up to 50% off on Yearly Plan',
        description:
            'Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.',
        price: '$49',
        redirect: '#',
    },
    {
        id: 2,
        title: 'Premium Plan',
        subTitle: 'Up to 50% off on Yearly Plan',
        description:
            "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
        price: '$79',
        redirect: '#',
    },
    {
        id: 3,
        title: 'Ultimate Plan',
        subTitle: 'Up to 50% off on Yearly Plan',
        description:
            'Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive.',
        price: '$99',
        redirect: '#',
    },
];

export function PricingList() {
    const [tab, setTab] = useState('monthly');
    return (
        <Tabs value={tab} onValueChange={setTab}>
            <TabsList>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>

            {tab === 'monthly' && (
                <p className="text-grey-30 2xl:text-md mt-4">
                    Save 50% on Yearly
                </p>
            )}
            {tab === 'yearly' && (
                <p className="text-grey-30 2xl:text-md mt-4">
                    Enjoy 50% discount to monthly
                </p>
            )}

            <TabsContent value="monthly" className="mt-10">
                <div className="grid grid-cols-3 2xl:gap-8 md:gap-5">
                    {plansMonthly.map((plan) => (
                        <div
                            className="bg-green-95 md:px-3 md:py-5 rounded-xl md:w-[333px]"
                            key={plan.id}
                        >
                            <header className="flex flex-col gap-1 pb-8">
                                <h4 className="text-grey-15 text-2xl font-semibold">
                                    {plan.title}
                                </h4>
                                <p>{plan.subTitle}</p>
                            </header>
                            <p className="text-grey-15 2xl:text-md md:h-[96px]">
                                {plan.description}
                            </p>
                            <p className="2xl:text-md text-grey-20 md:py-8 2xl:pt-12 2xl:pb-8">
                                <span className="text-3xl font-bold text-green-25">
                                    {plan.price}
                                </span>
                                /month
                            </p>
                            <Button className="w-full">Choose Plan</Button>
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="yearly" className="mt-10">
                <div className="grid grid-cols-3 2xl:gap-8 md:gap-5">
                    {plansMonthly.map((plan) => (
                        <div
                            className="bg-green-95 md:px-3 md:py-5 rounded-xl md:w-[333px]"
                            key={plan.id}
                        >
                            <header className="flex flex-col gap-1 pb-8">
                                <h4 className="text-grey-15 text-2xl font-semibold">
                                    {plan.title}
                                </h4>
                                <p>{plan.subTitle}</p>
                            </header>
                            <p className="text-grey-15 2xl:text-md md:h-[96px]">
                                {plan.description}
                            </p>
                            <p className="2xl:text-md text-grey-20 md:py-8 2xl:pt-12 2xl:pb-8">
                                <span className="text-3xl font-bold text-green-25">
                                    {plan.price}
                                </span>
                                /month
                            </p>
                            <Button className="w-full">Choose Plan</Button>
                        </div>
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    );
}
