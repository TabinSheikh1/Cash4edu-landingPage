"use client";
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        icon: "🎓",
        title: "Scholarship Finder",
        description: "AI-powered matching that helps you find scholarships you actually qualify for.",
        color: "from-blue-100 to-blue-300 text-[#05d3f7]"
    },
    {
        icon: "📹",
        title: "Financial Literacy Video Hub",
        description: "Short, TikTok-style videos that make money skills fun.",
        color: "from-pink-100 to-pink-300 text-pink-700"
    },
    {
        icon: "💰",
        title: "Rewards Wallet",
        description: "Earn tokens for engaging and redeem them for perks.",
        color: "from-green-100 to-green-300 text-green-700"
    },
    {
        icon: "🤝",
        title: "Referral Program",
        description: "Invite friends and get rewarded.",
        color: "from-yellow-100 to-yellow-300 text-yellow-700"
    },
]

const FeaturesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            )
        }
        if (cardRefs.current.length) {
            gsap.fromTo(
                cardRefs.current,
                { opacity: 0, y: 60, scale: 0.95, rotateY: 30 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateY: 0,
                    duration: 1,
                    stagger: 0.18,
                    ease: "power4.out",
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                    }
                }
            )
        }
    }, [])

    return (
        <section
            id='features'
            className="relative py-24 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden"
            ref={sectionRef}
        >
            {/* Decorative Blobs */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-100 rounded-full opacity-30 blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 w-[95%]">
                {/* Section Headline */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4 tracking-tight">
                    Everything You Need in <span className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] bg-clip-text text-transparent">One App</span>
                </h2>
                <p className="text-center text-lg text-gray-700 mb-14 max-w-2xl mx-auto">
                    Unlock your academic journey with smart tools, rewards, and a supportive community.
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            ref={(el: HTMLDivElement | null) => {
                                cardRefs.current[index] = el;
                            }}

                            className="group relative flex flex-col items-center p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow bg-white border border-gray-100 hover:-translate-y-2 hover:scale-[1.03] duration-300 cursor-pointer"
                        >
                            {/* Animated Gradient Glow */}
                            <div className={`absolute -z-10 inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-br ${feature.color}`} />

                            {/* Icon */}
                            <div className={`w-20 h-20 flex items-center justify-center rounded-full text-4xl mb-5 bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center group-hover:text-[#014bac] transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-base text-center max-w-xs">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection