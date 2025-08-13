"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const cn = (...classes) => classes.filter(Boolean).join(' ');

const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                    Our Custom Anti-Counterfeit Process
                </h2>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl">
                    Tailored to your industry. Trusted by global brands. Our proven methodology ensures comprehensive protection for your products.
                </p>
            </div>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border border-white dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                                {item.title}
                            </h3>
                        </div>
                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

const ForgeryShieldProcess = () => {
    const processData = [
        {
            title: "Step 1",
            content: (
                <div className="mb-8">
                    <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                        Consultation & Assessment
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6 leading-relaxed">
                        We begin with a comprehensive assessment of your products and identify potential counterfeit risk areas specific to your industry. Our experts analyze your current security measures and supply chain vulnerabilities.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 mb-6">
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Key Benefits:</h5>
                        <div className="space-y-2">
                            {["Free product assessment", "Industry-specific risk analysis", "Supply chain vulnerability audit"].map((benefit, idx) => (
                                <div key={idx} className="flex items-center text-sm text-blue-700 dark:text-blue-300">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-32 flex items-center justify-center text-white font-semibold">
                            Risk Assessment
                        </div>
                        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg h-32 flex items-center justify-center text-white font-semibold">
                            Industry Analysis
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 2",
            content: (
                <div className="mb-8">
                    <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                        Custom Design & Planning
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6 leading-relaxed">
                        We create layered QR/hologram labels tailored specifically to your brand identity and security requirements. Every design element is crafted to be both visually appealing and security-enhanced.
                    </p>

                    <div className="bg-purple-50 dark:bg-purple-950 rounded-lg p-6 mb-6">
                        <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Design Features:</h5>
                        <div className="space-y-2">
                            {["Brand-matched design", "Multiple security layers", "Aesthetic integration"].map((benefit, idx) => (
                                <div key={idx} className="flex items-center text-sm text-purple-700 dark:text-purple-300">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg h-32 flex items-center justify-center text-white font-semibold">
                            QR Design
                        </div>
                        <div className="bg-gradient-to-br from-pink-500 to-red-600 rounded-lg h-32 flex items-center justify-center text-white font-semibold">
                            Hologram Layer
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 3",
            content: (
                <div className="mb-8">
                    <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                        Secure Encoding & Encryption
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6 leading-relaxed">
                        Each label is encoded with a unique, trackable identity using advanced encryption methods. Our proprietary encoding ensures absolute uniqueness with zero duplication possibilities.
                    </p>

                    <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 mb-6">
                        <h5 className="font-semibold text-green-800 dark:text-green-200 mb-3">Security Features:</h5>
                        <div className="space-y-2">
                            {["Unique product identity", "Advanced encryption", "Zero duplication guarantee"].map((benefit, idx) => (
                                <div key={idx} className="flex items-center text-sm text-green-700 dark:text-green-300">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-6 text-white">
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-2">256-bit</div>
                            <div className="text-sm opacity-90">Encryption Standard</div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 4",
            content: (
                <div className="mb-8">
                    <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                        Production & Quality Control
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6 leading-relaxed">
                        High-quality, tamper-evident label production with secure logistics and rigorous quality control. Manufacturing in secure facilities with chain-of-custody tracking throughout production.
                    </p>

                    <div className="bg-orange-50 dark:bg-orange-950 rounded-lg p-6 mb-6">
                        <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">Production Standards:</h5>
                        <div className="space-y-2">
                            {["Tamper-evident technology", "Secure manufacturing", "Quality assurance testing"].map((benefit, idx) => (
                                <div key={idx} className="flex items-center text-sm text-orange-700 dark:text-orange-300">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg h-24 flex items-center justify-center text-white font-semibold text-sm text-center">
                            Secure Facility
                        </div>
                        <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-lg h-24 flex items-center justify-center text-white font-semibold text-sm text-center">
                            Quality Control
                        </div>
                        <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg h-24 flex items-center justify-center text-white font-semibold text-sm text-center">
                            Chain of Custody
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 5",
            content: (
                <div className="mb-8">
                    <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                        System Integration
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6 leading-relaxed">
                        We integrate scanning technology into your existing supply chain and POS systems seamlessly. Minimal disruption to current operations with comprehensive staff training included.
                    </p>

                    <div className="bg-indigo-50 dark:bg-indigo-950 rounded-lg p-6 mb-6">
                        <h5 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">Integration Benefits:</h5>
                        <div className="space-y-2">
                            {["Seamless integration", "Staff training included", "API connectivity"].map((benefit, idx) => (
                                <div key={idx} className="flex items-center text-sm text-indigo-700 dark:text-indigo-300">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 rounded-lg p-6">
                        <div className="grid grid-cols-3 gap-4 text-white text-center">
                            <div>
                                <div className="text-2xl font-bold mb-1">API</div>
                                <div className="text-xs opacity-90">Integration</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold mb-1">POS</div>
                                <div className="text-xs opacity-90">Systems</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold mb-1">24/7</div>
                                <div className="text-xs opacity-90">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Step 6",
            content: (
                <div className="mb-8">
                    <h4 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-4">
                        Live Dashboard & Analytics
                    </h4>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6 leading-relaxed">
                        Monitor real-time product scans and flag counterfeits instantly through our comprehensive dashboard. Advanced analytics help detect fake hotspots and understand consumer behavior patterns.
                    </p>

                    <div className="bg-teal-50 dark:bg-teal-950 rounded-lg p-6 mb-6">
                        <h5 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">Analytics Features:</h5>
                        <div className="space-y-2">
                            {["Real-time monitoring", "Counterfeit alerts", "Consumer analytics"].map((benefit, idx) => (
                                <div key={idx} className="flex items-center text-sm text-teal-700 dark:text-teal-300">
                                    <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg p-6 text-white">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-2">99.9%</div>
                                <div className="text-sm opacity-90">Detection Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold mb-2">&lt;1s</div>
                                <div className="text-sm opacity-90">Response Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="relative bg-[#3A3A3F]">
                <div className="mx-auto flex h-3 items-center justify-center"></div>
            </div>
            <div className="w-full max-w-8xl mx-auto px-6 md:px-18">
                <Header />
            </div>

            <div className="min-h-screen bg-white dark:bg-neutral-950">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="relative z-10 max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                            ForgeryShield Process
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8">
                            Advanced Anti-Counterfeit Protection
                        </p>
                        <div className="flex justify-center space-x-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-75"></div>
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse delay-150"></div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <Timeline data={processData} />

                {/* Call to Action */}
                <section className="bg-gradient-to-r from-gray-900 to-black text-white text-center py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-blue-600 bg-clip-text text-transparent">
                            Ready to Protect Your Brand?
                        </h2>
                        <p className="mb-8 text-xl text-gray-300">
                            Schedule a free product assessment and demo today.
                        </p>
                        <button className="bg-blue-600 text-black px-8 py-4 font-bold rounded-full text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                            Get Started Today
                        </button>
                    </div>
                </section>
            </div>
            <Footer />
        </>

    );
};

export default ForgeryShieldProcess;