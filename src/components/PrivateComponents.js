// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// export const PrivateRoute = ({ children, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
//   return isLoggedIn ? children : <Navigate to={redirectTo} />;
// };
import React from 'react';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';
export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};
