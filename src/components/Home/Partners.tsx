import Image from "next/image";
import BoticarioLogo from "@/assets/partners/boticario.webp";
import MelissaLogo from "@/assets/partners/melissa.png";
import DaisoLogo from "@/assets/partners/daiso.png";
import PorscheLogo from "@/assets/partners/porsche.png";
import SKLogo from "@/assets/partners/sk.png";
import VianaLogo from "@/assets/partners/viana.png";
import VicLogo from "@/assets/partners/vic.png";

export default function Partners() {
  return (
    <section>
      <div className="relative z-10 my-8 flex flex-col flex-wrap items-center font-body lg:hidden">
        <h4 className="mb-10 text-center text-sm tracking-wider text-[#ffffff]">
          NOSSOS PARCEIROS DE CONFIANÇA
        </h4>
        <div className="grid grid-cols-2 justify-items-center gap-y-12">
          <Image
            src={BoticarioLogo}
            alt="Boticario"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
          <Image
            src={MelissaLogo}
            alt="Melissa"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
          <Image
            src={DaisoLogo}
            alt="Daiso"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
          {/* <Image
            src={PorscheLogo}
            alt="Porsche"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          /> */}
          <Image
            src={SKLogo}
            alt="SK"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
          <Image
            src={VianaLogo}
            alt="Viana"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
          <Image
            src={VicLogo}
            alt="Vic"
            className="w-1/2 brightness-0 invert transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
