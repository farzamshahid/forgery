'use client';

import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
    return (
        <>
            <div className="relative bg-[#3A3A3F]">
                <div className="mx-auto flex h-3 items-center justify-center"></div>
            </div>
            <div className="w-full max-w-8xl mx-auto px-6 md:px-18">
                <Header />
            </div>

            {/* HERO */}
            <section className="relative bg-gradient-to-br from-[#f7faff] to-white py-28 px-6 text-center">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                        Securing Trust, Globally.
                    </h1>
                    <p className="text-xl text-gray-600 mt-6 mb-10">
                        About ForgeryShield – Your Defense Against Counterfeits
                    </p>
                    <button className="px-8 py-3 bg-blue-700 hover:bg-blue-800 transition text-white rounded-full text-lg font-semibold shadow-xl">
                        Explore Our Technology
                    </button>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="py-28 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white">
                <div>
                    <h2 className="text-4xl font-bold text-blue-900 mb-6">Who We Are</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        ForgeryShield is a purpose-built anti-counterfeiting platform protecting genuine
                        products from fakes in Pakistan and beyond. We focus on underdeveloped markets like South
                        Asia, Africa, and Latin America, where counterfeits are rampant and trust is critical.
                    </p>
                </div>
                <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
                    <Image src="/images/leandro-barreto-nomAp6_KVXU-unsplash.jpg" alt="Map" fill className="object-cover" />
                </div>
            </section>

            {/* WHAT WE DO */}
            <section className="bg-[#f8fbff] py-28 px-6 text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-16">What We Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {[
                        ['One Product. One Code.', 'Each item gets a secure, tamper-proof ID.'],
                        ['Instant Verification', 'Users can verify authenticity in seconds.'],
                        ['Supply Chain Control', 'End-to-end tracking with precision.'],
                    ].map(([title, desc], idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl border border-blue-100 transition"
                        >
                            <h3 className="text-xl font-semibold text-blue-800 mb-3">{title}</h3>
                            <p className="text-gray-600">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* RESEARCH INSTITUTE */}
            <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-28 px-6">
                <h2 className="text-4xl font-bold text-center mb-16">ForgeryShield Research Institute</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center max-w-6xl mx-auto">
                    {[
                        ['AI & Analytics', 'Behavioral tracking & insights.'],
                        ['Secure Printing', 'Advanced QR & holographic tech.'],
                        ['Blockchain', 'Immutable product records.'],
                        ['Field Labs', 'Real-world anti-counterfeit testing.'],
                    ].map(([title, desc], idx) => (
                        <div key={idx}>
                            <h4 className="text-lg font-semibold mb-2">{title}</h4>
                            <p className="text-gray-300 text-sm">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CAPABILITIES */}
            <section className="py-28 px-6 bg-white text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-12">Our Capabilities</h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
                    {[
                        'QR Security',
                        'Cloud Infrastructure',
                        'Big Data Analytics',
                        'Consumer Engagement',
                        'Industry Customization',
                    ].map((item, idx) => (
                        <span
                            key={idx}
                            className="bg-blue-100 text-blue-900 px-6 py-2 rounded-full font-medium text-sm shadow hover:scale-105 transition"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </section>

            {/* GLOBAL PRESENCE */}
            <section className="bg-gradient-to-b from-white to-[#f5f8fa] py-28 px-6 text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-8">Global Presence & Outreach</h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                    We work with partners around the world to bring powerful, scalable anti-counterfeiting
                    solutions to developing and developed markets alike.
                </p>
                <div className="relative w-full max-w-4xl h-80 mx-auto rounded-3xl overflow-hidden shadow-xl">
                    <Image src="/images/globe-895580_1280.jpg" alt="Rotating Globe" fill className="object-cover" />
                </div>
            </section>

            {/* VISION */}
            <section className="bg-blue-50 py-28 px-6 text-center">
                <blockquote className="text-3xl md:text-4xl font-light italic text-blue-900 max-w-4xl mx-auto leading-relaxed">
                    “To become the global gold standard in anti-counterfeiting solutions for emerging markets.”
                </blockquote>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-28 px-6 bg-white text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Join Us</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Whether you're a brand, distributor, or regulator — let’s build trust together.
                </p>
                <a
                    href="mailto:hello@forgeryshield.com"
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg rounded-full shadow-lg transition-transform hover:scale-105"
                >
                    Get in Touch
                </a>
            </section>
            <Footer />
        </>
    );
};

export default AboutPage;
