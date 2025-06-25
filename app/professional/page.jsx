import Professional from "./_components/Professional";
import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { X } from "lucide-react";
import secondLogo from "@/public/assets/logoSecond.jpeg";
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
export default function ProfessionalPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <MainNav socials={socials} items={items} secondLogo={secondLogo} />
      <Professional />
      <Footer />
    </div>
  );
}
