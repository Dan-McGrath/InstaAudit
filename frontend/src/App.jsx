import { Route, Routes } from 'react-router';
import Layout from './components/layout/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home/Home';
import Login from './auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { HotelProvider } from './store/useHotelData';

const App = () => {
  return (
    <HotelProvider>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route path="*" element={<ErrorPage />} />
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="dashboard" element={<Layout />} errorElement={<ErrorPage />}>
          <Route path="*" element={<ErrorPage />} />
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </HotelProvider>
  );
};

export default App;
