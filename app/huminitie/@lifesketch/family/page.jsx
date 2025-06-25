import picOne from "@/public/assets/photos/family/27.jpeg";
import picTwo from "@/public/assets/photos/family/17.jpg";
import picThree from "@/public/assets/photos/family/32.jpg";
import picFour from "@/public/assets/photos/family/33.jpg";
import Image from "next/image";
export default function Family() {
  return (
    <div className="w-full flex justify-center items-center p-1 lg:p-12">
      <div
        style={{ fontFamily: "arial, sans-serif" }}
        className="w-full lg:w-4/5 grid lg:grid-cols-2 gap-4 leading-6 pl-8 lg:pl-0"
      >
        <div className="w-full flex justify-center items-center gap-x-4 pb-6 p-2">
          <picture className="w-1/2">
            <Image
              className="rounded-md"
              src={picOne}
              width="250"
              height="250"
              alt="family picture"
              sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </picture>
          <div className="w-1/2">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-xl font-bold text-[#093dac] p-2"
            >
              Family
            </h1>
            <p
              style={{ fontFamily: "Arial, sans-serif" }}
              className="text-xs lg:text-sm leading-6 text-justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              voluptate consequuntur asperiores, ad, repellat voluptatem illo
              facilis id porro aut quis assumenda.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-x-4 pb-6 p-2">
          <picture className="w-1/2">
            <Image
              className="rounded-md"
              src={picTwo}
              width="250"
              height="250"
              alt="family picture"
            />
          </picture>
          <div className="w-1/2">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-xl font-bold text-[#093dac] p-2"
            >
              Family
            </h1>
            <p
              style={{ fontFamily: "Arial, sans-serif" }}
              className="text-xs lg:text-sm leading-6 text-justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              voluptate consequuntur asperiores, ad, repellat voluptatem illo
              facilis id porro aut quis assumenda.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-x-4 p-2">
          <div className="w-1/2">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-xl font-bold text-[#093dac] p-2"
            >
              Family
            </h1>
            <p
              style={{ fontFamily: "Arial, sans-serif" }}
              className="text-xs lg:text-sm leading-6 text-justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              voluptate consequuntur asperiores, ad, repellat voluptatem illo
              facilis id porro aut quis assumenda.
            </p>
          </div>
          <picture className="w-1/2">
            <Image
              className="rounded-md"
              src={picThree}
              width="250"
              height="250"
              alt="family picture"
            />
          </picture>
        </div>
        <div className="w-full flex justify-center items-center gap-x-4 p-2">
          <div className="w-1/2 ">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-xl font-bold text-[#093dac] p-2"
            >
              Family
            </h1>
            <p
              style={{ fontFamily: "Arial, sans-serif" }}
              className="text-xs lg:text-sm leading-6 text-justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              voluptate consequuntur asperiores, ad, repellat voluptatem illo
              facilis id porro aut quis assumenda.
            </p>
          </div>
          <picture className="w-1/2">
            <Image
              className="rounded-md"
              src={picFour}
              width="250"
              height="250"
              alt="family picture"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
