
import TenParallel from "./ten/page";
import ElevenParallel from "./eleven/page";
import TwelveParallel from "./twelve/page";
import ThirteenParallel from "./thirteen/page";
import FourteenParallel from "./fourteen/page";
import FifteenParallel from "./fifteen/page";
export default function Photos() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div style={{ fontFamily: "Times New Roman, serif" }} className="header">
        <h1 className="font-bold text-2xl text-[#024685] border-b-2 border-[#fac236]">Achivements</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 pl-12 lg:pl-0 pt-8">
          <TenParallel />
          <ElevenParallel />
          <TwelveParallel />
          <ThirteenParallel />
          <FourteenParallel />
          <FifteenParallel />
      </div>
      </div>
    </div>
  );
}
