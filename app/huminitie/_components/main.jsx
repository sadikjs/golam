"use client"
import Image from "next/image";
import banner from "@/public/assets/career/25.jpeg";
import profile from "@/public/assets/career/23.jpeg";
import three from "@/public/assets/photos/2012/3.jpeg";
import logo from "@/public/assets/LionLogoTwo.png";
import Link from "next/link";
import { useState } from "react";
export default function Main() {
  const [open, setOpen] = useState(false);
  const [one, setOne] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center pt-10 pb-12 gap-y-8">
      <h1 className="font-bold text-2xl text-[#024685] border-b-2 border-[#fac236]" style={{marginBottom: "20px"}}>
        PORTRAIT OF A VISIONARY LEADER
      </h1>
      <div className="w-full lg:w-2/3 border border-slate-300 lg:p-2 flex flex-col justify-center items-center lg:flex-row  lg:justify-start lg:items-start pt-6 gap-y-2 lg:gap-x-6">
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
        <div className="w-2/3 flex flex-col justify-start items-start gap-y-2 pb-16">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-center lg:text-left text-[#024685] font-semibold text-lg lg:font-bold lg:text-xl"
          >
            Portrait of a Visionary Leader:
          </h1>
          <p
            style={{ fontFamily: "arial, sans-serif" }}
            className="leading-6 text-justify lg:text-left text-sm lg:text-md lg:leading-7 "
          >
            Lion DG AKM Golam Faruk
            I am Lion AKM Golam Faruk. I joined Lions Club in 2003 on July 12 through my elder brother AK Golam Kibria FCA PDG PCC.
            My journey began with the Lions club of Dhaka New Daimond, District 315 A1 and continued through various positions and
            responsibilities in the Lions movement. {
              one && (
                <span>
                  Since then, I have devoted myself to humanitarian service and leadership development under the guidance of my mentors in Dhaka New Daimond.
                  From the very beginning, I have carried an indomitable spirit for service, leadership, and excellence. I have served in many distinguished positions and actively contributed to shaping the Lions Club's mission in Bangladesh and beyond. My leadership trajectory includes roles such as Club President, Zone Chairperson, Region Chairperson, District Cabinet Treasurer, Cabinet Secretary, District Secretary (Admin), District Governor (Elect), and now, as the proud District Governor of Lions District 315 A1 for the year 2025-26.
                  Throughout my Lions journey, I have received numerous prestigious awards, including:
                  •	International President's Award
                  •	International President's Medal
                  •	International President's Certificate
                  •	International President's Leadership Award
                  •	District Governor Appreciation Award
                  •	Multiple District Appreciation Award
                  •	Club Extension Award
                  •	LEO Clubs Chairperson Award
                  •	LCIF Donor Award
                  Born on July 30, 1964, in the village of JAGIRVUGLI, in Mymensing, I grew up in a family committed to education and social service. My father, Late Sohorab Ali, and mother, Late Jobeda Khatun, were inspirations behind my values of honesty and service.
                  From childhood, I was involved in community and volunteer activities. As a social worker, I have built schools, distributed relief, and led numerous development projects in rural areas.
                  In my professional life, I am a successful entrepreneur. I am the founder and CEO of the prominent companies. In 1997, I have established a Legal Aid Firm called FARUK AND ASSOCIATES, Tax, VAT and company law Advisor. I also created the ISO certified software company called Millenium System software Ltd.
                  I have travelled to many countries including Malaysia, Singapore, India, Nepal, Thailand, and China, gaining global exposure and learning.
                  I first joined the Lions movement formally on August 27, 1993. My guiding light was Lion AK Golam Kibria. I have also been involved in other social organizations.
                  I believe in action, empathy, and integrity. My vision as District Governor is to empower communities, strengthen youth programs, and expand Lions’ service outreach across Bangladesh.
                  With your support, I aim to make 2025-26 a transformational year for District 315 A1, focusing on sustainability, inclusion, and impactful service.
                  Lion AKM Golam Faruk District Governor, 2025-26 Lions District 315 A1
                </span>
              )
            }
          </p>
          <button onClick={() => setOne(!one)}>
            [more]
          </button>
        </div>
      </div>
      <div className="w-full lg:w-2/3 border border-slate-300 lg:p-2 flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start gap-y-2 lg:gap-x-6">
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
        <div className="w-2/3 flex flex-col justify-start gap-y-2 pb-16">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-center lg:text-left text-[#024685] font-semibold text-lg lg:font-bold lg:text-xl"
          >
            2025–26: A Strategic Vision
          </h1>
          <p
            style={{ fontFamily: "arial, sans-serif" }}
            className="leading-6 text-sm text-justify lg:text-left lg:text-md lg:leading-7 "
          >
            Youth Empowerment – Expand Leo Club programs for leadership and community engagement
            Service Outreach – Launch health screenings, educational drives, environmental projects
            Sustainable & Inclusive Growth – Integrate eco-friendly initiatives and serve marginalized communities
            Elevated Impact – Foster transformational projects that reinforce Lions' global motto, “We Serve”
          </p>
          <Link className="underline text-black"
            href="/"
          >[more]</Link>
        </div>
      </div>
      {/* <div className="w-full lg:w-2/3 flex  flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start gap-y-2 lg:gap-x-6">
        <picture className="w-1/3 flex justify-center items-center lg:justify-start lg:items-start">
          <Image
            className="rounded-full ring-2 ring-green-700"
            src={logo}
            alt="main road"
            width="200"
            height="200"
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
        </picture>
        <div className="w-2/3 flex flex-col justify-start gap-y-2 pb-16">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-center lg:text-left text-[#024685] font-semibold text-lg lg:font-bold lg:text-xl"
          >
            Videos
          </h1>
          <iframe
            className="w-full"
            src="https://player.cloudinary.com/embed/?cloud_name=ditjy209s&public_id=ahjrdsyqzeimoxno8l39&profile=cld-default"
          ></iframe>
        </div>
      </div> */}
      <div className="w-full lg:w-2/3 border border-slate-300 lg:p-2 flex pb-16 flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start gap-y-2 lg:gap-x-6">
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
        <div className="w-2/3 flex flex-col justify-start gap-y-2 ">
          <h1
            style={{ fontFamily: "Times New Roman, serif" }}
            className="text-center lg:text-left text-[#024685] font-semibold text-lg lg:font-bold lg:text-xl"
          >
            My leadership combine proven excellence
          </h1>
          <p
            style={{ fontFamily: "arial, sans-serif" }}
            className="leading-6 text-sm text-justify lg:text-left lg:text-md lg:leading-7 "
          >
            My leadership combine proven excellence, professional acumen, and a bold vision. With your support, District 315‑A1 is set to become a model of sustainable, inclusive, community-driven service in Bangladesh in 2025‑26.
          </p>
          <Link className="underline text-black pb-8"
            href="/"
          >[more]</Link>
        </div>
      </div>
      {
        open && (
          <>
            <div className="w-full lg:w-2/3 border border-slate-300 lg:p-2 flex  pb-16 flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start gap-y-2 lg:gap-x-6">
              <picture className="w-1/3 flex justify-center items-center lg:justify-start lg:items-start">
                <Image
                  className="rounded-full ring-2 ring-green-700"
                  src={logo}
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
                  International Awards
                </h1>
                <p
                  style={{ fontFamily: "arial, sans-serif" }}
                  className="leading-6 text-sm text-justify lg:text-left lg:text-md lg:leading-7 "
                >
                  International President&rsquo;s Awards
                  International President&rsquo;s Medal
                  International President&rsquo;s Certificate
                  International President&rsquo;s Leadership Award
                  District Governor Appreciation Award
                  Multiple District Appreciation award
                  Club Extension Award
                  LEO clubs Chairperson Award
                  I LCIF Donar Award
                  {" "}
                </p>
                <Link className="underline text-black"
                  href="/"
                >[more]</Link>
              </div>
            </div>
          </>
        )
      }
      <button className="w-1/2 cursor-pointer bg-[#f1b432] rounded-sm p-2" onClick={() => setOpen(!open)}>All Post</button>
    </div>
  );
}
