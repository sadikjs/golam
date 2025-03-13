import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import logoThree from "@/public/assets/LionLogoTwo.png";
import profilePicture from "@/public/assets/Farukh-removebg.png";
import style from "@/styles/hero-section.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function HeroSection() {
  return (
    <div
      className={`${inter.className} w-full h-32 lg:h-44 flex flex-row justify-center text-white items-center bg-[#41adcb] gap-4 m-0 p-0`}
    >
      <div className={`${style.container} relative -top-23 lg:-top-30 z-10`}>
        <Link href="/">
          <Image
            className={style.image}
            src={profilePicture}
            alt="profile picture"
            width={300}
            height={350}
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
        </Link>
        <div className={`${style.middle} flex flex-row gap-2 text-sm `}>
          <div className={`${style.text} rounded-md`}>
            <Link className="w-20 inline-block" href="/">
              Lions Int.
            </Link>
          </div>
          <div className={`${style.text} rounded-md inline-block`}>
            <Link className="w-24 inline-block" href="/">
              Golam Faruk
            </Link>
          </div>
        </div>
      </div>
      <div className="w-4/5 grid grid-cols-3 lg:grid-cols-4">
        <div className="hidden lg:grid"></div>
        <div className="col-span-2 lg:col-span-2 ">
          <h1 className="text-lg pt-2 lg:text-2xl lg:py-1.5">
            A K M Golam Faruk
          </h1>
          <h3 className={`w-56 text-sm lg:text-lg lg:w-96`}>
            1<sup>st</sup> Vice DISTRICT GOVERNOR 2024-2025
          </h3>
          <p className="text-sm lg:text-md">District 315 A1, Bangladesh</p>
          <p className="text-sm lg: text-md">Lions International</p>
        </div>
        <div className="col-span-1 float-start">
          <Link href="/">
            <Image src={logoThree} width={120} height={110} alt="logo three" />
          </Link>
        </div>
      </div>
    </div>
  );
}
