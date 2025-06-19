'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Zap, Battery, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center">
                                <Zap className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-semibold text-xl">E-MONO</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Scooters
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Accessories
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Support
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Product Section */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/43eac52b-b989-4146-aaef-c42a6afbced1.jpg?"
                                    alt="E-MONO Electric Scooter - Main View"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                {[
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/e8f1902e-588d-4a08-a867-1b7d542e625d.jpg?", alt: "E-MONO Electric Scooter - Side view" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/3b90080d-292e-4c8e-aef0-9b48839bafec.jpg?", alt: "E-MONO Electric Scooter - Folded view" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/6a6523fe-6d2f-437e-8b8a-9cbc8896345c.jpg?", alt: "E-MONO Electric Scooter - Details" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/9db72d7a-adfc-4d0d-bb10-fc65295e99a9.jpg?", alt: "E-MONO Electric Scooter - Dashboard" },
                                ].map((image, i) => (
                                    <div
                                        key={i}
                                        className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-slate-300 hover:scale-105 transition-all duration-200"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={150}
                                            height={150}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="text-xs font-medium">
                                    🔥 Premium Urban Mobility
                                </Badge>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                                    E-MONO Electric Scooter
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">(1,847 reviews)</span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    Experience premium mobility with industry-leading 60km range and intelligent energy recovery. The ultimate urban commuter's electric scooter.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-bold text-slate-900">$899</span>
                                    <span className="text-xl text-slate-500 line-through">$1,199</span>
                                    <Badge variant="destructive" className="text-sm font-semibold">
                                        25% OFF
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 24 hours
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Gauge, text: "60km Range" },
                                    { icon: Battery, text: "477.36Wh Battery" },
                                    { icon: Zap, text: "15% Energy Recovery" },
                                    { icon: Shield, text: "25 km/h Top Speed" },
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                                    >
                                        <feature.icon className="h-5 w-5 text-slate-700" />
                                        <span className="font-medium text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium text-slate-700">Quantity:</span>
                                    <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 py-3 min-w-[4rem] text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        Add to Cart - $899
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl border-2">
                                        Transform Your Commute Today
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Shipping</p>
                                        <p className="text-xs text-slate-500">Nationwide</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Returns</p>
                                        <p className="text-xs text-slate-500">Hassle-free</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">2-Year Warranty</p>
                                        <p className="text-xs text-slate-500">Full coverage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-white rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium">
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Why Choose E-MONO?</h3>
                                        <div className="space-y-5">
                                            {[
                                                {
                                                    title: "Industry-Leading Range",
                                                    description: "60km maximum range with a single charge gets you anywhere in the city",
                                                },
                                                {
                                                    title: "Smart Energy Recovery",
                                                    description: "15% energy recovery system during braking maximizes efficiency",
                                                },
                                                {
                                                    title: "Three-Speed Settings",
                                                    description: "Adapt to any urban environment with versatile speed control",
                                                },
                                                {
                                                    title: "Premium Build Quality",
                                                    description: "Matte black design with gold accents and durable construction",
                                                },
                                            ].map((feature, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                    <div className="space-y-1">
                                                        <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/e8f1902e-588d-4a08-a867-1b7d542e625d.jpg?"
                                            alt="E-MONO Electric Scooter features demonstration"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-sm border-0">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl">Technical Specifications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {[
                                                { label: "Maximum Range", value: "60 km" },
                                                { label: "Battery Capacity", value: "477.36Wh Lithium" },
                                                { label: "Top Speed", value: "25 km/h" },
                                                { label: "Energy Recovery", value: "15% during braking" },
                                                { label: "Speed Settings", value: "3 modes" },
                                                { label: "Wheel System", value: "Dual-wheel" },
                                                { label: "Design", value: "Matte black with gold accents" },
                                                { label: "Warranty", value: "2 years" },
                                            ].map((spec, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                                                >
                                                    <span className="text-slate-600 font-medium">{spec.label}</span>
                                                    <span className="font-semibold text-slate-900">{spec.value}</span>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">Complete Package Includes</h3>
                                        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                                            {[
                                                "1x E-MONO Electric Scooter",
                                                "1x Charger Adapter",
                                                "1x Maintenance Tool Kit",
                                                "1x User Manual",
                                                "1x Warranty Card",
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-green-500" />
                                                    <span className="text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-slate-900">4.9</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-slate-600 font-medium">Based on 1,847 reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-4">
                                                    <span className="text-sm font-medium w-8">{stars}★</span>
                                                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                        <div
                                                            className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
                                                            style={{ width: stars === 5 ? "85%" : stars === 4 ? "10%" : "5%" }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium w-16 text-right">
                                                        {stars === 5 ? "1,570" : stars === 4 ? "185" : "92"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                name: "Alex Thompson",
                                                avatar: "AT",
                                                rating: 5,
                                                date: "3 days ago",
                                                title: "Game changer for my commute!",
                                                content:
                                                    "The 60km range is real - I charge it twice a week for my daily commute. The energy recovery system is brilliant.",
                                            },
                                            {
                                                name: "Maria Garcia",
                                                avatar: "MG",
                                                rating: 5,
                                                date: "1 week ago",
                                                title: "Premium quality worth every penny",
                                                content:
                                                    "Build quality is exceptional. The matte black finish looks stunning and the three speed modes are perfect for city riding.",
                                            },
                                            {
                                                name: "James Liu",
                                                avatar: "JL",
                                                rating: 5,
                                                date: "2 weeks ago",
                                                title: "Reliable and efficient",
                                                content:
                                                    "Been using it for 3 months now. The battery life is impressive and the smart braking system really extends the range.",
                                            },
                                        ].map((review, i) => (
                                            <Card key={i} className="shadow-sm border-0 bg-white">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-4">
                                                        <Avatar className="h-12 w-12">
                                                            <AvatarFallback className="bg-slate-100 text-slate-700 font-semibold">
                                                                {review.avatar}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 space-y-2">
                                                            <div className="flex items-center gap-3 flex-wrap">
                                                                <span className="font-semibold text-slate-900">{review.name}</span>
                                                                <div className="flex">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <Star
                                                                            key={star}
                                                                            className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-slate-500">{review.date}</span>
                                                            </div>
                                                            <h4 className="font-semibold text-slate-900">{review.title}</h4>
                                                            <p className="text-slate-600 leading-relaxed">{review.content}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {[
                                            {
                                                question: "How long does it take to fully charge?",
                                                answer:
                                                    "The E-MONO fully charges in 4-6 hours using the included charger adapter. The smart charging system prevents overcharging.",
                                            },
                                            {
                                                question: "What's the actual range in real-world conditions?",
                                                answer:
                                                    "You can expect 50-60km range depending on rider weight, terrain, and speed mode. The energy recovery system helps maximize range.",
                                            },
                                            {
                                                question: "Is it suitable for hills?",
                                                answer:
                                                    "Yes! The powerful motor handles inclines up to 15 degrees. The three-speed settings help you tackle different terrains efficiently.",
                                            },
                                            {
                                                question: "What maintenance is required?",
                                                answer:
                                                    "Minimal maintenance needed. The included tool kit covers basic adjustments. We recommend checking tire pressure and brakes monthly.",
                                            },
                                            {
                                                question: "Is it waterproof?",
                                                answer:
                                                    "The E-MONO has IP54 water resistance rating, suitable for light rain. We recommend avoiding heavy downpours and deep puddles.",
                                            },
                                        ].map((faq, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={`item-${i}`}
                                                className="bg-white rounded-xl px-6 shadow-sm border-0"
                                            >
                                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12 text-center lg:text-left">
                            Complete Your Setup
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            {[
                                { name: "Safety Helmet", price: "$49.99", image: "Safety helmet for scooter" },
                                { name: "Phone Mount", price: "$24.99", image: "Scooter phone mount" },
                                { name: "LED Light Set", price: "$34.99", image: "LED lights for scooter" },
                                { name: "Storage Bag", price: "$29.99", image: "Scooter storage bag" },
                            ].map((product, i) => (
                                <Card
                                    key={i}
                                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
                                >
                                    <CardContent className="p-4">
                                        <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl mb-4 overflow-hidden">
                                            <Image
                                                src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/6a6523fe-6d2f-437e-8b8a-9cbc8896345c.jpg?"
                                                alt={product.image}
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">{product.name}</h3>
                                        <p className="text-lg font-bold text-slate-900">{product.price}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Simplified Footer */}
            <footer className="border-t bg-slate-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center">
                                <Zap className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-semibold text-xl">E-MONO</span>
                        </div>
                        <p className="text-sm text-slate-600 text-center sm:text-right">© 2024 E-MONO. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}