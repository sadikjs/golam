import Image from "next/image";
import Link from "next/link";
import TrendingImage from "@/public/assets/wave/RecentOne.jpg";
import TrendingTwo from "@/public/assets/wave/Trending-2.jpg";
import TrendingThree from "@/public/assets/wave/Trending-3.jpg";

export default function RecentPost() {
  return (
    <div className="flex flex-col justify-start items-start gap-y-2">
      <h1 className="text-[#024685] font-bold text-3xl p-4">Recent Post</h1>
      <div className="flex flex-row justify-start items-start gap-x-4 p-4">
        <picture className="py-2">
          <Image
            src={TrendingImage}
            alt="main road"
            width="550"
            height="auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </picture>
        <div className="flex flex-col justify-start gap-y-2">
          <p className="flex justify-start gap-x-1">
            <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
            <span className="text-[#454545] text-sm">15 April 2024</span>
            <span className="text-[#727272] text-sm opacity-60">by-</span>
            <span className="text-[#454545] text-sm">Doland Due</span>
          </p>
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className=" leading-6 text-[#024685] font-semibold  text-md lg:font-medium lg:text-xl "
          >
            Founder & Owner, Faruk & Associates (1997 - Present) Faruk &
            Associates
          </h1>
          <Link href="/">
            <p
              style={{ fontFamily: "arial, sans-serif" }}
              className="leading-6 text-sm text-[#454545]"
            >
              is an income-tax and Company Law consultancy firm. The firm
              provides both standardized and tailored services Clients include
              both local and international groups [...]
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-start items-start gap-x-4 p-4">
        <picture className="py-2">
          <Image
            src={TrendingTwo}
            alt="main road"
            width="550"
            height="auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </picture>
        <div className="flex flex-col justify-start gap-y-2">
          <p className="flex justify-start gap-x-1">
            <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
            <span className="text-[#454545] text-sm">15 April 2024</span>
            <span className="text-[#727272] text-sm opacity-60">by-</span>
            <span className="text-[#454545] text-sm">Doland Due</span>
          </p>
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className=" leading-6 text-[#024685] font-semibold  text-md lg:font-medium lg:text-xl "
          >
            Founder & Owner, Faruk & Associates (1997 - Present) Faruk &
            Associates
          </h1>
          <Link href="/">
            <p
              style={{ fontFamily: "arial, sans-serif" }}
              className="leading-6 text-sm text-[#454545]"
            >
              is an income-tax and Company Law consultancy firm. The firm
              provides both standardized and tailored services Clients include
              both local and international groups [...]
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-start items-start gap-x-4 p-4">
        <picture className="py-2">
          <Image
            src={TrendingThree}
            alt="main road"
            width="550"
            height="auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </picture>
        <div className="flex flex-col justify-start gap-y-2">
          <p className="flex justify-start gap-x-1">
            <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
            <span className="text-[#454545] text-sm">15 April 2024</span>
            <span className="text-[#727272] text-sm opacity-60">by-</span>
            <span className="text-[#454545] text-sm">Doland Due</span>
          </p>
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className=" leading-6 text-[#024685] font-semibold  text-md lg:font-medium lg:text-xl "
          >
            Founder & Owner, Faruk & Associates (1997 - Present) Faruk &
            Associates
          </h1>
          <Link href="/">
            <p
              style={{ fontFamily: "arial, sans-serif" }}
              className="leading-6 text-sm text-[#454545]"
            >
              is an income-tax and Company Law consultancy firm. The firm
              provides both standardized and tailored services Clients include
              both local and international groups [...]
            </p>
          </Link>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center bg-[#024685] p-2 rounded-sm">
        <button
          type="submit"
          style={{ fontFamily: "arial, sans-serif" }}
          className="text-white text-center m-auto"
        >
          View All Post
        </button>
      </div>
    </div>
  );
}
