'use client';
import { React, useState } from 'react';
import TopBanner from './topBanner';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isProductExpanded, setIsProductExpanded] = useState(false);
  const [isSolutionsExpanded, setIsSolutionsExpanded] = useState(false);
  const [isDocsExpanded, setIsDocsExpanded] = useState(false);
  const [isCompanyExpanded, setIsCompanyExpanded] = useState(false);
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [isSolutionHovered, setIsSolutionHovered] = useState(false);
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <>
        <div className="hidden lg:block">
          <TopBanner />
        </div>

        {!isOpen && (
          <div className="block lg:hidden">
            <TopBanner />
          </div>
        )}
      </>

      <header id="header" className="pointer-events-none sticky top-0  z-40  w-full text-[13px] ">
        <div className="relative z-40 bg-gray-50/80 dark:bg-gray-950/[0.01] backdrop-blur-md">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-x-0 top-[-138px] -z-10 flex justify-center overflow-hidden opacity-80">
              <div
                className="flex-none rounded-[50%] [display:var(--light,block)_var(--dark,none)]"
                style={{
                  background: 'radial-gradient(50% 50% at 50% 50%, #f5f6f7 0%, rgb(245 246 247 / 0) 100%)',
                }}
              ></div>
            </div>
          </div>

          <div className="pointer-events-auto relative mx-auto flex h-16 items-center">
            <div className="absolute inset-x-0 top-full h-px bg-gray-500/10 dark:bg-white/10"></div>
            <Link href="/" alt="Forgery Shield Logo">
              <Image src="/assets/forgery-shield-logo.svg" width={136} height={23} alt="Forgery Shield Logo"></Image>
            </Link>

            <nav aria-label="Main" data-orientation="horizontal" dir="ltr" className="ml-7 hidden lg:block">
              <div style={{ position: 'relative' }}>
                <ul data-orientation="horizontal" className="flex text-gray-950 dark:text-white" dir="ltr">
                  <li className="relative flex" onMouseEnter={() => setIsProductHovered(true)} onMouseLeave={() => setIsProductHovered(false)}>
                    <button
                      id="radix-product-trigger"
                      data-state={isProductHovered ? 'open' : 'closed'}
                      aria-expanded={isProductHovered}
                      aria-controls="radix-product-content"
                      className="group cursor-pointer flex data-[state=open]:after:absolute data-[state=open]:after:top-full data-[state=open]:after:h-4 data-[state=open]:after:w-full"
                      data-radix-collection-item=""
                    >
                      <span className="flex items-center gap-x-2 rounded-md px-2 py-0.5     transition-colors group-hover:bg-gray-950/5 dark:group-hover:bg-white/10">
                        Product
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 10 10"
                          fill="none"
                          className="size-2.5 flex-none text-gray-400 transition-colors group-data-[state=open]:text-[var(--light,theme(colors.gray.600))_var(--dark,theme(colors.gray.200))]"
                        >
                          <path d="M1.75 3.75L5 7.25L8.25 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>

                    {isProductHovered && (
                      <>
                        <span
                          aria-hidden="true"
                          tabIndex="0"
                          style={{
                            position: 'absolute',
                            border: '0px',
                            width: '1px',
                            height: '1px',
                            padding: '0px',
                            margin: '-1px',
                            overflow: 'hidden',
                            clip: 'rect(0px, 0px, 0px, 0px)',
                            whiteSpace: 'nowrap',
                            overflowWrap: 'normal',
                          }}
                        />
                        <div
                          className="absolute top-full mt-2.5 -left-3"
                          id="radix-product-content"
                          aria-labelledby="radix-product-trigger"
                          data-orientation="horizontal"
                          data-state="open"
                          dir="ltr"
                          style={{ opacity: 1, transform: 'translateY(0px)' }}
                        >
                          <div
                            className="rounded-xl bg-gray-50 p-1 text-gray-950"
                            style={{
                              boxShadow: 'rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(25, 28, 33, 0.2) 0px 16px 36px -6px, rgba(0, 0, 0, 0.08) 0px 8px 16px -3px',
                            }}
                          >
                            <ul
                              className="w-max max-w-xl rounded-lg bg-white p-3"
                              style={{
                                boxShadow: 'rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(106, 115, 133, 0.12) 0px 5px 10px -2px, rgba(0, 0, 0, 0.12) 0px 2px 6px -2px',
                              }}
                            >
                              <li>
                                <a className="group block py-2.5 lg:p-1" data-radix-collection-item="" href="/security-sticker" data-tabindex="" tabIndex="-1">
                                  <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                    <div className="flex gap-x-4">
                                      <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                        <svg viewBox="0 0 40 40" fill="none" className="size-10" aria-hidden="true">
                                          {/* SVG content for User Authentication */}
                                        </svg>
                                      </div>
                                      <div>
                                        <div className="flex items-center gap-1.5">
                                          <div className="text-[0.875rem]/5   text-gray-950">Security Stickers</div>
                                        </div>
                                        <div className="mt-1 text-gray-600">Powerful options to securely authenticate and manage your users</div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="group block py-2.5 lg:p-1" data-radix-collection-item="" href="/anti-counterfeiting" data-tabindex="" tabIndex="-1">
                                  <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                    <div className="flex gap-x-4">
                                      <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                        <svg viewBox="0 0 40 40" fill="none" className="size-10" aria-hidden="true">
                                          {/* SVG content for B2B SaaS Suite */}
                                        </svg>
                                      </div>
                                      <div>
                                        <div className="flex items-center gap-1.5">
                                          <div className="text-[0.875rem]/5   text-gray-950">Anti-counterfeiting System</div>
                                        </div>
                                        <div className="mt-1   text-gray-600">Add-on features built specifically for B2B applications</div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="group block py-2.5 lg:p-1" data-radix-collection-item="" href="/packaging" data-tabindex="" tabIndex="-1">
                                  <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                    <div className="flex gap-x-4">
                                      <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                        <svg fill="none" viewBox="0 0 40 40" className="size-10" aria-hidden="true">
                                          {/* SVG content for Billing */}
                                        </svg>
                                      </div>
                                      <div>
                                        <div className="flex items-center gap-1.5">
                                          <div className="text-[0.875rem]/5   text-gray-950">Packaging</div>
                                          <div className="relative inline-block bg-blue-50 px-[0.21875rem] py-[0.09375rem] text-[0.625rem]/[0.875rem]   text-blue-500">
                                            New
                                            <span className="block transform-gpu absolute -inset-x-[0.21875rem] -top-px text-blue-600/60">
                                              <svg width="100%" height="1" strokeLinecap="round">
                                                <line x1="0" y1="0.5" x2="100%" y2="0.5" style={{ stroke: 'currentcolor', strokeWidth: 1, strokeDasharray: '0.5, 2' }} />
                                              </svg>
                                            </span>
                                            <span className="block transform-gpu absolute -inset-x-[0.21875rem] -bottom-px text-blue-600/60">
                                              <svg width="100%" height="1" strokeLinecap="round">
                                                <line x1="0" y1="0.5" x2="100%" y2="0.5" style={{ stroke: 'currentcolor', strokeWidth: 1, strokeDasharray: '0.5, 2' }} />
                                              </svg>
                                            </span>
                                            <span className="block transform-gpu absolute -inset-y-[0.21875rem] -left-px text-blue-600/60">
                                              <svg width="1" height="100%" strokeLinecap="round">
                                                <line x1="0.5" y1="0" x2="0.5" y2="100%" style={{ stroke: 'currentcolor', strokeWidth: 1, strokeDasharray: '0.5, 2' }} />
                                              </svg>
                                            </span>
                                            <span className="block transform-gpu absolute -inset-y-[0.21875rem] -right-px text-blue-600/60">
                                              <svg width="1" height="100%" strokeLinecap="round">
                                                <line x1="0.5" y1="0" x2="0.5" y2="100%" style={{ stroke: 'currentcolor', strokeWidth: 1, strokeDasharray: '0.5, 2' }} />
                                              </svg>
                                            </span>
                                          </div>
                                        </div>
                                        <div className="mt-1   text-gray-600">The easiest way to implement subscriptions for applications</div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </li>


                  <li className="relative flex" onMouseEnter={() => setIsSolutionHovered(true)} onMouseLeave={() => setIsSolutionHovered(false)}>
                    <button
                      id="radix-_R_eiveivb_-trigger-Solutions"
                      data-state={isSolutionHovered ? 'open' : 'closed'}
                      aria-expanded={isSolutionHovered}
                      aria-controls="radix-_R_eiveivb_-content-Solutions"
                      className="group cursor-pointer flex   data-[state=open]:after:absolute data-[state=open]:after:top-full data-[state=open]:after:h-4 data-[state=open]:after:w-full"
                      data-radix-collection-item=""
                    >
                      <span className="flex items-center gap-x-2 rounded-md px-2 py-0.5     transition-colors group-hover:bg-gray-950/5 dark:group-hover:bg-white/10">
                        Services
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 10 10"
                          fill="none"
                          className="size-2.5 flex-none text-gray-400 transition-colors group-data-[state=open]:text-[var(--light,theme(colors.gray.600))_var(--dark,theme(colors.gray.200))]"
                        >
                          <path d="M1.75 3.75L5 7.25L8.25 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </span>
                    </button>
                    {isSolutionHovered && (
                      <>
                        <span
                          aria-hidden="true"
                          tabIndex="0"
                          style={{
                            position: 'absolute',
                            border: '0px',
                            width: '1px',
                            height: '1px',
                            padding: '0px',
                            margin: '-1px',
                            overflow: 'hidden',
                            clip: 'rect(0px, 0px, 0px, 0px)',
                            whiteSpace: 'nowrap',
                            overflowWrap: 'normal',
                          }}
                        ></span>
                        <div
                          className="absolute top-full mt-2.5 -left-3"
                          id="radix-_R_eiveivb_-content-Solutions"
                          aria-labelledby="radix-_R_eiveivb_-trigger-Solutions"
                          data-orientation="horizontal"
                          data-state="open"
                          dir="ltr"
                          style={{
                            opacity: 1,
                            transform: 'translateY(0px)',
                          }}
                        >
                          <div
                            className="rounded-xl bg-gray-50 p-1 text-gray-950"
                            style={{
                              boxShadow: 'rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(25, 28, 33, 0.2) 0px 16px 36px -6px, rgba(0, 0, 0, 0.08) 0px 8px 16px -3px',
                            }}
                          >
                            <ul
                              className="w-max max-w-xl rounded-lg bg-white p-3"
                              style={{
                                boxShadow: 'rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(106, 115, 133, 0.12) 0px 5px 10px -2px, rgba(0, 0, 0, 0.12) 0px 2px 6px -2px',
                              }}
                            >
                              <li>
                                <a className="group block py-2.5 lg:p-1" data-radix-collection-item="" href="/brandprotection">
                                  <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                    <div className="flex gap-x-4">
                                      <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                        <svg viewBox="0 0 40 40" className="size-10" aria-hidden="true">
                                          <svg width="24" height="24" x="8" y="8" viewBox="-10.5 -9.45 21 18.9">
                                            <circle cx="0" cy="0" r="2" fill="#087EA4"></circle>
                                            <g stroke="#087EA4" strokeWidth="1" fill="none">
                                              <ellipse rx="10" ry="4.5"></ellipse>
                                              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                                              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                                            </g>
                                          </svg>
                                        </svg>
                                      </div>
                                      <div>
                                        <div className="flex items-center gap-1.5">
                                          <div className="text-[0.875rem]/5   text-gray-950">Brand Protection</div>
                                        </div>
                                        <div className="mt-1   text-gray-600">Embeddable prebuilt UI components for quick and seamless integrations</div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="group block py-2.5 lg:p-1" data-radix-collection-item="" href="/nextjs-authentication">
                                  <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                    <div className="flex gap-x-4">
                                      <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                        <svg viewBox="-60 -60 300 300" className="size-10" aria-hidden="true">
                                          <mask height="180" id=":r8:mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
                                            <circle cx="90" cy="90" fill="black" r="90"></circle>
                                          </mask>
                                          <g mask="url(#:r8:mask0_408_134)">
                                            <circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle>
                                            <path
                                              d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                                              fill="url(#:r8:paint0_linear_408_134)"
                                            ></path>
                                            <rect fill="url(#:r8:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect>
                                          </g>
                                          <defs>
                                            <linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5">
                                              <stop stopColor="white"></stop>
                                              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                            </linearGradient>
                                            <linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875">
                                              <stop stopColor="white"></stop>
                                              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                            </linearGradient>
                                          </defs>
                                        </svg>
                                      </div>
                                      <div>
                                        <div className="flex items-center gap-1.5">
                                          <div className="text-[0.875rem]/5   text-gray-950">Anti Forgery QR Code</div>
                                        </div>
                                        <div className="mt-1   text-gray-600">The fastest and most seamless authentication solution for Next.js</div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="group block py-2.5 lg:p-1" data-radix-collection-item="" href="/expo-authentication">
                                  <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                    <div className="flex gap-x-4">
                                      <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                        <svg viewBox="0 0 40 40" className="size-10" aria-hidden="true">
                                          <path d="M19.425 17.378c.18-.264.376-.298.537-.298.16 0 .425.034.605.298 2.344 3.22 7.206 11.715 7.655 12.177.666.685 1.58.258 2.11-.519.523-.765.668-1.302.668-1.875 0-.39-7.57-14.475-8.334-15.648-.733-1.128-.972-1.413-2.226-1.413H19.5c-1.252 0-1.433.285-2.166 1.412C16.572 12.687 9 26.772 9 27.162c0 .574.145 1.11.668 1.876.53.776 1.444 1.204 2.11.518.45-.462 5.304-8.957 7.647-12.176v-.002Z"></path>
                                        </svg>
                                      </div>
                                      <div>
                                        <div className="flex items-center gap-1.5">
                                          <div className="text-[0.875rem]/5   text-gray-950">Anti-forgery Technology</div>
                                        </div>
                                        <div className="mt-1   text-gray-600">Implement cross-platform authentication the React way</div>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </li>

                  <li className="flex cursor-pointer">
                    <a className="group/link flex   cursor-pointer" data-radix-collection-item="" href="/productVerification">
                      <span className="rounded-md px-2 py-0.5     transition-colors group-hover/link:bg-gray-950/5 dark:group-hover/link:bg-white/10">Product Verification</span>
                    </a>
                  </li>

                  {/* Pricing */}
                  <li className="flex cursor-pointer">
                    <a className="group/link flex   cursor-pointer" data-radix-collection-item="" href="/processPage">
                      <span className="rounded-md px-2 py-0.5     transition-colors group-hover/link:bg-gray-950/5 dark:group-hover/link:bg-white/10">Process</span>
                    </a>
                  </li>

                  {/* Company */}
                  <li className="relative flex" onMouseEnter={() => setIsCompanyHovered(true)} onMouseLeave={() => setIsCompanyHovered(false)}>
                    <button
                      id="radix-_R_eiveivb_-trigger-Company"
                      data-state={isCompanyHovered ? 'open' : 'closed'}
                      aria-expanded={isCompanyHovered}
                      aria-controls="radix-_R_eiveivb_-content-Company"
                      className=" cursor-pointer group flex   data-[state=open]:after:absolute data-[state=open]:after:top-full data-[state=open]:after:h-4 data-[state=open]:after:w-full"
                      data-radix-collection-item=""
                    >
                      <span className="flex items-center gap-x-2 rounded-md px-2 py-0.5     transition-colors group-hover:bg-gray-950/5 dark:group-hover:bg-white/10">
                        Company
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 10 10"
                          fill="none"
                          className="size-2.5 flex-none text-gray-400 transition-colors group-data-[state=open]:text-[var(--light,theme(colors.gray.600))_var(--dark,theme(colors.gray.200))]"
                        >
                          <path d="M1.75 3.75L5 7.25L8.25 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    {isCompanyHovered && (
                      <>
                        <span
                          aria-hidden="true"
                          tabIndex="0"
                          style={{
                            position: 'absolute',
                            border: '0px',
                            width: '1px',
                            height: '1px',
                            padding: '0px',
                            margin: '-1px',
                            overflow: 'hidden',
                            clip: 'rect(0px, 0px, 0px, 0px)',
                            whiteSpace: 'nowrap',
                            overflowWrap: 'normal',
                          }}
                        />
                        <div
                          className="absolute top-full mt-2.5 -left-3"
                          id="radix-_R_eiveivb_-content-Company"
                          aria-labelledby="radix-_R_eiveivb_-trigger-Company"
                          data-orientation="horizontal"
                          data-state="open"
                          dir="ltr"
                          style={{ opacity: 1, transform: 'translateY(0px)' }}
                        >
                          <div
                            className="rounded-xl bg-gray-50 p-1 text-gray-950"
                            style={{
                              boxShadow: 'rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(25, 28, 33, 0.2) 0px 16px 36px -6px, rgba(0, 0, 0, 0.08) 0px 8px 16px -3px',
                            }}
                          >
                            <ul
                              className="w-max max-w-xl rounded-lg bg-white p-3"
                              style={{
                                boxShadow: 'rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(106, 115, 133, 0.12) 0px 5px 10px -2px, rgba(0, 0, 0, 0.12) 0px 2px 6px -2px',
                              }}
                            >
                              <li>
                                <a className="group block py-2.5 lg:p-1" data-radix-collection-item="" href="/about">
                                  <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                    <div className="flex items-center gap-x-1.5">
                                      <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                        <circle cx="8.5" cy="6.5" r="1.75" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                          d="M12.4023 8C12.9106 7.69378 13.2504 7.13658 13.2504 6.5C13.2504 5.86342 12.9106 5.30622 12.4023 5"
                                          stroke="#5F5F6F"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M4.9775 13.4345L4.76939 14.3242C4.65827 14.7993 5.03879 15.25 5.55105 15.25H11.4489C11.9612 15.25 12.3417 14.7993 12.2306 14.3242L12.0225 13.4345C11.6556 11.866 10.1913 10.75 8.5 10.75C6.80874 10.75 5.34439 11.866 4.9775 13.4345Z"
                                          stroke="#5F5F6F"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path
                                          d="M11.5 15.25H14.4489C14.9612 15.25 15.3417 14.7993 15.2306 14.3242L15.0225 13.4345C14.8385 12.6479 14.3786 11.9752 13.7524 11.4999"
                                          stroke="#5F5F6F"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <div className="text-[0.875rem]/5   text-gray-950">About</div>
                                    </div>
                                    <div className="mt-1   text-gray-600">Everything you need to know about Clerk</div>
                                  </div>
                                </a>
                              </li>

                              <li>
                                <a className="group block py-2.5 lg:p-1" data-radix-collection-item="" href="/blog">
                                  <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                    <div className="flex items-center gap-x-1.5">
                                      <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                        <path
                                          d="M6.75 15.25V12.25M6.75 12.25V4.75H15.25V14C15.25 14.6904 14.6904 15.25 14 15.25H6C5.30964 15.25 4.75 14.6904 4.75 14V12.25H6.75Z"
                                          stroke="#5F5F6F"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                        <path d="M9.75 7.75H12.25" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.75 10.75H12.25" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                      </svg>
                                      <div className="text-[0.875rem]/5   text-gray-950">Blog</div>
                                    </div>
                                    <div className="mt-1   text-gray-600">All the latest news and updates</div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="group block py-2.5 lg:p-1" data-radix-collection-item="" href="/careers">
                                  <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                    <div className="flex items-center gap-x-1.5">
                                      <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                        <path
                                          d="M7.75 7.25H5.75C5.19772 7.25 4.75 7.69772 4.75 8.25V14.25C4.75 14.8023 5.19772 15.25 5.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V8.25C15.25 7.69772 14.8023 7.25 14.25 7.25H12.25M7.75 7.25V5.75C7.75 5.19772 8.19772 4.75 8.75 4.75H11.25C11.8023 4.75 12.25 5.19772 12.25 5.75V7.25M7.75 7.25H12.25"
                                          stroke="#5E5F6E"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <div className="text-[0.875rem]/5   text-gray-950">Careers</div>
                                    </div>
                                    <div className="mt-1   text-gray-600">Your next opportunity starts here</div>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="group block py-2.5 lg:p-1" data-radix-collection-item="" href="/contact">
                                  <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                    <div className="flex items-center gap-x-1.5">
                                      <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                        <path
                                          d="M10 14.25C12.8995 14.25 15.25 12.1234 15.25 9.5C15.25 6.87665 12.8995 4.75 10 4.75C7.10051 4.75 4.75 6.87665 4.75 9.5C4.75 10.481 5.07872 11.3926 5.64195 12.1495C5.59056 13.4286 5.29325 14.7218 4.75 15.25C5.98973 15.1352 7.33401 14.7494 8.22735 13.9724C8.7811 14.1521 9.37791 14.25 10 14.25Z"
                                          stroke="#5F5F6F"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      <div className="text-[0.875rem]/5   text-gray-950">Contact</div>
                                    </div>
                                    <div className="mt-1   text-gray-600">Connect with Sales or Support</div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </nav>

            <div className="ml-auto flex items-center gap-6   [@media(width<22.5rem)]:hidden">
              <div data-auth="" data-signed-out="" className="contents" data-visible="">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="sm:hidden">
                    <div className="[display:var(--light,block)_var(--dark,none)]">
                      <a
                        href="https://clerk.com/docs/quickstart"
                        className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left   transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay h-[1.875rem] px-3 ring-1 bg-gray-900 text-white ring-gray-900"
                        target="_blank"
                      >
                        Request Sample
                      </a>
                    </div>
                  </div>

                  <div className="hidden sm:contents">
                    <div className="[display:var(--light,block)_var(--dark,none)]">
                      <a
                        href="https://clerk.com/docs/quickstart"
                        className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left   transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay   h-[1.875rem] px-3 ring-1 bg-gray-900 text-white ring-gray-900"
                        target="_blank"
                      >
                        Request Sample
                        <svg
                          viewBox="0 0 10 10"
                          aria-hidden="true"
                          className="ml-2 h-2.5 w-2.5 flex-none opacity-60 group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity"
                        >
                          <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
                        </svg>
                        <svg
                          viewBox="0 0 10 10"
                          aria-hidden="true"
                          className="-ml-2.5 h-2.5 w-2.5 flex-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity"
                        >
                          <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={toggleMenu}
              id="react-aria-_R_2iiveivbH1_"
              data-react-aria-pressable="true"
              aria-label="Open navigation"
              className="focus:outline-none focus-visible:outline-2 -mr-3 ml-auto rounded-full p-3  lg:hidden"
              data-rac=""
              data-pressed="true"
              aria-controls="react-aria-_R_2iiveivb_"
            >
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5 stroke-gray-950 dark:stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.25 6.75h-8.5m8.5 6.5h-8.5" />
              </svg>
            </button>
            {isOpen && (
              <div className="lg:hidden" data-rac style={{ '--visual-viewport-height': '348px' }}>
                <div
                  className="light fixed left-0 top-0 isolate h-[--visual-viewport-height] w-screen overflow-auto bg-gray-50/[0.92] outline-none backdrop-blur-[18px] [scrollbar-gutter:stable]"
                  data-rac
                >
                  <section id="react-aria-_R_2iiveivb_" aria-labelledby="react-aria-_R_2iiveivbH1_" role="dialog" tabIndex={-1} className="react-aria-Dialog" data-rac>
                    <div className="sticky top-0 isolate z-50 flex h-16 items-center pl-6 pr-[calc(theme(spacing.6)+var(--scrollbar-offset))]">
                      <div className="absolute inset-0 -z-10 bg-gray-50/80 backdrop-blur-sm transition duration-300" style={{ opacity: 0 }}></div>

                      <button
                        type="button"
                        tabIndex={0}
                        data-react-aria-pressable="true"
                        aria-label="Close navigation"
                        className="data-[focus-visible]:outline-focus order-last mr-[20px] ml-[1.125rem] grid size-6 place-content-center rounded-full bg-gray-400/20 text-gray-950 outline-none"
                        data-rac=""
                        onClick={toggleMenu}
                        id="react-aria8307733133-_r_3d_"
                        slot="close"
                      >
                        <svg viewBox="0 0 10 10" aria-hidden="true" className="size-2.5" fill="none">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2 2 6 6m0-6L2 8" />
                        </svg>
                      </button>
                      <Link href="/" alt="Forgery Shield Logo" className='mr-auto h-[1.125rem]'>
                        <Image src="/assets/forgery-shield-logo.svg" width={136} height={23} alt="Forgery Shield Logo"></Image>
                      </Link>

                      <a
                        href="https://clerk.com/docs/quickstart"
                        className=" max-[374px]:hidden lg:hidden group relative isolate inline-flex items-center justify-center overflow-hidden text-left   transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay   h-[1.875rem] px-3 ring-1 bg-gray-900 text-white ring-gray-900"
                        target="_blank"
                      >
                        Request Sample
                      </a>
                    </div>

                    <div className="overflow-hidden pb-10 pl-6 pr-[calc(theme(spacing.6)+var(--scrollbar-offset))]">
                      <nav className="mb-8 mt-3">
                        <ul role="list">
                          {/* Product Section */}
                          <li className="group/item">
                            <button
                              type="button"
                              tabIndex="0"
                              data-react-aria-pressable="true"
                              aria-expanded={isProductExpanded}
                              aria-controls="product-menu"
                              className="data-[focus-visible]:outline-focus text-gray-950 group flex w-full items-center justify-between border-t border-gray-400/10 py-2 pr-[1.8125rem] text-[0.875rem]/5    outline-none group-first/item:border-t-0"
                              onClick={() => setIsProductExpanded(!isProductExpanded)}
                            >
                              Product
                              <svg
                                viewBox="0 0 10 10"
                                aria-hidden="true"
                                fill="none"
                                className="size-2.5 transition-transform duration-200"
                                style={{ transform: isProductExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                              >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1.75 3.75 5 7.25l3.25-3.5"></path>
                              </svg>
                            </button>
                            <div id="product-menu" hidden={!isProductExpanded}>
                              <ul role="list" className="mb-3.5 mt-1.5">
                                <li>
                                  <a className="group block py-2.5 lg:p-1" href="/security-sticker">
                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                      <div className="flex gap-x-4">
                                        <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                          <svg viewBox="0 0 40 40" fill="none" className="size-10" aria-hidden="true">
                                            <g filter="url(#UserAuthenticationIcon-b)">
                                              <rect width="14" height="16" x="13" y="12" fill="#fff" rx="2"></rect>
                                              <rect width="15.5" height="17.5" x="12.25" y="11.25" stroke="#9394A1" strokeWidth="1.5" rx="2.75"></rect>
                                            </g>
                                          </svg>
                                        </div>
                                        <div>
                                          <div className="flex items-center gap-1.5">
                                            <div className="text-[0.875rem]/5   text-gray-950">Security Stickers</div>
                                          </div>
                                          <div className="mt-1   text-gray-600">Powerful options to securely authenticate and manage your users</div>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="group block py-2.5 lg:p-1" href="/anti-counterfeiting">
                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                      <div className="flex gap-x-4">
                                        <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                          {/* Icon for B2B SaaS Suite */}
                                        </div>
                                        <div>
                                          <div className="flex items-center gap-1.5">
                                            <div className="text-[0.875rem]/5   text-gray-950">Anti-counterfeiting System</div>
                                          </div>
                                          <div className="mt-1   text-gray-600">Add-on features built specifically for B2B applications</div>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="group block py-2.5 lg:p-1" href="/packaging">
                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                      <div className="flex gap-x-4">
                                        <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                          {/* Icon for Billing */}
                                        </div>
                                        <div>
                                          <div className="flex items-center gap-1.5">
                                            <div className="text-[0.875rem]/5   text-gray-950">Packaging</div>
                                            <div className="relative inline-block bg-blue-50 px-[0.21875rem] py-[0.09375rem] text-[0.625rem]/[0.875rem]   text-blue-500">
                                              New
                                              <span className="block transform-gpu absolute -inset-x-[0.21875rem] -top-px text-blue-600/60">
                                                <svg width="100%" height="1" strokeLinecap="round">
                                                  <line x1="0" y1="0.5" x2="100%" y2="0.5" style={{ stroke: 'currentcolor', strokeWidth: 1, strokeDasharray: '0.5, 2' }} />
                                                </svg>
                                              </span>
                                              <span className="block transform-gpu absolute -inset-x-[0.21875rem] -bottom-px text-blue-600/60">
                                                <svg width="100%" height="1" strokeLinecap="round">
                                                  <line x1="0" y1="0.5" x2="100%" y2="0.5" style={{ stroke: 'currentcolor', strokeWidth: 1, strokeDasharray: '0.5, 2' }} />
                                                </svg>
                                              </span>
                                              <span className="block transform-gpu absolute -inset-y-[0.21875rem] -left-px text-blue-600/60">
                                                <svg width="1" height="100%" strokeLinecap="round">
                                                  <line x1="0.5" y1="0" x2="0.5" y2="100%" style={{ stroke: 'currentcolor', strokeWidth: 1, strokeDasharray: '0.5, 2' }} />
                                                </svg>
                                              </span>
                                              <span className="block transform-gpu absolute -inset-y-[0.21875rem] -right-px text-blue-600/60">
                                                <svg width="1" height="100%" strokeLinecap="round">
                                                  <line x1="0.5" y1="0" x2="0.5" y2="100%" style={{ stroke: 'currentcolor', strokeWidth: 1, strokeDasharray: '0.5, 2' }} />
                                                </svg>
                                              </span>
                                            </div>
                                          </div>
                                          <div className="mt-1   text-gray-600">The easiest way to implement subscriptions for applications</div>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="group/item">
                            <button
                              type="button"
                              tabIndex="0"
                              data-react-aria-pressable="true"
                              aria-expanded={isSolutionsExpanded}
                              onClick={() => setIsSolutionsExpanded(!isSolutionsExpanded)}
                              aria-controls="solutions-menu"
                              className="data-[focus-visible]:outline-focus group flex w-full items-center justify-between border-t border-gray-400/10 pl-0 py-2 pr-[1.8125rem] text-[0.875rem]/5   text-gray-950 outline-none group-first/item:border-t-0"
                            >
                              Services
                              <svg
                                viewBox="0 0 10 10"
                                aria-hidden="true"
                                fill="none"
                                className="size-2.5 transition-transform duration-200"
                                style={{ transform: isSolutionsExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                              >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1.75 3.75 5 7.25l3.25-3.5"></path>
                              </svg>
                            </button>
                            <div id="solutions-menu" hidden={!isSolutionsExpanded}>
                              <ul role="list" className="mb-3.5 mt-1.5">
                                <li>
                                  <a className="group block py-2.5 lg:p-1" href="/react-components">
                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                      <div className="flex gap-x-4">
                                        <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                          <svg viewBox="0 0 40 40" className="size-10" aria-hidden="true">
                                            <svg width="24" height="24" x="8" y="8" viewBox="-10.5 -9.45 21 18.9">
                                              <circle cx="0" cy="0" r="2" fill="#087EA4"></circle>
                                              <g stroke="#087EA4" strokeWidth="1" fill="none">
                                                <ellipse rx="10" ry="4.5"></ellipse>
                                                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                                                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                                              </g>
                                            </svg>
                                          </svg>
                                        </div>
                                        <div>
                                          <div className="flex items-center gap-1.5">
                                            <div className="text-[0.875rem]/5   text-gray-950">Brand Protection</div>
                                          </div>
                                          <div className="mt-1   text-gray-600">Embeddable prebuilt UI components for quick and seamless integrations</div>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="group block py-2.5 lg:p-1" href="/nextjs-authentication">
                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                      <div className="flex gap-x-4">
                                        <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                          <svg viewBox="0 0 40 40" fill="none" className="size-10" aria-hidden="true">
                                            <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z" fill="#000"></path>
                                            <path d="M20 5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Z" fill="#fff"></path>
                                            <path d="M12.5 12.5h15v15h-15v-15Z" fill="#000"></path>
                                          </svg>
                                        </div>
                                        <div>
                                          <div className="flex items-center gap-1.5">
                                            <div className="text-[0.875rem]/5   text-gray-950">Anti Forgery QR Code</div>
                                          </div>
                                          <div className="mt-1   text-gray-600">The fastest and most seamless authentication solution for Next.js</div>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="group block py-2.5 lg:p-1" href="/expo">
                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                      <div className="flex gap-x-4">
                                        <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                          <svg viewBox="0 0 40 40" fill="none" className="size-10" aria-hidden="true">
                                            <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z" fill="#000"></path>
                                            <path d="M20 5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Z" fill="#fff"></path>
                                            <path d="M20 12.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z" fill="#000"></path>
                                          </svg>
                                        </div>
                                        <div>
                                          <div className="flex items-center gap-1.5">
                                            <div className="text-[0.875rem]/5   text-gray-950">Anti-forgery Technology</div>
                                          </div>
                                          <div className="mt-1   text-gray-600">Implement cross-platform authentication the React way</div>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="group/item relative">
                            <Link
                              href="/productVerification"
                              tabIndex="0"
                              aria-controls="docs-dropdown"
                              className="data-[focus-visible]:outline-focus group flex w-full items-center justify-between border-t border-gray-400/10 py-2 pr-[1.8125rem] text-[0.875rem]/5   text-gray-950 outline-none group-first/item:border-t-0"
                            >
                              Product Verification
                            </Link>
                          </li>
                          <li className="group/item relative">
                            <Link
                              href="/processPage"
                              tabIndex="0"
                              aria-controls="docs-dropdown"
                              className="data-[focus-visible]:outline-focus group flex w-full items-center justify-between border-t border-gray-400/10 py-2 pr-[1.8125rem] text-[0.875rem]/5   text-gray-950 outline-none group-first/item:border-t-0"
                            >
                              Process
                            </Link>
                          </li>

                          <li className="group/item">
                            <button
                              type="button"
                              tabIndex="0"
                              data-react-aria-pressable="true"
                              aria-expanded={isCompanyExpanded}
                              onClick={() => setIsCompanyExpanded(!isCompanyExpanded)}
                              aria-controls="_r_5k_"
                              className="data-[focus-visible]:outline-focus group flex w-full items-center justify-between border-t border-gray-400/10 py-2 pr-[1.8125rem] text-[0.875rem]/5   text-gray-950 outline-none group-first/item:border-t-0"
                              data-rac=""
                              id="react-aria8307733133-_r_5l_"
                            >
                              Company
                              <svg
                                viewBox="0 0 10 10"
                                aria-hidden="true"
                                fill="none"
                                className="size-2.5 transition-transform duration-200"
                                style={{ transform: isCompanyExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                              >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1.75 3.75 5 7.25l3.25-3.5"></path>
                              </svg>
                            </button>
                            <div id="_r_9b_" hidden={!isCompanyExpanded}>
                              <ul role="list" className="mb-3.5 mt-1.5">
                                <li>
                                  <a className="group block py-2.5 lg:p-1" href="/company">
                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                      <div className="flex items-center gap-x-1.5">
                                        <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                          <circle cx="8.5" cy="6.5" r="1.75" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                          <path
                                            d="M12.4023 8C12.9106 7.69378 13.2504 7.13658 13.2504 6.5C13.2504 5.86342 12.9106 5.30622 12.4023 5"
                                            stroke="#5F5F6F"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M4.9775 13.4345L4.76939 14.3242C4.65827 14.7993 5.03879 15.25 5.55105 15.25H11.4489C11.9612 15.25 12.3417 14.7993 12.2306 14.3242L12.0225 13.4345C11.6556 11.866 10.1913 10.75 8.5 10.75C6.80874 10.75 5.34439 11.866 4.9775 13.4345Z"
                                            stroke="#5F5F6F"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M11.5 15.25H14.4489C14.9612 15.25 15.3417 14.7993 15.2306 14.3242L15.0225 13.4345C14.8385 12.6479 14.3786 11.9752 13.7524 11.4999"
                                            stroke="#5F5F6F"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                        <div className="text-[0.875rem]/5   text-gray-950">About</div>
                                      </div>
                                      <div className="mt-1   text-gray-600">Everything you need to know about Clerk</div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="group block py-2.5 lg:p-1" href="/creators">
                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                      <div className="flex items-center gap-x-1.5">
                                        <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                          <path
                                            d="M9.25388 5.32819C7.63398 4.5831 6.1471 4.52855 5.33783 5.33783C4.00601 6.66965 5.01369 9.83664 7.58853 12.4115C10.1634 14.9864 13.3304 15.994 14.6622 14.6622C15.4701 13.8542 15.4171 12.3709 14.6754 10.7541"
                                            stroke="#5F5F6F"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M12.357 6.35704L13 4.75L13.6428 6.35699L15.25 6.99989L13.643 7.64274L13 9.25L12.357 7.64273L10.75 6.99989L12.357 6.35704Z"
                                            stroke="#5F5F6F"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                        <div className="text-[0.875rem]/5   text-gray-950">Partnership Program</div>
                                      </div>
                                      <div className="mt-1   text-gray-600">Apply for the partnership program</div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="group block py-2.5 lg:p-1" href="/blog">
                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                      <div className="flex items-center gap-x-1.5">
                                        <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                          <path
                                            d="M6.75 15.25V12.25M6.75 12.25V4.75H15.25V14C15.25 14.6904 14.6904 15.25 14 15.25H6C5.30964 15.25 4.75 14.6904 4.75 14V12.25H6.75Z"
                                            stroke="#5F5F6F"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path d="M9.75 7.75H12.25" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                          <path d="M9.75 10.75H12.25" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                        <div className="text-[0.875rem]/5   text-gray-950">Blog</div>
                                      </div>
                                      <div className="mt-1   text-gray-600">All the latest news and updates</div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="group block py-2.5 lg:p-1" href="/careers">
                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                      <div className="flex items-center gap-x-1.5">
                                        <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                          <path
                                            d="M7.75 7.25H5.75C5.19772 7.25 4.75 7.69772 4.75 8.25V14.25C4.75 14.8023 5.19772 15.25 5.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V8.25C15.25 7.69772 14.8023 7.25 14.25 7.25H12.25M7.75 7.25V5.75C7.75 5.19772 8.19772 4.75 8.75 4.75H11.25C11.8023 4.75 12.25 5.19772 12.25 5.75V7.25M7.75 7.25H12.25"
                                            stroke="#5E5F6E"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                        <div className="text-[0.875rem]/5   text-gray-950">Careers</div>
                                      </div>
                                      <div className="mt-1   text-gray-600">Your next opportunity starts here</div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="group block py-2.5 lg:p-1" href="/contact">
                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                      <div className="flex items-center gap-x-1.5">
                                        <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                          <path
                                            d="M10 14.25C12.8995 14.25 15.25 12.1234 15.25 9.5C15.25 6.87665 12.8995 4.75 10 4.75C7.10051 4.75 4.75 6.87665 4.75 9.5C4.75 10.481 5.07872 11.3926 5.64195 12.1495C5.59056 13.4286 5.29325 14.7218 4.75 15.25C5.98973 15.1352 7.33401 14.7494 8.22735 13.9724C8.7811 14.1521 9.37791 14.25 10 14.25Z"
                                            stroke="#5F5F6F"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                        <div className="text-[0.875rem]/5   text-gray-950">Contact</div>
                                      </div>
                                      <div className="mt-1   text-gray-600">Connect with Sales or Support</div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </section>
                </div>
              </div>
            )}
          </div>
        </div >
      </header >
    </>
  );
};
export default Header;
