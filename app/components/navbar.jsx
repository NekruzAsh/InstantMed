"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";


const navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const hamburgerRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
    if (hamburgerRef.current) {
      hamburgerRef.current.checked = !nav;
    }
  };

  useEffect(() => {
    const changeShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", changeShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 z-[100] bg-[#F0F8FF] backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-[#F0F8FF] shadow-md transition-shadow duration-500"
          : "fixed w-full h-20 z-[100] bg-[#F0F8FF]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          <Image
            src="/images/med.png"
            alt="logo"
            width={50}
            height={50}
            quality={100}
          />
        </Link>
        <div>
          <ul className="hidden items-center md:flex">
            <Link href="/#home">
              <li className="ml-10 text-lg text-[#081c09] hover:text-[#089000] transition-colors duration-500">
                <span className=" text-[#1fc600]">//</span> Home.
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-lg text-[#081c09] hover:text-[#089000] transition-colors duration-500">
                <span className="text-[#1fc600]">//</span> Contact.
              </li>
            </Link>
            <Link href="/#cart">
              <button class="CartBtn ml-10">
                <span class="IconContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill="rgb(17, 17, 17)"
                    class="cart"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </span>
                <p class="text">Go to Cart</p>
              </button>
            </Link>
          </ul>
          <div className="md:hidden">
            <label className="hamburger">
              <input type="checkbox" ref={hamburgerRef} onClick={handleNav} />
              <svg viewBox="0 0 32 32">
                <path
                  class="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path class="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70"
            : "hidden"
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0a5d00] p-10 transition-transform duration-500 transform translate-x-0"
              : "fixed right-[-100%] top-0 p-10 transition-transform duration-500 transform translate-x-full"
          }
        >
          <div></div>
          <div className="items-center text-center py-4 mx-auto mt-36 flex flex-col">
            <ul>
              <Link href="/#home">
                <li className="py-4 text-[17px] text-[#F0F8FF] hover:text-[#089000] transition-colors duration-500">
                  <br />
                  Home.
                </li>
              </Link>

              <Link href="/#about">
                <li className="py-4 text-[17px] text-[#F0F8FF] hover:text-[#089000] transition-colors duration-500">
                  <br />
                  About.
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-[17px] text-[#F0F8FF] hover:text-[#089000] transition-colors duration-500">
                  <br />
                  Contact.
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
