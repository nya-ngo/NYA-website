"use client";
import Image from "next/image";
import { useState } from "react";
import navigate from "next/navigation";
import { useRouter } from "next/navigation";
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const handleNavigation = (route: any) => {
    setMenuOpen(false);
    router.push(route);
  };
  return (
    <main className="z-50 min-h-full flex flex-col items-center justify-start bg-zinc-50 font-sans">
      <div className="flex items-center md:justify-around justify-between w-full min-h-24">
        <div className="logo ml-8 cursor-pointer">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </div>
        <div
          className="nav-btn hidden lg:flex  items-center h-auto py-4 mx-8 "
          style={{ width: "65%" }}
        >
          <h1 className="cursor-pointer hover:text-blue-500">
            <Link href="/">Home</Link>
          </h1>
          <div className="relative group">
            <h1 className="cursor-pointer hover:text-blue-500">
              <Link href="/about">About Us</Link>
            </h1>

            <div className="absolute top-full left-0 pt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md min-w-48 z-50">
              <Link href="/about/team" className="px-4 py-2 hover:bg-gray-100">
                Our Team
              </Link>
              <Link
                href="/about/mission"
                className="px-4 py-2 hover:bg-gray-100"
              >
                Mission
              </Link>
              <Link
                href="/about/history"
                className="px-4 py-2 hover:bg-gray-100"
              >
                History
              </Link>
            </div>
          </div>
          <h1 className="cursor-pointer hover:text-blue-500">
            <Link href="/what-we-do">What we do</Link>
          </h1>
          <h1 className="cursor-pointer hover:text-blue-500">
            <Link href="/events">Events</Link>
          </h1>
          <h1 className="cursor-pointer hover:text-blue-500">
            <Link href="/gallery">Gallery</Link>
          </h1>
          <h1 className="cursor-pointer hover:text-blue-500">
            <Link href="/contact">Contact</Link>
          </h1>
          <h1 className="cursor-pointer hover:text-blue-500">
            <Link href="/donate">Donate us</Link>
          </h1>
        </div>
        <div className="flex h-16 items-center  justify-around lg:mx-8 gap-1">
          <select className="hidden lg:block h-12 px-3 border rounded-md">
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="te">తెలుగు</option>
          </select>
          <button
            className="donate-btn min-w-fit"
            onClick={() => handleNavigation("/donate")}
          >
            Donate now
          </button>
          <div
            className="flex lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon className="none" /> : <MenuIcon />}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="flex w-full flex-col gap-4 items-start h-auto py-4 px-8">
          <h1
            className="cursor-pointer hover:text-blue-500"
            onClick={() => handleNavigation("/")}
          >
            Home
          </h1>
          <h1
            className="cursor-pointer hover:text-blue-500"
            onClick={() => handleNavigation("/about")}
          >
            About Us
          </h1>
          <h1
            className="cursor-pointer hover:text-blue-500"
            onClick={() => handleNavigation("/what-we-do")}
          >
            What we do
          </h1>
          <h1
            className="cursor-pointer hover:text-blue-500"
            onClick={() => handleNavigation("/events")}
          >
            Events
          </h1>
          <h1
            className="cursor-pointer hover:text-blue-500"
            onClick={() => handleNavigation("/gallery")}
          >
            Gallery
          </h1>
          <h1
            className="cursor-pointer hover:text-blue-500"
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </h1>
          <h1
            className="cursor-pointer hover:text-blue-500"
            onClick={() => handleNavigation("/donate")}
          >
            Donate us
          </h1>
        </div>
      )}
    </main>
  );
}
