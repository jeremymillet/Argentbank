
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';



const PrivateRoute = () => {
  const location = useLocation();
  const login = useSelector((state) => state.login);

  const isAuthenticated = () => {
    // Vérifier si login dans le store est true
    return login === true;
  };

  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }}/>
  );
};

export default PrivateRoute;