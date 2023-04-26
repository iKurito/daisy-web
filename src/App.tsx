import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { Loading, RoutesWithNotFound } from './components';
import { PublicRoutes } from './data';
import store from './redux/store';
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
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />
              <Route path={PublicRoutes.HOME} element={<HomePage />} />
              <Route
                path={`${PublicRoutes.SEARCH}/*`}
                element={<SearchPage />}
              />
              <Route path={PublicRoutes.HELP} element={<HelpPage />} />
              <Route path={PublicRoutes.ABOUT} element={<AboutPage />} />
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
