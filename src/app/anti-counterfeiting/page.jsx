'use client'
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Header from '@/components/ui/header'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/ui/footer'

export default function Home() {
    useEffect(() => { }, [])

    return (
        <>
            <div className="relative bg-[#3A3A3F]">
                <div className="mx-auto flex h-3 items-center justify-center"></div>
            </div>
            <div className="w-full max-w-8xl mx-auto px-6 md:px-18">
                <Header />
            </div>
            {/* Hero */}
            <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white text-center py-24 px-6">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
                    Elevate Your Brand’s Security
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
                    Protect your products, engage your customers, and gain real-time insights — all in one powerful system.
                </p>
            </section>

            {/* System Overview */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">A Fully Customizable Solution</h2>
                <div className="grid md:grid-cols-2 gap-14 text-gray-700">
                    {[
                        ['Dynamic QR Labels', 'Each label contains encrypted, unique metadata that’s impossible to replicate.'],
                        ['Scalable Modules', 'Pick from dashboards, mobile apps, and analytics — all designed for any scale.'],
                        ['Real-Time Authentication', 'Instant product verification via any mobile device — anywhere, anytime.'],
                        ['Geo Tracking & Alerts', 'Detect anomalies and threats with AI-backed scanning intelligence.'],
                    ].map(([title, desc], i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
                            <p className="text-gray-600">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Dashboard */}
            <section className="bg-gray-50 py-20 px-6 text-center">
                <h2 className="text-4xl font-bold mb-6">Unified Dashboard & Mobile App</h2>
                <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-700">
                    Visualize and manage your supply chain and security scans with beautifully designed tools.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <Image src="/images/62d5ba2d8421b161d7433fcc_Group 1914.png" alt="Dashboard" width={300} height={300} className="rounded-2xl  shadow-xl" />
                    <Image src="/images/mobile-phone-icon-logo-illustration-suitable-for-web-design-logo-application-free-vector-removebg-preview.png" width={300} height={300} alt="Mobile" className="rounded-2xl" />
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-14">Why Choose ForgeryShield</h2>
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    {[
                        ['🔐', 'End-to-End Security', 'Tamper-proof verification and encrypted label technology.'],
                        ['📈', 'Insightful Analytics', 'Monitor scan behavior and customer activity in real-time.'],
                        ['🌍', 'Geo Mapping', 'Instantly view product scans across the globe.'],
                    ].map(([icon, title, desc], i) => (
                        <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                            <div className="text-5xl mb-4">{icon}</div>
                            <h3 className="font-bold text-xl mb-2">{title}</h3>
                            <p className="text-gray-600">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Data Center */}
            <section className="bg-white py-20 px-6 text-center border-t border-gray-100">
                <h2 className="text-4xl font-bold mb-6">Private Cloud + Data Center Options</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-10">
                    GDPR-compliant, enterprise-grade data solutions with options for on-premise deployment. Your privacy is our promise.
                </p>
                <Image src="/images/330px-Datacenter.jpg" alt="Data Center" width={400} height={300} className=" rounded-xl shadow-lg mx-auto" />
            </section>

            {/* Industries Swiper */}
            <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-6 text-center">
                <h2 className="text-3xl font-bold mb-8">Industries We Protect</h2>
                <div className="max-w-5xl mx-auto relative">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        loop
                        spaceBetween={20}
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="!p-2"
                    >
                        {[
                            '💊 Pharmaceuticals',
                            '🍫 Food & Beverage',
                            '💄 Cosmetics',
                            '📦 FMCG',
                            '🔧 Auto Parts',
                            '👟 Apparel',
                            '🛒 Retail Chains',
                        ].map((text, i) => (
                            <SwiperSlide key={i}>
                                <div className="bg-white p-6 whitespace-nowrap rounded-xl shadow hover:shadow-xl transition duration-300 min-h-[8rem] flex items-center justify-center">
                                    <span className="text-sm md:text-lg font-medium">{text}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black text-white py-24 text-center">
                <h2 className="text-4xl font-bold mb-4">Start Protecting Your Products Today</h2>
                <p className="text-lg mb-8 text-gray-300">Book a free demo or speak with our expert team to build your solution.</p>
                <Link
                    href="mailto:sales@forgeryshield.com"
                    className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg transition"
                >
                    Request Demo
                </Link>
            </section>
            <Footer />
        </>
    )
}
