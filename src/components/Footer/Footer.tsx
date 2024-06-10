"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-[60px] pt-[24px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">
            TACKL<span className="text-red">BOX</span>
          </h2>
          <p className="text-gray-400">
            Providing the best services and products to our customers with
            dedication and excellence.
          </p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-red-500">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-red-500">
                Register
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">1234 Street Name, City, State, 12345</p>
          <p className="text-gray-400">Email: contact@tacklbox.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* <a href="#" className="text-gray-400 hover:text-red-500">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500">
              <FaLinkedinIn size={24} />
            </a> */}
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} TACKLBOX. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
