'use client'
import { useState } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
const posts = [
    {
        id: 1,
        title: "Why Anti-Counterfeiting Protects Consumers & Brands",
        date: "2025-07-01",
        tags: ["Awareness", "Protection"],
        excerpt:
            "Discover why anti-counterfeiting is more than just brand protection — it’s about consumer trust, safety, and long-term business growth.",
        content: `
Anti-counterfeiting is essential for safeguarding both consumers and brands.

**For Consumers:**
- Protects from dangerous fake medicines and electronics.
- Ensures product quality and safety standards.
- Builds trust in purchasing decisions.

**For Brands:**
- Maintains brand value and exclusivity.
- Protects revenue from counterfeit losses.
- Strengthens global market credibility.

Bottom line: Strong anti-counterfeiting measures create a safer marketplace for everyone.
    `,
    },
    {
        id: 2,
        title: "How to Verify Authentic Products in Seconds",
        date: "2025-06-20",
        tags: ["Guide", "Consumer Safety"],
        excerpt:
            "Quick steps every buyer should take to ensure they’re purchasing a genuine product and not a convincing fake.",
        content: `
Follow these simple steps to verify authenticity:

1. **Check Secure Labels** — Look for holograms, QR codes, or tamper-proof seals.
2. **Scan Codes** — Use official brand apps or verification portals.
3. **Inspect Packaging** — Check spelling, print quality, and finishing.
4. **Verify Seller Credentials** — Buy only from official channels.
5. **Cross-check Product Details** — Serial numbers, manufacturing dates, and materials.

Pro tip: Always scan and verify before making a purchase — prevention is faster than refunds.
    `,
    },
    {
        id: 3,
        title: "Technologies Powering Anti-Counterfeiting in 2025",
        date: "2025-05-15",
        tags: ["Technology", "Innovation"],
        excerpt:
            "From blockchain to AI-driven product tracking, discover the tools making counterfeiting harder than ever.",
        content: `
Modern anti-counterfeiting is powered by advanced tech:

- **Blockchain** — Immutable supply chain tracking.
- **AI Product Authentication** — Scans images to detect fakes instantly.
- **NFC & RFID Tags** — Enable instant verification.
- **Digital Twins** — Each product gets a virtual identity.
- **Forensic Markers** — Invisible to the naked eye but verifiable in labs.

Layering these technologies ensures a strong defense against counterfeiters.
    `,
    },
    {
        id: 4,
        title: "Global Laws & Enforcement Against Counterfeiting",
        date: "2025-04-28",
        tags: ["Legal", "Enforcement"],
        excerpt:
            "A look at the legal tools and global cooperation that brands can use to stop counterfeit trade.",
        content: `
Global anti-counterfeiting laws focus on:

- **Trademark Enforcement** — Protects brand logos & designs.
- **Customs Seizures** — Border checks for fake goods.
- **Market Surveillance** — Online & offline monitoring.
- **International Treaties** — WIPO & TRIPS agreements.

Stronger cooperation between governments and brands means faster action against counterfeiters.
    `,
    },
    {
        id: 5,
        title: "The Benefits of Anti-Counterfeiting & Risks of Ignoring It",
        date: "2025-03-19",
        tags: ["Business", "Strategy"],
        excerpt:
            "Why investing in anti-counterfeiting pays off — and what happens if you don’t take action.",
        content: `
**Benefits of Anti-Counterfeiting:**
- Protects consumer safety.
- Increases brand loyalty and trust.
- Reduces financial losses.
- Strengthens legal protection.

**Risks of Not Acting:**
- Loss of brand reputation.
- Increased product returns.
- Consumer safety incidents.
- Revenue losses to counterfeit markets.

Ignoring anti-counterfeiting is like leaving your brand’s doors wide open for theft.
    `,
    },
];

export default function BlogsPage() {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <>
            <div className="relative bg-[#3A3A3F]">
                <div className="mx-auto flex h-3 items-center justify-center"></div>
            </div>
            <div className="w-full max-w-8xl mx-auto px-6 md:px-18">
                <Header />
            </div>

            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
                {/* Header */}
                <div className="text-center py-16 px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-green-400 bg-clip-text text-transparent">
                        Forgery Shield Blog
                    </h1>
                    <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
                        Insights, tips, and technology trends to protect your brand and consumers from counterfeit threats.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="max-w-7xl mx-auto px-6 cursor-pointer grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            onClick={() => setSelectedPost(post)}
                            className="group cursor-pointer p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="mb-3">
                                <span className="text-sm text-cyan-400">
                                    {new Date(post.date).toLocaleDateString()}
                                </span>
                            </div>
                            <h2 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
                                {post.title}
                            </h2>
                            <p className="mt-3 text-gray-300">{post.excerpt}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for full blog */}
                {selectedPost && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                        <div className="bg-gray-900 rounded-2xl max-w-3xl w-full p-6 relative shadow-2xl overflow-y-auto max-h-[80vh]">
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                            >
                                ✕
                            </button>
                            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                                {selectedPost.title}
                            </h2>
                            <span className="text-sm text-cyan-400">
                                {new Date(selectedPost.date).toLocaleDateString()}
                            </span>
                            <div className="mt-4 space-y-4 text-gray-300 whitespace-pre-line">
                                {selectedPost.content}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
