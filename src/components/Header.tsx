export function Header() {
  return (
    <section className="flex items-center gap-6">
      <a className="flex-shrink-0" href="/">
        <img src="/static/logo.svg" alt="wintertc logo" className="w-24 h-24" />
      </a>
      <a href="/" className="block space-y-1">
        <h1 className="text-4xl font-semibold">WinterTC</h1>
        <p className="italic text-xl">
          Technical Committee on Web-interoperable Server Runtimes
        </p>
      </a>
    </section>
  );
}
