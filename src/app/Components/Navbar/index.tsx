"use client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../MenuOverlay";
import { useEffect, useState } from "react";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
   
  return (
      <nav className={`flex place-content-between items-center text-stone-300 font-sans
      shadow-zinc-900 shadow-2xl hover:shadow-cyan-900 hover:shadow-lg  
      w-full fixed top-0 z-20 transition duration-1000 ease-in-out ${
        isScrolled ? "bg-black" : "bg-transparent"}`}>
        <div className="flex px-4 container lg:py-4 flex-wrap items-center justify-between mx-auto py-2">
          <Link
            href={"/"}
            className="text-2xl md:text-5xl text-stone-300 font-semibold hover:animate-pulse"
            >
           <Image
              src="/logo01.png"
              alt="DevSaulo image"
              className=""
              width={100}
              height={100}
              />
              </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-stone-200 text-stone-200 hover:text-stone-300 hover:border-stone-300"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-stone-200 text-stone-200 hover:text-stone-300 hover:border-stone-300"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    );
  };