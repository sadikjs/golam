import Link from "next/link";
import Image from "next/image";
import twelve from "@/public/assets/photos/7.jpeg";
export default function TwelveParallel() {
  return (
    <div className="w-40 h-40 flex justify-center items-center rounded-md bg-[#2247ee] p-4">
      <Link className="text-white text-center " href="/archived/twelve">
        <Image
          className="pb-4"
          src={twelve}
          width={160}
          height={170}
          alt="twelve photos"
        />
        <p>2012-2013</p>
      </Link>
    </div>
  );
}
