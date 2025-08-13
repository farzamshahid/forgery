'use client'
import React from 'react';
import Header from '@/components/ui/header';
import { motion } from 'framer-motion';
import Footer from '@/components/ui/footer';
import {
    FaPills,
    FaPumpSoap,
    FaHamburger,
    FaGlassWhiskey,
    FaMicrochip,
    FaCarSide,
    FaTshirt,
    FaSeedling,
    FaCapsules,
} from 'react-icons/fa';

const page = () => {

    const industries = [
        { icon: <FaPills />, label: 'Pharmaceuticals' },
        { icon: <FaPumpSoap />, label: 'Cosmetics' },
        { icon: <FaHamburger />, label: 'Packaged Food' },
        { icon: <FaGlassWhiskey />, label: 'Beverages' },
        { icon: <FaMicrochip />, label: 'Electronics' },
        { icon: <FaCarSide />, label: 'Auto Parts' },
        { icon: <FaTshirt />, label: 'Fashion & Apparel' },
        { icon: <FaSeedling />, label: 'Agricultural Products' },
        { icon: <FaCapsules />, label: 'Nutraceuticals' },
    ];


    const features = [
        {
            title: 'Smart Authentication',
            description:
                'Unique QR codes allow customers and retailers to instantly verify authenticity via scan.',
        },
        {
            title: 'Tamper-Proof Seals',
            description:
                'Our physical labels show visible damage if altered or removed, deterring fraud.',
        },
        {
            title: 'Global Tracking',
            description:
                'Track product scans, detect unauthorized distribution, and control grey market activity.',
        },
    ];

    const benefits = [
        {
            title: 'Brand Loyalty',
            description: 'Ensure customer trust and brand recall by offering proof of authenticity.',
        },
        {
            title: 'Revenue Protection',
            description: 'Prevent loss caused by counterfeit goods and unauthorized sales.',
        },
        {
            title: 'Legal Support',
            description: 'Gain traceable data to support legal action against counterfeiters.',
        },
    ];

    const highRisk = ['💊 Pharmaceuticals', '💄 Cosmetics', '🍫 Food & Beverage', '📱 Consumer Electronics'];


    return (
        <>
            <div className="relative bg-[#3A3A3F]">
                <div className="mx-auto flex h-3 items-center justify-center"></div>
            </div>
            <div className="w-full max-w-8xl mx-auto px-6 md:px-18">
                <Header />
            </div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white py-24 text-center px-4">
                <h1 className="text-5xl font-extrabold tracking-tight">Ultimate Brand Protection</h1>
                <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-300">
                    Secure your brand, product integrity, and consumer trust with ForgeryShield’s
                    multilayered protection system.
                </p>
            </section>

            {/* Why Brand Protection Matters */}
            <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold">Why Brand Protection Matters</h2>
                    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
                        Counterfeit products are costing legitimate businesses billions each year, damaging
                        consumer trust and risking lives. ForgeryShield empowers brands to defend their
                        reputation, revenues, and loyal customer base through cutting-edge security labeling and
                        real-time product verification.
                    </p>

                    {/* Framer Motion Carousel */}
                    <div className="mt-12 overflow-hidden relative">
                        <motion.div
                            className="flex gap-10 px-6"
                            animate={{ x: ['0%', '-50%'] }}
                            transition={{
                                repeat: Infinity,
                                duration: 40,
                                ease: 'linear',
                            }}
                        >
                            {industries.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-white text-base md:text-lg font-medium opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap"
                                >
                                    <span className="text-2xl leading-none flex items-center justify-center">{item.icon}</span>
                                    <span className="leading-none">{item.label}</span>
                                </div>
                            ))}

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How We Protect Your Brand */}
            <section className="py-20 bg-white px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-900">How We Protect Your Brand</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        We go beyond traditional labeling by using advanced QR security layers, tamper-evident
                        seals, serialized authentication, and real-time verification to protect your identity
                        across global markets.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10 text-left">
                        {features.map((item, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
                            >
                                <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-blue-50 py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-8 text-gray-800">
                        Ideal for High-Risk Categories
                    </h2>
                    <div className="grid md:grid-cols-4 gap-6 text-sm text-gray-700">
                        {highRisk.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-base font-medium"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 text-center bg-white px-4">
                <h2 className="text-3xl font-semibold mb-10 text-gray-900">Benefits of ForgeryShield</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {benefits.map((item, i) => (
                        <div key={i} className="p-6 rounded-xl shadow bg-gray-50 hover:shadow-md transition">
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-gray-500 mt-3">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-[#0f172a] text-white text-center py-20 px-4">
                <h2 className="text-3xl font-bold mb-4">Let’s Shield Your Brand from Fakes</h2>
                <p className="mb-6 text-lg text-gray-300 max-w-xl mx-auto">
                    Start with a free assessment of your current product vulnerabilities and market risks.
                </p>
                <a
                    href="/contact"
                    className="bg-blue-300 text-black px-8 py-3 font-semibold rounded-full shadow  transition"
                >
                    Protect Your Brand
                </a>
            </section>
            <Footer />

        </>
    )
}

export default page