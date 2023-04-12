import { Route, Routes } from 'react-router-dom';
import { Contacts } from './Contacts/contacts';
import { UserMenu } from './UserMenu/UserMenu';
import { LoginForm } from './Login/login';
import { RegisterForm } from './Register/register';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './layout/layout';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateComponents';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefrsing = useSelector(state => state.auth.isRefrsing);
  // const status = useSelector(state => state.auth.isLoggedIn);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefrsing ? (
    'User data is fetching'
  ) : (
    <div>
      <UserMenu />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Navigate to="/login" replace={true} />} /> */}

          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterForm />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginForm />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
