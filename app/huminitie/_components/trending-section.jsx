import Image from "next/image";
import Link from "next/link";
import TrendingImage from "@/public/assets/wave/mainImage.jpg";
import TrendingTwo from "@/public/assets/wave/Trending-2.jpg";
import TrendingThree from "@/public/assets/wave/Trending-3.jpg";
export default function TrendingPage() {
  return (
    <div className="flex flex-col justify-start py-8">
      <h1 className="text-[#024685] font-bold text-3xl p-4">
        Trending This Week
      </h1>
      <div className="grid lg:grid-cols-2 gap-4 border-b border-slate-400">
        <div className="p-4">
          <picture>
            <Image
              src={TrendingImage}
              alt="main road"
              width="100%"
              height="auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </picture>
          <div className="flex flex-col justify-start gap-y-4">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-[#024685] font-semibold  text-md lg:font-bold lg:text-xl "
            >
              Founder & Owner, Faruk & Associates (1997 - Present) Faruk &
              Associates
            </h1>
            <p className="flex justify-start gap-x-1">
              <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
              <span className="text-[#454545] text-sm">15 April 2024</span>
              <span className="text-[#727272] text-sm opacity-60">by-</span>
              <span className="text-[#454545] text-sm">Doland Due</span>
            </p>
            <Link href="/">
              <p
                style={{ fontFamily: "arial, sans-serif" }}
                className="leading-7 text-md text-[#454545]"
              >
                is an income-tax and Company Law consultancy firm. The firm
                provides both standardized and tailored services[...]
              </p>
            </Link>
          </div>
        </div>
        <div className="p-4">
          <picture>
            <Image
              src={TrendingTwo}
              alt="main road"
              width="100%"
              height="auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </picture>
          <div className="flex flex-col justify-start gap-y-4">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-[#024685] font-semibold  text-md lg:font-bold lg:text-xl "
            >
              Founder & Owner, Faruk & Associates (1997 - Present) Faruk &
              Associates
            </h1>
            <p className="flex justify-start gap-x">
              <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
              <span className="text-[#454545] text-sm">15 April 2024</span>
              <span className="text-[#727272] text-sm opacity-60">by-</span>
              <span className="text-[#454545] text-sm">Doland Due</span>
            </p>
            <Link href="/">
              <p
                style={{ fontFamily: "arial, sans-serif" }}
                className="leading-7 text-md text-[#454545]"
              >
                is an income-tax and Company Law consultancy firm. The firm
                provides both standardized and tailored services to both[...]
              </p>
            </Link>
          </div>
        </div>
        <div className="p-4">
          <picture>
            <Image
              src={TrendingThree}
              alt="main road"
              width="100%"
              height="auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </picture>
          <div className="flex flex-col justify-start gap-y-4">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-[#024685] font-semibold  text-md lg:font-bold lg:text-xl "
            >
              Founder & Owner, Faruk & Associates (1997 - Present) Faruk &
              Associates
            </h1>
            <p className="flex justify-start gap-x">
              <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
              <span className="text-[#454545] text-sm">15 April 2024</span>
              <span className="text-[#727272] text-sm opacity-60">by-</span>
              <span className="text-[#454545] text-sm">Doland Due</span>
            </p>
            <Link href="/">
              <p
                style={{ fontFamily: "arial, sans-serif" }}
                className="leading-7 text-md text-[#454545]"
              >
                is an income-tax and Company Law consultancy firm. The firm
                provides both standardized and tailored services to both[...]
              </p>
            </Link>
          </div>
        </div>
        <div className="p-4">
          <picture>
            <Image
              src={TrendingImage}
              alt="main road"
              width="100%"
              height="auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </picture>
          <div className="flex flex-col justify-start gap-y-4">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-[#024685] font-semibold  text-md lg:font-bold lg:text-xl "
            >
              Founder & Owner, Faruk & Associates (1997 - Present) Faruk &
              Associates
            </h1>
            <p className="flex justify-start gap-x">
              <span className="text-[#727272] text-sm opacity-60">posted-</span>{" "}
              <span className="text-[#454545] text-sm">15 April 2024</span>
              <span className="text-[#727272] text-sm opacity-60">by-</span>
              <span className="text-[#454545] text-sm">Doland Due</span>
            </p>
            <Link href="/">
              <p
                style={{ fontFamily: "arial, sans-serif" }}
                className="leading-7 text-md text-[#454545]"
              >
                is an income-tax and Company Law consultancy firm. The firm
                provides both standardized and tailored services to both [...]
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
