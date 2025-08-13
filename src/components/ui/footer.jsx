import React from 'react';
import { Linkedin, Github, Youtube, X } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="bg-[#fcfcfc] text-[#4d4d4d] border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-8 md:py-16 ">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto border-b border-gray-200 pb-8 md:pb-16 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Section */}
                <div className="md:mt-10 md:ml-40">
                    <div className="flex">
                        <Image src="/assets/forgery-shield-logo.svg" width={136} height={23} alt="Forgery Shield Logo"></Image>
                    </div>
                </div>

                {/* Links Section */}
                <div className="md:flex">
                    {/* Product Links */}
                    <div className='md:mr-29 md:ml-20'>
                        <h5 className="font-semibold text-gray-900 mb-4">Product</h5>
                        <ul className="space-y-2 whitespace-nowrap">
                            <li><Link href="/security-sticker" className="hover:text-gray-900">Security Stickers</Link></li>
                            <li><Link href="/anti-counterfeiting" className="hover:text-gray-900">Anti Counterfeiting Systems</Link></li>
                            <li><Link href="/packaging" className="hover:text-gray-900">Packaging</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h5 className="font-semibold md:mt-0 mt-3 text-gray-900 mb-4">Company</h5>
                        <ul className="space-y-2  md:mr-30 whitespace-nowrap">
                            <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
                            <li><Link href="/careers" className="hover:text-gray-900">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className='whitespace-nowrap'>
                        <h5 className="font-semibold text-gray-900 mb-4 md:mt-0 mt-3">Services</h5>
                        <ul className="space-y-4">
                            <li><Link href="/brandprotection" className="hover:text-gray-900">Brand Protection</Link></li>
                            <li><Link href="/anti-forgeryqr" className="hover:text-gray-900">Anti Forgery QR Code</Link></li>
                            <li><Link href="/anti-forgerytech" className="hover:text-gray-900">Anti-Forgery Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8">
                <div className="text-sm text-gray-500 mb-4 md:ml-23 md:mb-0">
                    © 2025 Forgery Shield
                </div>
                <div className="flex space-x-6 text-gray-500 md:mr-20">
                    <Link href="#" aria-label="Twitter"><X size={20} className="hover:text-gray-900" /></Link>
                    <Link href="#" aria-label="LinkedIn"><Linkedin size={20} className="hover:text-gray-900" /></Link>
                    <Link href="#" aria-label="Discord"><FaDiscord size={20} className="hover:text-gray-900" /></Link>
                    <Link href="#" aria-label="GitHub"><Github size={20} className="hover:text-gray-900" /></Link>
                    <Link href="#" aria-label="YouTube"><Youtube size={20} className="hover:text-gray-900" /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
