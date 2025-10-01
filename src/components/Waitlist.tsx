import React from "react";

const Waitlist = () => {
    return (
        <section
        id="waitlist"
            className="w-full py-24 bg-gradient-to-b from-blue-200 via-white to-white flex justify-center items-center"
        >
            <div className="max-w-xl w-full mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl/tight font-bold text-[#002366] mb-3">
                    Be the First to Know When We Launch
                </h2>
                <p className="text-lg text-gray-700 mb-7">
                    Join the waitlist and secure early access to exclusive scholarships and perks.
                </p>
                <form className="flex flex-col sm:flex-row items-center gap-3 justify-center mb-2">
                    <input
                        type="email"
                        required
                        placeholder="Enter your email…"
                        className="w-full sm:w-auto flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-400 to-blue-700 px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    >
                        <span role="img" aria-label="Join"></span> Join the Waitlist
                    </button>
                </form>
                <p className="text-sm text-gray-500">
                    No spam. Just early access to perks & scholarships.
                </p>
            </div>
        </section>
    );
};

export default Waitlist;