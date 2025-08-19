import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState(null);

  useEffect(() => {
    let logoutTimer;

    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(() => {
        logout();
      }, remainingTime);
    }

    return () => clearTimeout(logoutTimer);
  }, [token, tokenExpirationDate]);

  const login = (userId, token, expirationDate) => {
    setToken(token);
    setUserId(userId);

    const expires = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(expires);

    localStorage.setItem('userData', JSON.stringify({
      userId,
      token,
      expiration: expires.toISOString()
    }));
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setTokenExpirationDate(null);
    localStorage.removeItem('userData');
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, []);

  return { token, userId, login, logout };
};
