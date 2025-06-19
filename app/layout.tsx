import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Best seller of the day - Product Store',
    description: 'Check out our today bestseller product. High quality items at unbeatable prices with 5-star reviews.',
    keywords: ['product', 'bestseller', 'deals', 'shopping', 'quality'],
    openGraph: {
        title: 'Best seller of the day - Product Store',
        description: 'Check out our today bestseller product. High quality items at unbeatable prices with 5-star reviews.',
        type: 'website',
        locale: 'en_US',
        siteName: 'Product Store'
    },
    twitter: {
        card: 'summary',
        title: 'Best seller of the day - Product Store',
        description: 'Check out our today bestseller product. High quality items at unbeatable prices with 5-star reviews.'
    },
    robots: {
        index: true,
        follow: true
    }
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
} 