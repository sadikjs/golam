import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { X } from "lucide-react";
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

export default function ArchivedLayout({ children }) {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <MainNav socials={socials} items={items} />
      <div className="w-4/5 flex justify-center items-center">{children}</div>
      <Footer />
    </div>
  );
}
