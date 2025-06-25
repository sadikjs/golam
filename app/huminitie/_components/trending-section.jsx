import Image from "next/image";
import Link from "next/link";
import TrendingImage from "@/public/assets/service/10.jpeg";
import TrendingTwo from "@/public/assets/service/13.jpeg";
import TrendingThree from "@/public/assets/service/18.jpeg";
import TrendingFourt from "@/public/assets/service/26.jpeg";
export default function Trending() {
  return (
    <div className="flex flex-col justify-start py-8">
      <h1 className="text-[#024685] text-center text-sm font-normal lg:font-bold lg:text-3xl p-4">
        Service Club
      </h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center items-center gap-y-2 pb-10  pl-6 lg:pl-0">
          <picture>
            <Image
              src={TrendingImage}
              alt="main road"
              width="100%"
              height="auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="flex justify-start text-center">
              <div className="flex justify-start gap-x-2">
                <span className="text-[#727272] text-[8px] lg:text-sm opacity-60">
                  posted-
                </span>{" "}
                <span className="text-[#454545] text-[8px] lg:text-sm">
                  15 April 2024
                </span>
                <div>
                  <span className="text-[#727272] text-[8px] lg:text-sm opacity-60">
                    by-
                  </span>
                  <span className="text-[#454545] text-[8px] lg:text-sm">
                    Doland Due
                  </span>
                </div>
              </div>
            </div>
          </picture>
          <div className="flex flex-col justify-start gap-y-4">
            <h1
              style={{ fontFamily: "Times New Roman, serif,", color: "white" }}
              className="text-[#024685] text-sm font-normal lg:font-bold lg:text-lg pt-4"
            >
              Founder & Owner, Faruk & Associates (1997 - Present) Faruk &
              Associates
            </h1>
            <Link href="/">
              <p
                style={{ fontFamily: "arial, sans-serif", color: "white" }}
                className="leading-5 lg:leading-7 text-xs lg:text-sm text-[#454545]"
              >
                is an income-tax and Company Law consultancy firm. The firm
                provides both standardized and tailored services
              </p>
            </Link>
            <Link
              href="/"
              className="w-36 bg-[#093dac] text-center text-xs lg:text-sm p-1 lg:p-1.5 text-white"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2 pb-10 pl-6 lg:pl-0">
          <picture>
            <Image
              src={TrendingThree}
              alt="main road"
              width="100%"
              height="auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="flex justify-start text-center">
              <div className="flex justify-start gap-x-2">
                <div>
                  <span className="text-[#727272] text-[8px] lg:text-sm opacity-60">
                    posted-
                  </span>{" "}
                  <span className="text-[#454545] text-[8px] lg:text-sm">
                    15 April 2024
                  </span>
                </div>
                <div>
                  <span className="text-[#727272] text-[8px] lg:text-sm opacity-60">
                    by-
                  </span>
                  <span className="text-[#454545] text-[8px] lg:text-sm">
                    Doland Due
                  </span>
                </div>
              </div>
            </div>
          </picture>
          <div className="flex flex-col justify-start gap-y-4">
            <h1
              style={{ fontFamily: "Times New Roman, serif", color: "white" }}
              className="text-[#024685] text-sm lg:font-bold lg:text-lg pt-4"
            >
              Founder & Owner, Faruk & Associates (1997 - Present)
            </h1>
            <Link href="/">
              <p
                style={{ fontFamily: "arial, sans-serif", color: "white" }}
                className="leading-5 lg:leading-7 text-xs lg:text-sm text-[#454545]"
              >
                is an income-tax and Company Law consultancy firm. The firm
                provides both standardized and tailored services
              </p>
            </Link>
            <Link
              href="/"
              className="w-36 bg-[#093dac] text-center text-xs lg:text-sm p-1 lg:p-1.5 text-white"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2 pb-10 pl-6 lg:pl-0">
          <picture>
            <Image
              src={TrendingTwo}
              alt="main road"
              width="100%"
              height="auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="flex justify-start text-center">
              <div className="flex justify-start gap-x-2">
                <div>
                  <span className="text-[#727272] text-[8px] lg:text-sm opacity-60">
                    posted-
                  </span>{" "}
                  <span className="text-[#454545] text-[8px] lg:text-sm">
                    15 April 2024
                  </span>
                </div>
                <div>
                  <span className="text-[#727272] text-[8px] lg:text-sm opacity-60">
                    by-
                  </span>
                  <span className="text-[#454545] text-[8px] lg:text-sm">
                    Doland Due
                  </span>
                </div>
              </div>
            </div>
          </picture>
          <div className="flex flex-col justify-start gap-y-4">
            <h1
              style={{ fontFamily: "Times New Roman, serif", color: "white" }}
              className="text-[#024685] text-sm lg:font-bold lg:text-lg pt-4"
            >
              Founder & Owner, Faruk & Associates (1997 - Present)
            </h1>
            <Link href="/">
              <p
                style={{ fontFamily: "arial, sans-serif", color: "white" }}
                className="leading-5 lg:leading-7 text-xs lg:text-sm text-[#454545]"
              >
                is an income-tax and Company Law consultancy firm. The firm
                provides both standardized and tailored services
              </p>
            </Link>
            <Link
              href="/"
              className="w-36 bg-[#093dac] text-center text-xs lg:text-sm p-1 lg:p-1.5 text-white"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2 pb-10 pl-6 lg:pl-0">
          <picture>
            <Image
              src={TrendingFourt}
              alt="main road"
              width="100%"
              height="auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="flex justify-start text-center">
              <div className="flex justify-start gap-x-2">
                <div>
                  <span className="text-[#727272] text-[8px] lg:text-sm opacity-60">
                    posted-
                  </span>{" "}
                  <span className="text-[#454545] text-[8px] lg:text-sm">
                    15 April 2024
                  </span>
                </div>
                <div>
                  <span className="text-[#727272] text-[8px] lg:text-sm opacity-60">
                    by-
                  </span>
                  <span className="text-[#454545] text-[8px] lg:text-sm">
                    Doland Due
                  </span>
                </div>
              </div>
            </div>
          </picture>
          <div className="flex flex-col justify-start gap-y-4">
            <h1
              style={{ fontFamily: "Times New Roman, serif", color: "white" }}
              className="text-[#024685] text-sm lg:font-bold lg:text-lg pt-4"
            >
              Founder & Owner, Faruk & Associates (1997 - Present)
            </h1>
            <Link href="/">
              <p
                style={{ fontFamily: "arial, sans-serif", color: "white" }}
                className="leading-5 lg:leading-7 text-xs lg:text-sm text-[#454545]"
              >
                is an income-tax and Company Law consultancy firm. The firm
                provides both standardized and tailored services
              </p>
            </Link>
            <Link
              href="/"
              className="w-36 bg-[#093dac] text-center text-xs lg:text-sm p-1 lg:p-1.5 text-white"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
