export function Footer() {
  return (
    <footer className="mt-16 text-center border-t-1 border-gray-100 p-4 space-y-4">
      <p>
        <a href="https://matrix.to/#/#wintertc:matrix.org">
          <img
            className="h-6 inline-block"
            src="/static/logos/matrix.svg"
            alt="Chat with us on Matrix"
          />
        </a>
      </p>
      <p className="text-sm text-gray-600">
        Copyright &copy; Ecma International.
      </p>
    </footer>
  );
}
