import { ReactElement } from 'react';

type BoxInfoItem = {
    id?: number;
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 relative">
            {items.map((item, index) => (
                <div key={index} className={`relative z-10 `}>
                    {/* Espaço reservado para número (mesmo que oculto) */}
                    <div className="h-[60px]">
                        {item.hasNumber && (
                            <span className="absolute -top-10 left-6 text-[100px] text-green-40 font-bold z-0 pointer-events-none select-none">
                                {String(item.id).padStart(2, '0')}
                            </span>
                        )}
                    </div>

                    {/* Caixa principal sobre o número */}
                    <div className="2xl:max-w-[783px] md:max-w-[630px] md:max-h-[250px] px-12 py-10 border rounded-lg flex flex-col bg-green-95 relative z-10">
                        <div className="flex items-center gap-4 pb-6">
                            <span className="bg-green-70 rounded-md p-3">
                                {item.icon}
                            </span>
                            <h3 className="font-semibold 2xl:text-2xl md:text-xl">
                                {item.title}
                            </h3>
                        </div>
                        <p
                            className={`text-gray-20 2xl:text-md text-sm ${
                                item.hasNumber && 'h-[130px]'
                            }`}
                        >
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
