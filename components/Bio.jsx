import Image from "next/image";
import { Inter } from "next/font/google";
import style from "@/styles/image.module.css";
import { Roboto } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import faruk from "@/public/assets/wave/golam.png";
import Link from "next/link";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
export default function Bio() {
  return (
    <div className="w-full h-[450px] relative flex flex-col bg-[#00264a] justify-center items-center gap-4 lg:gap-6 pt-4 lg:h-[450px] lg:grid lg:grid-cols-2">
      <div className=" flex flex-col justify-center items-center">
        <div className="relative w-40 h-40 lg:w-96 lg:h-96 bg-[#c13343] border rounded-full"></div>
        <div
          className={`${style.container} flex flex-col justify-center items-center`}
        >
          <Image
            className={`${style.image} absolute bottom-55 lg:bottom-0`}
            src={faruk}
            alt="profile picture"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ width: "25%", height: "auto" }}
          />
          <div
            className={`${style.middle} flex flex-row jsutify-center items-center gap-2`}
          >
            <div
              className={`${style.text} text-md border p-1 lg:p-3 border-[#1672b6] rounded-sm lg:text-xl`}
            >
              <Link href="/">Professional</Link>
            </div>
            <div
              className={`${style.text} text-md border p-1 lg:p-3 border-[#1672b6] rounded-sm lg:text-xl`}
            >
              <Link href="/">Humanitatian</Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${roboto.className} w-2/3 flex flex-col jusity-start items-center pt-16 lg:pt-0`}
      >
        <h1 className="text-white text-xl lg:text-3xl pb-6 tracking-wide">
          ” Somewhere inside all of us is the power to{" "}
          <span className="text-[#c13343]">change</span> the world.
        </h1>
        <div className="flex">
          <p className={`${inter.className} text-white text-sm`}>
            A K M GOLAM FARUK
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
