import { logIn } from 'redux/auth/operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLogin } from 'hooks/hooks';

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  useLogin();
  const handleChenge = e => {
    const { value, name } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmmit = e => {
    e.preventDefault();
    dispatch(logIn(values));
    setIsLoading(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmmit}>
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
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};
