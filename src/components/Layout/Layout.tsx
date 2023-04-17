import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

export function Layout() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />
      {/* <main className="px-4 md:px-8 py-4 bg-gray-100 dark:bg-dark-secondary justify-center min-h-[calc(100vh_-_100px)]"> */}
      <main className="justify-center min-h-[calc(100vh_-_100px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
