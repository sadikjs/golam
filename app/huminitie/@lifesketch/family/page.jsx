import picOne from "@/public/assets/family/1.jpeg";
import picTwo from "@/public/assets/family/2.jpeg";
import picThree from "@/public/assets/family/3.jpeg";
import Image from "next/image";
export default function Family() {
  return (
    <div className="w-full flex justify-center items-center p-12">
      <div
        style={{ fontFamily: "arial, sans-serif" }}
        className="w-4/5 grid lg:grid-cols-2 gap-4 leading-6"
      >
        <div className="w-full flex justify-center items-center gap-x-2 pb-6">
          <picture className="w-1/2">
            <Image
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              voluptate consequuntur asperiores, ad, repellat voluptatem illo
              facilis id porro aut quis assumenda.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-x-2 pb-6">
          <picture className="w-1/2">
            <Image src={picTwo} width="250" height="250" alt="family picture" />
          </picture>
          <div className="w-1/2">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-xl font-bold text-[#093dac] p-2"
            >
              Family
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              voluptate consequuntur asperiores, ad, repellat voluptatem illo
              facilis id porro aut quis assumenda.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-x-2">
          <div className="w-1/2">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-xl font-bold text-[#093dac] p-2"
            >
              Family
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              voluptate consequuntur asperiores, ad, repellat voluptatem illo
              facilis id porro aut quis assumenda.
            </p>
          </div>
          <picture className="w-1/2">
            <Image
              src={picThree}
              width="250"
              height="250"
              alt="family picture"
            />
          </picture>
        </div>
        <div className="w-full flex justify-center items-center gap-x-2">
          <div className="w-1/2 ">
            <h1
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-xl font-bold text-[#093dac] p-2"
            >
              Family
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              voluptate consequuntur asperiores, ad, repellat voluptatem illo
              facilis id porro aut quis assumenda.
            </p>
          </div>
          <picture className="w-1/2">
            <Image src={picOne} width="250" height="250" alt="family picture" />
          </picture>
        </div>
      </div>
    </div>
  );
}
