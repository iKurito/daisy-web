import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { PublicRoutes } from './data';
import { Layout, RoutesWithNotFound } from './components';
import 'react-toastify/dist/ReactToastify.css';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'pdbe-molstar': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const SearchPage = lazy(() => import('./pages/Search/SearchPage'));
const HelpPage = lazy(() => import('./pages/Help/HelpPage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />
              <Route path={PublicRoutes.HOME} element={<HomePage />} />
              <Route path={PublicRoutes.SEARCH} element={<SearchPage />} />
              <Route path={PublicRoutes.HELP} element={<HelpPage />} />
              <Route path={PublicRoutes.ABOUT} element={<AboutPage />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
