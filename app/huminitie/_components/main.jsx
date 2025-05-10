import Image from "next/image";
import banner from "@/public/assets/career/25.jpeg";
import profile from "@/public/assets/career/23.jpeg";
import Link from "next/link";
export default function Main() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gradient-to-r from-[#e7e5eb] to-[#e7e6e8]">
      <h1 className="font-bold text-2xl text-[#024685] border-b-2 border-[#fac236]">
        Life Skatch
      </h1>
      <div className="w-2/3 flex flex-col justify-center items-center lg:flex-row  lg:justify-start lg:items-start pt-6 gap-y-2 lg:gap-x-6">
        <picture className="w-1/3 flex justify-center items-center lg:justify-start lg:items-start">
          <Image
            className="rounded-full ring-2 ring-green-700"
            src={banner}
            alt="main road"
            width="200"
            height="200"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
        </picture>
        <div className="w-2/3 flex flex-col justify-start items-start gap-y-2">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-[#024685] font-semibold text-lg lg:font-bold lg:text-xl"
          >
            Founder & Owner, Faruk & Associates
          </h1>
          <p className="flex justify-start gap-x-1 lg:gap-x-2">
            <span className="text-[9px] lg:text-sm">posted-</span>{" "}
            <span className="text-[9px] lg:text-sm">15 April 2024</span>
            <span className="text-[9px] lg:text-sm">by-</span>
            <span className="text-[9px] lg:text-sm">Doland Due</span>
          </p>
          <Link href="/">
            <p
              style={{ fontFamily: "arial, sans-serif" }}
              className="leading-6 text-justify lg:text-left text-sm pb-16 lg:text-md lg:leading-7 "
            >
              is an income-tax and Company Law consultancy firm. The firm
              provides both standardized and tailored services to both
              individual and corporate clients. Clients include both local and
              international groups of companies and individual clients, notably
              Bengal Group of Companies, Golden Harvest Group of Companies, Saif
              Powertec, Unique Group of Companies, Shanta Group of Companies,
              and Navana Pharmaceuticals{" "}
              <span className="underline text-black">[more]</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="w-2/3 flex  flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start gap-y-2 lg:gap-x-6">
        <picture className="w-1/3 flex justify-center items-center lg:justify-start lg:items-start">
          <Image
            className="rounded-full ring-2 ring-green-700"
            src={profile}
            alt="main road"
            width="200"
            height="200"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
        </picture>
        <div className="w-2/3 flex flex-col justify-start gap-y-2">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-[#024685] font-semibold text-lg lg:font-bold lg:text-xl "
          >
            Founder & Owner, Faruk & Associates
          </h1>
          <p className="flex justify-start gap-x-1 lg:gap-x-2">
            <span className="text-[9px] lg:text-sm">posted-</span>{" "}
            <span className="text-[9px] lg:text-sm">15 April 2024</span>
            <span className="text-[9px] lg:text-sm">by-</span>
            <span className="text-[9px] lg:text-sm">Doland Due</span>
          </p>
          <Link href="/">
            <p
              style={{ fontFamily: "arial, sans-serif" }}
              className="leading-6 text-sm text-justify lg:text-left border-b border-slate-400 pb-16 lg:text-md lg:leading-7 "
            >
              is an income-tax and Company Law consultancy firm. The firm
              provides both standardized and tailored services to both
              individual and corporate clients. Clients include both local and
              international groups of companies and individual clients, notably
              Bengal Group of Companies, Golden Harvest Group of Companies, Saif
              Powertec, Unique Group of Companies, Shanta Group of Companies,
              and Navana Pharmaceuticals{" "}
              <span className="underline text-black">[more]</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
