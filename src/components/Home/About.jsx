import Image from "next/image";
import BoticarioLogo from "@/assets/partners/boticario.webp";
import MelissaLogo from "@/assets/partners/melissa.png";
import DaisoLogo from "@/assets/partners/daiso.png";

export default function About() {
  return (
    <section>
      <div className="relative z-10 mx-8 my-8 flex flex-col flex-wrap items-center font-body md:hidden">
        <h4 className="mb-2 text-center text-sm tracking-wider sm:mb-0">
          NOSSOS PARCEIROS DE CONFIANÇA
        </h4>
        <div className="flex w-full max-w-[450px] flex-wrap items-center justify-center gap-x-20">
          <img
            src={BoticarioLogo.src}
            alt="Boticario"
            className="w-1/4 py-6 brightness-0 invert transition-transform duration-500 hover:scale-110 sm:py-8 tall:w-1/3"
          />
          <img
            src={MelissaLogo.src}
            alt="Melissa"
            className="w-1/4 py-6 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/3"
          />
          <img
            src={DaisoLogo.src}
            alt="Daiso"
            className="w-1/4 py-6 brightness-0 invert transition-transform duration-500 hover:scale-110 tall:w-1/3"
            height={40}
          />
        </div>
      </div>
    </section>
  );
}
