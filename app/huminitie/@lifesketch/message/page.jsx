export default function Message() {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="w-3/5 flex justify-center items-center py-12">
        <form
          style={{ fontFamily: "arial, sans-serif" }}
          className="w-full flex flex-col justify-start items-start gap-y-2"
          action="/action_page.php"
        >
          <label htmlFor="fname">First Name</label>
          <input
            className="w-full border border-slate-200 p-1"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label htmlFor="lname">Last Name</label>
          <input
            className="w-full border border-slate-200 p-1"
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label htmlFor="country">E-mail</label>
          <input
            className="w-full border border-slate-200 p-1"
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
          />

          <label htmlFor="subject">Subject</label>
          <textarea
            className="w-full border border-slate-200 p-1"
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
          ></textarea>
          <div className="flex justify-center items-center">
            <input
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 cursor-pointer hover:text-white"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
