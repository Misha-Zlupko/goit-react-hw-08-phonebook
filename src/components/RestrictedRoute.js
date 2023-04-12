// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

// export const PublicRoute = ({ children, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const redirect = isLoggedIn;
//   return redirect ? <Navigate to={redirectTo} /> : children;
// };
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={'/'} />;
  }
  return children;
};
