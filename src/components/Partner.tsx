import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import React from 'react'
import handshakes from "@/assets/images/handshakes.jpg";


const Partner = () => {
  return (
<section id='partner' className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center gap-6">
            <div className="flex items-center">
              <Image
                src={handshakes}
                className="lg:h-[300px] h-[250px] md:mb-3 md:w-[400px] md:h-[300px]  rounded-xl mx-auto"
                alt="partner section"
                width={433}
                height={650}
              />
            </div>
            <div className="lg:ms-5 ms-8">
              <span className="text-sm text-primary uppercase font-semibold tracking-wider text-default-950">
                Our Partner
              </span>
              <h2 className="text-3xl md:text-4xl/tight font-semibold text-black mt-2">
                Partner With Cash 4 Edu
              </h2>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 text-sm font-medium text-black mt-6"
              >
                Learn More
                <IconifyIcon icon="lucide:move-right" />
              </a>
              <hr className="border-gray-200 mt-3" />
              <div className='mt-3'>
                <p>Employers, brands, and vendors — connect with students directly through education benefits, discounts, and sponsored opportunities.</p>
              </div>
                <button className=" mt-6 bg-gradient-to-r from-blue-400 to-blue-700 px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  Become a Partner
                </button>
              {/* <div className="flex items-start gap-5">
                <div>
                  <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
                    <IconifyIcon
                      icon="lucide:check"
                      className="text-base text-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">
                    Manage markets with empowerment
                  </h4>
                  <p className="text-base font-normal text-gray-500 mt-2">
                    Empower yourself to effectively manage markets with
                    confidence. utilizing strategic insights and resources for
                    success.
                  </p>
                </div>
              </div> */}
              {/* <div className="flex items-start gap-5 mt-8">
                <div>
                  <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
                    <IconifyIcon
                      icon="lucide:layers-2"
                      className="text-base text-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">
                    Manage your design and architecture
                  </h4>
                  <p className="text-base font-normal text-gray-500 mt-2">
                    Achieve task completion optimization by effectively managing
                    time and resources, ensuring timely delivery and efficiency.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 mt-8">
                <div>
                  <div className="w-12 h-12 rounded-full border border-dashed border-primary/40 bg-primary/10 flex items-center justify-center">
                    <IconifyIcon
                      icon="lucide:lock"
                      className="text-base text-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">
                    Presentations in real-time
                  </h4>
                  <p className="text-base font-normal text-gray-500 mt-2">
                    Empower yourself to effectively manage markets with
                    confidence. utilizing strategic insights and resources for
                    success.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>  
    )
}

export default Partner