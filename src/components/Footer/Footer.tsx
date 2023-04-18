import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative lg:absolute bottom-0 w-full bg-primary">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 2xl:px-0 py-5 flex flex-col xs:flex-row gap-4 justify-between items-center">
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
