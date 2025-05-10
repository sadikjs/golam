import Link from "next/link";
import Image from "next/image";
import eleven from "@/public/assets/photos/10.jpeg";
export default function ElevenParallel() {
  return (
    <div className="w-32 lg:w-40 w-32 lg:h-40 flex justify-center items-center rounded-md bg-[#0867d2] p-4">
      <Link className="text-center " href="/archived/eleven">
        <Image
          className="pb-4"
          src={eleven}
          width={160}
          height={160}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          alt="photos gallery"
        />
        <p className="text-white">2011-202</p>
      </Link>
    </div>
  );
}
