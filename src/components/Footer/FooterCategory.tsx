type Props = {
  title: string;
  delay: number;
  activeLink: boolean;
  links: {
    text: string | string[];
    href?: string;
    renderIcon?: (className: string) => React.ReactNode;
    color?: string;
  }[];
};

export default function FooterCategory(Props: Props) {
  return (
    <div className="obs-hidden" style={{ ["--delay" as any]: Props.delay }}>
      <h2 className="mb-6 font-heading text-lg font-bold uppercase">
        {Props.title}
      </h2>
      <ul className="flex flex-col gap-y-2">
        {Props.links.map((link, index) => (
          <li key={index} className="mb-4 transition-colors md:justify-start">
            <a href={link.href} className={`group inline`}>
              {link.renderIcon &&
                link.renderIcon(
                  `text-[24px] inline shrink-0 transition-colors group-hover:${link.color}`,
                )}
              {Props.activeLink && link.href && (
                <p
                  className={`ml-2 inline break-words align-middle transition-colors duration-200 group-hover:${link.color} group-hover:underline`}
                >
                  {link.text}
                </p>
              )}
            </a>
            {!Props.activeLink &&
              (Array.isArray(link.text) ? (
                link.text.map((text, index) => (
                  <p
                    key={index}
                    className={`${index > 0 ? "mt-2" : "ml-2 inline"}  break-words transition-colors duration-200 group-hover:${link.color} group-hover:underline`}
                  >
                    {text}
                  </p>
                ))
              ) : (
                <p
                  className={`ml-2 inline break-words transition-colors duration-200 group-hover:${link.color} group-hover:underline`}
                >
                  {link.text}
                </p>
              ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
