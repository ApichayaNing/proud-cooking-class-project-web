"use client";

import Link from "next/link";
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
          href="/Header"
          style={{ borderRadius: "12px" }}
          className=" bg-(--color-cream) text-(--color-text-dark) font-semibold hover:scale-105 transition"
        >
          Proud Cooking Class
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 ml-8 lg:ml-16 ">
          <li href="/" className="bg-white text-black hover:scale-105 transition">
            Home
          </li>
          <li href="/About" className="bg-white text-black hover:scale-105 transition">
            About Us
          </li>
          <li href="/Classes" className="bg-white text-black hover:scale-105 transition">
            Our Classes
          </li>
          <li href="/Team" className="bg-white text-black hover:scale-105 transition">
            Our Team
          </li>
          <li href="/Con" className="bg-white text-black hover:scale-105 transition">
            Contact Us
          </li>
          <li
            href="/booking"
            style={{ borderRadius: "12px" }}
            className="bg-[#f4b466] text-(--color-text-dark) font-bold hover:scale-105 transition"
          >
            Book Now
          </li>
        </ul>
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

        <li><Link href="/Header">Home</Link></li>
        <li><Link href="About">About Us</Link></li>
        <li><Link href="Classes">Our Classes</Link></li>
        <li><Link href="Team">Our Team</Link></li>
        <li><Link href="Contact">Contact Us</Link></li>
        <li><Link href="Booking">Book Now</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar; 