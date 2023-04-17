import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PublicRoutes, navLinks } from '../../data';
import { HamburgerIcon, XIcon } from '../../icons';

export function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-primary">
      <div className="max-w-[1440px] mx-auto px-4 py-3 flex justify-between items-center">
        <ul className="flex">
          <li>
            <Link to={PublicRoutes.HOME} className="flex items-center gap-2">
              <img
                src="/assets/img/daisy_logo.webp"
                alt="Daisy"
                className="h-12"
              />
              <span className="text-gray-500 text-base sm:text-lg">Daisy</span>
            </Link>
          </li>
        </ul>
        <ul className="hidden sm:flex gap-4 md:gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.route}
                className="flex items-center gap-1 text-gray-500 hover:text-cyan-900"
              >
                {link.icon}
                <span className="text-base sm:text-lg">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="text-gray-500 hover:text-cyan-900"
            type="button"
            onClick={() => setToggle(!toggle)}
            title="Toggle Menu"
          >
            {toggle ? <XIcon /> : <HamburgerIcon />}
          </button>
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } px-4 py-6 bg-cyan-200 absolute top-20 left-0 right-0 mx-4 my-2 rounded-xl shadow-lg sidebar`}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.route}
                    className="flex items-center gap-4 text-gray-500 hover:text-cyan-900"
                  >
                    {link.icon}
                    <span className="text-base sm:text-lg">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
