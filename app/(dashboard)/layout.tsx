import { Description } from "@radix-ui/react-dialog";
import { describe } from "node:test";

export const metadata = {
    title: 'Next.js',
    Description: 'Next.js description'
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            Dashboard Header
            <body>{children}</body>
        </html>
    )
}