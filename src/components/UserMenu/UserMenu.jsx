import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const logout = useSelector(state => state.auth.user.email);
  const isContactsLoaded = useSelector(state => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  console.log();
  return (
    <div>
      <p>{logout}</p>
      {isContactsLoaded && (
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      )}
    </div>
  );
};
