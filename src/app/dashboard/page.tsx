"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaWhatsapp, FaBoxOpen, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const OrderForm: React.FC = () => {
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");
  const [location, setLocation] = useState("");

  // ============================= [ WhatsApp Order Function ] ===============================
  const handleWhatsAppOrder = () => {
    const phoneNumber = "923114594563";

    const message = encodeURIComponent(
      `*Asslam-o-Alaikum !*\n\n` +
        `*I am ordering from NTU Drop Web*\n\n` +
        `*________________________*\n\n` +
        `*Name:*             ${name}\n\n` +
        `*Order:*            ${order}\n\n` +
        `*Location:*        ${location}\n\n` +
        `*________________________*\n\n` +
        `*Jazakallah!*`
    );

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };
  // ============================= [ WhatsApp Order Function ] ===============================

  return (
    <>
      <Navbar />
      <div className="h-screen bg-[#e5fbe3] flex md:items-center justify-center px-4 py-0 border-0 border-red-600 rounded-2xl">
        <div className="w-full max-w-md bg-white mt-15 md:mt-0 rounded-2xl h-fit shadow-lg p-6 border-0 border-red-600">
          {/* Header */}
          <div className="bg-green-600 rounded-t-2xl px-4 py-3 text-white flex items-center gap-2 text-lg font-semibold">
            NTU Instant Delivery
          </div>

          {/* Logo */}
          <div className="flex justify-center mt-5">
            <div className="bg-white rounded-lg shadow-md">
              <Image
                src="/logo.png"
                alt="NTU Logo"
                width={96}
                height={96}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Form */}
          <div className="mt-6 space-y-4">
            <h2 className="text-center text-green-700 text-lg font-semibold">
              Place Your Order
            </h2>
            {/* Name Input */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <FaUser className="text-green-600 mr-2" />
              <input
                type="text"
                placeholder="Your Name"
                className="bg-transparent flex-1 outline-none text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Order Input */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <FaBoxOpen className="text-green-600 mr-2" />
              <input
                type="text"
                placeholder="What do you want to order?"
                className="bg-transparent flex-1 outline-none text-sm"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
              />
            </div>
            {/* Location Input */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
              <FaMapMarkerAlt className="text-green-600 mr-2" />
              <input
                type="text"
                placeholder="Your Location (Slide, Block, etc.)"
                className="bg-transparent flex-1 outline-none text-sm"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppOrder}
              className="mt-4 bg-green-600 hover:bg-green-700 transition text-white w-full py-3 rounded-full flex items-center justify-center gap-2 text-sm font-medium"
            >
              <FaWhatsapp className="text-white text-lg" />
              Send Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderForm;
