import { ChooseProductModal, Container, Title } from "@/shared/components/shared";
import { GroupVariants } from "@/shared/components/shared/group-variants";
import { ProductImage } from "@/shared/components/shared/pizza-image";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";


export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
    const product = await prisma.product.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            ingredients: true,
            items: true,
        }
    })

    if (!product) {
        return notFound();
    }
     
    return <ChooseProductModal product={product}/>
}
 