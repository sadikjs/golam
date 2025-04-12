import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ChevronRight } from "lucide-react";
export default function Archived() {
  return (
    <div className="flex flex-col justify-center items-center">
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
    </div>
  );
}
