import { Container, ProductForm } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { useCartStore } from "@/shared/store";

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
    const product = await prisma.product.findUnique({where: { id: Number(id) }, 
    include: {
        ingredients: true,
        category: {
            include: {
                products: {
                    include: {
                        items: true
                    },
                },
            },
        },
        items: true
    }});

    //14:37:00
    if (!product) {
        return notFound();
    }


        
    return (
        <Container className="flex flex-col my-10">
            <ProductForm product={product}/>
        </Container>
    );
}
