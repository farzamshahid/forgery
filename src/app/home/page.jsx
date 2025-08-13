'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/ui/header';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { TextRevealCard } from '@/components/ui/text-reveal-card';
import RollingGallery from '@/components/ui/rollingGallery';
import Footer from '@/components/ui/footer';

const HomePage = () => {
  const companies = [
    { name: 'Browserbase', src: '/images/BROWSERBASE.png' },
    { name: 'Inngest', src: '/images/INGEST.png' },
    { name: 'Braintrust', src: '/images/BRAINTRUST.png' },
    { name: 'Suno', src: '/images/SUNO.png' },
    { name: 'Durable', src: '/images/DURABLE.png' },
    { name: 'OpenRouter', src: '/images/OPENROUTER.png' },
    { name: 'Higgsfield', src: '/images/HIGGSFIELD.png' },
    { name: 'Upstash', src: '/images/UPSTASH.png' },
  ];

  const cards = [
    ['Leakage Issues', 'Distributors may unintentionally push fakes.'],
    ['Non‑Compliance', 'Failed authenticity means failed exports.'],
    ['Revenue Loss', 'Fakes undercut your profits and harm your brand.'],
    ['Brand Damage', 'Counterfeits erode consumer trust.'],
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const logos = carousel.querySelectorAll('.logo-item');
    if (logos.length === 0) return;

    // Calculate width including gap
    const gap = 16; // 16px = gap-4 in Tailwind
    const logoWidth = logos[0].offsetWidth + gap;

    // Duplicate logos for seamless looping
    const duplicateLogos = Array.from(logos).map((logo) => {
      const clone = logo.cloneNode(true);
      clone.classList.add('duplicate');
      return clone;
    });
    duplicateLogos.forEach((logo) => carousel.appendChild(logo));

    // Animation variables
    let animationId;
    let position = 0;
    let speed = 0.3; // Pixels per frame
    let isPaused = false;

    // Animation loop
    const animate = () => {
      if (!isPaused) {
        position -= speed;

        // Reset position when we've scrolled all duplicates
        if (position <= -logoWidth * companies.length) {
          position = 0;
        }

        carousel.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const container = carousel.parentElement;
    const handleMouseEnter = () => (isPaused = true);
    const handleMouseLeave = () => (isPaused = false);

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [companies.length]);

  return (
    <>

      <div className="relative bg-[#3A3A3F]">
        <div className="mx-auto flex h-3 items-center justify-center"></div>
      </div>
      <div className="w-full max-w-8xl mx-auto pl-6 pr-6 md:pl-18 md:pr-18">
        <Header />
      </div>
      <section className="relative w-full bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat overflow-hidden pl-6 pr-6 md:pl-18 md:pr-18">
        <div className="flex flex-col items-center justify-between lg:flex-row max-w-8xl mx-auto">
          <div className="flex flex-col lg:w-3/4 ">
            <div className="pt-14 pb-6 md:pt-28 md:mb-26">
              <p className="mb-1 text-[#131316]">Eliminate Forgery with One Scan</p>
              <h1 className="mb-4 text-[28px] font-extrabold leading-tight text-[#131316] md:text-[28px] md:leading-normal lg:text-[50px] lg:leading-[1.2]">
                Smart QR Security Stickers to Protect Your Products
              </h1>
              <p className="mb-6 text-[16px] text-[#131316]">Prevent counterfeits with our tamper-proof, scan-to-verify QR labels tailored for your brand.</p>
              <Link
                href="#"
                className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-[#3B5FF0] text-white ring-[#3B5FF0]"
                target=""
              >
                Request Sample
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:block md:absolute right-0 md:bottom-0">
          <Image src="/images/forgery-slider.png" alt="QR Scan Phone" width={330} height={420} loading="lazy" />
        </div>
      </section>

      <section className="w-full py-6 pl-6 pr-6 md:pl-18 md:pr-18">
        <div className="flex flex-col items-center justify-between lg:flex-row max-w-8xl mx-auto">
          <p className={`text-[15px] font-medium text-[#131316]`}>
            Trusted by companies <br className="hidden sm:block" />
            around the globe
          </p>

          {/* Carousel Container */}
          <div className="relative w-full lg:max-w-[70%] xl:max-w-[80%] overflow-hidden py-2">
            <div ref={carouselRef} className="flex gap-4 md:gap-7 w-max">
              {companies.map((company) => (
                <div key={company.name} className="logo-item h-6 w-[90px] flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  <Image src={company.src} alt={company.name} height={24} width={100} className="h-full w-auto object-contain" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[url('/images/BGIMAGE.png')] bg-cover bg-center bg-no-repeat overflow-hidden pl-6 pr-6 md:pl-18 md:pr-18">
        <div
          className="absolute top-0 right-0 w-1/2 h-full z-0"
          style={{
            backgroundImage: "url('/assets/background-animation.gif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'darken',
            opacity: 0.4,
            transform: 'rotate(180deg)',
          }}
        ></div>

        <div className="bg-[url('/assets/background-animation.gif')] bg-cover bg-center"></div>
        <div className="flex flex-col items-center justify-between lg:flex-row max-w-8xl mx-auto">
          <h2 className="mt-14 text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Counterfeits are Costing You.</h2>
        </div>
        <div className="flex flex-wrap gap-0 mb-6 justify-center lg:justify-start">
          {cards.map(([title, text], i) => (
            <div
              key={`card-${i}`}
              className={`
            relative group/card flex border border-gray-100 bg-white overflow-hidden shadow-sm
            w-4/4 md:w-1/4 h-28 md:h-34 flex-shrink-0 transition-all duration-300
            ${i === 0 ? 'rounded-l-lg' : ''}
            ${i === cards.length - 1 ? 'rounded-r-lg' : ''}
          `}
            >
              <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
              <div className="w-2 flex-none relative">
                <div className="absolute top-9 w-2 h-[25px] -left-px bg-gradient-to-r from-[#D9D6FF] to-[#D0EAF5] group-hover/card:bg-blue-500 group-hover/card:from-blue-500 group-hover/card:to-blue-500 rounded-tr-[15px] rounded-br-[15px] transition-colors duration-300" />
              </div>
              <div className="pl-6 pr-6 py-3 flex-1">
                <h3 className="font-semibold text-base text-gray-900 mb-1 leading-tight pt-6 transition-transform duration-200 group-hover/card:translate-x-1">{title}</h3>
                <p className="text-sm text-gray-600 leading-tight">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full text-center md:text-left pb-4">
          <TextRevealCard text="We Help You Fight Back!" revealText="We Help You Fight Back!" />
        </div>
      </section>

      <section className="relative w-full bg-[#F3F4F6] py-12 pl-6 pr-6 md:pl-18 md:pr-18">
        <div className="max-w-8xl mx-auto flex flex-col items-center">
          {/* Heading */}
          <div className="w-full text-center mb-4">
            <h2 className={`text-2xl sm:text-3xl font-semibold text-[#2C2121] `}>One Product. One Secure Sticker.</h2>
          </div>

          {/* Description */}
          <div className="w-full max-w-3xl text-center mb-10 sm:mb-12">
            <p className={`text-sm sm:text-base leading-relaxed text-[#2C2121] `}>
              We offer real-time global product verification with tamper-proof stickers that alert you instantly whenever your product is scanned — anywhere in the world. Our
              easy-to-integrate solution builds trust, protects your brand, and gives you full visibility over your supply chain.
            </p>
          </div>

          {/* Content Row */}
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left: Features */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex items-start">
                <div className="pt-1">
                  <Image src={'/assets/dot-style.png'} alt="Dot" width={22} height={22}></Image>
                </div>
                <div className="pl-4">
                  <h2 className="text-md font-semibold text-[#2C2121] mb-2">Unique QR Code</h2>
                  <p className="text-[#2C2121] text-sm opacity-80">Every item carries a tamper-proof digital identity.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="pt-1">
                  <Image src={'/assets/dot-style.png'} alt="Dot" width={22} height={22}></Image>
                </div>
                <div className="pl-4">
                  <h2 className="text-md font-semibold text-[#2C2121] mb-2">Live Tracking</h2>
                  <p className="text-[#2C2121] text-sm opacity-80">Real-time scan data and usage heatmaps.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="pt-1">
                  <Image src={'/assets/dot-style.png'} alt="Dot" width={22} height={22}></Image>
                </div>
                <div className="pl-4">
                  <h2 className="text-md font-semibold text-[#2C2121] mb-2">Consumer Scan</h2>
                  <p className="text-[#2C2121] text-sm opacity-80">Instant verification of product authenticity.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="pt-1">
                  <Image src={'/assets/dot-style.png'} alt="Dot" width={22} height={22}></Image>
                </div>
                <div className="pl-4">
                  <h2 className="text-md font-semibold text-[#2C2121] mb-2">Manufacturer Dashboard</h2>
                  <p className="text-[#2C2121] text-sm opacity-80">Insights, alerts and product control at your fingertips.</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-full lg:w-1/2 flex ml-4 md:mr-[-52px] justify-center px-4 sm:px-0">
              <Image src="/images/fakeguard.png" alt="Secure Sticker" width={600} height={400} priority className="w-full max-w-[540px] h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-12 pl-6 pr-6 md:pl-18 md:pr-18">
        <div className="max-w-8xl mx-auto flex flex-col items-center text-center">
          <div className="mx-auto max-w-6xl">
            <h2 className={`text-3xl font-semibold text-[#000000] `}>Total Control. Full Transparency.</h2>
            <p className={`mx-auto mt-4 max-w-2xl text-base font-normal text-gray-600 md:text-lg `}>
              Track every unit sold, scanned, and verified. Monitor locations, batches, and consumer feedback with our easy-to-use dashboard.
            </p>
          </div>

          {/* Logos Wrapper */}
          <div className="my-4 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center space-x-3">
              <Image src="/assets/check.png" alt="Real logo" width={18} height={18} />
              <p className="text-base font-normal text-gray-600 md:text-sm">Real-Time Global Scanning</p>
            </div>

            <div className="flex items-center space-x-3">
              <Image src="/assets/check.png" alt="Real logo" width={18} height={18} />
              <p className="text-base font-normal text-gray-600 md:text-sm">Track & Verify Across Borders</p>
            </div>

            <div className="flex items-center space-x-3">
              <Image src="/assets/check.png" alt="Real logo" width={18} height={18} />
              <p className="text-base font-normal text-gray-600 md:text-sm">Instant Alerts on Every Scan</p>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="mt-4 w-full">
            <Image src="/images/image30.png" alt="Dashboard providing analytics and tracking" width={1024} height={483} className="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      <section className="relative w-full pl-6 pr-6 md:pl-18 md:pr-18">
        <div className="max-w-8xl mx-auto flex flex-col ">
          <div className="w-8/12 border-[2px] rounded-[10px] relative">
            <p className={`pl-4 pt-4 font-semibold text-md md:text-2xl text-black leading-snug tracking-normal whitespace-nowrap align-middle mb-4`}>
              Built for Real-World Challenges
            </p>
            <div className="w-full pb-4">
              <RollingGallery autoplay={true} pauseOnHover={true} />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-16">
            {/* Card 1: Built for Real-World Challenges */}
            <div className="w-full max-w-sm md:max-w-md lg:max-w-[531px] min-h-[210px] border-[2px] rounded-[10px] bg-transparent relative p-4">
              <p className={` font-semibold text-md md:text-2xl text-black leading-snug tracking-normal whitespace-nowrap align-middle mb-4`}>Built for Real-World Challenges</p>
              <div className="w-full">
                <RollingGallery autoplay={true} pauseOnHover={true} />
              </div>
            </div>

            {/* Card 2: Why Brands Trust ForgeryShield */}
            <CardSpotlight className="w-full max-w-sm md:max-w-md lg:max-w-[340px] min-h-[212px] bg-black border-[2px] rounded-[10px] p-4 relative">
              <p className={` font-semibold text-md md:text-lg mb-3 whitespace-nowrap text-white`}>Why Brands Trust ForgeryShield</p>
              <p className={` font-semibold text-xs md:text-xs text-white whitespace-nowrap leading-[2]`}>
                🔒 Multi-layered QR + hologram protection
                <br />
                🌍 Global-ready tech for any region
                <br />
                💬 Custom language and branding
                <br />
                📲 Easy API and factory integration
                <br />
                🧠 Consumer engagement tools
                <br />
                🪙 Affordable for all business sizes
              </p>
            </CardSpotlight>
          </div>
        </div>
      </section>
      <Footer />

    </>
  );
};

export default HomePage;
