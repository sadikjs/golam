import Image from "next/image";
import { Roboto } from "next/font/google";
import faruk from "@/public/assets/wave/golam.png";
import Link from "next/link";
import style from "@/styles/hero-section.module.css";
import logo from "@/public/assets/wave/logo.png";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
import { ChevronRight } from "lucide-react";
//c13343
export default function Bio() {
  return (
    <div className="w-full flex flex-row justify-between items-center bg-gradient-to-r from-sky-400 via-indigo-500 to-blue-600 gap-x-4">
      <picture className="w-1/2 flex justify-start items-center">
        <Image
          src={faruk}
          alt="profile picture"
          width="100%"
          height="auto"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33px"
        />
      </picture>
      <div className="w-1/2 flex flex-col justify-start items-start gap-x-4 ">
        <Image
          className="pb-4"
          src={logo}
          width="270"
          height="auto"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33px"
          alt="logo profile page"
        />
        <div className="flex flex-col justify-center items-center gap-y-1 pb-4">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="w-full text-xl text-center text-white"
          >
            A K M GOLAM FARUK
          </h1>
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-xl text-center  text-white"
          >
            DISTRICT GOVERNOR <span className="text-xs">(2025-2026)</span>
          </h1>
          <p
            className=" text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            District 315 A1, Bangladesh
          </p>
          <p
            className=" text-white"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Lions Internationals
          </p>
        </div>
        <div className="flex flex-row justify-start gap-x-4">
          <Link
            href="/huminitie"
            style={{ fontFamily: "verdana, sans-serif" }}
            className={`${style.animation} bg-gradient-to-r from-amber-300 to-yellow-500 px-3 py-1`}
          >
            Humanitatian
          </Link>
          <Link
            href="/huminitie"
            style={{ fontFamily: "verdana, sans-serif" }}
            className={`${style.animation} bg-gradient-to-r from-amber-300 to-yellow-500 px-3 py-1`}
          >
            Professional
          </Link>
        </div>
      </div>
    </div>
  );
}
