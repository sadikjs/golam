"use client";
import logo from "@/public/assets/wave/logo.png";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import MobileMenu from "./mobile-menu";

const inter = Inter({ subsets: ["latin"] });

export default function MainNav({ items, socials, secondLogo }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header
      className={`${inter.className} w-full flex bg-[#102e57] backdrop-blur-sm justify-center items-center py-2`}
    >
      <div className="w-4/5 max-h-10  flex flex-row gap-4 justify-between items-center">
        <Link className="bg-white p-0.5 rounded-sm text-white" href="/">
          <Image src={logo} width={80} height={80} alt="logo" />
        </Link>
        <div className="w-full hidden lg:flex lg:flex-row lg:justify-between ">
          {items ? (
            <nav
              style={{ fontFamily: "times new roman, serif" }}
              className="flex flex-row text-lg justify-center items-center gap-2 text-white"
            >
              {items.map((item, index) => (
                <Link key={index} href={item.href}>
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
          {socials ? (
            <nav className="flex flex-row justify-between items-center gap-2">
              {socials.map((social, index) => (
                <Link
                  className="bg-[#0070cd] rounded-sm p-0.5 text-white text-2xl"
                  key={index}
                  href={social.href}
                >
                  {social.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
        {showMobileMenu && items && socials && (
          <MobileMenu items={items} socials={socials}></MobileMenu>
        )}
        <button
          className="flex items-center lg:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>
    </header>
  );
}
