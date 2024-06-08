import { Route, Routes } from 'react-router';
import Layout from './components/layout/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home/Home';
import Login from './auth/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { HotelProvider } from './store/useHotelData';
import Audit from './pages/Audit/Audit';
import AuditForm from './pages/Audit/AuditForm';
import AuditOverview from './pages/Audit/AuditOverview';

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
          <Route index element={<Dashboard />} />
          <Route path="audit" element={<Audit />}>
            <Route index element={<AuditOverview />} />
            <Route path="submit" element={<AuditForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HotelProvider>
  );
};

export default App;
