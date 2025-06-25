export default function Footer() {
  return (
    <div className="w-full bg-[#102e57] flex z-40 justify-center items-center py-10">
      <div style={{fontFamily:"arial, sans-serif"}} className="w-4/5 grid grid-cols-1 justify-start items-center lg:grid-cols-2 lg:gap-x-2">
        <div className="flex flex-col justify-start items-start pb-6 lg:pb-0">
          <div className="flex flex-row justify-start items-start gap-x-2 py-2">
            <p className="text-[#e7e5eb]">
              Cell: +8801713035399, Res: +88-02-9136775,
            </p>
          </div>
          <div className="flex flex-row justify-start items-start gap-x-2 py-2">
            <p className="text-[#e7e5eb]">Email: golam.faruk@yahoo.com</p>
          </div>
          <div className="flex flex-row justify-start items-start gap-x-2 py-2">
            <p className="text-[#e7e5eb]">
              Address: F. Haque Tower, Level-10, 107, Bir Uttam CR Datta Road,
              Kawranbazar, Dhaka-1205.{" "}
            </p>
          </div>
          <div className="flex flex-row justify-start items-start gap-x-2 py-2">
            <p className="text-[#e7e5eb]">
              FARUK & ASSOCIATES, Consultant, Tax & Company Affairs
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-around">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <div className="">
            <p className="border-b text-[#e7e5eb]">Home</p>
          </div>
          <div className="">
            <p className="border-b text-[#e7e5eb]">About Us</p>
          </div>
          <div className="">
            <p className="border-b text-[#e7e5eb]">News</p>
          </div>
          <div className="">
            <p className="border-b  text-[#e7e5eb]">Contact</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <div className="">
            <p className="border-b  text-[#e7e5eb]">Join Page</p>
          </div>
          <div className="">
            <p className="border-b  text-[#e7e5eb]">Volunteering</p>
          </div>
          <div className="">
            <p className="border-b text-[#e7e5eb]">Events</p>
          </div>
          <div className="">
            <p className="border-b  text-[#e7e5eb]">Socials</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
