import Link from "next/link";
export default function ThirteenParallel() {
  return (
    <div className="w-40 h-40 flex justify-center items-center rounded-md bg-sky-700 p-4">
      <Link
        className="text-white text-center underline "
        href="/archived/thirteen"
      >
        2013
      </Link>
    </div>
  );
}
