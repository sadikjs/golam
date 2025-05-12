import Link from "next/link";
import Image from "next/image";
import fourteen from "@/public/assets/photos/9.jpeg";
export default function FourteenParallel() {
  return (
    <div className="w-28 lg:w-40 w-28 lg:h-40 flex justify-center items-center rounded-md bg-[#024685] p-4">
      <Link
        className="text-white text-center underline "
        href="/archived/fourteen"
      >
        <Image
          src={fourteen}
          width={160}
          height={160}
          alt="fourteen photos"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <p>2014-2015</p>
      </Link>
    </div>
  );
}
