
import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-col md:flex-row md:justify-between md:items-start">
        {/* Logo and description */}
        <div className="flex-shrink-0 text-center md:text-left md:w-1/4 mb-6 md:mb-0">
          <a className="flex justify-center md:justify-start items-center text-gray-300">
            <RiRobot2Line className="text-4xl font-extrabold text-purple-500" />
            <span className="ml-3 text-xl font-bold">Agentia World</span>
          </a>
          <p className="mt-2 text-base font-normal">
            Next-generation AI agents powering the future of enterprise intelligence.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-4">
            <FiGithub className="text-3xl hover:text-white transition" />
            <FaLinkedin className="text-3xl hover:text-white transition" />
            <FaTwitter className="text-3xl hover:text-white transition" />
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center md:justify-start flex-grow">
          {/* Product Section */}
          <div className="w-1/2 sm:w-1/4 px-4 mb-6">
            <h2 className="font-bold text-gray-300 text-xl mb-3">Product</h2>
            <nav className="space-y-2">
              <a className="block hover:text-white">Features</a>
              <a className="block hover:text-white">Pricing</a>
              <a className="block hover:text-white">Documentation</a>
              <a className="block hover:text-white">API</a>
            </nav>
          </div>
          {/* Company Section */}
          <div className="w-1/2 sm:w-1/4 px-4 mb-6">
            <h2 className="font-bold text-gray-300 text-xl mb-3">Company</h2>
            <nav className="space-y-2">
              <a className="block hover:text-white">About</a>
              <a className="block hover:text-white">Blog</a>
              <a className="block hover:text-white">Careers</a>
              <a className="block hover:text-white">Contact</a>
            </nav>
          </div>
          {/* Legal Section */}
          <div className="w-1/2 sm:w-1/4 px-4 mb-6">
            <h2 className="font-bold text-gray-300 text-xl mb-3">Legal</h2>
            <nav className="space-y-2">
              <a className="block hover:text-white">Privacy</a>
              <a className="block hover:text-white">Terms</a>
              <a className="block hover:text-white">Security</a>
              <a className="block hover:text-white">Compliance</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-6">
        <div className="container mx-auto py-4 px-5 text-center">
          <p className="text-gray-400 text-xl">
            © 2025 Agentia World. Powered by Panavercity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
