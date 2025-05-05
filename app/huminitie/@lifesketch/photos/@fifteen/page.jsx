import Link from "next/link";
export default function FifteenParallel() {
  return (
    <div className="w-40 h-40 flex justify-center items-center rounded-md bg-green-700 p-4">
      <Link
        className="text-white text-center underline "
        href="/archived/fifteen"
      >
        2015
      </Link>
    </div>
  );
}
