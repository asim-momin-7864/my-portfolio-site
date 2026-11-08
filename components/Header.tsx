const items = [
  ["Skills", "#skills"], ["Projects", "#projects"], ["Achievements", "#achievements"],
  ["Resume", "#resume"], ["Contact", "#contact"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="font-semibold text-gray-900">Asim Momin</a>
        <ul className="hidden gap-5 text-sm text-gray-600 sm:flex">
          {items.map(([label, href]) => (
            <li key={href}><a href={href} className="hover:text-accent">{label}</a></li>
          ))}
        </ul>
        <a href="#contact" className="rounded-lg bg-accent px-3 py-1.5 text-sm font-medium text-white sm:hidden">Contact</a>
      </nav>
    </header>
  );
}
