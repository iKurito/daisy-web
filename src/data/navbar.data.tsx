import { NavLink } from '../models';
import { PublicRoutes } from './routes.data';
import HomeIcon from '../icons/home.icon';
import { SearchIcon } from '../icons';

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    route: PublicRoutes.HOME,
    icon: <HomeIcon />,
  },
  {
    label: 'Search',
    route: PublicRoutes.SEARCH,
    icon: <SearchIcon />,
  },
  // {
  //   label: 'Help',
  //   route: PublicRoutes.HELP,
  //   icon: <HelpIcon />,
  // },
  // {
  //   label: 'About',
  //   route: PublicRoutes.ABOUT,
  //   icon: <AboutIcon />,
  // },
];
