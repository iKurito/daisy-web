import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-cyan-400">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="https://bioinformatica.org"
          target="_blank"
          className="flex items-center gap-2"
        >
          <img
            src="/assets/img/bioinformatica_logo.webp"
            alt="Bioinformatica"
            className="h-12"
          />
          <span className="text-gray-500 text-base sm:text-xl tracking-widest">
            Bioinformatica.org
          </span>
        </Link>
        <Link to="https://www.pucp.edu.pe" target="_blank">
          <img src="/assets/img/pucp_logo.webp" alt="PUCP" className="h-12" />
        </Link>
      </div>
    </footer>
  );
}
