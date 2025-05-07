import Image from "next/image";
import fourty from "@/public/assets/photos/15-2.png";
import fivty from "@/public/assets/photos/16-2.png";
import sixty from "@/public/assets/photos/17.jpeg";
import seventy from "@/public/assets/photos/18.jpeg";
import eighty from "@/public/assets/photos/19.jpeg";
import ninety from "@/public/assets/photos/20.jpeg";
import twenty from "@/public/assets/photos/21.jpeg";
import twentyTwo from "@/public/assets/photos/22.jpeg";
import twentyThree from "@/public/assets/photos/23-2.jpeg";
import twoentyFour from "@/public/assets/photos/24.jpeg";
import TwoentryFive from "@/public/assets/photos/25-2.jpeg";
import TwoentrySix from "@/public/assets/photos/26.jpeg";
export default function Eleven() {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-4 p-4">
      <Image
        src={seventy}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={fivty}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={sixty}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={fourty}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={eighty}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={ninety}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={twenty}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={twentyTwo}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={twoentyFour}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={twentyThree}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={TwoentryFive}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
      <Image
        src={TwoentrySix}
        width="200"
        height="auto"
        alt="one image"
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      />
    </div>
  );
}
