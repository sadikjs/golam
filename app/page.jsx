import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className=" w-screen h-screen flex flex-row justify-center items-center bg-[url(../public/assets/wave/bg1.png)] bg-center bg-no-repeat bg-cover">
      <Link
        href="/profile"
        style={{ textShadow: "1px 1px 2px #000000" }}
        className={`${inter.className} text-white  text-3xl lg:text-7xl`}
      >
        WE SERVE
      </Link>
    </div>
  );
}
