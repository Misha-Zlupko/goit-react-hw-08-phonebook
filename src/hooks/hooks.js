import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/operations';

export const useLogin = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/contacts', { replace: true });
      dispatch(fetchContacts());
    }
  }, [dispatch, navigate, user]);
};
