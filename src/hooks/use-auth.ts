import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get('auth_token');
    // This is a simplified check. In a real app, you'd verify the token
    // with a backend or check its validity.
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return { isAuthenticated };
}
