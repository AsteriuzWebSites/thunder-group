import Image from "next/image";
import ContactImage from "@/assets/contact/astronaut.webp";

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative mb-10 flex flex-col items-center justify-center"
    >
      <div className="-mb-4 mt-8 flex w-screen max-w-screen-xl flex-col items-center justify-center px-5 py-8 md:-mb-0 md:mt-4 md:py-14 xl:px-0">
        <h2 className="mb-4 text-3xl font-bold tracking-wider text-white md:text-4xl">
          FALE CONOSCO
        </h2>
        <h3 className="text-center text-xl tracking-wider text-white">
          NOSSA EQUIPE ESTÁ PRONTA PARA AJUDAR
        </h3>
      </div>
      <div
        className="grid w-screen
       max-w-screen-xl gap-x-6 rounded-lg p-5 md:grid-cols-[1.5fr,1fr]"
      >
        <div className="order-2 flex h-full flex-col gap-10 md:order-1 md:p-6">
          <div className="mt-10 flex flex-col gap-3 md:mt-0">
            <h3 className="text-center  text-3xl font-bold text-white md:text-left">
              Envie um email
            </h3>
            <h4 className="text-center text-lg text-white md:text-left">
              Junte-se a nós e transforme ideias em arte. Vamos criar algo
              extraordinário juntos!
            </h4>
          </div>
          <form id="contactForm" className="flex flex-grow flex-col gap-5">
            <input
              id="name"
              type="text"
              placeholder="Nome"
              className="rounded-lg bg-zinc-900 p-3 text-white"
              required
            />
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="rounded-lg bg-zinc-900 p-3 text-white autofill:!bg-zinc-900"
              required
            />
            <textarea
              id="message"
              placeholder="Mensagem"
              className="h-40 flex-grow rounded-lg bg-zinc-900 p-3 text-white md:h-auto"
              required
            ></textarea>
            <a
              id="mailtoLink"
              className="flex cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-[#763AF5] to-[#A604F2] p-3 text-white "
            >
              Enviar mensagem
            </a>
          </form>
        </div>
        <div className="order-1 md:order-2 shine rounded-lg">
          <Image src={ContactImage} alt="astronaut" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}
