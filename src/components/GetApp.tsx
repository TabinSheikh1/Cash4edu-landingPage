import Image from "next/image";

const GetApp = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] py-16 lg:py-24">
        <div className="container mx-auto px-4 w-[90%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Logo/Brand */}
              <div className="mb-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  CASH4EDU
                </h2>
                <p className="text-xl text-white/90 font-light">
                  FUELING AMBITION, FUNDING EDUCATION
                </p>
              </div>

              {/* App Description */}
              <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Access thousands of scholarships, manage your applications, and
                get funded for your education - all in one powerful mobile app.
              </p>

              {/* App Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Scholarship Matching</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Application Tracker</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Deadline Alerts</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Document Manager</span>
                </div>
              </div>

              {/* Download Buttons */}

              <div className="flex flex-row  items-center">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/App Store.svg"
                    alt="Download on App Store"
                    width={210}
                    height={10} // set same height
                    className="hover:scale-105 transition-transform object-contain"
                  />
                </a>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/Google Play.png"
                    alt="Get it on Google Play"
                    width={190}
                    height={10} // same height as above
                    className="hover:scale-105 transition-transform object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Right Content - App Mockup */}
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                {/* Phone Mockup */}
                <div className="relative bg-gradient-to-b from-[#71777B] to-[#5a5f63] rounded-[40px] p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  {/* Phone Notch */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#71777B] rounded-b-lg z-10"></div>

                  {/* Screen Content */}
                  <div className="bg-white rounded-[32px] h-96 overflow-hidden relative">
                    {/* App Header */}
                    <div className="bg-gradient-to-r from-[#014bac] to-[#05d3f7] p-4 text-white">
                      <h3 className="font-bold text-lg">Cash4Edu</h3>
                      <p className="text-sm opacity-90">
                        Your Scholarship Companion
                      </p>
                    </div>

                    {/* App Content */}
                    <div className="p-4">
                      <div className="space-y-3">
                        <div className="bg-gradient-to-r from-[#014bac]/10 to-[#05d3f7]/10 p-3 rounded-lg border-l-4 border-[#014bac]">
                          <p className="font-semibold text-[#014bac]">
                            15 New Matches
                          </p>
                          <p className="text-xs text-[#71777B]">
                            Scholarships waiting for you
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-[#05d3f7]/10 to-[#014bac]/10 p-3 rounded-lg border-l-4 border-[#05d3f7]">
                          <p className="font-semibold text-[#014bac]">
                            3 Applications Due
                          </p>
                          <p className="text-xs text-[#71777B]">Next 7 days</p>
                        </div>
                        <div className="bg-[#71777B]/10 p-3 rounded-lg border-l-4 border-[#71777B]">
                          <p className="font-semibold text-[#014bac]">
                            $25,000+ Available
                          </p>
                          <p className="text-xs text-[#71777B]">
                            In scholarship funds
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <button className="w-full bg-gradient-to-r from-[#014bac] to-[#05d3f7] text-white py-3 rounded-xl font-semibold shadow-lg">
                          Explore Scholarships
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#05d3f7] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#71777B] rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GetApp;
