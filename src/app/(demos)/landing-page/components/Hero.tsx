import Image from 'next/image'
import React from 'react'
import iterior from "@/assets/images/interior.png";


const Hero = () => {
  return (
    <section
      className="relative pt-32 pb-20 bg-gray-200/40 bg-[url(../images/home/bg-3.png)] bg-no-repeat bg-cover"
      id="home"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-10 items-center">
          <div className="">
            <h1 className="text-3xl md:text-5xl/tight lg:text-6xl/tight text-[#002366] tracking-normal capitalize leading-normal font-bold max-w-2xl">
              Where Learning Meets Opportunity
            </h1>
            <p className="text-base font-medium text-muted mt-3 capitalize">
              Cash 4 Edu helps students unlock scholarships, financial resources, and rewards — all in one app
            </p>
            <div className="flex flex-wrap mt-9 text-center gap-3">
              <button className=" bg-gradient-to-r from-blue-400 to-blue-700 px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                Join the Waitlist
              </button>
              <button className="py-2 px-6 text-primary rounded-md border border-primary text-base hover:border-primary hover:bg-primary hover:text-white transition-all duration-500 font-medium">
                Partner with Us
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={iterior}
              className="md:h-[700px] lg:ms-auto mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>)
}

export default Hero