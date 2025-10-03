import Image from 'next/image'
import React from 'react'
import logo from '../../public/images/Logo.png'

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br from-[#014bac] to-[#17243A]">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 py-12">
            {/* Company Info - Full width on mobile, 2 cols on desktop */}
            <div className="lg:col-span-2">
              <div className="flex items-center ">
                <div className="flex items-center ">
                  <Image src={logo} alt="Cash4edu" className="flex" width={110} height={40}/>
                  {/* <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-[#05d3f7] bg-clip-text text-transparent">
                    Cash4edu
                  </h2> */}
                </div>
              </div>
              <p className="text-gray-200 text-md leading-tight mb-6 max-w-md">
                Empowering students worldwide to achieve their academic dreams through accessible scholarships and educational funding opportunities. Your future starts here.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <a className="flex items-center gap-4 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="mailto:Info@cash4edu.com">
                  <div className="p-2 bg-[#014bac] rounded-lg group-hover:bg-[#05d3f7] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <span className="font-medium">Info@cash4edu.com</span>
                </a>
                <a className="flex items-center gap-4 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="tel:773-777-1234">
                  <div className="p-2 bg-[#014bac] rounded-lg group-hover:bg-[#05d3f7] transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="font-medium">773-777-1234</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-white text-lg mb-6 pb-2 border-b-2 border-[#05d3f7] inline-block">Company</h4>
              <div className="space-y-4">
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  About Our Mission
                </a></p>
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Scholarship Programs
                </a></p>
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Join Waitlist
                </a></p>
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Partner With Us
                </a></p>
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Contact Support
                </a></p>
              </div>
            </div>

            {/* Resources */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-white text-lg mb-6 pb-2 border-b-2 border-[#05d3f7] inline-block">Resources</h4>
              <div className="space-y-4">
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Scholarship Guide
                </a></p>
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Application Tips
                </a></p>
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Financial Aid
                </a></p>
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Student Stories
                </a></p>
              </div>
            </div>

            {/* Support */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-white text-lg mb-6 pb-2 border-b-2 border-[#05d3f7] inline-block">Support</h4>
              <div className="space-y-4">
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Help Center
                </a></p>
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  FAQ
                </a></p>
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Live Chat
                </a></p>
              </div>
            </div>

            {/* Legal */}
            <div className="lg:col-span-1">
              <h4 className="font-bold text-white text-lg mb-6 pb-2 border-b-2 border-[#05d3f7] inline-block">Legal</h4>
              <div className="space-y-4">
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Terms of Use
                </a></p>
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Privacy Policy
                </a></p>
                <p><a className="flex items-center gap-2 text-gray-200 hover:text-[#05d3f7] transition-all duration-300 group" href="#">
                  <div className="w-1 h-1 bg-[#05d3f7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  Cookie Policy
                </a></p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-[#05d3f7]/20 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-200">
                  © {new Date().getFullYear()} Cash4edu. Empowering education worldwide.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-[#014bac] text-white hover:bg-[#05d3f7] hover:scale-110 transition-all duration-300" href="#">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-[#014bac] text-white hover:bg-[#05d3f7] hover:scale-110 transition-all duration-300" href="#">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                </a>
                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-[#014bac] text-white hover:bg-[#05d3f7] hover:scale-110 transition-all duration-300" href="#">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-[#014bac] text-white hover:bg-[#05d3f7] hover:scale-110 transition-all duration-300" href="#">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer