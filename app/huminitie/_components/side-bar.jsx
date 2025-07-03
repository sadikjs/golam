import Link from "next/link";
export default function Sidebar({select, setSelect}) {
  return (
    <div>
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 w-[120px] pt-12 overflow-y-auto text-center bg-[#f8f8f8] lg:w-[170px]">
        <div className="p-2.5 flex items-center px-4 duration-300 cursor-pointer bg-[#f8f8f8] border-y border-slate-300 text-[#122e43]">
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer">
          <span
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm text-[#102e57] ml-4 font-medium hover:border-b-2 hover:border-[#102e57] lg:font-bold lg:text-[15px]"
          >
            
            <Link href="/huminitie">
              <button onClick={()=>setSelect(!select)}>Life Sketch</button>
            </Link>
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px] opacity-30"></div>
        <div className="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer ">
          <span
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm text-[#102e57] ml-4 font-medium lg:font-bold lg:text-[15px] hover:border-b-2 hover:border-[#102e57]"
          >
            <Link href="/huminitie/photos">
              
            <button onClick={()=>setSelect(!select)}>Photos</button>
            </Link>
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px] opacity-30"></div>
        <div className="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer">
          <span
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm text-[#102e57] ml-4 font-medium lg:font-bold lg:text-[15px] hover:border-b-2 hover:border-[#102e57]"
          >
            <Link href="/huminitie/career">
              <button onClick={()=>setSelect(!select)}>Career</button>
              </Link>
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px] opacity-30"></div>
        <div className="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer">
          <span
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm text-[#102e57] ml-4 font-medium lg:font-bold lg:text-[15px] hover:border-b-2 hover:border-[#102e57]"
          >
            <Link href="/huminitie/service">
              <button onClick={()=>setSelect(!select)}>Service Club</button>
            </Link>
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px] opacity-30"></div>
        <div className="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer">
          <span
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm font-medium text-[#102e57] ml-4 lg:font-bold lg:text-[15px] hover:border-b-2 hover:border-[#102e57]"
          >
            <Link href="/huminitie/family">
            <button onClick={()=>setSelect(!select)}>Family</button>
              </Link>
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px] opacity-30"></div>
        <div className="p-2.5 mt-3 flex items-center px-4 duration-300 cursor-pointer">
          <i className="bi bi-bookmark-fill"></i>
          <span
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-sm text-[#102e57] ml-4 font-medium lg:font-bold lg:text-[15px] hover:border-b-2 hover:border-[#102e57]"
          >
            <Link href="/huminitie/message">
            <button onClick={()=>setSelect(!select)}> Our Message</button>
              </Link>
          </span>
        </div>
        <div className="my-4 bg-gray-600 h-[1px] opacity-30"></div>
      </div>
    </div>
  );
}
