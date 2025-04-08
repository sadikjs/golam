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
    <div className="justify-center items-center">
      <div className="grid justify-center items-center gap-y-4 pt-4 lg:pt-0 lg:grid-cols-2">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="w-4/5 flex flex-col justify-start items-start">
            <h1
              style={{ fontFamily: "verdana, sans-serif" }}
              className={`text-[#0070cd] text-lg font-semibold border-b-2 border-slate-[#0070cd]`}
            >
              ABOUT ME
            </h1>
            <p
              style={{ fontFamily: "verdana, sans-serif" }}
              className="text-[#14213e] text-4xl font-bold py-6 "
            >
              AKM GOLAM FARUK
            </p>
            <p
              style={{ fontFamily: "times new roman, serif" }}
              className={`leading-7 text-md`}
            >
              With 25 years of experience in the financial reporting industry
              and 15 years of experience in income tax consultancy, AKM Golam
              Faruk is an income tax and Company law consultant. He joined Lions
              District 315A, Bangladesh in the year 2003 and has since been
              involved in many philanthropic activities. During his time in
              lionism, he has contributed in multiple roles including Secretary,
              Council Treasurer, Secretary,
            </p>
            <div className="flex justify-center items-center gap-x-2 pt-4">
              <Link
                href="/huminitie"
                style={{ fontFamily: "verdana, sans-serif" }}
                className={`${style.animation} flex justify-between bg-[#0070cd] p-1 text-sm text-white gap-x-1`}
              >
                Professional
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/huminitie"
                style={{ fontFamily: "verdana, sans-serif" }}
                className={`${style.animation} flex justify-between bg-[#0070cd] text-sm p-1 text-white gap-x-1`}
              >
                Humanitatian
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        <picture className="flex flex-col justify-end items-center bg-[#f1f5fa] shadow-inner shadow-gray-300">
          <Image
            src={faruk}
            alt="profile picture"
            max-width="100%"
            height="auto"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33px"
          />
        </picture>
      </div>
    </div>
  );
}
