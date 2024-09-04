"use client";

import React, { useState, useCallback } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import Logo from "@/public/AD.png";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = useCallback(() => setNav((prevNav) => !prevNav), []);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000d1a] text-gray-300 z-[999]">
      <div>
        <Image src={Logo} alt="Logo Image" width={80} height={50} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-4 hover:cursor-pointer">
        <li>
          <Link href="#home" scroll={true}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href="#about" scroll={true}>
            À propos
          </Link>
        </li>
        <li>
          <Link href="#skills" scroll={true}>
            Skills
          </Link>
        </li>
        <li>
          <Link href="#work" scroll={true}>
            Projets
          </Link>
        </li>
        <li>
          <Link href="#contact" scroll={true}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 hover:cursor-pointer"
        aria-expanded={nav}
        aria-controls="mobile-menu"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#001f3f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:cursor-pointer">
          <Link onClick={handleClick} href="#home" scroll={true}>
            Accueil
          </Link>
        </li>
        <li className="py-6 text-4xl hover:cursor-pointer">
          <Link onClick={handleClick} href="#about" scroll={true}>
            À propos
          </Link>
        </li>
        <li className="py-6 text-4xl hover:cursor-pointer">
          <Link onClick={handleClick} href="#skills" scroll={true}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:cursor-pointer">
          <Link onClick={handleClick} href="#work" scroll={true}>
            Projets
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} href="#contact" scroll={true}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-[1000]">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="p-4 flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/adam-durigon-159b25273/"
              target="_blank"
              aria-label="LinkedIn Profile"
              rel="noopener noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="p-4 flex justify-between items-center w-full text-gray-300"
              href="https://github.com/AdamDurigon"
              target="_blank"
              aria-label="GitHub Profile"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="p-4 flex justify-between items-center w-full text-gray-300"
              href="mailto:durigonadam@gmail.com"
              target="_blank"
              aria-label="Email"
              rel="noopener noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
