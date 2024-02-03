import { FaRegPlayCircle } from "react-icons/fa";
import Image from "next/image";
import BoticarioLogo from "@/assets/partners/boticario.webp";
import MelissaLogo from "@/assets/partners/melissa.png";
import DaisoLogo from "@/assets/partners/daiso.png";

export default function Hero() {
  return (
    <section className="relative flex h-[580px] flex-col items-center justify-end sm:h-screen sm:justify-center">
      <div className="w-screen max-w-screen-xl px-4">
        <div className="w-full max-w-screen-lg">
          <h2 className="font-heading font-normal">
            O ESTÚDIO DE EDIÇÃO DE VÍDEO PARA
          </h2>
          <ul className="my-5 flex flex-wrap gap-2 font-category">
            <li className="rounded-lg px-3 py-2 outline outline-1">
              ENTRETENIMENTO
            </li>
            <li className="rounded-lg px-3 py-2 outline outline-1">
              SOCIAL MEDIA
            </li>
            <li className="rounded-lg px-3 py-2 outline outline-1">
              MARKETING
            </li>
            <li className="rounded-lg px-3 py-2 outline outline-1">
              E-COMMERCE
            </li>
            <li className="rounded-lg px-3 py-2 outline outline-1">
              EDUCATIONAL
            </li>
          </ul>
          <h1 className="font-heading text-[26px] font-bold leading-snug tracking-tight md:text-[63px] md:leading-none">
            DESBLOQUEAR TODO O POTENCIAL DA SUA MARCA
          </h1>
          <div className="relative mt-8 grid w-4/5 grid-rows-2 gap-y-5 sm:w-3/5 md:w-1/2 lg:h-3 lg:grid-cols-2 lg:grid-rows-none">
            <button className="rounded-lg rounded-l-lg bg-laranja py-4 text-sm transition-colors duration-300 hover:bg-laranja-hover lg:rounded-r-none">
              Fale com o especialista{" "}
            </button>
            <div className="blob absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-2 bg-white p-2 text-sm text-black lg:top-0 lg:translate-y-[8px]">
              Ou
            </div>
            <button className="box-border flex items-center justify-center rounded-lg rounded-r-lg border-2 border-white py-4 text-xs lg:rounded-l-none lg:text-sm">
              <FaRegPlayCircle className="mr-2 inline-block" />
              Assista nosso vídeo{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 mb-6 hidden flex-col items-center font-body md:flex">
        <h4 className="text-sm tracking-wider">
          NOSSOS PARCEIROS DE CONFIANÇA
        </h4>
        <div className="flex w-full max-w-[450px] items-center justify-center gap-x-20">
          <img
            src={BoticarioLogo.src}
            alt="Boticario"
            className="w-1/3 py-8 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
          <img
            src={MelissaLogo.src}
            alt="Melissa"
            className="w-1/3 py-8 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
          <img
            src={DaisoLogo.src}
            alt="Daiso"
            className="w-1/3 py-8 brightness-0 invert transition-transform duration-500 hover:scale-110"
            height={40}
          />
        </div>
      </div>
    </section>
  );
}
