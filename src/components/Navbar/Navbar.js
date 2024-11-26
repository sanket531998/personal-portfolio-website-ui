export default function Navbar() {
  return (
    <>
      <navbar className="bg-slate-200 w-full h-14 flex flex-row justify-between shadow-xl items-center px-4 select-none">
        <div className="text-slate-500 text-xl font-semibold">Sanket</div>
        <ul className="md:flex flex-row font-semibold hidden">
          <li className="px-4 cursor-pointer">Work</li>
          <li className="px-4 cursor-pointer">Resources</li>
          <li className="px-4 cursor-pointer">Roadmap</li>
          <li className="px-4 cursor-pointer">About me </li>
        </ul>
        <div className="hidden md:flex flex-row items-center">
          <p className=" text-slate-500 font-semibold cursor-pointer mx-2">
            Login
          </p>
          <p className="bg-slate-400 text-white font-semibold cursor-pointer mx-2 px-2 py-1 rounded hover:bg-white hover:text-black">
            Sign up
          </p>
        </div>
        <div className="md:hidden cursor-pointer">
          <div class="hamburger">
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
          </div>
        </div>
      </navbar>
    </>
  );
}
