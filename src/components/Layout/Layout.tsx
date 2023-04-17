import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

export function Layout() {
  return (
    <>
      <Navbar />
      <main className="px-4 md:px-8 py-4 bg-gray-100 dark:bg-dark-secondary justify-center">
        <Outlet />
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
