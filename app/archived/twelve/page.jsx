import Image from "next/image";
import one from "@/public/assets/photos/12/1.png";
import two from "@/public/assets/photos/12/2.jpeg";
import three from "@/public/assets/photos/12/3.jpeg";
import four from "@/public/assets/photos/12/4.jpeg";
import five from "@/public/assets/photos/12/5.jpeg";
import six from "@/public/assets/photos/12/6.jpeg";
import seven from "@/public/assets/photos/12/7.jpeg";
export default function Ten() {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 p-4">
      <div className="w-[140px] lg:w-[200px] h-[140px] lg:h-[200px] border border-[#ccc] flex items-center justify-center">
        <Image
          src={one}
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
          src={two}
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
          src={three}
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
          src={four}
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
          src={five}
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
          src={six}
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
          src={seven}
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
