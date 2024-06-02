import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
