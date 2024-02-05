import { FaWhatsapp } from "react-icons/fa";
import Logo from "@/assets/logo/Logo";
import "@/styles/header.css";
import { HiMiniBars3CenterLeft, HiMiniXMark } from "react-icons/hi2";

export default function Header() {
  return (
    <nav
      id="nav"
      className="fixed z-40 flex w-full justify-center text-white backdrop-blur-md transition-all duration-500 ease-in-out"
    >
      <div
        id="nav-inner"
        className="navbar w-full max-w-screen-xl transition-all duration-300 border-[#ffffff75] py-6  sm:border-b"
      >
        <div className="navbar-start justify-between sm:justify-normal">
          <div className="drawer  z-[60] lg:hidden">
            <input id="drawer-nav" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content z-[70]">
              <label
                htmlFor="drawer-nav"
                className="btn btn-ghost z-[70] hover:bg-transparent"
              >
                {/* <HiOutlineBars3CenterLeft className="h-8 w-8" /> */}
                <HiMiniBars3CenterLeft
                  id="drawer-open-icon"
                  className="h-8 w-8"
                />

                <HiMiniXMark
                  id="drawer-close-icon"
                  className="hidden h-8 w-8 scale-125"
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="drawer-nav"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu menu-lg min-h-full w-80 max-w-full bg-black p-4 text-white ">
                {/* <div className="mb-8 mt-4 flex w-full justify-between">
                  <Logo
                    id="logo-nav"
                    className=" h-16 w-16 shrink-0  cursor-pointer"
                  />
                  <button className="btn btn-square bg-laranja text-white hover:bg-laranja-hover">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div> */}
                <li className="mt-24 hover:bg-transparent">
                  <a className="drawer-button cursor-pointer px-6 py-3">HOME</a>
                </li>
                <li>
                  <a className="drawer-button cursor-pointer px-6 py-3">
                    PORTFOLIO
                  </a>
                </li>
                <li>
                  <a className="drawer-button cursor-pointer px-6 py-3">
                    CONTATO
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a href="/">
            <Logo
              id="logo-nav"
              className=" ml-8 h-16 w-16 shrink-0 translate-x-1/2 cursor-pointer"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex px-1 text-base font-bold tracking-wider">
            <li>
              <a
                href="/"
                className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-transparent hover:bg-none hover:shadow-underline"
              >
                HOME
              </a>
            </li>
            <li>
              <a className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-transparent hover:bg-none hover:shadow-underline">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-transparent hover:bg-none hover:shadow-underline">
                CONTATO
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end z-50 hidden sm:flex">
          <a
            aria-label="Fale Conosco"
            href="https://wa.me/5511970319836"
            target="_blank"
            className="font-medium  mr-4 flex items-center gap-2 rounded-md bg-laranja p-3 text-center text-base font-bold text-white shadow-md duration-300 ease-in-out hover:bg-laranja-hover hover:shadow-xl sm:mr-8 sm:px-7 sm:py-3 sm:hover:-translate-y-2"
          >
            <FaWhatsapp className="text-4xl sm:text-3xl" />
            <p className="hidden items-center justify-center text-lg sm:flex">
              FALE CONOSCO
            </p>
          </a>
        </div>
      </div>
    </nav>
  );
}
