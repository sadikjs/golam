"use client"
import MainNav from "@/components/main-nav";
import { Facebook } from "lucide-react";
import SidebarMenuHide from "./_components/sidebarMenuHide";
import { Linkedin } from "lucide-react";
import { X } from "lucide-react";
import Footer from "@/components/footer";
import Sidebar from "./_components/side-bar";
import { useState } from "react";

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "News",
    href: "https://www.itvbd.com/economy/corporate/219727/%E0%A6%B2%E0%A6%BE%E0%A7%9F%E0%A6%A8%E0%A7%8D%E0%A6%B8-%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE-%E0%A7%A9%E0%A7%A7%E0%A7%AB%E0%A6%8F%E0%A7%A7-%E0%A6%8F%E0%A6%B0-%E0%A6%97%E0%A6%AD%E0%A6%B0%E0%A7%8D%E0%A6%A8%E0%A6%B0-%E0%A6%B9%E0%A6%B2%E0%A7%87%E0%A6%A8-%E0%A6%B2%E0%A6%BE%E0%A6%AF%E0%A6%BC%E0%A6%A8-%E0%A6%8F.%E0%A6%95%E0%A7%87.%E0%A6%8F%E0%A6%AE",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Notice",
    href: "/notice",
  },
];

const socials = [
  {
    title: <Facebook />,
    href: "https://www.facebook.com",
  },
  {
    title: <X />,
    href: "https://x.com/?lang=en",
  },
  {
    title: <Linkedin />,
    href: "https://www.linkedin.com/",
  },
];

export default function HuminitiesLayout({children}) {
  const [select, setSelect] = useState(false); 

  return (
    <div className="w-full flex flex-col justify-start items-start">
        {
          select ? <Sidebar select={select} setSelect={setSelect} /> : <SidebarMenuHide select={select} setSelect={setSelect} />}
          <MainNav socials={socials} items={items} />
      <div className="w-full flex flex-col justify-center items-center pl-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}
