import { ArrowLeftFromLine } from "lucide-react";
export default function SidebarMenuHide({select, setSelect}){
    return(
        <div className="h-full fixed top-0 bottom-0 left-4 w-[100px] pt-12 overflow-y-auto lg:w-[120px] content-center">
            <button className="cursor-pointer text-green-600 pt-12 z-40" onClick={()=>setSelect(!select)}>
            < ArrowLeftFromLine />
            </button>
        </div>
    );
}