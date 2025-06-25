import Image from "next/image";
import banner from "@/public/assets/career/25.jpeg";
import profile from "@/public/assets/career/23.jpeg";
import three from "@/public/assets/photos/2012/3.jpeg";
import Link from "next/link";
export default function Main() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-gradient-to-r from-[#e7e5eb] to-[#e7e6e8]">
      <h1 className="font-bold text-2xl text-[#024685] border-b-2 border-[#fac236]">
        PORTRAIT OF A VISIONARY LEADER
      </h1>
      <div className="w-full lg:w-2/3 flex flex-col justify-center items-center lg:flex-row  lg:justify-start lg:items-start pt-6 gap-y-2 lg:gap-x-6">
        <picture className="w-1/3 flex justify-center items-center lg:justify-start lg:items-start">
          <Image
            className="rounded-full ring-2 ring-green-700"
            src={banner}
            alt="main road"
            width="200"
            height="200"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
        </picture>
        <div className="w-2/3 flex flex-col justify-start items-start gap-y-2">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-center lg:text-left text-[#024685] font-semibold text-lg lg:font-bold lg:text-xl"
          >
            আসালামু আলাইকুম, আলহামদুলিল্লাহ, সকল প্রশংসা মহান আল্লাহ তা’লার
          </h1>
          <p className="flex justify-start gap-x-1 lg:gap-x-2">
            <span className="text-[9px] lg:text-sm">posted-</span>{" "}
            <span className="text-[9px] lg:text-sm">15 March 2025</span>
            <span className="text-[9px] lg:text-sm">by-</span>
            <span className="text-[9px] lg:text-sm">A K M GOLAM FARUK</span>
          </p>
          <Link href="/">
            <p
              style={{ fontFamily: "arial, sans-serif" }}
              className="leading-6 text-justify lg:text-left text-sm pb-16 lg:text-md lg:leading-7 "
            >
              আমি এ কে এম গোলাম ফারুক। ২০০৩ সালে ১২ জানুয়ারি শ্রদ্ধেয় বড়ভাই লায়ন্স জেলা ৩১৫ এ১ এর পাস্ট
              ডিস্ট্রিক্ট গভর্নর ও মাল্টিপল কাউন্সিলের পাস্ট কাউন্সিল চেয়ারপার্সন এ কে গোলাম কিবরিয়া ভাইয়ের অনুপ্রেরণায়
              লায়ন্স ক্লাব অব ঢাকা নিউ ডায়মন্ড এর সদস্য পদ গ্রহনের মাধ্যমে লায়নইজমে প্রবেশ করি। তারপর থেকে
              লায়নইজম হয়ে ওঠে আমার জীবনের অবিচ্ছেদ্য অংশ।
              {" "}
              <span className="underline text-black">[more]</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex  flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start gap-y-2 lg:gap-x-6">
        <picture className="w-1/3 flex justify-center items-center lg:justify-start lg:items-start">
          <Image
            className="rounded-full ring-2 ring-green-700"
            src={profile}
            alt="main road"
            width="200"
            height="200"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
        </picture>
        <div className="w-2/3 flex flex-col justify-start gap-y-2">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-center lg:text-left text-[#024685] font-semibold text-lg lg:font-bold lg:text-xl"
          >
            মানুষকে আপন করে নেয়ার বিষ্ময়কর ক্ষমতা আর আকর্ষণীয় নেতৃত্বের গুণে লায়ন এ কে এম গোলাম ফারুক
            অল্প দিনের মধ্যেই সকলের প্রিয়পাত্র হয়ে ওঠেন
          </h1>
          <p className="flex justify-start gap-x-1 lg:gap-x-2">
            <span className="text-[9px] lg:text-sm">posted-</span>{" "}
            <span className="text-[9px] lg:text-sm">02 February 2025</span>
            <span className="text-[9px] lg:text-sm">by-</span>
            <span className="text-[9px] lg:text-sm">A K M GOLAM FARUK</span>
          </p>
          <Link href="/">
            <p
              style={{ fontFamily: "arial, sans-serif" }}
              className="leading-6 text-sm text-justify lg:text-left pb-16 lg:text-md lg:leading-7 "
            >
              মানুষকে আপন করে নেয়ার বিষ্ময়কর ক্ষমতা আর আকর্ষণীয় নেতৃত্বের গুণে লায়ন এ কে এম গোলাম ফারুক
              অল্প দিনের মধ্যেই সকলের প্রিয়পাত্র হয়ে ওঠেন। নজর কাড়েন ডিস্ট্রিক্ট, মাল্টিপল ও আন্তর্জাতিক লায়ন্স অঙ্গনের
              শীর্ষ নেতৃত্বের। একে একে ক্লাব, ডিস্ট্রিক্ট ও মাল্টিপল কাউন্সিলের বিভিন্ন গুরুত্বপূর্ণ পদ অলংকৃত করেন। অত্যন্ত
              সাফল্যের সাথে তিনি সেসব পদে দায়িত্ব পালন করেন। লায়ন গোলাম ফারুক যেসব গুরুত্বপূর্ণ পোস্ট ও ইভেন্টে
              দায়িত্ব পালন করেছেন তার মধ্যে উল্লেখযোগ্য হলো..
              ক্লাব সেক্রেটারী, ক্লাব ডিরেক্টর, ক্লাব প্রেসিডেন্ট, ডিস্ট্রিক্ট কো-চেয়ারপার্সন, ডিস্ট্রিক্ট চেয়ারপার্সন, জোন চেয়ারপার্সন
              (এস.এ.), জোন চেয়ারপার্সন (প্রোজেক্ট), রিজিওন চেয়ারপার্সন (ক্লাবস), রিজিওন চেয়ারপার্সন (এস.এ.),
              রিজিওন চেয়ারপার্সন (হেডকোয়ার্টার)
              এছাড়াও তিনি কেবিনেট ট্রেজারার, কেবিনেট সেক্রেটারী, কাউন্সিল ট্রেজারার ও কাউন্সিল সেক্রেটারী’র মত অত্যন্ত
              ভাইটাল পদে বিশেষ দক্ষতার সাথে দায়িত্ব পালন করেন।
              {" "}
              <span className="underline text-black">[more]</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex  flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start gap-y-2 lg:gap-x-6">
        <picture className="w-1/3 flex justify-center items-center lg:justify-start lg:items-start">
          <Image
            className="rounded-full ring-2 ring-green-700"
            src={three}
            alt="main road"
            width="200"
            height="200"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
        </picture>
        <div className="w-2/3 flex flex-col justify-start gap-y-2">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-center lg:text-left text-[#024685] font-semibold text-lg lg:font-bold lg:text-xl"
          >
            এ কে এম গোলাম ফারুক তরুণদের কাছে এক জনপ্রিয় নাম
          </h1>
          <p className="flex justify-start gap-x-1 lg:gap-x-2">
            <span className="text-[9px] lg:text-sm">posted-</span>{" "}
            <span className="text-[9px] lg:text-sm">12 January 2025</span>
            <span className="text-[9px] lg:text-sm">by-</span>
            <span className="text-[9px] lg:text-sm">A K M GOLAM FARUK</span>
          </p>
          <Link href="/">
            <p
              style={{ fontFamily: "arial, sans-serif" }}
              className="leading-6 text-sm text-justify lg:text-left pb-16 lg:text-md lg:leading-7 "
            >
              এ কে এম গোলাম ফারুক তরুণদের কাছে এক জনপ্রিয় নাম। প্রাণ-প্রাচুর্যে ভরপুর তারুণ্য প্রেমী এই নেতা
              লিওদের আহ্বানে সাড়া দিয়ে বেশ কয়েকবার ডিস্ট্রিক্ট ও মাল্টিপলের লিও ক্লাবস চেয়ারপার্সন ও লিও ইয়ুথ
              এক্সচেঞ্জ কমিটির চেয়ারপার্সনের দায়িত্ব পালন করেন। লিওদের প্রতি তাঁর অফুরন্ত ¯েœহ, ভালোবাসা আর সমর্থন
              তাকে বানিয়েছে সত্যিকারের লিওবন্ধু। তাঁরই অনুপ্রেরণায় অনেক প্রাক্তন লিও লায়নইজমে প্রবেশ করে
              লায়নিজমের সেবা ও নেতৃত্বের পরিধিকে করেছে আরো বিস্তৃত ও আরো গতিময়।
              {" "}
              <span className="underline text-black">[more]</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
