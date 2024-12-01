import { useState } from "react";

export default function Navbar() {
  const [navbarItem, setNavbarItem] = useState("Work");

  const handleNavbarClick = (e) => {
    console.log(e.target.innerHTML);
    setNavbarItem(e.target.innerHTML);
  };

  return (
    <div>
      <div className="w-full flex flex-row justify-between items-center pb-12 pt-6 select-none">
        <div className="text-slate-500 text-2xl font-semibold font-cursive">
          Sanket.
        </div>
        <ul className="md:flex flex-row font-semibold hidden">
          <li className="px-8 cursor-pointer flex flex-col text-justify items-center">
            {navbarItem === "Work" ? (
              <div className="pb-2 h-8 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
            ) : (
              <div className="h-8"></div>
            )}

            {navbarItem === "Work" ? (
              <div
                onClick={handleNavbarClick}
                className="bg-slate-100 px-4 py-1 rounded-lg shadow-xl"
              >
                Work
              </div>
            ) : (
              <div onClick={handleNavbarClick} className="px-4 py-1">
                Work
              </div>
            )}
          </li>

          <li className="px-8 cursor-pointer flex flex-col text-justify items-center">
            {navbarItem === "Resources" ? (
              <div className="pb-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 display-none"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
            ) : (
              <div className="h-8"></div>
            )}

            {navbarItem === "Resources" ? (
              <div
                onClick={handleNavbarClick}
                className="bg-slate-100 px-4 py-1 rounded-lg shadow-xl"
              >
                Resources
              </div>
            ) : (
              <div onClick={handleNavbarClick} className="px-4 py-1">
                Resources
              </div>
            )}
          </li>

          <li className="px-8 cursor-pointer flex flex-col text-justify items-center">
            {navbarItem === "Roadmap" ? (
              <div className="pb-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
            ) : (
              <div className="h-8"></div>
            )}

            {navbarItem === "Roadmap" ? (
              <div
                onClick={handleNavbarClick}
                className="bg-slate-100 px-4 py-1 rounded-lg shadow-xl"
              >
                Roadmap
              </div>
            ) : (
              <div onClick={handleNavbarClick} className="px-4 py-1">
                Roadmap
              </div>
            )}
          </li>

          <li className="px-8 cursor-pointer flex flex-col text-justify items-center">
            {navbarItem === "About me" ? (
              <div className="pb-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
            ) : (
              <div className="h-8"></div>
            )}

            {navbarItem === "About me" ? (
              <div
                onClick={handleNavbarClick}
                className="bg-slate-100 px-4 py-1 rounded-lg shadow-xl"
              >
                About me
              </div>
            ) : (
              <div onClick={handleNavbarClick} className="px-4 py-1">
                About me
              </div>
            )}
          </li>
        </ul>

        <div className="md:hidden cursor-pointer">
          <div className="hamburger">
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
            <div className="bg-slate-500 h-1 w-6 my-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
