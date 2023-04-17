import { NavLink } from '../models';
import { PublicRoutes } from './routes.data';

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    route: PublicRoutes.HOME,
  },
  {
    label: 'About',
    route: PublicRoutes.ABOUT,
  },
];
