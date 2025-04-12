import Image from "next/image";
import banner from "@/public/assets/photos/20.jpeg";
import Link from "next/link";

export default function Main() {
  return (
    <div className="flex justify-center items-center bg-white gap-x-4 p-4">
      <div className="w-2/3 flex flex-col justify-center items-center gap-y-4">
        <picture className="w-full flex justify-center items-center">
          <Image src={banner} alt="main road" width="100%" height="auto" />
        </picture>
        <div className="flex flex-col justify-start gap-y-6 p-4">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-[#024685] font-semibold text-lg lg:font-bold lg:text-3xl "
          >
            Founder & Owner, Faruk & Associates (1997 - Present) Faruk &
            Associates
          </h1>
          <p className="flex justify-start gap-x-1 lg:gap-x-2">
            <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
            <span className="text-[#454545] text-sm">15 April 2024</span>
            <span className="text-[#727272] text-sm opacity-60">by-</span>
            <span className="text-[#454545] text-sm">Doland Due</span>
          </p>
          <Link href="/">
            <p
              style={{ fontFamily: "arial, sans-serif" }}
              className="leading-6 text-sm text-[#454545] border-b border-slate-400 pb-16 lg:text-md lg:leading-7 "
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
      </div>
    </div>
  );
}
