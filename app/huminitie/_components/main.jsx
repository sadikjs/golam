import Image from "next/image";
import banner from "@/public/assets/career/242.jpeg";
import Link from "next/link";
export default function Main() {
  return (
    <div className="flex justify-center items-center pt-10 bg-gradient-to-r from-sky-400 to-blue-500">
      <div className="w-2/3 flex  flex-col lg:flex-row justify-start items-start gap-y-2 lg:gap-x-6">
        <picture className="w-1/3 flex justify-start items-start">
          <Image
            className="rounded-full ring-4 ring-green-500 border-4 border-red-700"
            src={banner}
            alt="main road"
            width="300"
            height="300"
          />
        </picture>
        <div className="w-2/3 flex flex-col justify-start gap-y-2">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-[#024685] font-semibold text-lg text-white lg:font-bold lg:text-xl "
          >
            Founder & Owner, Faruk & Associates (1997 - Present) Faruk &
            Associates
          </h1>
          <p className="flex justify-start gap-x-1 text-white lg:gap-x-2">
            <span className="text-sm opacity-60">posted-</span>{" "}
            <span className="text-sm">15 April 2024</span>
            <span className="text-sm opacity-60">by-</span>
            <span className="text-sm">Doland Due</span>
          </p>
          <Link href="/">
            <p
              style={{ fontFamily: "arial, sans-serif" }}
              className="leading-6 text-sm text-[#454545] border-b text-white border-slate-400 pb-16 lg:text-md lg:leading-7 "
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
