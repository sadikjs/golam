import Image from "next/image";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
import profilePicture from "../public/assets/Farukh-removebg.png";
export default function Bio() {
  return (
    <div className="w-full h-[500px] flex flex-col bg-[#00264a] justify-center items-center gap-12 lg:gap-6 pt-4 lg:h-[450px] lg:grid lg:grid-cols-2">
      <div className=" flex flex-col justify-center items-center">
        <div className="relative w-62 h-62 lg:w-96 lg:h-96 bg-[#c13343] border rounded-full"></div>
        <Image
          className="absolute"
          src="https://res.cloudinary.com/ditjy209s/image/upload/v1742403418/Farukh-removebg_xj3e74.png"
          alt="profile picture"
          width="300"
          height="350"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div
        className={`${roboto.className} w-2/3 flex flex-col jusity-start items-center pt-16 lg:pt-0`}
      >
        <h1 className="text-white text-xl lg:text-3xl pb-6 tracking-wide">
          ” Somewhere inside all of us is the power to{" "}
          <span className="text-[#c13343]">change</span> the world.
        </h1>
        <div className="flex">
          <p className={`${inter.className} text-white text-sm`}>
            A K M GOLAM FARUK
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
