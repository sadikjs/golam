import Link from "next/link";
export default function FourteenParallel() {
  return (
    <div className="w-40 h-40 flex justify-center items-center rounded-md bg-purple-700 p-4">
      <Link
        className="text-white text-center underline "
        href="/archived/fourteen"
      >
        2014
      </Link>
    </div>
  );
}
