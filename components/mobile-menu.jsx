"use client";
import Link from "next/link";
export default function MobileMenu({ items, socials }) {
  return (
    <div className="w-4/5 relative top-26 border py-2 border-gray-400 bg-[#102e57] rounded-md flex flex-row justify-around items-center lg:hidden ">
      {items ? (
        <nav className="flex flex-col justify-center items-center gap-2 text-white">
          {items.map((item, index) => (
            <Link
              style={{ fontFamily: "Times New Roman, serif" }}
              className="text-lg"
              key={index}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      {socials ? (
        <nav className="flex flex-col justify-center items-center gap-2">
          {socials.map((social, index) => (
            <Link
              className="bg-[#0070cd] rounded-sm p-0.5 text-white text-2xl"
              key={index}
              href={social.href}
            >
              {social.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
