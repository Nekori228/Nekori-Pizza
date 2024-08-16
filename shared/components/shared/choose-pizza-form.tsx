'us'

import { cn } from "@/shared/lib/utils";
import React from "react";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import { PizzaSize, PizzaType, pizzaSizes } from "@/shared/constants/pizza";

interface Props {
    imageUrl: string;
    name: string;
    ingredients: any[];
    items?: any[];
    onClickAdd?: VoidFunction;
    className?: string; 
}

export const ChoosePizzaForm: React.FC<Props> = ({ name, ingredients, imageUrl, onClickAdd, className }) => {
    const [size, setSize] = React.useState<PizzaSize>(20);
    const [type, setType] = React.useState<PizzaType>(1);

    const textDetaills = '30см, традиционное тесто 30'
    const totalPrice = 350;


    return (
        <div className={cn(className, 'flex flex-1')}>
            <PizzaImage imageUrl={imageUrl} size={size}/>

            <div className="w-[490px] bg-[#f7f6f7] p-7" >
                <Title text={name} size="md" className="font-extrabold mb-1" />

                <p className="text-gray-400">{textDetaills}</p>

                <GroupVariants items={pizzaSizes} value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)}/>

                <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в корзину за {totalPrice} P
                </Button>
            </div>
        </div>
    );
};