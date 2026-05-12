"use client";

import Image from "next/image";
import { FaMicrophone } from "react-icons/fa";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";

const HeroSection = () => {
  return (
    <div className="relative w-full px-5 pt-10 flex-1 flex flex-col justify-around">
      <div className="font-heading mx-5 flex flex-col lg:relative lg:min-h-225">
        {/* ===== LEFT CONTENT===== */}
        <div className="order-1 lg:absolute lg:left-10 lg:top-1/2 lg:-translate-y-1/2">
          <div className="lg:flex lg:flex-col lg:gap-25">
            <div className="hidden lg:block">
              <div className="gap-5 w-30 h-100 border border-gray-300 rounded-full flex flex-col justify-center items-center">
                <div className="w-17 h-17 border border-gray-300 rounded-full flex justify-center items-center">
                  <Image
                    src="/assets/logo/javascript.svg"
                    alt="JavaScript"
                    width={24}
                    height={24}
                    className="w-10 h-10"
                  />
                </div>
                <div className="w-17 h-17 border border-gray-300 rounded-full flex justify-center items-center">
                  <Image
                    src="/assets/logo/css.svg"
                    alt="CSS"
                    width={30}
                    height={36}
                    className="w-11 h-11"
                  />
                </div>
                <div className="w-17 h-17 border border-gray-300 rounded-full flex justify-center items-center">
                  <Image
                    src="/assets/logo/html.svg"
                    alt="HTML"
                    width={35}
                    height={35}
                    className="w-10 h-10"
                  />
                </div>
                <div className="w-17 h-17 border border-gray-300 rounded-full flex justify-center items-center">
                  <Image
                    src="/assets/logo/react.svg"
                    alt="React"
                    width={21}
                    height={19}
                    className="w-11 h-11"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-50">
              <FaMicrophone className="w-12 h-12 lg:w-15 lg:h-15 p-3 rounded-full border text-white" />

              <div className="py-4 text-white flex flex-col gap-3 lg:w-118">
                <h1 className="font-extrabold text-[20px]">
                  Hi, I&apos;m Edwin Anderson
                </h1>
                <p className="leading-7 text-[18px]">
                  a frontend developer passionate about creating seamless
                  digital experiences that are fast, responsive, and
                  user-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT CONTENT===== */}
        <div className="flex flex-col gap-5 text-white my-6 order-2 lg:absolute lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:w-70">
          <div className="flex flex-row lg:flex-col justify-between gap-5 h-20 lg:h-50">
            <div className="flex flex-col gap-1">
              <h1 className="font-extrabold text-[35px]">2+</h1>
              <p className="text-[15px]">Years Experience</p>
            </div>
            {/* Mobile → Vertical */}
            <Separator orientation="vertical" className="lg:hidden h-20" />

            {/* Desktop → Horizontal */}
            <Separator
              orientation="horizontal"
              className="hidden lg:block w-full"
            />
            <div className="flex flex-col gap-1">
              <h1 className="font-extrabold text-[35px]">99%</h1>
              <p className="text-[15px]">Client Satisfaction</p>
            </div>
          </div>

          {/* Desktop → Horizontal */}
          <Separator
            orientation="horizontal"
            className="hidden lg:block w-full"
          />

          <div className="flex flex-row lg:flex-col justify-between gap-5 h-20 lg:h-50">
            <div className="flex flex-col gap-1">
              <h1 className="font-extrabold text-[35px]">3</h1>
              <p className="text-[15px]">Project Delivered</p>
            </div>
            {/* Mobile → Vertical */}
            <Separator orientation="vertical" className="lg:hidden h-20" />

            {/* Desktop → Horizontal */}
            <Separator
              orientation="horizontal"
              className="hidden lg:block w-full"
            />
            <div className="flex flex-col gap-1">
              <h1 className="font-extrabold text-[35px]">50</h1>
              <p className="text-[15px]">Clients Worldwide</p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-secondary rounded-full w-full max-w-150 h-15 flex flex-row justify-between items-center px-3 text-black mt-10"
            >
              <h1 className="font-semibold text-[16px]">Contact Me</h1>
              <IoArrowForwardCircleSharp className="w-13 h-13" />
            </button>
          </div>
        </div>

        {/* ===== IMAGE SECTION ===== */}
        <div className="order-3 lg:order-2 flex flex-col items-center relative gap-20">
          <div className="mt-10 bg-primary-400 mx-auto rounded-full w-55 h-10 flex flex-row justify-center items-center p-3 gap-3">
            <FaCircle className="w-5 h-5 text-primary-200" />
            <h1 className="font-normal text-[16px] text-white">
              Available for Hire
            </h1>
          </div>
          <div className="relative w-full h-120 lg:h-150 lg:mt-25 flex justify-center items-end text-center max-w-250">
            {/* Text 1 */}
            <h2 className="absolute top-2 lg:-top-63 left-4 lg:left-10 text-[60px] lg:text-[120px] text-white font-script1 italic z-30 -rotate-12">
              Junior
            </h2>

            {/* Text 2 (gold) */}
            <h1 className="absolute bottom-50 lg:bottom-90 text-[80px] lg:text-[200px] font-script2 text-[#E3B04B] leading-none z-0 text-center">
              FRONTEND <br /> DEVELOPER
            </h1>

            {/* Image */}
            <Image
              src="/assets/image/person.svg"
              alt="Edwin Anderson"
              width={374}
              height={452}
              className="absolute -bottom-5 lg:-bottom-10 z-10 h-150 lg:h-185 w-auto object-contain"
            />

            {/* Outline Text */}
            <h1 className="absolute bottom-50 lg:bottom-90 text-[80px] lg:text-[200px] font-script2 outline-text leading-none z-20 text-center">
              <br /> DEVELOPER
            </h1>
          </div>
        </div>
      </div>
      {/* ===== SCROLL DOWN ===== */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 text-white flex items-center gap-2 text-sm opacity-80">
        <span>Scroll Down</span>
        <div className="w-4 h-6 border border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
