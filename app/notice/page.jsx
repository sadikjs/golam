import Footer from "@/components/footer";
import MainNav from "@/components/main-nav";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { X } from "lucide-react";
import notice from "@/public/assets/notice/notice.jpeg";
import secondLogo from "@/public/assets/logoSecond.jpeg";
import Image from "next/image";
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
export default function NoticePage() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-gradient-to-r from-sky-500 via-indigo-500  to-blue-600">
      <MainNav socials={socials} items={items} secondLogo={secondLogo} />
      <div className="w-4/5 flex justify-center items-center bg-white p-4">
        <Image
          src={notice}
          width="100%"
          height="auto"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          alt="notice board"
        />
      </div>
      <Footer />
    </div>
  );
}
