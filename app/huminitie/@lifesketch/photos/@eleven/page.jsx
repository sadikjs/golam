import Link from "next/link";
import Image from "next/image";
import eleven from "@/public/assets/photos/10.jpeg";
export default function ElevenParallel() {
  return (
    <div className="w-40 h-40 flex justify-center items-center rounded-md bg-[#0867d2] p-4">
      <Link className="text-center " href="/archived/eleven">
        <Image
          className="pb-4"
          src={eleven}
          width={160}
          height={160}
          alt="photos gallery"
        />
        <p className="text-white">2011-202</p>
      </Link>
    </div>
  );
}
