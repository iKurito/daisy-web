import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const NotFoundPage = lazy(() => import('../../pages/NotFound/NotFoundPage'));

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      <Route element={<Layout />}>
        {children}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
