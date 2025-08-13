'use client'
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FiPackage } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/pagination';
import Header from '@/components/ui/header';
import Link from 'next/link';
import Footer from '@/components/ui/footer';

export default function PackagingPage() {
    useEffect(() => {
        // Swiper auto-init
    }, []);

    return (
        <>
            {/* Header Wrapper */}
            <div className="bg-[#3A3A3F]">
                <div className="mx-auto h-3 flex items-center justify-center"></div>
            </div>
            <div className="w-full max-w-8xl mx-auto px-6 md:px-18">
                <Header />
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-black text-white py-24 text-center px-6">
                <div className="max-w-5xl mx-auto animate-fadeInUp duration-1000">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                        Tamper-Proof Packaging & Smart Labels
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Secure your products with our custom anti-counterfeit packaging solutions — from tamper-evident printed boxes to QR-coded seals and holographic wraps. Build trust. Protect your brand.
                    </p>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-24 bg-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Smart Packaging Solutions</h2>
                        <ul className="space-y-4 text-lg text-gray-700 list-disc pl-5">
                            <li>Custom anti-counterfeit QR labels</li>
                            <li>Ready-to-ship printed boxes with secure patterns</li>
                            <li>Tamper-evident seals and shrink sleeves</li>
                            <li>Fully branded cartons and pouches</li>
                            <li>End-to-end packaging design & printing</li>
                        </ul>
                    </div>
                    <div>
                        <img
                            src="/images/free-shipping-box-mockup-1.jpg"
                            alt="ForgeryShield Secure Packaging"
                            className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Swiper Carousel */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-extrabold mb-10 text-gray-800">Packaging Styles We Offer</h2>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        loop={true}
                        spaceBetween={30}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mySwiper"
                    >
                        {[
                            { icon: <FiPackage />, alt: 'Pharma Carton', label: 'Pharma Boxes' },
                            { icon: <FiPackage />, alt: 'Shrink Sleeves', label: 'Shrink Sleeves' },
                            { icon: <FiPackage />, alt: 'Cosmetic Packaging', label: 'Cosmetic Cartons' },
                            { icon: <FiPackage />, alt: 'Food Seal Box', label: 'Food-Grade Pouches' },
                        ].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-5xl text-blue-600 mb-4 flex justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">{item.label}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black text-white py-24">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                        Need Secure Packaging That Works?
                    </h2>
                    <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
                        Partner with ForgeryShield and elevate your product protection to international standards.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white rounded-full font-semibold shadow-md hover:shadow-xl"
                    >
                        Get Started Today
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    );
}
