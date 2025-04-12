import Image from "next/image";
import { Roboto } from "next/font/google";
import faruk from "@/public/assets/wave/golam.png";
import Link from "next/link";
import style from "@/styles/hero-section.module.css";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
import { ChevronRight } from "lucide-react";
//c13343
export default function Bio() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-4/5 bg-[#f1f5fa] flex flex-col justify-center items-center gap-y-4 shadow-inner shadow-gray-300 pb-10">
        <picture className="w-full flex flex-col justify-end items-center bg-[#f1f5fa]">
          <Image
            src={faruk}
            alt="profile picture"
            width="100%"
            height="auto"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33px"
          />
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="w-full text-[#f1f5fa] bg-[#122e43] text-xl lg:text-3xl p-6 text-center"
          >
            District Governor 2024-2025
          </h1>
          <div className=" w-full flex justify-center items-center gap-x-4 bg-[#122e43] pb-8">
            <Link
              href="/huminitie"
              style={{ fontFamily: "verdana, sans-serif" }}
              className={`${style.animation} bg-gradient-to-r from-[#f8f8f8] to-[#ddd] hover:from-[#ddd] hover:to-[#f8f8f8] px-4 py-2.5`}
            >
              Humanitatian
            </Link>
            <Link
              href="/huminitie"
              style={{ fontFamily: "verdana, sans-serif" }}
              className={`${style.animation} bg-gradient-to-r from-[#f8f8f8] to-[#ddd] hover:from-[#ddd] hover:to-[#f8f8f8] px-4 py-2.5`}
            >
              Professional
            </Link>
          </div>
        </picture>
      </div>
    </div>
  );
}
