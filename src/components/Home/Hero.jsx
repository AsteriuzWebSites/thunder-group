import Image from "next/image";
import BoticarioLogo from "@/assets/partners/boticario.webp";
import MelissaLogo from "@/assets/partners/melissa.png";
import DaisoLogo from "@/assets/partners/daiso.png";
import PorscheLogo from "@/assets/partners/porsche.png";
import { HiPlay } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="relative flex h-[650px] flex-col items-center justify-end md:h-screen md:justify-center">
      <div className="mb-10 w-screen max-w-screen-xl px-8">
        <div className="w-full max-w-screen-lg py-4">
          <h2 className="font-heading text-sm font-normal md:text-base">
            O ESTÚDIO DE EDIÇÃO DE VÍDEO PARA
          </h2>
          <ul className="my-5 flex flex-wrap gap-5 font-category text-sm xs:text-base">
            <li>
              <ul className="flex gap-5">
                <li className="rounded-lg px-3 py-2 outline outline-1 outline-semiwhite transition-transform duration-300 hover:scale-105 md:text-base">
                  ENTRETENIMENTO
                </li>
                <li className="rounded-lg px-3 py-2 outline outline-1 outline-semiwhite transition-all duration-300 hover:scale-105 md:text-base">
                  SOCIAL MEDIA
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex gap-5">
                <li className="rounded-lg px-3 py-2 outline outline-1 outline-semiwhite transition-all duration-300 hover:scale-105 md:text-base">
                  MARKETING
                </li>
                <li className="rounded-lg px-3 py-2 outline outline-1 outline-semiwhite transition-all duration-300 hover:scale-105 md:text-base">
                  E-COMMERCE
                </li>
              </ul>
            </li>
          </ul>
          <h1 className="font-heading text-2xl font-bold leading-snug tracking-tight xs:text-3xl sm:text-4xl md:text-[63px] md:leading-none">
            DESBLOQUEAR TODO O POTENCIAL DA SUA MARCA
          </h1>
          <div className="relative mt-8 grid w-4/5 grid-rows-2 gap-y-3 sm:w-3/5 md:w-1/2 lg:h-3 lg:grid-cols-2 lg:grid-rows-none">
            <button className="rounded-lg rounded-l-lg bg-roxo py-4 text-sm transition-colors duration-300 hover:bg-roxo-hover lg:rounded-r-none">
              Fale com o especialista{" "}
            </button>
            <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-2 bg-white p-2 text-sm text-black lg:top-0 lg:translate-y-[8px]">
              <div className="absolute left-0 top-0 h-full w-full scale-[1.4] animate-[pulse-lg_2s_cubic-bezier(0.4,0,0.6,1)_infinite]  rounded-full bg-white opacity-50"></div>
              <span className="relative z-10">Ou</span>
            </div>
            <button
              id="trailer-button"
              className="group box-border  flex items-center justify-center rounded-lg rounded-r-lg border-2 border-white py-4 text-xs transition-all duration-300  lg:rounded-l-none lg:text-sm"
            >
              <HiPlay className="mr-2 inline-block duration-300 group-hover:animate-[bounce-right_1s_infinite]" />
              Assista nosso vídeo{" "}
            </button>
            <dialog id="trailer-modal" className="modal">
              <div
                id="trailer-box"
                className="modal-box aspect-video max-w-screen-md bg-black p-0"
              >
                <div id="trailer-player" className="overflow-visible"></div>
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
      <div className="absolute bottom-0 hidden flex-col items-center font-body md:flex tall:mb-6">
        <h4 className="text-sm tracking-wider">
          NOSSOS PARCEIROS DE CONFIANÇA
        </h4>
        <div className="flex w-full max-w-[450px] items-center justify-center gap-x-20">
          <img
            src={BoticarioLogo.src}
            alt="Boticario"
            className="w-1/4 py-8 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/3"
          />
          <img
            src={MelissaLogo.src}
            alt="Melissa"
            className="w-1/4 py-8 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/3"
          />
          <img
            src={DaisoLogo.src}
            alt="Daiso"
            className="w-1/4 py-8 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/3"
            height={40}
          />
          {/* <img
            src={PorscheLogo.src}
            alt="Daiso"
            className="w-1/4 py-8 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/3"
            height={40}
          /> */}
        </div>
      </div>
    </section>
  );
}
