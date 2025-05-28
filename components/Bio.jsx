import Image from "next/image";
import { Roboto } from "next/font/google";
import photos from "@/public/assets/photos/main_golam.png";
import Link from "next/link";
import style from "@/styles/hero-section.module.css";
import logo from "@/public/assets/wave/logo.png";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
//c13343
export default function Bio() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-around items-center bg-gradient-to-r from-[#f4f4f4] via-[#f1f5fa] to-[#f8f8f8] gap-y-8 lg:gap-x-4">
      <div className="w-1/2 flex flex-col justify-end items-center gap-x-4 ">
        <Image
          className="pb-4"
          src={logo}
          width="240"
          height="auto"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33px"
          alt="logo profile page"
        />
        <div className="flex flex-col justify-center items-center gap-y-1 pb-4">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="w-full text-sm lg:text-xl text-center "
          >
            A K M GOLAM FARUK
          </h1>
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm lg:text-xl text-center"
          >
            DISTRICT GOVERNOR <span className="text-xs">(2025-2026)</span>
          </h1>
          <p
            className="text-xs lg:text-sm"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            District 315 A1, Bangladesh
          </p>
          <p
            className="text-xs lg:text-sm"
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
            Humanitarian
          </Link>
          <Link
            href="/professional"
            style={{ fontFamily: "verdana, sans-serif" }}
            className={`${style.animation} bg-gradient-to-r from-amber-300 to-yellow-500 px-3 py-1`}
          >
            Professional
          </Link>
        </div>
      </div>
      <picture
        style={{ boxShadow: "-2px 0px 2px #dddddd" }}
        className="w-full lg:w-1/2 flex justify-start items-center bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-700"
      >
        <Image
          src={photos}
          alt="profile picture"
          width="100%"
          height="auto"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33px"
        />
      </picture>
    </div>
  );
}
