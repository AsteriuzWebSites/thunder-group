import { FaWhatsapp } from "react-icons/fa";
import Logo from "@/assets/logo/Logo";
import "@/styles/header.css";
import { HiMiniBars3CenterLeft, HiMiniXMark } from "react-icons/hi2";
import Link from "next/link";

export default function Header() {
  return (
    <nav
      id="nav"
      className="fixed z-40 flex w-full justify-center text-white backdrop-blur-md transition-all duration-500 ease-in-out"
    >
      <div
        id="nav-inner"
        className="navbar w-full max-w-screen-xl border-[#ffffff75] py-6 transition-all duration-300  sm:border-b"
      >
        <div className="navbar-start justify-between sm:justify-normal">
          <div className="drawer  z-[60] lg:hidden">
            <input id="drawer-nav" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content z-[70]">
              <label
                htmlFor="drawer-nav"
                className="btn btn-ghost z-[70] ml-3 rounded-lg bg-roxo p-2"
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
                <li className="mt-24 hover:bg-transparent">
                  <Link
                    href="#hero"
                    className="drawer-button cursor-pointer px-6 py-3"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="drawer-button cursor-pointer px-6 py-3"
                  >
                    EMPRESA
                  </Link>
                </li>
                <li>
                  <Link
                    href="#portfolio"
                    className="drawer-button cursor-pointer px-6 py-3"
                  >
                    PORTFOLIO
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="drawer-button cursor-pointer px-6 py-3"
                  >
                    CONTATO
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link aria-label="Home" href="/">
            <Logo
              id="logo-nav"
              className="ml-8 h-16 w-16 shrink-0 translate-x-1/2 cursor-pointer duration-300 ease-in-out hover:scale-150 md:hover:scale-125"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex px-1 text-base font-bold tracking-wider">
            <li>
              <Link
                href="#hero"
                className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-transparent hover:bg-none hover:shadow-roxoUnderline"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-transparent  hover:bg-none hover:shadow-roxoUnderline"
              >
                EMPRESA
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-transparent  hover:bg-none hover:shadow-roxoUnderline"
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                href="#contato"
                className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-transparent hover:bg-none hover:shadow-roxoUnderline"
              >
                CONTATO
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end z-50 hidden lg:flex">
          <a
            aria-label="Fale Conosco"
            href="https://wa.me/5511966017667"
            target="_blank"
            className="mr-4 flex items-center gap-2 rounded-lg bg-roxo p-3 text-center text-base font-bold text-white shadow-md duration-300 ease-in-out hover:bg-roxo-hover hover:shadow-xl sm:mr-8 sm:px-7 sm:py-3 sm:hover:-translate-y-2"
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
