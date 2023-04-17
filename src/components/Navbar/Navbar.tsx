import { Link } from 'react-router-dom';
import { PublicRoutes, navLinks } from '../../data';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-cyan-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <ul className="flex">
          <li>
            <Link to={PublicRoutes.HOME} className="flex items-center gap-2">
              <img
                src="/assets/img/daisy_logo.webp"
                alt="logo"
                className="h-12"
              />
              <span className="text-base sm:text-lg">Daisy</span>
            </Link>
          </li>
        </ul>
        <ul className="flex gap-4">
          {navLinks.map((link) => (
            <li key={link.label} className="">
              <Link to={link.route}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
