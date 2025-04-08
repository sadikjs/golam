import Image from "next/image";
import Link from "next/link";
import TrendingImage from "@/public/assets/wave/RecentOne.jpg";
import TrendingTwo from "@/public/assets/wave/Trending-2.jpg";
import TrendingThree from "@/public/assets/wave/Trending-3.jpg";

export default function RelatedPost() {
  return (
    <div className="flex flex-col justify-start items-start gap-y-2 bg-[#f4f4f4]">
      <h1 className="text-[#024685] font-bold text-xl p-4">Related Post</h1>
      <div className="w-full flex flex-row justify-start items-start gap-x-4 p-4">
        <picture className="w-1/2">
          <Image
            src={TrendingImage}
            alt="main road"
            width="250"
            height="auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </picture>
        <div className="w-1/2 flex flex-col justify-start gap-y-2">
          <Link href="/">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className=" leading-6 text-[#024685] font-medium  text-md lg:font-medium lg:text-md "
            >
              Founder & Owner Associates
            </h1>
          </Link>
          <p className="flex justify-start gap-x-1">
            <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
            <span className="text-[#454545] text-sm">April 2024</span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-start items-start gap-x-4 p-4">
        <picture className="w-1/2">
          <Image
            src={TrendingTwo}
            alt="main road"
            width="250"
            height="auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </picture>
        <div className=" w-1/2 flex flex-col justify-start gap-y-2">
          <Link href="/">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className=" leading-6 text-[#024685] font-medium text-md lg:font-medium lg:text-md"
            >
              Law consultancy firm
            </h1>
          </Link>
          <p className="flex justify-start gap-x-1">
            <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
            <span className="text-[#454545] text-sm">April 2024</span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-start items-start gap-x-4 p-4">
        <picture className="w-1/2">
          <Image
            src={TrendingThree}
            alt="main road"
            width="250"
            height="auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </picture>
        <div className="w-1/2 flex flex-col justify-start gap-y-2">
          <Link href="/">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className=" leading-6 text-[#024685] font-medium  text-md lg:font-medium lg:text-md "
            >
              Founder & Owner, Associates
            </h1>
          </Link>
          <p className="flex justify-start gap-x-1">
            <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
            <span className="text-[#454545] text-sm">April 2024</span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-start items-start gap-x-4 p-4">
        <picture className="w-1/2">
          <Image
            src={TrendingTwo}
            alt="main road"
            width="250"
            height="auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </picture>
        <div className="w-1/2 flex flex-col justify-start gap-y-2">
          <Link href="/">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className=" leading-6 text-[#024685] font-medium text-md lg:font-medium lg:text-md"
            >
              Law consultancy firm
            </h1>
          </Link>
          <p className="flex justify-start gap-x-1">
            <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
            <span className="text-[#454545] text-sm">April 2024</span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-start items-start gap-x-4 p-4">
        <picture className="w-1/2">
          <Image
            src={TrendingThree}
            alt="main road"
            width="250"
            height="auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </picture>
        <div className="w-1/2 flex flex-col justify-start gap-y-2">
          <Link href="/">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className=" leading-6 text-[#024685] font-medium  text-md lg:font-medium lg:text-md "
            >
              Founder & Owner, Associates
            </h1>
          </Link>
          <p className="flex justify-start gap-x-1">
            <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
            <span className="text-[#454545] text-sm">April 2024</span>
          </p>
        </div>
      </div>
    </div>
  );
}
