"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 pt-5 lg:flex lg:justify-center font-heading">
        <div className="bg-black/30 lg:w-138 lg:h-12 mx-4 my-4 rounded-full flex flex-row justify-between items-center px-5 py-3 lg:justify-center">
          <h1 className="font-bold text-[25px] text-white lg:hidden">Edwin</h1>

          {/* ===== Desktop Menu ===== */}
          <div className="hidden lg:flex items-center gap-8 text-white font-medium">
            <button
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-primary-200"
            >
              Home
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-primary-200"
            >
              About
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("skill")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-primary-200"
            >
              Skill
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-primary-200"
            >
              Projects
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("faq")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-primary-200"
            >
              FAQ
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-primary-200"
            >
              Contact
            </button>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(true)} className="lg:hidden">
            <RxHamburgerMenu className="w-8 h-8 text-white" />
          </button>
        </div>
      </nav>

      {/* ===== MOBILE OVERLAY MENU ===== */}
      {open && (
        <div className="fixed inset-0 z-999 bg-black/40 backdrop-blur-md flex">
          {/* CLICK OUTSIDE AREA */}
          <div className="absolute inset-0" onClick={() => setOpen(false)} />

          {/* PANEL */}
          <div className="relative bg-primary/90 m-4 rounded-3xl p-6 flex flex-col w-full text-white">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 z-10"
            >
              <IoClose className="w-8 h-8" />
            </button>

            <h1 className="font-bold text-2xl mb-10">Edwin</h1>

            <div className="flex flex-col items-start gap-6 text-lg font-medium">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Skill", id: "skill" },
                { name: "Projects", id: "projects" },
                { name: "FAQ", id: "faq" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  className="hover:text-primary-200"
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => {
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 100); // delay kecil supaya menu hilang dulu
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
