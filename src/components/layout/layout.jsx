import { useSelector } from 'react-redux';
import { Link, Outlet, Navigate } from 'react-router-dom';

export const Layout = () => {
  const isContactsLoaded = useSelector(state => state.auth.isLoggedIn);

  return (
    <div>
      {isContactsLoaded && <Link to="/contacts">Contacts</Link>}
      {!isContactsLoaded && <Link to="/login">logIn</Link>}
      {!isContactsLoaded && <Link to="/register">Register</Link>}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
