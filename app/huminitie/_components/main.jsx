import Image from "next/image";
import mainRoad from "@/public/assets/wave/mainImage.jpg";
import work from "@/public/assets/wave/GoodWork.webp";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search } from "lucide-react";
import Link from "next/link";
import TrendingPage from "./trending-section";
import RecentPost from "./recent-post";
import RelatedPost from "./related-post";

export default function Main() {
  return (
    <div className="flex justify-center items-start bg-white gap-x-4 p-4">
      <div className="w-2/3 flex flex-col justify-center items-center gap-y-4">
        <picture>
          <Image src={work} alt="main road" width="100%" height="auto" />
        </picture>
        <div className="flex flex-col justify-start gap-y-6 p-4">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-[#024685] font-semibold text-xl lg:font-bold lg:text-3xl "
          >
            Founder & Owner, Faruk & Associates (1997 - Present) Faruk &
            Associates
          </h1>
          <p className="flex justify-start gap-x-2">
            <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
            <span className="text-[#454545] text-sm">15 April 2024</span>
            <span className="text-[#727272] text-sm opacity-60">by-</span>
            <span className="text-[#454545] text-sm">Doland Due</span>
          </p>
          <Link href="/">
            <p
              style={{ fontFamily: "arial, sans-serif" }}
              className="leading-7 text-md text-[#454545] border-b border-slate-400 pb-16"
            >
              is an income-tax and Company Law consultancy firm. The firm
              provides both standardized and tailored services to both
              individual and corporate clients. Clients include both local and
              international groups of companies and individual clients, notably
              Bengal Group of Companies, Golden Harvest Group of Companies, Saif
              Powertec, Unique Group of Companies, Shanta Group of Companies,
              and Navana Pharmaceuticals [...]
            </p>
          </Link>
        </div>
        <TrendingPage />
        <RecentPost />
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center gap-4">
        <div className="w-full relative flex flex-col justify-center items-center bg-[#f4f4f4] p-8">
          <Input
            className="p-5 bg-white text-right"
            type="text"
            placeholder="search..."
          />
          <Search className="absolute top-50% left-10 text-slate-400" />
        </div>
        <div className="w-full flex  flex-col justify-center items-center bg-[#f4f4f4] p-4">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-[#024685] font-bold text-2xl text-left py-3"
          >
            Archive Posts
          </h1>
          <ul className="flex flex-col justify-start items-start gap-y-4 divide-y divide-slate-300">
            <li
              style={{ fontFamily: "arial, sans-serif" }}
              className="flex justify-start items-center text-md text-[#454545]  pb-4 gap-x-2"
            >
              <ChevronRight className="w-4 h-4" />
              <p>January 2019</p>
            </li>
            <li
              style={{ fontFamily: "arial, sans-serif" }}
              className="flex justify-start items-center text-md text-[#454545]  pb-4 gap-x-2"
            >
              <ChevronRight className="w-4 h-4" />
              <p>February 2019</p>
            </li>
            <li
              style={{ fontFamily: "arial, sans-serif" }}
              className="flex justify-start items-center text-md text-[#454545]  pb-4 gap-x-2"
            >
              <ChevronRight className="w-4 h-4" />
              <p>March 2019</p>
            </li>
            <li
              style={{ fontFamily: "arial, sans-serif" }}
              className="flex justify-start items-center text-md  text-[#454545]  pb-4 gap-x-2"
            >
              <ChevronRight className="w-4 h-4" />
              <p>April 2019</p>
            </li>
            <li
              style={{ fontFamily: "arial, sans-serif" }}
              className="flex justify-start items-center text-md  text-[#454545]  pb-4 gap-x-2"
            >
              <ChevronRight className="w-4 h-4" />
              <p>May 2019</p>
            </li>
            <li
              style={{ fontFamily: "arial, sans-serif" }}
              className="flex justify-start items-center text-md  text-[#454545]  pb-4 gap-x-2"
            >
              <ChevronRight className="w-4 h-4" />
              <p>June 2019</p>
            </li>
            <li
              style={{ fontFamily: "arial, sans-serif" }}
              className="flex justify-start items-center text-md  text-[#454545]  pb-4 gap-x-2"
            >
              <ChevronRight className="w-4 h-4" />
              <p>July 2019</p>
            </li>
            <li
              style={{ fontFamily: "arial, sans-serif" }}
              className="flex justify-start items-center text-md  text-[#454545]  pb-4 gap-x-2"
            >
              <ChevronRight className="w-4 h-4" />
              <p>August 2019</p>
            </li>
            <li
              style={{ fontFamily: "arial, sans-serif" }}
              className="flex justify-start items-center text-md text-[#454545]  pb-4 gap-x-2"
            >
              <ChevronRight className="w-4 h-4" />
              <p>September 2019</p>
            </li>
            <li
              style={{ fontFamily: "arial, sans-serif" }}
              className="flex justify-start items-center text-md text-[#454545]  pb-4 gap-x-2"
            >
              <ChevronRight className="w-4 h-4" />
              <p>Octobor 2019</p>
            </li>
            <li
              style={{ fontFamily: "arial, sans-serif" }}
              className="flex justify-start items-center text-md text-[#454545]  pb-4 gap-x-2"
            >
              <ChevronRight className="w-4 h-4" />
              <p>November 2019</p>
            </li>
            <li
              style={{ fontFamily: "arial, sans-serif" }}
              className="flex justify-start items-center text-md text-[#454545]  pb-4 gap-x-2"
            >
              <ChevronRight className="w-4 h-4" />
              <p>December 2019</p>
            </li>
          </ul>
        </div>
        <RelatedPost />
      </div>
    </div>
  );
}
