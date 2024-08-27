import { Container, Header } from "@/shared/components/shared"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: 'Next.js | Корзина',
    description: 'Next.js description'
}

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen bg-[#F4F1EE]">
            <Container>
                <Suspense>
                    <Header hasSearch={false} hasCart={false} className="border-b-gray-200"/>
                </Suspense>
            </Container>
            {children}
        </main>
    )
}