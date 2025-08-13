'use client'
import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { AiOutlineClose } from "react-icons/ai";
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
const renderCheckCode = (code, status) => {
    if (status === 'fake') return 'XXXXXXXXXXXXXXXXXX';

    if (!code || code.length < 5) return code;

    const chars = code.split('');
    const revealIndex = chars.length - 5;

    return (
        <>
            {chars.map((char, i) => (
                <span key={i} className="inline-block">
                    {i === revealIndex ? (
                        <span className="bg-black">{char}</span>
                    ) : (
                        'X'
                    )}
                </span>
            ))}
        </>
    );
};

const renderAntiCode = (code, status) => {
    if (!code || code.length < 5) return code;

    const revealIndex = code.length - 5;

    return (
        <>
            {code.split('').map((char, i) => (
                <span key={i} className="inline-block">
                    {status === 'genuine' && i === revealIndex ? (
                        <span className="bg-black text-white lg:px-0 px-[0.15vw] lg:rounded-0 rounded-[0.1vw]">{char}</span>
                    ) : (
                        <span>{char}</span>
                    )}
                </span>
            ))}
        </>
    );
};

const ResponsiveVerifyComponent = () => {

    const [showImage, setShowImage] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const oldVerifyRef = useRef(null);
    const [verificationStatus, setVerificationStatus] = useState(null); // 'loading', 'genuine', 'fake'
    const [resultData, setResultData] = useState(null);
    const [showArrow, setShowArrow] = useState(false);

    const genuineCodes = new Set([
        '143526569934334',
        '783702379089899',
        '824943947310990',
        '123879289049043',
        '236237898823231'
    ]);

    const handleVerify = () => {
        if (!inputValue.trim()) return;

        // Scroll first for desktop
        const resultSection = document.getElementById('result-section');
        if (resultSection && window.innerWidth >= 1024) {
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        setVerificationStatus('loading');
        setResultData(null);

        setTimeout(() => {
            const verificationData = JSON.parse(localStorage.getItem('verificationData')) || {};
            const codeExists = genuineCodes.has(inputValue.trim());

            if (codeExists) {
                let codeData = verificationData[inputValue];
                const now = new Date();

                if (codeData) {
                    codeData.queryTimes += 1;
                } else {
                    codeData = {
                        firstVerified: now.toISOString(),
                        queryTimes: 0,
                    };
                }

                verificationData[inputValue] = codeData;
                localStorage.setItem('verificationData', JSON.stringify(verificationData));

                setResultData({
                    company: 'Shenzhen ELUX Technology Co.,Ltd.',
                    code: inputValue,
                    queryTimestamp: new Date(codeData.firstVerified),
                    queryCount: codeData.queryTimes,
                });
                setVerificationStatus('genuine');
            } else {
                setResultData({
                    company: "Can't find it",
                    code: inputValue,
                    message: "The anti-counterfeit code you queried is not exist",
                });
                setVerificationStatus('fake');
            }

            // Scroll for mobile after verification
            if (resultSection && window.innerWidth < 1024) {
                resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

        }, 1500);
    };
    // Remove autoplay initially, add it after user interaction
    useEffect(() => {
        const handleScroll = () => {
            if (!oldVerifyRef.current) return;

            const rect = oldVerifyRef.current.getBoundingClientRect();
            const imageCenterY = rect.top + rect.height / 2;
            const viewportHeight = window.innerHeight;
            const centerInView = imageCenterY >= 0 && imageCenterY <= viewportHeight;
            const reachedBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5;

            setShowArrow(centerInView || reachedBottom);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleRemoveImage = () => {
        setShowImage(false);
    };

    return (
        <>
            {/* Warning Banner */}
            <div className="relative bg-[#3A3A3F]">
                <div className="mx-auto flex h-3 items-center justify-center"></div>
            </div>
            <div className="w-full max-w-8xl mx-auto px-6 md:px-18">
                <Header />
            </div>

            <div className="w-full font-manrope font-medium flex items-center justify-center text-center bg-black text-white 
                            h-[13.333vw] text-[3.2vw] 
                            lg:h-[4.16667vw] lg:text-[0.88542vw] 
                            relative z-[90] transition-all duration-300 ease-in-out">
                WARNING: This product contains nicotine.<br />Nicotine is an addictive chemical.
            </div>

            <div className="transition-all duration-300">
                {/* Result Section */}
                <section id='result-section' className="w-full 
                                                        max-w-none px-[6.66667vw] 
                                                        lg:max-w-[41.66667vw] lg:px-0 lg:mx-auto">
                    {/* Loading State */}
                    {verificationStatus === 'loading' && (
                        <div className="fixed w-full h-full top-0 left-0 bg-black/50 z-50">
                            <div className="flex flex-col items-center relative left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto">
                                <div className="relative 
                                               w-[13.33333vw] h-[13.33333vw] 
                                               lg:w-[3.125vw] lg:h-[3.125vw]">
                                    <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white opacity-60"></div>
                                    <div style={{ animationDelay: '-1s' }} className="absolute top-0 left-0 w-full h-full rounded-full bg-white opacity-60"></div>
                                </div>
                                <span className="text-[4.26667vw] lg:text-[1.04167vw] text-white">Loading...</span>
                            </div>
                        </div>
                    )}

                    {/* Genuine Result */}
                    {verificationStatus === 'genuine' && resultData && (
                        <div>
                            {/* Image Container */}
                            <div className="relative mx-auto 
                                           w-[65.73333vw] h-[41.06667vw] mt-[5.33333vw] px-[6.66667vw] py-[2.66667vw] 
                                           lg:w-[17.96875vw] lg:h-[11.25vw] lg:mt-0 lg:px-0 lg:py-0">
                                <img className="w-full h-full object-cover absolute top-0 left-0" src="verify/genuine.jpg" alt="Genuine Product" />
                            </div>

                            {/* Data Container */}
                            <div className="mt-[5.33333vw] bg-[#468fb2] pt-[2.66667vw] pr-[6.66667vw] pb-[5.33333vw] pl-[5.33333vw] rounded-t-[1.30208vw]
                                           lg:mt-0 lg:px-[3.64583vw] lg:py-[1.30208vw]">
                                <ul className='list-none'>
                                    <li className="border-b border-white text-white flex items-center py-[2.66667vw] lg:py-[0.26042vw]
                                                  flex-col justify-between 
                                                  lg:flex-row">
                                        <div className='font-manrope font-bold text-center w-auto lg:w-[40%] lg:text-left
                                                       text-[4.26667vw] 
                                                       lg:text-[1.25vw]'>COMPANY</div>
                                        <p className='font-manrope font-light text-right
                                                     text-[3.73333vw] 
                                                     lg:text-[0.9375vw]'>{resultData.company}</p>
                                    </li>
                                    <li className="border-b border-white text-white flex items-center py-[2.66667vw] lg:py-[0.26042vw]
                                                  flex-col justify-between 
                                                  lg:flex-row">
                                        <div className='font-manrope font-bold text-center w-auto lg:w-[40%] lg:text-left
                                                       text-[4.26667vw] 
                                                       lg:text-[1.25vw]'>ANTI-CODE</div>
                                        <p className='font-manrope font-light text-center mt-[1.33333vw] lg:mt-0 lg:text-right
                                                     text-[3.73333vw] 
                                                     lg:text-[0.9375vw]'>{renderAntiCode(resultData.code, verificationStatus)}</p>
                                    </li>
                                    <li className="border-b border-white text-white flex items-center py-[2.66667vw] lg:py-[0.26042vw]
                                                  flex-col justify-between 
                                                  lg:flex-row">
                                        <div className='font-manrope font-bold text-center w-auto lg:w-[40%] lg:text-left
                                                       text-[4.26667vw] 
                                                       lg:text-[1.25vw]'>Query Times</div>
                                        <p className='font-manrope font-light text-center mt-[1.33333vw] lg:mt-0 lg:text-right
                                                     text-[3.73333vw] 
                                                     lg:text-[0.9375vw]'>
                                            {resultData.queryTimestamp.toLocaleTimeString('en-GB')} {resultData.queryTimestamp.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                            <br />
                                            First check
                                        </p>
                                    </li>
                                    <li className="border-b border-white text-white flex items-center py-[2.66667vw] lg:py-[0.26042vw]
                                                  flex-col justify-between 
                                                  lg:flex-row">
                                        <div className='font-manrope font-bold text-center w-auto lg:w-[40%] lg:text-left
                                                       text-[4.26667vw] 
                                                       lg:text-[1.25vw]'>TIMES OF QUERY</div>
                                        <p className='font-manrope font-light text-center mt-[1.33333vw] lg:mt-0 lg:text-right
                                                     text-[3.73333vw] 
                                                     lg:text-[0.9375vw]'>{resultData.queryCount}</p>
                                    </li>
                                    <li className="border-b lg:border-b text-white flex items-center py-[2.66667vw] lg:py-[0.26042vw]
                                                  flex-col justify-between 
                                                  lg:flex-row">
                                        <div className='font-manrope font-bold text-center w-auto lg:w-[40%] lg:text-left
                                                       text-[4.26667vw] 
                                                       lg:text-[1.25vw]'>CHECK CODE</div>
                                        <p className='font-manrope font-light text-center mt-[1.33333vw] lg:mt-0 lg:text-right
                                                     text-[3.73333vw] 
                                                     lg:text-[0.9375vw]'>{renderCheckCode(resultData.code, verificationStatus)}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Fake Result */}
                    {verificationStatus === 'fake' && resultData && (
                        <div>
                            {/* Image Container */}
                            <div className="relative mx-auto 
                                           w-[65.73333vw] h-[41.06667vw] mt-[5.33333vw] px-[6.66667vw] py-[2.66667vw] 
                                           lg:w-[17.96875vw] lg:h-[11.25vw] lg:mt-0 lg:px-0 lg:py-0">
                                <img className="w-full h-full object-cover absolute top-0 left-0" src="verify/fake.jpg" alt="Fake Product" />
                            </div>

                            {/* Data Container */}
                            <div className="mt-[5.33333vw] bg-[#b40105] pt-[2.66667vw] pr-[6.66667vw] pb-[5.33333vw] pl-[5.33333vw] rounded-t-[1.30208vw]
                                           lg:mt-0 lg:px-[3.64583vw] lg:py-[1.30208vw]">
                                <ul className='list-none'>
                                    <li className="border-b border-white text-white flex items-center py-[2.66667vw] lg:py-[0.26042vw]
                                                  flex-col justify-between 
                                                  lg:flex-row">
                                        <div className='font-manrope font-bold text-center w-auto lg:w-[40%] lg:text-left
                                                       text-[4.26667vw] 
                                                       lg:text-[1.25vw]'>COMPANY</div>
                                        <p className='font-manrope font-light text-right
                                                     text-[3.73333vw] 
                                                     lg:text-[0.9375vw]'>{resultData.company}</p>
                                    </li>
                                    <li className="border-b border-white text-white flex items-center py-[2.66667vw] lg:py-[0.26042vw]
                                                  flex-col justify-between 
                                                  lg:flex-row">
                                        <div className='font-manrope font-bold text-center w-auto lg:w-[40%] lg:text-left
                                                       text-[4.26667vw] 
                                                       lg:text-[1.25vw]'>ANTI-CODE</div>
                                        <p className='font-manrope font-light text-center mt-[1.33333vw] lg:mt-0 lg:text-right
                                                     text-[3.73333vw] 
                                                     lg:text-[0.9375vw]'>{renderAntiCode(resultData.code, verificationStatus)}</p>
                                    </li>
                                    <li className="border-b border-white text-white flex items-center py-[2.66667vw] lg:py-[0.26042vw]
                                                  flex-col justify-between 
                                                  lg:flex-row">
                                        <div className='font-manrope font-bold text-center w-auto lg:w-[40%] lg:text-left
                                                       text-[4.26667vw] 
                                                       lg:text-[1.25vw]'>Query Times</div>
                                        <p className='font-manrope font-light text-center mt-[1.33333vw] lg:mt-0 lg:text-right
                                                     text-[3.73333vw] 
                                                     lg:text-[0.9375vw]'>{resultData.message}</p>
                                    </li>
                                    <li className="border-b lg:border-b text-white flex items-center py-[2.66667vw] lg:py-[0.26042vw]
                                                  flex-col justify-between 
                                                  lg:flex-row">
                                        <div className='font-manrope font-bold text-center w-auto lg:w-[40%] lg:text-left
                                                       text-[4.26667vw] 
                                                       lg:text-[1.25vw]'>Check Code</div>
                                        <p className='font-manrope font-light text-center mt-[1.33333vw] lg:mt-0 lg:text-right
                                                     text-[3.73333vw] 
                                                     lg:text-[0.9375vw]'>{renderCheckCode(resultData.code, verificationStatus)}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </section>

                {/* Video and Verify Section */}
                <section className="bg-[#383838] flex items-center justify-around
                                   px-[6.66667vw] py-[5.33333vw] flex-col 
                                   lg:px-[10.41667vw] lg:py-[3.125vw] lg:flex-row">
                    <div className="w-full mb-[9.33333vw] lg:w-[31.35417vw] lg:mb-0">
                        <p className='text-white text-center font-manrope font-light mb-[4vw] lg:mb-[1.04167vw]
                                     text-[4.26667vw] 
                                     lg:text-[1.25vw]'>ELUX new anti-counterfeit instructions</p>
                        <video
                            preload="auto"
                            autoPlay
                            loop
                            playsInline
                            webkit-playsinline="true"
                            id="verify_video"
                            className='w-full h-full object-cover rounded-[1.33333vw] lg:rounded-[0.52083vw]'
                            muted
                            src="assets/videos/eluxtechvideo.mp4" type="video/mp4"
                        >

                        </video>
                    </div>

                    <div className="text-center text-white">
                        <h1 className='font-manrope font-bold mb-[1.04167vw]
                                      text-[5.33333vw] 
                                      lg:text-[1.82292vw]'>Verify Product</h1>
                        <p className='font-manrope font-light leading-[1.2]
                                     text-[3.46667vw] 
                                     lg:text-[0.9375vw]'>
                            Locate the authentication label and scratch off its coating to <br className="hidden lg:block" />
                            obtain the anti-counterfeiting code. Then scan or enter your security code below.
                        </p>

                        <div className="relative my-[4vw] lg:mt-[1.30208vw] lg:mb-0">
                            <input
                                value={inputValue}
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        handleVerify();
                                    }
                                }}
                                onChange={(e) => setInputValue(e.target.value.trim())}
                                id="input_code"
                                type="text"
                                className='w-full font-manrope font-medium text-black outline-none bg-white px-[4vw] rounded-[8vw] 
                                          h-[9.33333vw] leading-[9.33333vw] text-[3.46667vw] 
                                          lg:h-[2.34375vw] lg:leading-[2.34375vw] lg:text-[0.9375vw] lg:px-[0.52083vw] lg:pl-[0.78125vw] lg:rounded-[1.5625vw]'
                            />
                            <button
                                onClick={handleVerify}
                                disabled={verificationStatus === 'loading'}
                                className="cursor-pointer absolute top-1/2 -translate-y-1/2 text-white font-manrope font-bold text-center bg-black 
                                          right-[0.8vw] w-[18.66667vw] h-[8vw] leading-[8vw] rounded-[8vw] text-[3.73333vw] 
                                          lg:right-[0.20833vw] lg:w-[5.20833vw] lg:h-[1.97917vw] lg:leading-[1.97917vw] lg:text-[1.04167vw] lg:rounded-[1.5625vw]">
                                Verify
                            </button>
                            <label id="code_error" className="hidden absolute top-full left-0 w-full text-center text-[#D50000] text-[0.72917vw] pt-[0.26042vw]" htmlFor="code">
                                This field is required.
                            </label>
                        </div>
                    </div>
                </section >

                {/* Why We Update Section */}
                < section className="text-center py-[6.66667vw] lg:py-[2.08333vw]" >
                    <h2 className="font-manrope font-bold mb-[0.78125vw]
                                  text-[4.8vw] 
                                  lg:text-[1.25vw]">WHY WE UPDATE ?</h2>
                    <p className="font-manrope font-extralight mt-[4vw] px-[6.66667vw] lg:mt-0 lg:px-0
                                 text-[3.46667vw] 
                                 lg:text-[0.9375vw]">
                        We use advanced anti-counterfeiting technology, significantly reducing the possibility of any counterfeiting product,
                        <br className="hidden lg:block" />
                        the adoption of this technology can prevent the phenomenon of fake and shoddy products to the greatest extent,
                        <br className="hidden lg:block" />
                        which provides a strong guarantee for everyone's health, safety and interests. Thank you for purchasing ELUX products,
                        <br className="hidden lg:block" />
                        please insist on purchasing genuine products from regular channels, and you are welcome to buy again!
                    </p>
                </section >

                {/* Old Code Verification Section */}
                < section className="text-center pb-[1.5625vw]" >
                    <h2 className="font-manrope font-bold mb-[0.52083vw]
                                  text-[4.8vw] 
                                  lg:text-[1.25vw]">OLD CODE VERIFICATION</h2>
                    <img className="border-none max-w-full mx-auto mt-[1.33333vw] lg:mt-[0.52083vw]
                                   w-[45.33333vw] 
                                   lg:w-[20.83333vw]"
                        src="images/old_code.png" />
                    <div className="mx-auto relative my-[5.33333vw] lg:my-[1.5625vw]
                                   w-[80%] 
                                   lg:w-[20.83333vw]">
                        <input
                            ref={oldVerifyRef}
                            id="old_input_code"
                            className='outline-none w-full border border-black px-[5.33333vw] rounded-[8vw] 
                                      h-[10.66667vw] leading-[10.66667vw] text-[4vw] 
                                      lg:h-[2.34375vw] lg:leading-[2.34375vw] lg:text-[0.9375vw] lg:px-[0.52083vw] lg:rounded-[1.5625vw]'
                            type="text"
                        />
                        <button className="absolute top-1/2 -translate-y-1/2 text-white text-center bg-black font-manrope font-bold cursor-pointer 
                                          right-[0.8vw] w-[21.33333vw] h-[8.8vw] leading-[8.8vw] rounded-[8vw] text-[3.73333vw] 
                                          lg:right-[0.20833vw] lg:w-[4.16667vw] lg:h-[1.92708vw] lg:leading-[1.92708vw] lg:text-[0.9375vw] lg:rounded-[1.5625vw]">
                            Verify
                        </button>
                    </div>
                </section >

                {/* Popup Form */}
                {
                    showImage && (
                        <div className="fixed z-[99] 
                                   bottom-[14vw] right-[.22083vw] w-[17.875vw] 
                                   lg:bottom-[15%] lg:right-[.52083vw] lg:w-[6.875vw]">
                            <Link
                                className="inline-block relative cursor-pointer no-underline text-black"
                                href="https://forms.gle/d8iPKEBnCwxvdm47A"
                                target="_blank"
                                rel="nofollow"
                            >
                                <img
                                    loading="lazy"
                                    className="w-full animate-pulse"
                                    src="images/pop_form.png"
                                    alt="ELUX Vape"
                                />
                                <AiOutlineClose
                                    className="cursor-pointer absolute bg-black/30 lg:bg-black/30 text-white w-[20px] h-[20px] text-xs flex items-center justify-center rounded-sm 
                                          bottom-[55px] right-[9px] translate-x-[50%] -translate-y-[50%] 
                                          lg:bottom-[75px] lg:right-2"
                                    onClick={handleRemoveImage}
                                />
                            </Link>
                        </div>
                    )
                }
            </div >

            {/* Scroll to Top Button - Desktop only */}
            < div
                onClick={scrollToTop}
                className={`hidden lg:flex fixed bottom-[6em] right-[1.42857em] w-[3.1em] h-[3.1em] z-[98] bg-[#414141] rounded-full transition duration-300 items-center justify-center cursor-pointer ${showArrow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"
                    }`}
            >
                <img src="/images/to_top.svg" alt="to top" className="w-full" />
            </div >

            {/* Chat Button */}
            <div className="fixed z-110 right-[10px] bottom-4 lg:right-6 lg:bottom-6">
                <button onClick={() => window.chaport.open()} className="rounded-full bg-[#383838] lg:bg-[#414141] flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors w-12 h-12 lg:w-14 lg:h-14"
                >
                    <img
                        src="images/chaport-launcher-chat-icon-new@2x.png"
                        className="object-contain 
                                  w-7 h-7 
                                  lg:w-9 lg:h-9"
                    />
                </button >
            </div >
            <Footer />
        </>
    );
};

export default ResponsiveVerifyComponent;