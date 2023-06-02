import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { PublicRoutes, navLinks } from '../../data';
import { HamburgerIcon, XIcon } from '../../icons';

export function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);

  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-primary">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 2xl:px-0 py-5 flex justify-between items-center">
        <ul className="flex">
          <li>
            <Link to={PublicRoutes.HOME} className="flex items-center gap-2">
              <img
                src="/assets/img/daisy_logo.webp"
                alt="Daisy"
                className="h-12"
              />
              <span className="text-gray-500 text-lg sm:text-4xl">Daisy</span>
            </Link>
          </li>
        </ul>
        <ul className="hidden sm:flex gap-4 md:gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.route}
                className={`${
                  location.pathname === `/${link.label.toLowerCase()}`
                    ? 'text-cyan-900'
                    : ''
                } flex items-center gap-1 text-gray-500 hover:text-cyan-900 justify-center`}
              >
                {link.icon}
                <span className="text-lg sm:text-2xl">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center z-50">
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
            } px-4 py-6 bg-primary absolute top-24 left-0 right-0 mx-4 my-2 rounded-lg shadow-lg sidebar border`}
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
