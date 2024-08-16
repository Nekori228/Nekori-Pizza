'use client';

import { Dialog } from "@/components/ui";
import { cn } from "@/lib/utils";
import { products } from "@/prisma/constants";
import { Product } from "@prisma/client";
import React from "react";
import { Title } from "../title";
import { DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../choose-product-form";

interface Props {
    product: Product;
    className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter();

    //8:54:40
    
    
    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn("p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden", className)}>
                <ChooseProductForm imageUrl={product.imageUrl} name={product.name} ingredients={[]} />
            </DialogContent>
        </Dialog>
    )
}