import MainNav from "@/components/main-nav";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { X } from "lucide-react";
import { Youtube } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["200", "100", "300", "400"],
  subsets: ["latin"],
});
const navlinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Gellary",
    href: "/gellary",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
const socials = [
  {
    title: <Instagram />,
    href: "https://www.instagram.com",
  },
  {
    title: <Facebook />,
    href: "https://www.facebook.com",
  },
  {
    title: <X />,
    href: "https://x.com/?lang=en",
  },
  //   {
  //     title: <FaWhatsapp />,
  //     href: "https://web.whatsapp.com/",
  //   },
  {
    title: <Youtube />,
    href: "https://www.youtube.com",
  },
];
export default function GolamLayout({ children }) {
  return (
    <div className={`w-screen h-screen flex flex-col ${roboto.className}`}>
      <MainNav items={navlinks} socials={socials} />
      {children}
    </div>
  );
}
