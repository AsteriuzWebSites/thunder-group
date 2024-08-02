import Image from "next/image";
import BoticarioLogo from "@/assets/partners/boticario.webp";
import MelissaLogo from "@/assets/partners/melissa.png";
import DaisoLogo from "@/assets/partners/daiso.png";
import PorscheLogo from "@/assets/partners/porsche.png";
import SKLogo from "@/assets/partners/sk.png";
import VianaLogo from "@/assets/partners/viana.png";
import VicLogo from "@/assets/partners/vic.png";
import { HiPlay } from "react-icons/hi2";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[650px] flex-col items-center justify-center md:h-screen"
    >
      <div className="-mb-10 w-screen max-w-screen-xl px-5 lg:mb-10 xl:px-0">
        <div className="w-full max-w-screen-lg py-4">
          <h2 className="font-heading text-sm font-normal md:text-base">
            O ESTÚDIO DE EDIÇÃO DE VÍDEO PARA
          </h2>
          <ul className="mb-4 mt-2 flex flex-wrap gap-x-5 gap-y-3 font-category text-sm tracking-wide md:my-4 md:text-base">
            <li>
              <ul className="flex gap-4 md:gap-5">
                <li className="rounded-lg px-2 pb-1 pt-2 outline outline-1 outline-semiwhite transition-transform duration-300 hover:scale-105 md:px-4">
                  Design
                </li>
                <li className="rounded-lg px-2 pb-1 pt-2 outline outline-1 outline-semiwhite transition-all duration-300 hover:scale-105 md:px-4">
                  SOCIAL MEDIA
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex gap-5">
                <li className="rounded-lg px-2 pb-1 pt-2 outline outline-1 outline-semiwhite transition-all duration-300 hover:scale-105 md:px-4">
                  MARKETING
                </li>
                <li className="rounded-lg px-2 pb-1 pt-2 outline outline-1 outline-semiwhite transition-all duration-300 hover:scale-105 md:px-4">
                  E-COMMERCE
                </li>
              </ul>
            </li>
          </ul>
          <h1 className="font-heading text-base font-bold leading-snug tracking-tight xs:text-2xl sm:text-4xl md:text-[63px] md:leading-none">
            DESBLOQUEAR TODO O POTENCIAL DA SUA MARCA
          </h1>
          <div className="relative mt-3 grid w-4/5 grid-rows-2 gap-y-3 sm:w-3/5 md:mt-8 md:w-1/2 lg:h-3 lg:grid-cols-2 lg:grid-rows-none">
            <a
              href="https://wa.me/5511966017667"
              target="_blank"
              className="flex items-center justify-center rounded-lg rounded-l-lg bg-roxo py-4 align-middle text-sm transition-colors duration-300 hover:bg-roxo-hover lg:rounded-r-none"
            >
              Fale com o especialista{" "}
            </a>
            <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-2 bg-white p-2 text-sm text-black lg:top-0 lg:translate-y-[8px]">
              <div className="absolute left-0 top-0 h-full w-full scale-[1.4] animate-[pulse-lg_2s_cubic-bezier(0.4,0,0.6,1)_infinite]  rounded-full bg-white opacity-50"></div>
              <span className="relative z-10">Ou</span>
            </div>
            <button
              id="trailer-button-naMB8YJ5yps"
              className="trailer-button group box-border  flex items-center justify-center rounded-lg rounded-r-lg border-2 border-white py-4 text-xs transition-all duration-300  lg:rounded-l-none lg:text-sm"
            >
              <HiPlay className="mr-2 inline-block duration-300 group-hover:animate-[bounce-right_1s_infinite]" />
              Assista nosso vídeo{" "}
            </button>
            <dialog id="trailer-modal-naMB8YJ5yps" className="modal">
              <div
                id="trailer-box"
                className="modal-box aspect-video max-w-screen-md bg-black p-0"
              >
                <div id="naMB8YJ5yps" className="overflow-visible"></div>
              </div>
              <form
                method="dialog"
                id="trailer-modal-backdrop"
                className="modal-backdrop"
              >
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 hidden flex-col items-center font-body md:mb-4 lg:flex">
        <h4 className="text-sm tracking-wider">
          NOSSOS PARCEIROS DE CONFIANÇA
        </h4>
        <div className="flex max-w-screen-xl items-center  justify-center gap-x-20 px-5 xl:px-0">
          <Image
            src={BoticarioLogo}
            alt="Boticario"
            className="w-1/5 min-w-0  py-8 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/4"
          />
          <Image
            src={MelissaLogo}
            alt="Melissa"
            className="w-1/5 min-w-0 py-8 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/4"
          />
          <Image
            src={DaisoLogo}
            alt="Daiso"
            className="w-1/5 min-w-0 py-8 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/4"
          />
          <Image
            src={PorscheLogo}
            alt="Porsche"
            className="w-1/5 min-w-0  py-8 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/5"
          />
          <Image
            src={SKLogo}
            alt="SK"
            className="w-1/5 min-w-0 py-8 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/4"
          />
          <Image
            src={VianaLogo}
            alt="Viana"
            className="w-1/5 min-w-0 py-8 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/4"
          />
          <Image
            src={VicLogo}
            alt="Vic"
            className="w-1/5 min-w-0 py-8 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/4"
          />
        </div>
      </div>
    </section>
  );
}
