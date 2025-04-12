import { MailboxIcon } from "lucide-react";
import { MapIcon } from "lucide-react";
import { Phone } from "lucide-react";
export default function Footer() {
  return (
    <div className="w-full bg-[#f9ba35] flex z-40 justify-center items-center py-10">
      <div className="w-4/5 grid justify-between items-end gap-y-7 lg:gap-x-2 lg:grid-cols-2">
        <div className="flex flex-col justify-start items-start">
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
        <div className="flex flex-row justify-between items-end gap-x-2 ">
          <div className="flex flex-col justify-start items-end gap-y-1">
            <div className="">
              <p className="border-b border-[#c13343]">Home</p>
            </div>
            <div className="">
              <p className="border-b border-[#c13343]">About Us</p>
            </div>
            <div className="">
              <p className="border-b border-[#c13343]">News</p>
            </div>
            <div className="">
              <p className="border-b border-[#c13343]">Contact</p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-end gap-y-1">
            <div className="">
              <p className="border-b border-[#c13343]">Join Page</p>
            </div>
            <div className="">
              <p className="border-b border-[#c13343]">Volunteering</p>
            </div>
            <div className="">
              <p className="border-b border-[#c13343]">Events</p>
            </div>
            <div className="">
              <p className="border-b border-[#c13343]">Socials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
