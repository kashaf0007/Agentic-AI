
import Link from 'next/link';
import React from 'react';
import { RiRobot2Line } from 'react-icons/ri';

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <RiRobot2Line className='text-3xl font-extrabold text-purple-500' />
          <span className="ml-3 text-xl font-extrabold text-white">Agentia World</span>
        </a>
        <nav className="flex flex-col md:flex-row items-center text-base justify-center space-y-4 md:space-y-0 md:space-x-7">
          <Link href={"#neutral"} className="text-gray-300 hover:text-purple-500">Features</Link >
          <Link href={"#ai"} className="text-gray-300 hover:text-purple-500">Technology</Link >
          <Link href={"#solution"} className="text-gray-300 hover:text-purple-500">Agents</Link >
          <Link href={"#price"} className="text-gray-300 hover:text-purple-500">Pricing</Link >
          <Link href={"#contact"} className="text-gray-300 hover:text-purple-500">Contact</Link >
        </nav>
        <button className="inline-flex items-center text-white text-xl bg-purple-500 py-2 px-4 hover:bg-purple-700 rounded mt-4 md:mt-0">
          Launch Console
        </button>
      </div>
    </header>
  );
};

export default Navbar;
