import Image from "next/image";
import React from "react";
import logo from '@/assets/images/logo.png'
import IconifyIcon from "@/components/wrappers/IconifyIcon";


const Footer = () => {
  return (
    <footer className="relative  bg-[url(../images/bg-demo.jpg)] bg-no-repeat bg-cover">
      <div className="pt-20 pb-10" data-aos="fade-up" data-aos-duration={1000}>
        <div className="container relative">
          <div className="text-center">
            <div className=" mx-auto mb-12">
              <a className="flex items-center justify-center" href="#">
                <Image className="h-10" src={logo} alt="logo" width={131} height={40} />
              </a>
              <h2 className="md:text-4xl text-xl font-semibold text-default-900 capitalize my-5">
                Get Evea for now
              </h2>
              <p className="font-normal text-lg max-w-sm mx-auto text-muted">
                Start Openup today and create your stunning app website!
              </p>
            </div>
            <a
              className="py-2 px-6 inline-flex items-center gap-2 rounded-md text-base text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium"
              href="#"
            >
              <IconifyIcon icon='lucide:shopping-cart' className="h-5 w-5"  /> Purchase Now
            </a>
          </div>
        </div>
      </div>
      <div className="container relative">
        <p className="py-6 text-center font-medium text-base text-default-900">
         2024 © Evea. Crafted and Coded with{" "}
          <span className="text-red-500">❤️</span> by{" "}
          <a
            className="text-primary-700"
            href="https://zoyothemes.com/"
            target="_blank"
          >
            Zoyothemes
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
