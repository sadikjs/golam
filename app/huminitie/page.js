import Slider from "./_components/slide";
import Main from "./_components/main";
import Footer from "@/components/footer";
export default function HuminitiesPage() {
  return (
    <div className="w-full flex flex-col jusity-center items-center bg-[url(../public/assets/wave/boxed-page-bg.jpg)] bg-center bg-repeat-round">
      <div className="w-4/5 flex flex-col jusity-center items-center gap-y-6 bg-white mt-8">
        <Slider />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
