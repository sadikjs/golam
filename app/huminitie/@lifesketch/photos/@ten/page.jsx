import Link from "next/link";
import Image from "next/image";
import ten from "@/public/assets/photos/2.jpeg";
export default function TenParallel() {
  return (
    <div className="w-32 lg:w-40 w-32 lg:h-40  flex justify-center items-center rounded-md bg-[#097af9] p-4">
      <Link className="text-center cursor-pointer" href="/archived/ten">
        <Image
          className="pb-4"
          src={ten}
          width={160}
          height={160}
          alt="photos gallery"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <p className="text-white ">2010-2011</p>
      </Link>
    </div>
  );
}
