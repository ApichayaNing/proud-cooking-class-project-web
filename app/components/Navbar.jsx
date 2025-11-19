"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const sideMenuRef = useRef();

  // ✅ Opens the sidebar
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(0)";
    }
  };

  // ✅ Closes the sidebar
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  // ✅ Toggle open/close
  const toggle = () => {
    setOpen(!open);
    if (!open) openMenu();
    else closeMenu();
  };

  // ✅ Detect scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50 overflow-hidden p-4">
      <ul className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-start whitespace-nowrap">

        {/* Logo */}
        <a
          href="#top"
          style={{ borderRadius: "12px" }}
          className=" bg-(--color-cream) text-(--color-text-dark) font-semibold hover:scale-105 transition"
        >
          Proud Home Cooking Class
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 ml-8 lg:ml-16 ">
          <li className="bg-white text-black hover:scale-105 transition">
            <a href="#top">Home</a>
          </li>
          <li className="bg-white text-black hover:scale-105 transition">
            <a href="#about">About Us</a>
          </li>
          <li className="bg-white text-black hover:scale-105 transition">
            <a href="#classes">Our Classes</a>
          </li>
          <li className="bg-white text-black hover:scale-105 transition">
            <a href="#team">Our Team</a>
          </li>
          <li className="bg-white text-black hover:scale-105 transition">
            <a href="#contact">Contact Us</a>
          </li>
          <li
            style={{ borderRadius: "12px" }}
            className="bg-[#f4b466] text-(--color-text-dark) font-bold hover:scale-105 transition"
          >
            <a href="#booking">Book Now</a>
          </li>
        </ul>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={toggle}
          className="ml-4 md:hidden absolute right-4 text-2xl text-white bg-[#ec9a56] p-3 rounded-lg">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </ul>

      {/* ✅ Mobile Sidebar Menu */}
      <ul
        ref={sideMenuRef}
        className="fixed md:hidden flex flex-col gap-4 py-20 px-10 right-0 top-0 h-screen w-64 bg-rose-50 shadow-lg 
        transition-transform duration-500"
        style={{ transform: "translateX(16rem)" }} // hidden by default
      >
        {/* Close button inside sidebar */}
        <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
          <FaTimes size={24} />
        </div>

        <li><a href="#top" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About Us</a></li>
        <li><a href="#classes" onClick={closeMenu}>Our Classes</a></li>
        <li><a href="#team" onClick={closeMenu}>Our Team</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        <li><a href="#booking" onClick={closeMenu}>Book Now</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
