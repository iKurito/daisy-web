import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { PublicRoutes } from './models';
import { RoutesWithNotFound } from './components';

const Home = lazy(() => import('./pages/Home/Home'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PublicRoutes.HOME} />} />
            <Route path={PublicRoutes.HOME} element={<Home />} />
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
