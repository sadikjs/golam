import Image from "next/image";
import profile from "@/public/assets/career/242.jpeg";
export default function Professional() {
  return (
    <div className="w-5/6 h-screen flex-col flex justify-center items-center gap-y-4 lg:gap-x-4 lg:flex-row">
      <div className="w-2/3 lg:w-full lg:w-3/6 flex justify-center items-center">
        <Image
          className="rounded-md"
          src={profile}
          alt="profile picture"
          width="500"
          height="auto"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-full lg:w-3/6 flex flex-col justify-center items-center gap-y-2">
        <h1
          style={{ fontFamily: "sans-serif" }}
          className="text-xl text-center font-normal lg:text-2xl lg:font-bold"
        >
          FARUK & ASSOCIATES
        </h1>
        <h1
          style={{ fontFamily: "sans-serif" }}
          className="text-lg text-center font-medium lg:text-xl lg:font-semibold"
        >
          Consultant, Tax & Company Affairs
        </h1>
      </div>
    </div>
  );
}
