'use client'

import React, { useEffect } from 'react'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import Link from 'next/link'
import Header from '@/components/ui/header'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Footer from '@/components/ui/footer'
import {
    ShieldCheck,
    QrCode,
    Eye,
    ScanLine,
    Radiation,
    BadgeCheck,
} from 'lucide-react'

// Feature list
const features = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-blue-700" />,
        title: 'Holographic Films',
        desc: 'Custom 2D/3D and true color holograms embedded into your labels to prevent duplication.',
    },
    {
        icon: <ScanLine className="h-8 w-8 text-blue-600" />,
        title: 'Microtext & Nanoprinting',
        desc: 'Readable only under magnification — almost impossible to replicate.',
    },
    {
        icon: <Radiation className="h-8 w-8 text-blue-600" />,
        title: 'UV / IR Fluorescent Inks',
        desc: 'Invisible under normal light, visible only under UV/IR scanners — ideal for inspection.',
    },
    {
        icon: <Eye className="h-8 w-8 text-blue-600" />,
        title: 'Guilloché Patterns',
        desc: 'Complex mathematical patterns that can’t be scanned or copied accurately.',
    },
    {
        icon: <BadgeCheck className="h-8 w-8 text-blue-600" />,
        title: 'Tamper-Evident Films',
        desc: 'Self-destructive layers that leave “VOID” marks when peeled or tampered with.',
    },
    {
        icon: <QrCode className="h-8 w-8 text-blue-600" />,
        title: 'Smart QR with Blockchain Link',
        desc: 'Unique product IDs with real-time verification, integrated with ForgeryShield’s dashboard.',
    },
]

const Page = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            new Swiper('.mySwiper', {
                loop: true,
                spaceBetween: 30,
                grabCursor: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                },
            })
        }
    }, [])

    return (
        <>
            {/* Header Background Bar */}
            <div className="bg-[#3A3A3F] h-3" />

            {/* Header */}
            <div className="w-full max-w-8xl mx-auto px-6 md:px-16">
                <Header />
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-black text-white py-28 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Multi-Layered Label & Sticker Protection
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        From microtext and holograms to tamper-evident materials, ForgeryShield delivers banknote-level security in every label.
                    </p>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-24 bg-zinc-100">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16 text-zinc-800">
                        Advanced Security Layers We Offer
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {features.map(({ icon, title, desc }) => (
                            <motion.div
                                key={title}
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="bg-white p-6 rounded-2xl shadow-xl border border-zinc-200"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    {icon}
                                    <h3 className="text-xl font-semibold text-zinc-800">{title}</h3>
                                </div>
                                <p className="text-zinc-600 text-sm leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-zinc-800">
                        Label Styles & Security Embeds
                    </h2>
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                            {[
                                { icon: <ShieldCheck className="h-16 w-16 text-blue-600 mx-auto" />, label: 'Hologram + VOID' },
                                { icon: <Radiation className="h-16 w-16 text-blue-600 mx-auto" />, label: 'UV Ink + Microtext' },
                                { icon: <QrCode className="h-16 w-16 text-blue-600 mx-auto" />, label: 'QR Code + Serial ID' },
                                { icon: <Eye className="h-16 w-16 text-blue-600 mx-auto" />, label: 'IR Reactive Label' },
                            ].map(({ icon, label }) => (
                                <div key={label} className="swiper-slide px-6">
                                    <div className="bg-gray-50 rounded-xl shadow-md p-8 flex flex-col items-center justify-center h-full min-h-[250px]">
                                        {icon}
                                        <p className="mt-4 text-lg font-semibold text-zinc-700">{label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-pagination mt-6" />
                    </div>
                </div>
            </section>

            {/* Integration Section */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-zinc-800">
                            Integrated Protection from Design to Deployment
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Every ForgeryShield sticker or label is designed to embed physical and digital protection, customizable to your brand and product lifecycle. Our design team helps create full packaging systems with secure material layering.
                        </p>
                    </div>
                    <Image
                        src="/images/0h98aztczqhsqrdf5czxk796rw_thumbnail.png"
                        alt="Security sticker design"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-lg object-cover"
                    />
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="bg-black text-white py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold mb-4">Ready to Shield Your Brand?</h2>
                    <p className="text-lg mb-8 text-gray-300">
                        Let our security team craft a label that protects, tracks, and verifies — from the factory to the consumer.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white rounded-full font-semibold shadow-lg"
                    >
                        Request Free Sample Pack
                    </Link>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Page
