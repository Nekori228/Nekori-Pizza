import { prisma } from "@/prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    // console.log(req.nextUrl.searchParams.get('query'))
    const query = req.nextUrl.searchParams.get('query') || '';

    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query,
                mode: 'insensitive',
            }
        },
        take: 5,
    });
    
    return NextResponse.json(products);
}
//5:22:46