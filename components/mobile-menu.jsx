"use client";
import Link from "next/link";
export default function MobileMenu({ items, socials }) {
  return (
    <div className="w-4/5 relative top-26 border py-2 border-gray-400 bg-[#f9ba35]/[.7] rounded-md flex flex-row justify-around items-center lg:hidden ">
      {items ? (
        <nav className="flex flex-col justify-center items-center gap-2">
          {items.map((item, index) => (
            <Link
              className="text-lg text-[#41adcb]"
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
              className="bg-[#41adcb] rounded-sm p-0.5 text-white text-2xl"
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
