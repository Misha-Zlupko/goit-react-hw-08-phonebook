import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useLogin } from 'hooks/hooks';

const initialState = {
  name: '',
  email: '',
  password: '',
};
export const RegisterForm = () => {
  const [values, setValues] = useState(initialState);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  useLogin();
  const handleChenge = e => {
    const { value, name } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmmit = e => {
    e.preventDefault();

    dispatch(register(values));
    // navigate('/register', { replace: true });
  };
  return (
    <>
      <form onSubmit={handleSubmmit}>
        <input
          name="name"
          type="text"
          placeholder="UserName"
          value={values.name}
          onChange={handleChenge}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChenge}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChenge}
        />
        <button type="submit">Register</button>
      </form>
      {/* <Link to="/login"></Link> */}
    </>
  );
};
