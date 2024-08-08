import Logo from "@/assets/logo/Logo";
import Link from "next/link";
import FooterCategory from "./FooterCategory";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoCallOutline,
  IoTimeOutline,
  IoLogoYoutube,
  IoHomeOutline,
  IoImageOutline,
  IoPeopleOutline,
  IoMailOutline,
  IoLogoLinkedin,
} from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-background text-base lg:pt-8">
      <div className="bg-background mx-auto w-full max-w-screen-xl p-4">
        <div className="md:flex md:justify-between">
          <div className="obs-hidden mb-8 ml-0 mt-0 pb-4 pt-4 md:m-4 md:mb-0 md:mr-10 md:pt-0 lg:ml-16 lg:mr-10">
            <Link
              aria-label="Ir para o início"
              href="#start"
              className="flex justify-center align-middle"
            >
              <Logo
                id="logo-nav"
                className="h-28 cursor-pointer duration-300 ease-in-out hover:scale-110 md:h-32 md:hover:scale-110"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-1 sm:gap-6 md:w-10/12 md:grid-cols-3 md:gap-10 md:text-left lg:grid-cols-[3fr,3fr,1fr]">
            <FooterCategory
              title="Contato"
              delay={3}
              activeLink={true}
              links={[
                {
                  text: "(11) 96957-3861",
                  href: "tel:+11969573861",
                  renderIcon: (className) => (
                    <IoCallOutline className={className} />
                  ),
                  color: "text-blue-500",
                },
                {
                  text: "(11) 96957-3861",
                  href: "https://wa.me/5511969573861",
                  renderIcon: (className) => (
                    <IoLogoWhatsapp className={className} />
                  ),
                  color: "text-green-500",
                },
                {
                  text: ["contatogrupothunder@gmail.com"],
                  href: "mailto:contatogrupothunder@gmail.com",
                  renderIcon: (className) => (
                    <IoMailOutline className={className} />
                  ),
                  color: "text-purple-500",
                  fontSize: "text-xs xs:text-base md:text-xs lg:text-base",
                },
              ]}
            />
            <FooterCategory
              title="Navegação"
              delay={6}
              activeLink={true}
              links={[
                {
                  text: "Home",
                  color: "text-purple-500",
                  href: "#home",
                  renderIcon: (className) => (
                    <IoHomeOutline className={className} />
                  ),
                  target: "_self",
                },
                {
                  text: "Portfólio",
                  color: "text-purple-500",
                  href: "#portfolio",
                  renderIcon: (className) => (
                    <IoImageOutline className={className} />
                  ),
                  target: "_self",
                },
                {
                  text: "Contato",
                  color: "text-purple-500",
                  href: "#contato",
                  renderIcon: (className) => (
                    <IoPeopleOutline className={className} />
                  ),
                  target: "_self",
                },
              ]}
            />
            {/* <FooterCategory
              title="Atendimento"
              activeLink={false}
              delay={9}
              links={[
                {
                  text: ["Segunda a Sexta:", "08:00 às 17:00"],
                  renderIcon: (className) => (
                    <IoTimeOutline className={className} />
                  ),
                },
              ]}
            /> */}
            <FooterCategory
              title="Siga-nos"
              activeLink={true}
              delay={12}
              links={[
                {
                  text: "Linkedin",
                  href: "https://www.linkedin.com/company/thundergroup/?viewAsMember=true",
                  renderIcon: (className) => (
                    <IoLogoLinkedin className={className} />
                  ),
                  color: "text-blue-500",
                },
                {
                  text: "Instagram",
                  href: "https://www.instagram.com/_thundergroup/",
                  renderIcon: (className) => (
                    <IoLogoInstagram className={className} />
                  ),
                  color: "text-pink-500",
                },
                {
                  text: "Youtube",
                  href: "https://www.youtube.com/@_thundergroup",
                  renderIcon: (className) => (
                    <IoLogoYoutube className={className} />
                  ),
                  color: "text-red-500",
                },
              ]}
            />
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:mt-8" />
        <div className="mb-4 mt-8 flex w-full flex-col flex-wrap items-center justify-center gap-x-6 gap-y-8 text-center md:flex-row md:justify-between lg:mb-2">
          <div className="text-md order-last flex flex-col md:order-first md:-mr-10 md:text-left">
            <span>
              © 2024
              <a
                target="_blank"
                href="https://github.com/Asteriuz"
                className="hover:underline"
              >
                {" "}
                Asteriuz™{" "}
              </a>
            </span>
            All Rights Reserved.
          </div>
          <a
            target="_blank"
            href="https://wa.me/5511966017667"
            className="bold flex items-center justify-center gap-2 rounded-lg  bg-roxo p-4 text-center text-xl font-bold uppercase text-white shadow-lg duration-300 ease-in-out hover:bg-roxo-hover sm:text-2xl"
          >
            <IoLogoWhatsapp className="text-[40px]" />
            Fale Conosco
          </a>
          <div className="order-first mt-4 hidden justify-center space-x-5 sm:mt-0 md:order-last md:flex">
            {/* <a target="_blank" href="https://wa.me/5511966017667">
              <IoLogoWhatsapp className="text-[40px] duration-300 ease-in-out hover:fill-green-500" />
              <span className="sr-only">Whatsapp</span>
            </a> */}

            <Link
              target="_blank"
              href="https://www.linkedin.com/company/thundergroup/?viewAsMember=true"
            >
              <IoLogoLinkedin className="text-[40px] duration-300 ease-in-out hover:fill-blue-500" />
              <span className="sr-only">Página do Linkedin</span>
            </Link>

            <Link
              target="_blank"
              href="https://www.instagram.com/_thundergroup/"
            >
              <IoLogoInstagram className="text-[40px] duration-300 ease-in-out hover:fill-pink-500" />
              <span className="sr-only">Página do Instagram</span>
            </Link>

            <Link target="_blank" href="https://www.youtube.com/@_thundergroup">
              <IoLogoYoutube className="text-[40px] duration-300 ease-in-out hover:fill-red-500" />
              <span className="sr-only">Página do Youtube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
