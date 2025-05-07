"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/logo.png"
            alt="App Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-xl font-bold text-green-800">
            NTU Instant Delivery
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/download"
            className="bg-green-600 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-green-700 transition shadow-md"
          >
            <MdDownload className="text-xl" />
            Download Our App
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-2xl text-green-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Smooth Transition */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 md:px-6 pb-4">
          <Link
            href="/download"
            className="flex items-center justify-center bg-green-600 text-white w-full px-4 py-3 rounded-full hover:bg-green-700 transition gap-2 shadow"
            onClick={() => setMenuOpen(false)}
          >
            <MdDownload className="text-xl" />
            <span>Download App</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
