import Link from "next/link";
import fifteen from "@/public/assets/photos/18.jpeg";
import Image from "next/image";
export default function FifteenParallel() {
  return (
    <div className="w-40 h-40 flex justify-center items-center rounded-md bg-[#102e57] p-4">
      <Link
        className="text-white text-center underline "
        href="/archived/fifteen"
      >
        <Image src={fifteen} width={160} height={160} alt="fifteen photos" />
        <p>2014-2015</p>
      </Link>
    </div>
  );
}
