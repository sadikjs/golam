import Image from "next/image";
import profile from "@/public/assets/career/242.jpeg";
export default function Professional() {
  return (
    <div className="w-4/5 h-screen flex flex-col justify-center items-center gap-x-4 lg:flex-row">
      <div className="w-1/3">
        <Image
          className="rounded-md"
          src={profile}
          alt="profile picture"
          width="350"
          height="auto"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-2/3 flex flex-col justify-center items-center gap-y-4">
        <h1
          style={{ fontFamily: "sans-serif" }}
          className="text-xl font-normal lg:text-2xl lg:font-bold"
        >
          FARUK & ASSOCIATES
        </h1>
        <h1
          style={{ fontFamily: "sans-serif" }}
          className="text-lg text-white font-medium lg:text-xl lg:font-semibold"
        >
          Consultant, Tax & Company Affairs
        </h1>
      </div>
    </div>
  );
}
