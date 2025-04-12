import Image from "next/image";
import "./_component/style.css";
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
import eleven from "@/public/assets/photos/11.jpeg";
import tewelve from "@/public/assets/photos/13.jpeg";
import thirdty from "@/public/assets/photos/14.jpeg";
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
export default function Photos() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div style={{ fontFamily: "Times New Roman, serif" }} className="header">
        <h1 className="text-2xl"> Image Gallery</h1>
        <p className="text-xl "></p>
      </div>
      <div className="w-4/5 flex justify-center items-start">
        <div className="column">
          <Image src={one} width="100%" height="auto" alt="one image" />
          <Image src={two} width="100%" height="auto" alt="one image" />
          <Image src={three} width="100%" height="auto" alt="one image" />
          <Image src={four} width="100%" height="auto" alt="one image" />
          <Image src={five} width="100%" height="auto" alt="one image" />
          <Image src={six} width="100%" height="auto" alt="one image" />
          <Image src={seven} width="100%" height="auto" alt="one image" />
        </div>
        <div className="column">
          <Image src={eight} width="100%" height="auto" alt="one image" />
          <Image src={nine} width="100%" height="auto" alt="one image" />
          <Image src={ten} width="100%" height="auto" alt="one image" />
          <Image src={eleven} width="100%" height="auto" alt="one image" />
          <Image src={tewelve} width="100%" height="auto" alt="one image" />
          <Image src={thirdty} width="100%" height="auto" alt="one image" />
        </div>
        <div className="column">
          <Image src={seventy} width="100%" height="auto" alt="one image" />
          <Image src={fivty} width="100%" height="auto" alt="one image" />
          <Image src={sixty} width="100%" height="auto" alt="one image" />
          <Image src={fourty} width="100%" height="auto" alt="one image" />
          <Image src={eighty} width="100%" height="auto" alt="one image" />
          <Image src={ninety} width="100%" height="auto" alt="one image" />
          <Image src={eight} width="100%" height="auto" alt="one image" />
        </div>
        <div className="column">
          <Image src={twenty} width="100%" height="auto" alt="one image" />
          <Image src={twentyTwo} width="100%" height="auto" alt="one image" />
          <Image src={twoentyFour} width="100%" height="auto" alt="one image" />
          <Image src={twentyThree} width="100%" height="auto" alt="one image" />
          <Image
            src={TwoentryFive}
            width="100%"
            height="auto"
            alt="one image"
          />
          <Image src={TwoentrySix} width="100%" height="auto" alt="one image" />
        </div>
      </div>
    </div>
  );
}
