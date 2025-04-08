import Image from "next/image";
import fullImage from "@/public/assets/wave/78.jpg";

export default function Slider() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <picture className="flex flex-col justity-center items-center relative">
          <Image
            src={fullImage}
            alt="slide image"
            width="100%"
            height="auto"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="flex flex-col justify-center items-center absolute top-15 lg:top-40 gap-y-4 text-sky-600">
            <p className="text-xl lg:text-6xl lg:font-semibold text-center ">
              We are serving a world in need
            </p>
            <p className="text-md lg:text-3xl font-semibold text-center">
              One act of kindness at a time
            </p>
          </div>
        </picture>
      </div>
    </div>
  );
}
