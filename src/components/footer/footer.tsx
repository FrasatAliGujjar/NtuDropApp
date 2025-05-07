"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-50 text-green-800 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="App Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-xl font-bold">NTU Instant Delivery</span>
          </div>
          <p className="text-sm mt-4">
            Your fast, reliable delivery partner for everything you need at NTU.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <Link
            href="/dashboard"
            className="hover:text-green-600 mb-2 transition"
          >
            Home
          </Link>
          <Link
            href="/download"
            className="hover:text-green-600 mb-2 transition"
          >
            Download App
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <a
              href="/"
              target="_blank"
              className="text-green-700 hover:text-green-900 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="/"
              target="_blank"
              className="text-green-700 hover:text-green-900 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="/"
              target="_blank"
              className="text-green-700 hover:text-green-900 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://wa.me/923114594563"
              target="_blank"
              className="text-green-700 hover:text-green-900 transition"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm py-4 bg-green-100 text-green-700">
        © {new Date().getFullYear()} NTU Instant Delivery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
