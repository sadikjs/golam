import Image from "next/image";
import fourty from "@/public/assets/family/26.jpeg";
import fivty from "@/public/assets/family/27.jpeg";
import sixty from "@/public/assets/family/28.jpeg";
import seventy from "@/public/assets/family/29.jpeg";
import eighty from "@/public/assets/family/30.jpeg";
import ninety from "@/public/assets/family/31.jpeg";
export default function Eleven() {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 p-4">
      <div className="w-[140px] lg:w-[200px] h-[140px] lg:h-[200px] border border-[#ccc] flex items-center justify-center">
        <Image
          src={fourty}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          alt="one image"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-[140px] lg:w-[200px] h-[140px] lg:h-[200px] border border-[#ccc] flex items-center justify-center">
        <Image
          src={fivty}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          alt="one image"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-[140px] lg:w-[200px] h-[140px] lg:h-[200px] flex items-center justify-center">
        <Image
          src={sixty}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          alt="one image"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-[140px] lg:w-[200px] h-[140px] lg:h-[200px] border border-[#ccc] flex items-center justify-center">
        <Image
          src={seventy}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          alt="one image"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-[140px] lg:w-[200px] h-[140px] lg:h-[200px] flex items-center justify-center">
        <Image
          src={eighty}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          alt="one image"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>
      <div className=" w-[140px] lg:w-[200px] h-[140px] lg:h-[200px] border border-[#ccc] flex items-center justify-center">
        <Image
          src={fourty}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          alt="one image"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-[140px] lg:w-[200px] h-[140px] lg:h-[200px] border border-[#ccc] flex items-center justify-center">
        <Image
          src={ninety}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          alt="one image"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
