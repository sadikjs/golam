import { MailboxIcon } from "lucide-react";
import { MapIcon } from "lucide-react";
import { Phone } from "lucide-react";
export default function Footer() {
  return (
    <div className="w-screen bg-[#f9ba35] flex justify-center items-center mt-8 py-6">
      <div className="w-4/5 flex flex-col justify-between items-center gap-6 lg:gap-4 lg:flex-row ">
        <div className="flex flex-col justify-start ">
          <div className="flex flex-row items-center gap-2 py-2">
            <Phone className="text-[#c13343]" />
            <p className="">+88 01777 - 098767</p>
          </div>
          <div className="flex flex-row items-center gap-2 py-2">
            <MailboxIcon className="text-[#c13343]" />
            <p className="">info@golamfaruk.org</p>
          </div>
          <div className="flex flex-row items-center gap-2 py-2">
            <MapIcon className="text-[#c13343]" />
            <p className="">57/3, 57/4, panthapath, Dhaka-1205</p>
          </div>
        </div>
        <div>
          <div className="border-b border-[#c13343] mb-3">
            <p>Home</p>
          </div>
          <div className="border-b border-[#c13343] mb-3">
            <p>About Us</p>
          </div>
          <div className="border-b border-[#c13343] mb-3">
            <p>News</p>
          </div>
          <div className="">
            <p>Contact</p>
          </div>
        </div>
        <div>
          <div className="border-b border-[#c13343] mb-3">
            <p>Join Page</p>
          </div>
          <div className="border-b border-[#c13343] mb-3">
            <p>Volunteering</p>
          </div>
          <div className="">
            <p>Events</p>
          </div>
        </div>
      </div>
    </div>
  );
}
