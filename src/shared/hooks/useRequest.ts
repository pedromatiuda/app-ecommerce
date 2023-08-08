import { useState } from 'react';

import { connectionAPICPost } from '../functions/connection/connectionAPI';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/returnLogin';
import { UserType } from '../types/userType';

export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [user, setUser] = useState<UserType>();

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectionAPICPost<ReturnLogin>('http://192.168.15.12:3000/auth', body)
      .then((result) => {
        setUser(result.user);
      })
      .catch(() => {
        setErrorMessage('Usuário ou senha inválidos');
      });
    setLoading(false);
  };

  return {
    loading,
    user,
    errorMessage,
    authRequest,
    setErrorMessage,
  };
};
