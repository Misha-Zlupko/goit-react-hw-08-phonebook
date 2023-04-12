import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  const isContactsLoaded = useSelector(state => state.auth.isLoggedIn);

  // console.log(isContactsLoaded);
  return (
    <div>
      {isContactsLoaded && <Link to="/contacts">Contacts</Link>}
      {/* <Link to="/contacts">Contacts</Link> */}
      {!isContactsLoaded && <Link to="/login">logIn</Link>}
      {!isContactsLoaded && <Link to="/register">Register</Link>}

      {/* <Link to="/login">logIn</Link> */}
      {/* <Link to="/register">Register</Link> */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
