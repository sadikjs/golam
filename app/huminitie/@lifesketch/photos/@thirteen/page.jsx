import Link from "next/link";
import Image from "next/image";
import thirteen from "@/public/assets/photos/13.jpeg";

export default function ThirteenParallel() {
  return (
    <div className="w-28 lg:w-40 w-28 lg:h-40  flex justify-center items-center rounded-md bg-[#093dac] p-4">
      <Link
        className="text-white text-center underline "
        href="/archived/thirteen"
      >
        <Image
          src={thirteen}
          width={160}
          height={160}
          alt="thirteen photos"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <p>2013</p>
      </Link>
    </div>
  );
}
