import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import logo from "@/public/assets/LionLogoTwo.png";
export default function HomePage() {
  return (
    <div className="w-screen h-screen flex flex-col gap-y-6 justify-center items-center bg-[url(../public/assets/wave/bg1.png)] bg-center bg-no-repeat bg-cover">
      <Link
        href="/profile"
        style={{ textShadow: "1px 1px 2px #000000" }}
        className={`${inter.className} text-white  text-xl lg:text-5xl`}
      >
        WE SERVE
      </Link>
      <Link href="/profile">
        <Image
          src={logo}
          alt="home page logo"
          width="120"
          height="120"
          sizes="(max-width:768px) 100vw, (max-width: 1200px 50vw, 33vw"
        />
      </Link>
    </div>
  );
}
