import Image from "next/image";
import Link from "next/link";
import TrendingImage from "@/public/assets/career/25.jpeg";
import TrendingTwo from "@/public/assets/career/23.jpeg";
import TrendingThree from "@/public/assets/career/24.jpeg";
export default function Career() {
  return (
    <div
      style={{ marginBottom: "20px" }}
      className="w-full flex flex-col justify-center items-center gap-y-2"
    >
      <div className="w-4/5 flex flex-col justify-center items-center gap-y-2">
        <h1 className="font-bold text-2xl text-[#024685] border-b-2 border-[#fac236] pt-8">
          Career Summary
        </h1>
        <div className="flex flex-col justify-center items-center gap-y-4 lg:flex-row lg:gap-x-4 p-4 pt-8">
          <picture className="w-2/3 lg:w-1/3 flex flex-row justify-end items-end py-2">
            <Image
              className="shadow-sm"
              src={TrendingImage}
              alt="main road"
              width="200"
              height="200"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </picture>
          <div className="w-full lg:w-2/3 flex flex-col justify-center items-center gap-y-2 lg:justify-start lg:items-start">
            <p className="flex justify-start gap-x-1">Club Secretary</p>
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className=" leading-6 text-[#024685] font-semibold  text-md lg:font-medium lg:text-xl "
            >
              Lions International
            </h1>
            <Link href="/">
              <p
                style={{ fontFamily: "arial, sans-serif" }}
                className="text-justify lg:text-left leading-6 text-sm text-[#454545]"
              >
                is an income-tax and Company Law consultancy firm. The firm
                provides both standardized and tailored services Clients include
                both local and international groups [...]
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4 lg:flex-row lg:gap-x-4 p-4">
          <picture className="w-2/3 lg:w-1/3 flex flex-row justify-end items-end py-2">
            <Image
              className="border border-slate-200 p-1 shadow-sm"
              src={TrendingTwo}
              alt="main road"
              width="200"
              height="200"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </picture>
          <div className="w-full lg:w-2/3 flex flex-col justify-center items-center gap-y-2 lg:justify-start lg:items-start">
            <p className="flex justify-start gap-x-1">Club Secretary</p>
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className=" leading-6 text-[#024685] font-semibold  text-md lg:font-medium lg:text-xl "
            >
              Lions International
            </h1>
            <Link href="/">
              <p
                style={{ fontFamily: "arial, sans-serif" }}
                className="leading-6 text-justify lg:text-left text-sm text-[#454545]"
              >
                is an income-tax and Company Law consultancy firm. The firm
                provides both standardized and tailored services Clients include
                both local and international groups [...]
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4 lg:flex-row lg:gap-x-4 p-4">
          <picture className="w-2/3 lg:w-1/3 flex flex-row justify-end items-end py-2">
            <Image
              className="border border-slate-200 p-1 shadow-sm"
              src={TrendingThree}
              alt="main road"
              width="200"
              height="200"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </picture>
          <div className="w-full lg:w-2/3 flex flex-col justify-center items-center gap-y-2 lg:justify-start lg:items-start">
            <p className="flex justify-start gap-x-1">Club Secretary</p>
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className=" leading-6 text-[#024685] font-semibold  text-md lg:font-medium lg:text-xl "
            >
              Lions International
            </h1>
            <Link href="/">
              <p
                style={{ fontFamily: "arial, sans-serif" }}
                className="leading-6 text-justify lg:text-left text-sm text-[#454545]"
              >
                is an income-tax and Company Law consultancy firm. The firm
                provides both standardized and tailored services Clients include
                both local and international groups [...]
              </p>
            </Link>
          </div>
        </div>
        <button className="w-1/2 cursor-pointer bg-[#f1b432] rounded-sm p-2">All Post</button>
      </div>
    </div>
  );
}
