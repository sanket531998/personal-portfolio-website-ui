export default function Navbar() {
  return (
    <div>
      <navbar className="w-full flex flex-row justify-between items-center py-12 select-none">
        <div className="text-slate-500 text-2xl font-semibold font-cursive">
          Sanket.
        </div>
        <ul className="md:flex flex-row font-semibold hidden">
          <li className="px-8 cursor-pointer">Work</li>
          <li className="px-8 cursor-pointer">Resources</li>
          <li className="px-8 cursor-pointer">Roadmap</li>
          <li className="px-8 cursor-pointer">About me </li>
        </ul>
        {/* <div className="hidden md:flex flex-row items-center">
          <p className=" text-slate-500 font-semibold cursor-pointer mx-2">
            Login
          </p>
          <p className="bg-slate-400 text-white font-semibold cursor-pointer mx-2 px-2 py-1 rounded hover:bg-white hover:text-black">
            Sign up
          </p>
        </div> */}
        <div className="md:hidden cursor-pointer">
          <div className="hamburger">
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
          </div>
        </div>
      </navbar>
    </div>
  );
}
