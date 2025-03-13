import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
import logoTwo from "@/public/assets/LionLogoOne.jpg";
export default function MainContent() {
  return (
    <main className="w-4/5 grid grid-row-3 items-center gap-4 mb-20 py-6 lg:mb-20 lg:grid-cols-3">
      <div></div>
      <div className="flex flex-col justify-center items-center mx-auto">
        <Image
          src={logoTwo}
          alt="logoTwo"
          width={200}
          height={180}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>
      <div>
        <p className={`${inter.className} text-justify`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam
          est dolorem qui odio quae numquam quos, omnis accusamus, expedita
          aliquam repellendus. Dolore quibusdam, numquam laudantium inventore
          facilis dicta illum veniam cumque vitae molestias reiciendis animi
          repellendus reprehenderit saepe temporibus aperiam repudiandae, dolor
          doloremque officiis nobis. Eos reiciendis distinctio doloribus?
        </p>
      </div>
    </main>
  );
}
