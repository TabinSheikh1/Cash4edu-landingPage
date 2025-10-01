import React from 'react'

const ClosingSection = () => {
  return (
    <section id='closing' className="relative py-24 bg-blue-100">
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 max-w-3xl leading-snug">
            “We believe education should be accessible, affordable, and rewarding.”
          </h1>

          {/* Supporting text */}
          <p className="text-base md:text-lg max-w-xl text-center mx-auto text-gray-700 mt-6">
            Join us in shaping the future of financial wellness for students.
          </p>

          {/* CTA button */}
          <div className="mt-8">
            <button className="text-lg bg-gradient-to-r from-blue-400 to-blue-700 px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300">
              Join the Waitlist Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClosingSection