import Image from "next/image";
import ServiceCard from "./Utils/ServiceCard";
import {
  IoBrushOutline,
  IoDesktopOutline,
  IoStatsChartOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import HandsImage from "@/assets/about/hands.webp";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center"
    >
      <div className="mt-2 grid w-screen max-w-screen-xl grid-cols-1 items-center justify-center gap-12 px-5 pb-4 pt-8 md:mt-0 md:pb-10 md:pt-20 lg:grid-cols-[1fr_1fr] xl:px-0">
        <div>
          <h2 className="mb-4 text-3xl font-bold tracking-wider text-white md:text-4xl">
            SOBRE NOSSA EMPRESA
          </h2>
          <h3 className="mb-8 text-xl uppercase tracking-wider text-white">
            TRANSFORMANDO IDEIAS EM REALIDADE
          </h3>
          <div className="text-cinza flex flex-col gap-2 leading-8 tracking-wide lg:text-lg">
            <p>
              Bem-vindo à Thndr, onde transformamos a visão da sua marca em
              experiências digitais impactantes!
            </p>
            <p>
              Somos uma empresa especializada na produção de conteúdo
              estratégico, dedicada a potencializar a presença online dos nossos
              clientes por meio de soluções criativas e personalizadas.
            </p>
            <p>
              Entendemos que cada empresa é única, e é por isso que trabalhamos
              em parceria com nossos clientes para desenvolver estratégias que
              se alinhem às suas necessidades e objetivos.
            </p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-xl group">
          <Image src={HandsImage} alt="Mãos segurando um mundo de Internet" />
          <div className="absolute inset-0 z-20 rounded-lg bg-black opacity-10 transition-opacity duration-500 ease-in-out group-hover:opacity-0" />
          <div className="absolute inset-0 z-20 rounded-lg bg-gradient-to-t from-black via-transparent via-60% to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80" />
        </div>
      </div>
      <div className="md:pb-15 mt-2 grid w-screen max-w-screen-xl grid-cols-1 items-center justify-center gap-12 px-5 py-8  md:mt-0 md:py-20 md:pb-10 lg:grid-cols-[2fr_1fr] xl:px-0">
        <div className="order-2 grid grid-cols-1 items-center justify-center gap-8 md:grid-cols-2 lg:order-1">
          <ServiceCard
            title="Criação de Sites"
            description="Modernos e responsivos, garantem uma presença marcante online."
            icon={<IoDesktopOutline />}
            color="roxo"
            order="order-1"
          />
          <ServiceCard
            title="Vídeos"
            description="Criativos e envolventes, revelam a essência da sua marca."
            icon={<IoVideocamOutline />}
            color="roxo-claro"
            order="order-2"
          />
          <ServiceCard
            title="Designs"
            description="Inovadores e personalizados, capturam a identidade do seu negócio."
            icon={<IoBrushOutline />}
            color="roxo-claro"
            order="order-4 md:order-3"
          />
          <ServiceCard
            title="SEO"
            description="Estratégias de SEO que aumentam sua visibilidade e atraem visitantes."
            icon={<IoStatsChartOutline />}
            color="roxo"
            order="order-3 md:order-4"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="mb-4 text-3xl font-bold tracking-wider text-white md:text-4xl">
            NOSSOS SERVIÇOS
          </h2>
          <h3 className="mb-8 text-xl uppercase leading-relaxed tracking-wider text-white">
            SOLUÇÕES CRIATIVAS PARA IMPULSIONAR SUA MARCA
          </h3>
          <div className="text-cinza flex flex-col gap-2 leading-8 tracking-wide lg:text-lg">
            <p>
              Na Thndr, acreditamos que um conteúdo bem elaborado não apenas
              atrai a atenção, mas também gera resultados.
            </p>
            <p>
              Estamos aqui para ajudar você a construir uma marca forte e
              duradoura, utilizando as melhores práticas do mercado para
              garantir que sua mensagem chegue de forma eficaz ao seu
              público-alvo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
