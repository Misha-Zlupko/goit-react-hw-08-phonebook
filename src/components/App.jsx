import { Route, Routes } from 'react-router-dom';
import { Contacts } from './Contacts/contacts';
import { UserMenu } from './UserMenu/UserMenu';
import { LoginForm } from './Login/login';
import { RegisterForm } from './Register/register';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from './layout/layout';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { ProtectedRoute } from './PrivateComponents';

export const App = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.auth.isLoggedIn);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, status]);

  return (
    <div>
      <UserMenu />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />

          <Route
            path="/contacts"
            element={
              <ProtectedRoute>
                <Contacts />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
