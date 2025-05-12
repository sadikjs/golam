import Link from "next/link";
import fifteen from "@/public/assets/photos/18.jpeg";
import Image from "next/image";
export default function FifteenParallel() {
  return (
    <div className="w-28 lg:w-40 w-28 lg:h-40 flex justify-center items-center rounded-md bg-[#102e57] p-4">
      <Link
        className="text-white text-center underline "
        href="/archived/fifteen"
      >
        <Image
          src={fifteen}
          width={160}
          height={160}
          alt="fifteen photos"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <p>2014-2015</p>
      </Link>
    </div>
  );
}
