const LINKS = [
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "GitHub",
    href: "https://github.com/WinterTC55",
  },
  {
    name: "Scope",
    href: "https://ecma-international.org/technical-committees/tc55",
  },
];

export function Links({ selected }: { selected?: string }) {
  return (
    <ul className="mt-8 grid gap-2 sm:gap-3 md:gap-4 grid-cols-4">
      {LINKS.map((link) => (
        <li key={link.href}>
          <a
            href={selected === link.href ? undefined : link.href}
            className={`block border-4 ${
              selected === link.href
                ? "bg-orange-200 text-black border-orange-300"
                : "bg-orange-500 text-white border-orange-300 hover:border-orange-600"
            } sm:p-2 md:p-3 font-medium text-lg text-center`}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
