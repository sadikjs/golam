import Link from "next/link";
export default function TenParallel() {
  return (
    <div className="w-40 h-40 flex justify-center items-center rounded-md bg-teal-700 p-4">
      <Link className="text-center underline" href="/archived/ten">
        2010
      </Link>
    </div>
  );
}
