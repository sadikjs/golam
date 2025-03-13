"use client";
import logo from "@/public/assets/whitelogo.png";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import MobileMenu from "./mobile-menu";

const inter = Inter({ subsets: ["latin"] });

export default function MainNav({ items, socials, children }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header className="w-full sticky top-0 flex bg-[#f9ba35] backdrop-blur-sm justify-center items-center py-2 top:0 left:0 ">
      <div className="w-4/5 max-h-10  flex flex-row gap-4 justify-between items-center">
        <Link className="bg-[#41adcb] p-0.5 rounded-sm text-white" href="/">
          <Image src={logo} width={60} height={60} alt="logo" />
        </Link>
        <div className="w-full hidden lg:flex lg: flex-row lg:justify-between ">
          {items ? (
            <nav className="flex flex-row justify-center items-center gap-2">
              {items.map((item, index) => (
                <Link
                  className={`text-lg ${inter.className}`}
                  key={index}
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
          {socials ? (
            <nav className="flex flex-row justify-between items-center gap-2">
              {socials.map((social, index) => (
                <Link
                  className="bg-[#41adcb] rounded-sm p-0.5 text-white text-2xl"
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
          {showMobileMenu ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
