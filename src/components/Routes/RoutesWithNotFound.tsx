import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const NotFoundPage = lazy(() => import('../../pages/NotFound/NotFoundPage'));

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
