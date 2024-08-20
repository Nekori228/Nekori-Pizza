import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";

interface Props {
    imageUrl: string;
    name: string;
    price: number;
    loading?: boolean;
    onSubmit?: VoidFunction;
    className?: string; 
}


/**
 * Форма выбора продукта
 */
export const ChooseProductForm: React.FC<Props> = ({ name, imageUrl, onSubmit, price, loading, className }) => {
 

    //13:08:50
    return (
        <div className={cn(className, 'flex flex-1')}>
            <div className={cn(className, 'flex flex-1')}>
                <div className="flex items-center justify-center flex-1 relative w-full">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
                    />
                </div>
            </div>

            <div className="w-[490px] bg-[#f7f6f7] p-7" >
                <Title text={name} size="md" className="font-extrabold mb-1" />

                <Button loading={loading} onClick={() => onSubmit?.()} className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в корзину за {price} P
                </Button>
            </div>
        </div>
    );
};