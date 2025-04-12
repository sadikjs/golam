import MainNav from "@/components/main-nav";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { X } from "lucide-react";
import Footer from "@/components/footer";
import Sidebar from "./_components/side-bar";

const items = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "News",
    href: "/news",
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

export default function HuminitiesLayout({ lifesketch }) {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <Sidebar />
      <MainNav socials={socials} items={items} />
      <div className="w-full flex flex-col justify-center items-center pl-20">
        {lifesketch}
      </div>
      <Footer />
    </div>
  );
}
