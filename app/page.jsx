import Link from "next/link";
import { Roboto } from "next/font/google";
import { Inter } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
export default function HomePage() {
  return (
    <div className="flex flex-row justify-center items-center">
      <Link
        style={{ textShadow: "1px 1px 2px #000000" }}
        className={`${inter.className} text-white text-5xl`}
        href="/"
      >
        WE SERVE
      </Link>
    </div>
  );
}
