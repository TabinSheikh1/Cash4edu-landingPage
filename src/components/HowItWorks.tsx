"use client";
import React, { useState } from "react";

const faqs = [
    {
        q: "Is Cash 4 Edu free to use?",
        a: "Yes! Cash 4 Edu is completely free for students."
    },
    {
        q: "Who can join the waitlist?",
        a: "Any student interested in scholarships, grants, or rewards can join."
    },
    {
        q: "How do I get early access?",
        a: "Just enter your email in the waitlist section. We’ll notify you as soon as you’re in!"
    }
];

const FAQ = () => {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="py-24 bg-gradient-to-b from-[#014bac]/10 to-white" id="faq">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#014bac] mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-2xl mx-auto space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="border rounded-lg bg-white shadow">
                            <button
                                className="w-full text-left px-6 py-4 font-semibold text-[#014bac] flex justify-between items-center"
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                {f.q}
                                <span className="ml-2">{open === i ? "−" : "+"}</span>
                            </button>
                            {open === i && (
                                <div className="px-6 pb-4 text-gray-700">{f.a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;