import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[120px] overflow-y-auto text-center bg-[#f8f8f8] lg:w-[170px]">
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-[#f8f8f8] border border-slate-300 text-[#122e43]">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-slate-200 text-white">
          <i className="bi bi-house-door-fill"></i>
          <span
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm text-[#122e43] ml-4 font-medium lg:font-bold lg:text-[15px]"
          >
            <Link href="/huminitie">Life Sketch</Link>
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px] opacity-30"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-slate-200 text-white">
          <i className="bi bi-house-door-fill"></i>
          <span
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm text-[#122e43] ml-4 font-medium lg:font-bold lg:text-[15px]"
          >
            <Link href="/huminitie/photos">Photos</Link>
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px] opacity-30"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-slate-200 text-white">
          <i className="bi bi-house-door-fill"></i>
          <span
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm text-[#122e43] ml-4 font-medium lg:font-bold lg:text-[15px]"
          >
            <Link href="/huminitie/career">Career</Link>
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px] opacity-30"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-slate-200 text-white">
          <i className="bi bi-house-door-fill"></i>
          <span
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm text-[#122e43] ml-4 font-medium lg:font-bold lg:text-[15px]"
          >
            <Link href="/huminitie/service">Service (Club)</Link>
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px] opacity-30"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-slate-200 text-white">
          <i className="bi bi-bookmark-fill"></i>
          <span
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm font-medium text-[#122e43] ml-4 lg:font-bold lg:text-[15px]"
          >
            <Link href="/huminitie/family">Personal (Family)</Link>
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px] opacity-30"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-bookmark-fill"></i>
          <span
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm text-[#122e43] ml-4 font-medium lg:font-bold lg:text-[15px]"
          >
            <Link href="/huminitie/message">Our Message</Link>
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px] opacity-30"></div>
      </div>
    </div>
  );
}
