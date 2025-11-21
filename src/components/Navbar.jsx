/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

function Navbar({ launchingRef, setIsFormOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        // sm breakpoint in Tailwind (640px)
        setIsMenuOpen(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const scrollToSection = (ref, offset = 0) => {
    if (ref && ref.current) {
      const top =
        ref.current.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    // <header className="bg-[#F9F3FA] w-full fixed top-0 left-0 right-0 z-50 text-sm md:text-base lg:text-lg">
    <header className="backdrop-blur-lg w-[100%] fixed top-0 left-1/2 transform -translate-x-1/2 z-50 text-sm rounded-none bg-[#F9F3FA] md:text-base lg:text-lg sm:w-[95%] sm:rounded-3xl sm:top-2 sm:bg-[#F9F3FA]/80">
      <nav className="container mx-auto flex items-center justify-between h-[6.5rem] px-4 gap-2 sm:px-1 2xl:px-16 md:gap-0 animate-slideContentInleft">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Vizzle logo"
            className={`w-[175px] h-auto transition-all duration-500 md:w-[200px]`}
            placeholder="blur"
          />
        </Link>
        <div className="hidden sm:flex ">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-4 rounded-full bg-[#1D8DB2] text-white text-sm shadow-md hover:shadow-inner md:px-7 md:py-5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            Get it on Google Play
          </a>
        </div>

        <div className="sm:hidden relative w-10 h-10 z-50">
          <Bars3Icon
            className={`absolute top-0 left-0 w-10 h-10 cursor-pointer text-blue-950 transition-all duration-300 ease-in-out
              ${
                isMenuOpen
                  ? "opacity-0 rotate-90 pointer-events-none"
                  : "opacity-100 rotate-0 pointer-events-auto"
              }`}
            onClick={() => setIsMenuOpen(true)}
          />
          <XMarkIcon
            className={`absolute top-0 left-0 w-10 h-10 cursor-pointer text-blue-950 transition-all duration-300 ease-in-out
              ${
                isMenuOpen
                  ? "opacity-100 rotate-90 pointer-events-auto"
                  : "opacity-0 rotate-0 pointer-events-none"
              }`}
            onClick={() => setIsMenuOpen(false)}
          />
        </div>

        <div
          className={`absolute flex flex-col items-start w-full h-20 backdrop-blur-3xl bg-[#F9F3FA] top-24 left-0 p-5 gap-5 bg-gray-50/97 z-40 transform transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="sm:hidden flex">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-3 rounded-full bg-[#1D8DB2] text-white text-xs shadow-md"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
