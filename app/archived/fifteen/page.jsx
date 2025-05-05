import Image from "next/image";
import fourty from "@/public/assets/photos/15.png";
import fivty from "@/public/assets/photos/16.png";
import sixty from "@/public/assets/photos/17.jpeg";
import seventy from "@/public/assets/photos/18.jpeg";
import eighty from "@/public/assets/photos/19.jpeg";
import ninety from "@/public/assets/photos/20.jpeg";
import twenty from "@/public/assets/photos/21.jpeg";
import twentyTwo from "@/public/assets/photos/22.jpeg";
import twentyThree from "@/public/assets/photos/23.jpeg";
import twoentyFour from "@/public/assets/photos/24.jpeg";
import TwoentryFive from "@/public/assets/photos/25.jpeg";
import TwoentrySix from "@/public/assets/photos/26.jpeg";
export default function Eleven() {
  return (
    <div className="w-full grid grid-cols-4 gap-y-4 gap-x-4 p-4">
      <Image
        className="w-64 h-48"
        src={seventy}
        width="100%"
        height="auto"
        alt="one image"
      />
      <Image
        className="w-64 h-48"
        src={fivty}
        width="100%"
        height="auto"
        alt="one image"
      />
      <Image
        className="w-64 h-48"
        src={sixty}
        width="100%"
        height="auto"
        alt="one image"
      />
      <Image
        className="w-64 h-48"
        src={fourty}
        width="100%"
        height="auto"
        alt="one image"
      />
      <Image
        className="w-64 h-48"
        src={eighty}
        width="100%"
        height="auto"
        alt="one image"
      />
      <Image
        className="w-64 h-48"
        src={ninety}
        width="100%"
        height="auto"
        alt="one image"
      />

      <Image
        className="w-64 h-48"
        src={twenty}
        width="100%"
        height="auto"
        alt="one image"
      />
      <Image
        className="w-64 h-48"
        src={twentyTwo}
        width="100%"
        height="auto"
        alt="one image"
      />
      <Image
        className="w-64 h-48"
        src={twoentyFour}
        width="100%"
        height="auto"
        alt="one image"
      />
      <Image
        className="w-64 h-48"
        src={twentyThree}
        width="100%"
        height="auto"
        alt="one image"
      />
      <Image
        className="w-64 h-48"
        src={TwoentryFive}
        width="100%"
        height="auto"
        alt="one image"
      />
      <Image
        className="w-64 h-48"
        src={TwoentrySix}
        width="100%"
        height="auto"
        alt="one image"
      />
    </div>
  );
}
