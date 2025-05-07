"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { MdAndroid } from "react-icons/md";

const DownloadPage: React.FC = () => {
  return (
    <div className="h-fit md:h-screen md:m-2 overflow-hidden flex md:items-center justify-center border-0 border-red-500 md:p-5">
      <div className="max-w-6xl w-full bg-green-50 shadow-2xl rounded-2xl p-2 md:p-8 flex flex-col md:flex-row md:items-center gap-10">
        {/* Left Section: QR + Screenshot */}
        <div className="md:w-1/2 flex flex-col md:flex-row items-center gap-6">
          {/* Screenshot - shown last on small screens */}
          <div className="w-full md:w-1/2 order-3 md:order-none">
            <Image
              src="/mobile.png"
              alt="App Screenshot"
              width={300}
              height={500}
              className="rounded-xl w-full shadow-md h-auto"
            />
          </div>

          {/* QR Code - middle on small screens */}
          <div className="hidden md:flex w-full md:w-1/2 flex-col justify-center items-center md:items-start order-2 md:order-none">
            <Image
              src="/QR.jpeg"
              alt="QR Code"
              width={150}
              height={150}
              className="rounded shadow-md"
            />
            <p className="text-green-700 mt-2 text-sm text-center md:text-left">
              Scan to download the app
            </p>
          </div>
        </div>

        {/* Right Section: Text + Download Button — shown first on small screens */}
        <div className="md:w-1/2 order-1 md:order-none abhaya-libre-regular">
          <h1 className="text-xl md:text-4xl font-bold text-green-800 mb-4 text-center md:text-left">
            Download Our App
          </h1>
          <p className="text-green-700 mb-6 text-center md:text-left">
            Get the full experience! Download our Android APK and explore
            powerful features directly on your device.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center justify-center md:justify-start mb-4 text-green-700 hover:text-green-800 transition"
          >
            <div className="text-green-700 hover:underline hover:text-black px-5 py-2 rounded-2xl bg-white shadow-2xl mb-6 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
              Use NTU Drop Web
              <HiArrowRight className="text-green-700 text-xl" />
            </div>
          </Link>
          {/* Download Button */}
          <div className="flex justify-center md:justify-start">
            <Link
              href="/download/NtuDrop.apk"
              className="bg-green-600 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-green-700 transition"
              download
            >
              <MdAndroid size={24} />
              <span className="font-semibold">Download APK</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
