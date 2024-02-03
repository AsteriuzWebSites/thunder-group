import Link from "next/link";

export default function Navlinks() {
  const links: any = {
    home: { href: "/", label: "Home", current: true },
    clinica: { href: "#clinica", label: "Clínica", current: false },
    servicos: { href: "#servicos", label: "Serviços", current: false },
    medicos: { href: "#medicos", label: "Médicos", current: false },
    blog: { href: "#blog", label: "Blog", current: false },
  };
  return (
    <>
      {Object.keys(links).map((key) => (
        <li key={key}>
          <Link
            href={links[key].href}
            className={`hover:text-secondary-700  ${
              links[key].current ? "text-secondary-700" : "text-text-hover"
            }`}
          >
            {links[key].label}
          </Link>
        </li>
      ))}
    </>
  );
}
