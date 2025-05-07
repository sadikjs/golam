import Link from "next/link";
import Image from "next/image";
import thirteen from "@/public/assets/photos/13.jpeg";

export default function ThirteenParallel() {
  return (
    <div className="w-40 h-40 flex justify-center items-center rounded-md bg-[#093dac] p-4">
      <Link
        className="text-white text-center underline "
        href="/archived/thirteen"
      >
        <Image src={thirteen} width={160} height={160} alt="thirteen photos" />
        <p>2013-2014</p>
      </Link>
    </div>
  );
}
