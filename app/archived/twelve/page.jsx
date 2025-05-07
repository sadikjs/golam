import Image from "next/image";
import one from "@/public/assets/photos/1.jpeg";
import two from "@/public/assets/photos/2.jpeg";
import three from "@/public/assets/photos/3.jpeg";
import four from "@/public/assets/photos/4.jpeg";
import five from "@/public/assets/photos/5.jpeg";
import six from "@/public/assets/photos/6.jpeg";
import seven from "@/public/assets/photos/7.jpeg";
import eight from "@/public/assets/photos/8.jpeg";
import nine from "@/public/assets/photos/9.jpeg";
import ten from "@/public/assets/photos/10.jpeg";
import eleven from "@/public/assets/photos/11-2.jpeg";
import tewelve from "@/public/assets/photos/13.jpeg";
import thirdty from "@/public/assets/photos/14.jpeg";
export default function Ten() {
  return (
    <div className="w-full grid grid-cols-4 gap-y-4 gap-x-4 p-4">
      <Image
        src={one}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={two}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={three}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={four}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={five}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={six}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={seven}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={eight}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={nine}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={ten}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={eleven}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={tewelve}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={thirdty}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
    </div>
  );
}
