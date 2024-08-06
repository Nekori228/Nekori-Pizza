import { prisma } from "@/prisma/prisma-client";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || '';

    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query
            }
        }
    })
    return NextResponse.json({});
}
//5:22:46