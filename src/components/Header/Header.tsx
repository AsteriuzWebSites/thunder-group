import { FaWhatsapp } from "react-icons/fa";
import Logo from "@/assets/logo/Logo";
import "@/styles/header.css";

export default function Header() {
  return (
    <nav className="flex w-full justify-center text-white">
      <div className="navbar fixed z-50 w-full max-w-screen-xl border-[#ffffff75] py-6 sm:border-b">
        <div className="navbar-start justify-between sm:justify-normal">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn-ghost btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-sm z-[1] mt-[33px] rounded-b-md p-2 backdrop-blur transition-all duration-300"
            >
              <li>
                <a className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-none ">
                  HOME
                </a>
              </li>
              <li>
                <a className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-none ">
                  PORTFOLIO
                </a>
              </li>
              <li>
                <a className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-none ">
                  CONTATO
                </a>
              </li>
            </ul>
          </div>
          <Logo
            id="logo-nav"
            className=" ml-8 h-16 w-16 shrink-0 translate-x-1/2 cursor-pointer"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex px-1 text-base font-bold tracking-wider">
            <li>
              <a className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-none hover:shadow-[0_3px_tomato]">
                HOME
              </a>
            </li>
            <li>
              <a className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-none hover:shadow-[0_3px_tomato]">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a className="cursor-pointer rounded-none px-6 py-3 transition-all duration-300 hover:bg-none hover:shadow-[0_3px_tomato]">
                CONTATO
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden sm:flex">
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
