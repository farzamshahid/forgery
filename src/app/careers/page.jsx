'use client';
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { motion } from "framer-motion";

export default function Careers() {
    return (
        <>
            {/* Header */}
            <div className="bg-white">
                <div className="w-full max-w-8xl mx-auto px-6 md:px-18">
                    <Header />
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-white text-center py-24 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold text-[#0A0A23]"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Shape the Future With Us
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        At <span className="font-semibold text-[#0A0A23]">YourCompany</span>, we build products that inspire, empower, and redefine industries.
                        Join a team where innovation meets craftsmanship, and your work creates real impact.
                    </motion.p>
                    <motion.a
                        href="#jobs"
                        className="mt-8 inline-block px-8 py-3 bg-[#0053F0] text-white text-lg font-semibold rounded-full shadow hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05 }}
                    >
                        Explore Opportunities
                    </motion.a>
                </div>
            </section>

            {/* Job Section */}
            <section id="jobs" className="py-20 bg-[#F9FAFB]">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 hover:shadow-xl transition duration-500"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-3xl font-bold text-[#0A0A23]">
                            Senior Python Developer
                        </h2>
                        <p className="mt-3 text-gray-600 leading-relaxed">
                            We are searching for a visionary Python Developer with a passion for crafting scalable, high-performance backend systems.
                            As part of our elite engineering team, you will architect, build, and optimize solutions that power our next-generation products.
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-semibold text-[#0A0A23]">Location</h3>
                                <p className="text-gray-600">Flexible — Remote or On-site at our HQ</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#0A0A23]">Experience</h3>
                                <p className="text-gray-600">3+ Years in Backend Development</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#0A0A23]">Compensation</h3>
                                <p className="text-gray-600">Highly Competitive + Performance Bonuses</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#0A0A23]">Core Skills</h3>
                                <p className="text-gray-600">Python, Django / FastAPI, REST & GraphQL APIs, SQL & NoSQL Databases</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <a
                                href="mailto:careers@yourcompany.com?subject=Application for Senior Python Developer"
                                className="inline-block px-8 py-3 bg-[#0053F0] text-white text-lg font-semibold rounded-full shadow hover:shadow-lg transform hover:scale-105 transition-all"
                            >
                                Apply Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A23]">
                        Can’t find your dream role?
                    </h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Exceptional talent is always welcome here. If you believe you can help us
                        push boundaries and create game-changing solutions, we’d love to hear from you.
                    </p>
                    <a
                        href="mailto:careers@yourcompany.com"
                        className="mt-8 inline-block px-8 py-3 bg-[#0A0A23] text-white text-lg font-semibold rounded-full shadow hover:bg-[#1A1A3D] hover:shadow-lg transform hover:scale-105 transition-all"
                    >
                        Send Your Resume
                    </a>
                </div>
            </section>

            <Footer />
        </>
    );
}
