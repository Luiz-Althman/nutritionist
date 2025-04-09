import { ReactElement } from 'react';

type BoxInfoItem = {
    icon: ReactElement;
    title: string;
    description: string;
    hasNumber?: boolean;
};

type BoxInfoProps = {
    items: BoxInfoItem[];
};

export function BoxInfo({ items }: BoxInfoProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="2xl:max-w-[783px] md:max-w-[630px] md:max-h-[250px] px-12 py-10 border rounded-lg flex flex-col bg-green-95"
                >
                    <div className="flex items-center gap-4 pb-6">
                        <span className="bg-green-70 rounded-md p-3">
                            {item.icon}
                        </span>
                        <h3 className="font-semibold 2xl:text-2xl md:text-xl">
                            {item.title}
                        </h3>
                    </div>
                    <div>
                        <p className="text-gray-20 2xl:text-md text-sm">
                            {item.description}
                        </p>
                        {item.hasNumber && (
                            <span className="text-green-500">
                                Número ativado
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
