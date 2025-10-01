import React from 'react'

const features = [
    {
        icon: "🎓",
        title: "Scholarship Finder",
        description: "AI-powered matching that helps you find scholarships you actually qualify for.",
        color: "bg-blue-100 text-blue-700"
    },
    {
        icon: "📹",
        title: "Financial Literacy Video Hub",
        description: "Short, TikTok-style videos that make money skills fun.",
        color: "bg-pink-100 text-pink-700"
    },
    {
        icon: "💰",
        title: "Rewards Wallet",
        description: "Earn tokens for engaging and redeem them for perks.",
        color: "bg-green-100 text-green-700"
    },
    {
        icon: "🤝",
        title: "Referral Program",
        description: "Invite friends and get rewarded.",
        color: "bg-yellow-100 text-yellow-700"
    },
]

const FeaturesSection = () => {
    return (
        <section id='features' className="relative py-24   bg-white ">
            <div className="container mx-auto px-4 w-[90%]">
                {/* Section Headline */}
                <h2 className="text-3xl md:text-4xl/tight font-bold text-center text-gray-900 mb-12">
                    Everything You Need in One App
                </h2>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 overflow-x-auto sm:overflow-visible sm:grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow bg-white border"
                        >
                            {/* Icon */}
                            <div className={`w-16 h-16 flex items-center justify-center rounded-full text-3xl mb-4 ${feature.color}`}>
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm text-center max-w-xs">
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