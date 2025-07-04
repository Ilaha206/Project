
import { useContext } from 'react';
import { UserContext } from '../Context/UserContextProvider';

const UseAuth = () => {
  const { token, decode, settoken, setdecode } = useContext(UserContext);
  const isLoggedIn = !!token;
  return { isLoggedIn, token, decode, settoken, setdecode };
};

export default UseAuth;
