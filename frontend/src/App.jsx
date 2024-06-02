import { Route, Routes } from 'react-router';
import Layout from './components/layout/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './auth/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="*" element={<ErrorPage />} />
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
